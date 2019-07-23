class Sphinx {
  constructor() {
    this.riddles = []
    this.heroesEaten = 0
  }

  collectRiddle(riddle) {
    if (this.riddles.length === 3) {
      this.riddles.shift(riddle)
    }
    this.riddles.push(riddle)
  }

  attemptAnswer(answer) {
    var riddleCount = this.riddles.length
    this.riddles = this.riddles.filter(riddle => riddle.answer !== answer)
    var nowCount = this.riddles.length
    if (!this.riddles.length) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
    } else if (riddleCount !== nowCount) {
      return "That wasn\'t that hard, I bet you don\'t get the next one"
    } else {
      this.heroesEaten++
    }
  }
}

module.exports = Sphinx;

// class Sphinx {
//   constructor() {
//     this.name = null;
//     this.riddles = [];
//   }

//   collectRiddle(riddle) {
//     this.riddles.push(riddle);
//     if (this.riddles.length > 3) {
//       this.riddles.shift();
//     }
//   }

//   attemptAnswer(answer) {
//     for (var i = 0; i < this.riddles.length; i++) {
//       if (this.riddles[i].answer === answer) {
//         this.riddles.pop();
//       }
//     }
//   }
// }

// module.exports = Sphinx;






// class Sphinx {
//   constructor() {
//     this.name = null;
//     this.riddles = [];
//   }

//   collectRiddle(riddle) {
//     this.riddles.push(riddle);
//     if(this.riddles.length > 3) {
//       this.riddles.shift();
//     }
//   }

//   attemptAnswer(guess) {
//     for(var i = 0; i < this.riddles.length; i++) {
//       if (this.riddles[i].answer === guess)
//       this.riddles.splice(i, 1)
//     }
//   }
// }

// module.exports = Sphinx;






// class Sphinx {
//   constructor() {
//     this.name = null;
//     this.riddles = [];
//     this.heroesEaten = 0;
//   }
//   collectRiddle(riddle) {
//     this.riddles.push(riddle);
//     if(this.riddles.length > 3) {
//       this.riddles.shift(riddle);
//     }
//   }
//   attemptAnswer(guess) {
//     var correctAnswer = this.riddles.find(function(riddle) {
//       return riddle.answer === guess;
//     })
//     if (correctAnswer === undefined) {
//       this.heroesEaten++;
//       return;
//     }
//     if (correctAnswer === guess) {
//       this.riddles.pop();
//       return 'That wasn\'t that hard, I bet you don\'t get the next one';
//     }
//   }
// }

// module.exports = Sphinx;