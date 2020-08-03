const path = require('path');
const { sep } = path;
const { downloadGitSparse } = require('./download-git-sparse');
const chalk = require('chalk');
const rimraf = require('rimraf');
const logSymbols = require('log-symbols');

// ----
const exec = require('child_process').exec;
const ora = require('ora');
const git = require('git-exec');
const co = require('co');
const prompt = require('co-prompt');
const fs = require('fs');
const { getNjCliConfig, getResourceTemplateData, renderTemplateFiles, getTemplatesPath } = require('../utils');
const { default: nj, expression: n } = require('nornj');
const includeParser = require('nornj/tools/includeParser');
const inquirer = require('inquirer');
const { EXT } = require('../constants');
const argv = require('yargs').argv;
// ----

const blockName = process.argv[4];

module.exports = async () => {
 
  const blockPath = `${process.cwd()}${sep}/${blockName}`;

  rimraf.sync(blockPath);

  downloadGitSparse(
    blockName, 
    {
      fetchUrl: '',
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

};

function renderBlock(blockName, blockPath) {
  let pageName;
  const njCliConfig =  {
    templates: blockName,
    templateData: {
      jest: false,
      e2e: false,
      ts: false,
      mobxRoot: false
    },
  };

  // getNjCliConfig();
  // const cwd = process.cwd();
  const templatesPath = blockPath; //`${cwd}${sep}sblock`;
  // getTemplatesPath(njCliConfig.templates);
  const templateDataGlobal = njCliConfig.templateData;

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'pageTemplate',
        message: 'Which page template do you want to use?',
        choices: njCliConfig.pageTemplates
          ? njCliConfig.pageTemplates.map(item =>
              n`${item} | isObject` ? (item.alias ? item.alias : item.name) : item
            )
          : ['default', 'chart', 'form', 'empty']
      }
    ])
    .then(answers => {
      co(function*() {
        const { templateName, templateData } = getResourceTemplateData(answers.pageTemplate, njCliConfig.pageTemplates);
        // pageName = process.argv[3];
        // if (pageName == null) {
        pageName = yield prompt('Page Name: ');
        // }

        renderTemplateFiles(
          njCliConfig.templates,
          `${templatesPath}${sep}page`,
          process.cwd(),
          'page',
          templateName,
          {
            templateName,
            pageName,
            PageName: n`${pageName} | upperFirst`,
            get store() {
              return templateData.mobx ? EXT.MOBX : EXT.MST;
            },
            get rootStore() {
              return templateDataGlobal.mobxRoot ? EXT.MOBX : EXT.MST;
            },
            get ext() {
              return argv.ts || templateDataGlobal.ts ? EXT.TS : EXT.JS;
            },
            get extx() {
              return argv.ts || templateDataGlobal.ts ? EXT.TSX : EXT.JSX;
            }
          },
          templateData,
          { ...templateDataGlobal, ts: argv.ts || templateDataGlobal.ts }
        );

        console.log(chalk.green('\n √ Created page completed!'));
        process.exit();
      });
    });
}