let $ = require('jquery'); // jQuery now loaded and assigned to $

let defCount = 0;
for(let i = 1; i < 7; i++){
   $('#click-counter' + i).find('.total').text(defCount.toString());
}

$('#countbtn').on('click', () => {
   new Audio('audio/diceRoll.mp3').play();
   for(let i = 1; i < 7; i++){
      let diceRolls = rollDice();
      $('#click-counter' + i).find('.firstDie')
         .css("background-image", `url('./images/die${diceRolls[0]}.jpg')`)
         .css("background-size", "30px 30px")
         .css("background-repeat", "no-repeat")
         .css("background-position", "center")
         .css("padding", "30px 30px");
      $('#click-counter' + i).find('.secondDie')
         .css("background-image", `url('./images/die${diceRolls[1]}.jpg')`)
         .css("background-size", "30px 30px")
         .css("background-repeat", "no-repeat")
         .css("background-position", "center")
         .css("padding", "30px 30px");
      $('#click-counter' + i).find('.thirdDie')
         .css("background-image", `url('./images/die${diceRolls[2]}.jpg')`)
         .css("background-size", "30px 30px")
         .css("background-repeat", "no-repeat")
         .css("background-position", "center")
         .css("padding", "30px 30px");
      $('#click-counter' + i).find('.total').text(diceRolls[3]);
   }
}) 

function rollDice(){
   let diceArr = [];
   for(let i = 0; i < 4; i++){
      diceArr.push(getRandomInt(1, 7));
   }
   diceArr.sort((a, b) => b- a);
   diceArr.pop();
   diceArr.push(diceArr.reduce((a, b) => a + b, 0));
   console.log(diceArr);
   return diceArr;
}

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min);
 }