class Fairy {
  constructor(fairyName) {
    this.name = fairyName;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++ - this.dust;
  }

  believe() {
    this.dust = 20;
  }

  makeDresses(dressArray) {
    for(var i = 0; i < dressArray.length; i++) {
    this.clothes.dresses.push(dressArray[i]);
    }
    dressArray;
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    infant.disposition = 'Malicious';
    this.humanWards.push(infant);
    if(this.humanWards.length >= 3) {
      this.disposition = 'Good natured'
    }
    return infant;
  }
}

module.exports = Fairy;