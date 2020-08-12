const { actuator } = require('../utils');
const { sep } = require('path');

/**
 * getGitConfig
 * @description 获取 git 配置
 */
module.exports = () => {
  const gitActuator = new actuator(
    {
      cwd: `${process.cwd()}${sep}`
    },
    error => {
      reject(error);
    }
  );

  return new Promise(async (resolve, reject) => {
    const user = {};
    try {
      const name = await gitActuator.run(`git config user.name`);
      const email = await gitActuator.run(`git config user.email`);

      if (name) user.name = name.replace(/\n/g, '');
      if (email) user.email = `<${email || ''}>`.replace(/\n/g, '');
    } catch (error) {
      console.error('get git config failed');
      reject(error);
    } finally {
      resolve(user);
    }
  });
};
