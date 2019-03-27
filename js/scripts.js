//
var add = function(number1, number2) {
  return number1 + number2 ;
};
var subtract = function(number1, number2) {
  return number1 - number2 ;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

//

$(document).ready(function() {
  $("form#math").submit(function(event) {
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = add(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
  $("form#math").submit(function(event) {
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
  $("form#math").submit(function(event) {
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
  $("form#math").submit(function(event) {
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
});
