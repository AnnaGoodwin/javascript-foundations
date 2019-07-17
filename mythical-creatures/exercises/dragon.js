class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.color = 'blue';
    this.hungry = true;
    this.counter = 0;
  }
  eat() {
    this.counter++;
    if(this.counter >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;