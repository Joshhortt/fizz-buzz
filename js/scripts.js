// Business logic (back-end)
function Data(input, result, options, cancels){
  this.input = input;
  this.output = result;
  this.options = options;
  this.cancels = cancels;
}

Data.prototype.clear = function(){
  this.input="";
  this.result=[];
  this.options=[];
}

var validateInput = function(input) {
  var valid = true;
  if(/[^0-9]/gi.test(input)){
    valid = false;
  } else if (parseInt(input) < 1){
    valid = false;
  }
  return valid;
}

var calculateFizzBuzz = function(input,result) {
  var inputNumber = parseInt(input);
  for(var i = 1;i<=inputNumber;i++){
    if(i % 15 === 0){
      result.push("fizz-buzz")
    } else if(i % 3 === 0){
      result.push("fizz");
    } else if(i % 5 === 0){
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

var selectDisplay = function(user) {
  user.result = calculateFizzBuzz(user.input,user.result);
  user.cancels.forEach(function(cancel){
    window.clearTimeout(cancel);
  });
  user.cancels.length = 0;
  if(user.options.includes("reverse")){
    user.result.reverse();
  }
  if(user.options.includes("funny")){
    user.cancels = displayFunny(user.result, user.cancels);
  } else {
    user.cancels = display(user.result,user.cancels);
  }
  return user.cancels;
}

// User interface logic (front-end)
var display = function(result,cancels) {
  var long = result.length;
  for(i=0;i<long;i++){
    cancels.push(window.setTimeout(displayElement,((34)*i),result[i]));
  }
  return cancels;
}

var displayFunny = function(result,cancels){
  var long = result.length;
  // Looping through 34 different colors
  var colors = ["#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00","#FF851B","#FF4136","#85144b","#F012BE","#B10DC","#e7040f","#ff4136","#ff725c","#ff6300","#ffb700","#ffde37","#fbf1a9","#5e2ca5","#a463f2","#d5008f","#ff41b4","#ff80cc","#ffa3d7","#137752","#19a974","#9eebcf","#001b44","#00449e","#357edd","#96ccff","#cdecff","#ffdfdf"];
  var color = colors[Math.floor(Math.random()*(colorsLong-1))];
  var colorsLong = colors.length;
  for(i=0;i<long;i++){
    if(i%13===0){color = colors[Math.floor(Math.random()*(colorsLong-1))];}
    cancels.push(window.setTimeout(displayFunnyElement,((50)*i),result[i],color));
  }
  return cancels;
}

var displayElement = function(element){
  $("#fizzbuzz-string").append(element + " ");
}

var displayFunnyElement = function(element,color) {
  $("#fizzbuzz-string").append(element + " ");  $("body").css("background-color", color);
  $("h1").css("color", color);
}

$(document).ready(function(){
  var user = new Data("",[],[],[]);
  $("#fizzbuzz").submit(function(event){
    event.preventDefault();
    user.clear();
    user.input = $("#fizzbuzz-input").val();
    $("input:checkbox[name=options]:checked").each(function(){
      user.options.push($(this).val());
    });
    $("#fizzbuzz-result").empty();
    $("#fizzbuzz-result").append("<p id='fizzbuzz-string' class='lead'></p>")
    if(validateInput(user.input)){
      user.cancels = selectDisplay(user)
    } else {
      $("#fizzbuzz-string").text("invalid input");
    }
  });

  $('#reset').click(function(){
  $('#fizzbuzz').text();
  $('#fizzbuzz-input').empty();
  $('#fizzbuzz-result').hide();
  user = [];

});
});
