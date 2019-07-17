class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
  }
  eat(person) {
    if(this.hungry) {
     person.alive = false;
     this.change();
     this.hungry = false;
    }
    return "Stop biting me!"
  }
}

module.exports = Werewolf;