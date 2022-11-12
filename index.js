var num1;
var num2;
var numCorrect = 0;
var timeCount = 120*4;
var intId = -1;

function startGame() {
  $("#answer").val("");
  newQuestion();
  timeCount = 120*4;
  numCorrect = 0;
  $("#result").hide();
  $("#prize").hide();
  $("#play").fadeOut(1000, function() {
    $("#timer").show();
    $("#game").show();
    // $("#timeBar").fadeOut(10000, "linear" function(){});
    //$("#timerBar").hide();
  });

  intId = setInterval(timed, 250);
}

$('#answer').keypress(function(e) {
  if (e.which == 13) {
    checkAnswer();
    return false; //<---- Add this line
  }
});

function checkAnswer() {
  var ans = parseInt($("#answer").val());
  if (ans === num1 * num2) {
    numCorrect++;
    $("#result").show();
    $("#result").text("Correct:" + numCorrect);
    $("#answer").val("");
    newQuestion();
  }
}
$(document).ready(function() {
  $("#answer").hide();
  $("#result").hide();
  $("#timer").hide();
  //$("#timerBar").hide();
});

function timed() {
  var secs = Math.floor(timeCount/4)%60;
  var mins = Math.floor(timeCount/240);
  $("#timer").text(mins + ":" + formatTime(secs));
  if (timeCount === 0) {
    endGame();
  } else if (timeCount <= 3*4) {
    $("#timer").addClass("red-text");
  }
  timeCount--;
  var timeProgress = "" + (timeCount/480)*100;
 // var prevClass = "sec" + ((Math.ceil(timeCount / 12)) + 1);
 // var currClass = "sec" + (Math.ceil(timeCount / 12));
 // $("#timerBar").removeClass(prevClass);
  //$("#timerBar").addClass(currClass);
  $("#timerBar").css('width', timeProgress + "%"); //$("timerBar").removeClass("s10").addClass("s0", 3000, "linear");
  console.log(timeProgress + " " + prevClass + " " + currClass);
  // $( "#timerBar").css("width", timeProgress + "%;");
  //$("#timerBar").val("" + 10*timeCount);
}

function newQuestion() {

  num1 = Math.round(Math.random() * 12);
  num2 = Math.round(Math.random() * 12);
  $("#question").text(num1 + "x" + num2 + "=");
  $("#answer").show();
}

function endGame() {
  $("#game").hide();
  $("#timer").hide();
  showPrize();
  //$("#timerBar").hide();
  $("#timer").removeClass("red-text");
  clearInterval(intId);
  $("#play").fadeIn(1000, function() {})

}

function formatTime(toFormat) {
  if (toFormat < 10) {
    return "0" + toFormat;
  }
  return toFormat;
}

function showPrize() {
  $("#prize").show();
  if(numCorrect == 0) {
    $("#prize").text("No prize for you!");
  }
  else if(numCorrect > 10) {
    $("#prize").text("You win a blue and green goose!");
  }
  else if(numCorrect > 20) {
    $("#prize").text("You win a bar of soap!");
  }
  else if(numCorrect > 30) {
    $("#prize").text("You win a sour cream and spinach pizza!");
  }
  else {
    $("#prize").text("You win a polka-dotted bowling ball!");
  }
}
