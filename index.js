// Randomly Selecting the Dice Number for Player 1

let randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6

let randomDiceImage1 = "images/" + "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

document.querySelector("div .img1").setAttribute("src", randomDiceImage1);


// Randomly Selecting the Dice Number for Player 2

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

document.querySelector("div .img2").setAttribute("src", randomDiceImage2);


// Showing the Game Winner i.e Changing the text of h1

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
