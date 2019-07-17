class Wizard {
  constructor(object) {
    this.name = object.name;
    this.bearded = true;
    if(object.bearded !== undefined) {
      this.bearded = object.bearded
    }
    this.isRested = true;
    this.counter = 0;
  }
  incantation(changeText) {
    return changeText.toUpperCase();
  }
  cast() {
    this.counter++
    console.log(this.counter);
    if(this.counter > 2) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    }
    return 'MAGIC BULLET';
  }
}

module.exports = Wizard;