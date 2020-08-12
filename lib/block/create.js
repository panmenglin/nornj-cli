const chalk = require('chalk');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const { sep } = path;
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const logSymbols = require('log-symbols');
const { getGlobalTemplatesConfig } = require('../utils');

const getGitConfig = require('./getGitConfig');

/**
 * create a new block
 * @param {*} config
 */
module.exports = function createBlock() {

  inquirer
    .prompt([
      {
        name: 'blockName',
        message: 'block name',
        default: 'my block'
      },
      {
        name: 'blockVersion',
        message: 'version',
        default: '1.0.0'
      },
      {
        name: 'blockDescription',
        message: 'description',
        default: `my block description`
      }
    ])
    .then(async answers => {

      const blockPath = `${process.cwd()}${sep}${answers.blockName}`;

      if (!fs.existsSync(blockPath) || fs.existsSync(blockPath) && fs.readdirSync(blockPath).length === 0) {
        initBlock(answers);
      } else {
        console.warn(`${logSymbols.error}`, chalk.yellow(`🚧 the floder "${answers.blockName}" already exist, please re-enter a different name.`));
        reName(answers, initBlock);
      }
      
    });

};

/**
 * if floder already exist, re-enter name
 * @param {*} config 
 * @param {*} callback 
 */
function reName(config, callback) {
  inquirer
    .prompt([
      {
        name: 'blockName',
        message: 'block name',
        default: ''
      },
    ]).then(answers => {

      const blockPath = `${process.cwd()}${sep}${answers.blockName}`;

      if (!fs.existsSync(blockPath) || fs.existsSync(blockPath) && fs.readdirSync(blockPath).length === 0) {
        callback({
          ...config,
          ...answers
        });
      } else {
        console.warn(`${logSymbols.error}`, chalk.yellow(`🚧 the floder "${answers.blockName}" already exist, please re-enter a different name.`));
        reName(config, callback);
      }
    });
}

/**
 * init block project
 * @param {*} config 
 */
async function initBlock(config) {

  mkdirp.sync(config.blockName);
  const packagePath = `${process.cwd()}${sep}${config.blockName}${sep}package.json`;
      
  // get git config 
  const { name = '', email = '' } = await getGitConfig();

  const packageFile = fs.existsSync(packagePath) ? fs.readFileSync(packagePath, 'utf8') : '{}';
  const jsonData = JSON.parse(packageFile);

  const globalTemplatesConfig = getGlobalTemplatesConfig();
  if (globalTemplatesConfig) {
    try {
      blocksConfig = require(`${globalTemplatesConfig}${sep}block.config.js`);
    } catch (ex) {}
  }

  Object.assign(jsonData, {
    name: `${blocksConfig ? `@${blocksConfig.name}/` : ''}${config.blockName}`,
    author: name && email ? `${name}${email}` : '',
    version: `${config.blockVersion}`,
    description: `${config.blockDescription}`
  });

  const packageTpl = JSON.stringify(jsonData, '', '\t');

  fs.writeFile(packagePath, packageTpl, function(err, data) {
    if (err) {
      throw err;
    }
  });

  mkdirp.sync(`${process.cwd()}${sep}${config.blockName}${sep}src`);
  
}
