// PS. I borrowed code from week 4 activity 12
var audio = new Audio("./assets/javascript/avengers.mp3");
var stones = ['Mind', 'Power', 'Reality', 'Time', 'Soul', 'Space'];
var counter = 0;
var population = 7000000000;
var wins = 0;
var losses = 0;

// I copied this random number generator from here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};
var targetNumber = getRandomIntInclusive(20,112);

for (var i = 0; i < stones.length; i++) {

  var imageStone = $("<img>");
  imageStone.addClass("stone-image");
  imageStone.attr("src",`./assets/images/${stones[i]}.png`);
  imageStone.attr("id",stones[i]);
  imageStone.attr("stone-value", Math.floor(Math.random()*12 +1));
  $("#stones").append(imageStone);

};

$("#number-to-guess").text(targetNumber);


function reset() {
     counter = 0;
     targetNumber = getRandomIntInclusive(20,112);
     $("#number-to-guess").text(targetNumber);
     $("#yourScore").text(counter);
     $("#Reality").attr("stone-value", Math.floor(Math.random()*12 +1));
     $("#Soul").attr("stone-value", Math.floor(Math.random()*12 +1));
     $("#Mind").attr("stone-value", Math.floor(Math.random()*12 +1));
     $("#Time").attr("stone-value", Math.floor(Math.random()*12 +1));
     $("#Space").attr("stone-value", Math.floor(Math.random()*12 +1));
     $("#Power").attr("stone-value", Math.floor(Math.random()*12 +1));
  };


$( document ).ready(function() {
$("#wins").text(population);
$(".stone-image").on("click", function() {
  audio.play();
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var infinityValue = ($(this).attr("stone-value"));
  infinityValue = parseInt(infinityValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += infinityValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
 
  $("#yourScore").text(counter);
  

  if (counter === targetNumber) {
    wins++
    population = (population/2);
    $("#wins").text(population);
    // alert("The population is now "+population+" people!")
    reset();
  }

  else if (counter >= targetNumber) {
    losses++;
    $("#losses").text(losses);
    reset();
  }

});
});