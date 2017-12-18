const Generator = require('yeoman-generator');


module.exports = class extends Generator {
  writing() {
    this.fs.copy(
      this.templatePath('tests/test_lib.py'),
      this.destinationPath('tests/test_lib.py'));
  }
};
