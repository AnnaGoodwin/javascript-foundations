class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.counter = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false
    if(this.name === 'Frodo') {
      this.hasRing = true;
    } else {
      this.hasRing = false;
    }
  }
  celebrateBirthday() {
    this.counter++;
    this.age = this.counter;
    if(this.age > 32) {
      this.adult = true;
    } 
    if(this.age > 100) {
      this.old = true;
    }
  }
}

module.exports = Hobbit;