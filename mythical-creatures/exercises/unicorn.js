class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }

  isWhite() {
    return false;
  }

  says(sparkly) {
    return `**;* ${sparkly} *;**`
  }
}

module.exports = Unicorn;
