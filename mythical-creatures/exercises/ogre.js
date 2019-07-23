class Ogre {
  constructor(ogreName, ogreHome) {
    this.name = ogreName;
    this.home = ogreHome || 'Swamp';
    this.swings = 0;
  }
  
  encounter(human) {
    human.encounterCounter++
    if(human.encounterCounter === 3 || human.encounterCounter === 6) {
      this.swingAt();
      if(this.swings === 2) {
        human.knockedOut = true;
      }
    }
  }

  swingAt() {
    this.swings++
  }

  apologize(human) {
    if(human.knockedOut) {
      human.knockedOut = false;
    }
  }
}

module.exports = Ogre;