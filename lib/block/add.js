const chalk = require('chalk');
const fs = require('fs');
const inquirer = require('inquirer');
const logSymbols = require('log-symbols');
const ora = require('ora');
const path = require('path');
const { sep } = path;
const rimraf = require('rimraf');
const targz = require('targz');

const { downloadGitSparse } = require('./download-git-sparse');
const { getLatestTarball, downloadTemplate } = require('../download');
const { mvUnzipFolder } = require('../utils');

/**
 * set component name
 * @param {*} config 
 */
module.exports = async function setComponentName (config) {
  inquirer.prompt([
    {
      name: 'componentName',
      message: 'Component Name',
      default: config.defaultPath
    },
  ]).then(async answers => {
    const blockPath = `${process.cwd()}${sep}${answers.componentName}`;

    if (!fs.existsSync(blockPath) || fs.existsSync(blockPath) && fs.readdirSync(blockPath).length === 0) {
      downloadByNpm(blockPath, config);
    } else {
      console.warn(`${logSymbols.error}`, chalk.yellow(`🚧 the floder "${answers.componentName}" already exist, please re-enter a different name.`));
      setComponentName(config);
    }
  });
};

/**
 * download by npm
 * @param {*} config 
 */
async function downloadByNpm(blockPath, config) {
  const blockName = config.value;

  let spinner = ora('🚚 Downloading...');
  spinner.start();

  downloadUrl = await getLatestTarball(config.downloadUrl);

  await downloadTemplate(downloadUrl, blockName);
  spinner.stop();

  spinner = ora('Unzipping files...');
  spinner.start();

  const tgzFileName = `${process.cwd()}${sep}${blockName}.tgz`;
  rimraf.sync(blockPath);

  targz.decompress(
    {
      src: tgzFileName,
      dest: `${blockPath}_tmp`,
      tar: {
        readable: true,
        writable: true
      }
    },
    async function(err) {
      await mvUnzipFolder(`${blockPath}_tmp${sep}package${sep}src`, blockPath);

      rimraf.sync(tgzFileName);
      rimraf.sync(`${blockPath}_tmp`);
      
      spinner.stop();
      console.log(`\n ${logSymbols.success}`, chalk.green(`🎉 Success install`));
    }
  );
}

/**
 * downlaod by git
 * @param {*} config 
 */
function downloadByGit(blockPath, config) {
  const blockName = config.value;

  downloadGitSparse(
    blockName, 
    {
      downloadUrl: '',
      branch: 'master',
      path: 'templates',
      name: 'Test Block'
    }
  ).then(() => {
    console.log(`\n ${logSymbols.success}`, chalk.green(`🎉 Success git clone`));
    renderBlock(blockName, blockPath);
  }, (err) => {
    console.error(`\n ${logSymbols.error}`, chalk.red(`🚧 ${err}`));
  });
}
