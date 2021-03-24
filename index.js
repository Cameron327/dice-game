// create the random variable for the dice
var randomNumber1 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber1);

// use the random number to create the random dice roll
// string variable for the image
// in order to change the img, we have to change the src attribute using querySelector
var randomDiceImg = "dice" + randomNumber1 + ".png";
// since we have to use the randomDiceImg when querying also, we also have to concatinate it
var randomImgSource = "images/" + randomDiceImg;

//now we select the thing to change
console.log(document.querySelectorAll("img"));
document.querySelectorAll("img")[0].setAttribute("src", randomImgSource);



// Now do it again to pick a different random number for dice image number 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImgSource = "images/dice" + randomNumber2 + ".png";

var secondDiceImg = document.querySelectorAll("img")[1]
secondDiceImg.setAttribute("src", randomImgSource);
// --------------------------------------------------------------------------------------------------
// now, we have to say who wins based on the dice roll (player 1 or player 2)