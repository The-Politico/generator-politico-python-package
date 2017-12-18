const Generator = require('yeoman-generator');


module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('name', {
      type: String,
      required: true,
      desc: 'Package name',
    });
  }
  writing() {
    const name = this.options.name;

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('./.gitignore'));

    this.fs.copy(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE'));

    this.fs.copy(
      this.templatePath('Makefile'),
      this.destinationPath('Makefile'));

    this.fs.copyTpl(
      this.templatePath('setup.py'),
      this.destinationPath('setup.py'),
      { name });
  }
};
