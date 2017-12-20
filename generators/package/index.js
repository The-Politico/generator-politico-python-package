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

    this.fs.copyTpl(
      this.templatePath('__init__.py'),
      this.destinationPath(`${name}/__init__.py`),
      { name });

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      { name });
  }
};
