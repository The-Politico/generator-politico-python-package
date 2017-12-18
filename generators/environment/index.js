const Generator = require('yeoman-generator');
const shell = require('shelljs');
const chalk = require('chalk');

module.exports = class extends Generator {
  writing() {
    this.fs.copy(
      this.templatePath('env'),
      this.destinationPath('./.env'));
    this.fs.copy(
      this.templatePath('requirements.txt'),
      this.destinationPath('requirements.txt'));
  }

  install() {
    shell.exec('virtualenv venv -p python3');
  }

  end() {
    this.log(chalk.cyan('Activate your virtual environment and install requirements to begin developing:'));
    this.log(chalk.bgGreen('$ source .env'));
    this.log(chalk.bgGreen('$ pip install -r requirements.txt'));
  }
};
