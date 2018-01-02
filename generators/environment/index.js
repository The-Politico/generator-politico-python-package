const Generator = require('yeoman-generator');
const shell = require('shelljs');

module.exports = class extends Generator {
  writing() {
    this.fs.copy(
      this.templatePath('env'),
      this.destinationPath('./.env'));
    this.fs.copy(
      this.templatePath('Pipfile'),
      this.destinationPath('./Pipfile'));
  }

  install() {
    shell.exec('pipenv install', {
      silent: true,
    });
  }
};
