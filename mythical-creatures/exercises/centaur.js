class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.standing = true;
    this.cranky = false;
    this.counter = 0;
    this.standing = true;
    this.layingDown = false;
  }

  shoot() {
    this.counter++;
    if(this.counter >= 3) {
      this.cranky = true;
      return 'NO!'
    }
     if(this.standing === false && this.layingDown === true) {
      return 'NO!';
    }
    return 'Twang!!!';
  }

  run() {
    this.counter++;
    if(this.counter >= 3) {
      this.cranky = true;
    }
     if(this.standing === false && this.layingDown === true) {
      return 'NO!';
    }
    return 'Clop clop clop clop!!!';
  }

  sleep() {
    if(this.standing === true) {
      return 'NO!';
    } else if (this.layingDown === true) {
      this.cranky = false;
      this.counter = 0;
      return 'ZZZZ';
    }
  } 

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if(this.standing) {
      this.cranky = !this.cranky;
    } else {
    return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur;