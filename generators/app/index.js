const Generator = require('yeoman-generator');
const S = require('string');

module.exports = class extends Generator {
  prompting() {
    const questions = [{
      type: 'input',
      name: 'name',
      message: 'Welcome to your new Python package. What will we call it?',
    }];

    return this.prompt(questions).then((answers) => {
      this.name = S(answers.name).slugify().s;
    });
  }

  compose() {
    const name = this.name;
    this.composeWith(require.resolve('../docs'), { name });
    this.composeWith(require.resolve('../environment'));
    this.composeWith(require.resolve('../package'), { name });
    this.composeWith(require.resolve('../packaging'), { name });
    this.composeWith(require.resolve('../tests'));
  }
};
