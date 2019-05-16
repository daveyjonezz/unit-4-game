// function to check for wins
// function to check for losses
// $(this.value) - get value of the button

var stones = ['Mind', 'Power', 'Reality', 'Time'];
var targetNumber;
var counter = 0;
// var numberOptions = [Math.floor(Math.random()*11 +1),Math.floor(Math.random()*11 +1),Math.floor(Math.random()*11 +1),Math.floor(Math.random()*11 +1)];
for (var i = 0; i < stones.length; i++) {

  var imageStone = $("<img>");
  imageStone.addClass("stone-image");
  imageStone.attr("src",`./assets/images/${stones[i]}.jpg`);
  imageStone.attr("stone-value",Math.floor(Math.random()*11 +1));
  $("#stones").append(imageStone);
  var linespace = $("<br>");

}
$(".stone-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#yourScore").text(counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });