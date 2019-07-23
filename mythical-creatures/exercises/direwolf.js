class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(person) {
    if(this.home === person.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(person);
      person.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }
  leave(person) {
    person.safe = false;
    this.starksToProtect = [];
  }
}


module.exports = Direwolf;