const chalk = require('chalk');
const logSymbols = require('log-symbols');
const path = require('path');
const { sep } = path;
const rimraf = require('rimraf');

const addBlock = require('./add');
const { downloadGitSparse } = require('./download-git-sparse');
const { getGlobalTemplatesConfig } = require('../utils');

const fs = require('fs');
const inquirer = require('inquirer');

/**
 * fetch blocks repositories config and download blocks list
 */
module.exports = async () => {
  
  const globalTemplatesConfig = getGlobalTemplatesConfig();
  if (globalTemplatesConfig) {
    try {
      blocksConfig = require(`${globalTemplatesConfig}${sep}block.config.js`);
    } catch (ex) {}
  }

  const blockPath = `${process.cwd()}${sep}/${blocksConfig.path}`;
  rimraf.sync(blockPath);

  downloadGitSparse(blocksConfig.path, {
    ...blocksConfig,
    message: `🚚 Fetching block list`
  }).then(
    () => {
      console.log(`\n ${logSymbols.success}`, chalk.green(`🎉 Success git clone`));
      selectBlock(blocksConfig.path, blockPath);
    },
    err => {
      console.error(`\n ${logSymbols.error}`, chalk.red(`🚧 ${err}`));
    }
  );
};

/**
 * prompt select blocks
 * @param {*} blockName 
 * @param {*} blockPath 
 */
function selectBlock(blockName, blockPath) {
  const blockList = JSON.parse(fs.readFileSync(blockPath, 'utf-8'));

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'blockName',
        message: 'Which block do you want to use ?',
        choices: blockList.blocks || []
      }
    ])
    .then(answers => {
      const selected = blockList.blocks.filter(item => {
        return item.value === answers.blockName;
      });

      addBlock(selected[0]);
    });
}
