class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(person) {
    this.statues.push(person)
    // person.stoned = true;
    // if(this.statues.length > 3) {
    //   this.statues[0].stoned = false;
    //   this.statues.shift();
    // }
  }
}

module.exports = Medusa;