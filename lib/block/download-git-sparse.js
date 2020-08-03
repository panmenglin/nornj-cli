const fs = require('fs');
const childProcess = require('child_process');
const path = require('path');
const { sep } = path;
const ora = require('ora');
const rimraf = require('rimraf');
const mv = require('mv');

/**
 * 执行器
 * @param {*} options 
 * @param {*} errorCallback 
 */
function actuator (options={}, errorCallback) {
  return {
    run: (cmd) => new Promise((resolve, reject) => {
      childProcess.exec(cmd, options, (err, ...arg) => {
        if (err) {
          errorCallback(err);
          return reject(err);
        }

        return resolve(...arg);
      });
    })
  };
}

/**
 * mvUnzipFolder
 * @description 移动文件
 * @param {*} currentPath 
 * @param {*} targetPath 
 */
function mvFolder(currentPath, targetPath) {
  return new Promise((resolve, reject) => {
    mv(currentPath, targetPath, { mkdirp: true, clobber: false }, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * downloadGitRepo
 * @description clone git 项目模版
 * @param {*} target
 */
function downloadGitSparse(floderName, config) {
  const tmpFloderName = `.tmp_${floderName}`;
  const cwd = `${process.cwd()}${sep}${tmpFloderName}`;
  
  rimraf.sync(cwd);

  return new Promise(async (resolve, reject) => {

    fs.mkdirSync(tmpFloderName);
    
    let spinner = ora(`🚚 Cloneing ${config.name} from ${config.fetchUrl}`);
    spinner.start();

    const gitActuator = new actuator({
      cwd,
    }, (error) => {
      spinner && spinner.fail();
      reject(error);
    });

    await gitActuator.run('git init');

    await gitActuator.run(`git remote add -f origin ${config.fetchUrl}`);

    await gitActuator.run('git config core.sparsecheckout true');

    await gitActuator.run(`echo "${config.path}" >> .git/info/sparse-checkout`);

    await gitActuator.run(`git pull origin ${config.branch}`);

    await mvFolder(`${cwd}/${config.path}`, `${process.cwd()}${sep}${floderName}`);
    
    rimraf.sync(`${cwd}`);

    spinner.succeed();
    
    resolve(floderName);
  });
}

module.exports = {
  downloadGitSparse
};
