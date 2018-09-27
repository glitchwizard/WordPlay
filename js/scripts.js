$(document).ready(function () {
  var sentanceArray = [];
  var flippedArray = [];
  var finalString = "";
  $("form").submit(function (event) {
    event.preventDefault();
    var sentanceArray = $("input#sentence").val().split(' ');

    sentanceArray.forEach(function(x) {
      flippedArray.unshift(x);
    });

    flippedArray.forEach(function(xx) {
    finalString += xx.toString() + " ";
    });

    $("span#output").text(finalString);

  });
});
