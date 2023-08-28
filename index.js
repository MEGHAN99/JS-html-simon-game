let  buttonColours= ["red","blue","green","yellow"];

let gamePattern=[];
let userclickedPattern =[]
let started = false;
let level = 0;

$(document).keydown(function(){

if (!started){
$("#level-title").text("level" + level);
nextSequence();
started=true;

}
});


$(".btn").click(function() {

let userChosenColour = $(this).attr("id");

userclickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userclickedPattern.length-1);



});



function checkAnswer(currentlevel){

    if(gamePattern[currentlevel]===userclickedPattern[currentlevel]){
if(userclickedPattern.length===gamePattern.length){

    setTimeout(function () {
        nextSequence();
      }, 1100);
    }
  }

  else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}



function nextSequence(){
    userclickedPattern=[];
    level++;
    $("#level-title").text("level"+level);
let randomNumber = Math.floor(Math.random() * 4);
let randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$( "#" + randomChosenColour ).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);



}
 function playSound(name){
    let audio = new Audio( name + ".mp3")
    audio.play();
}

function animatePress(currentColor){

$("#"+currentColor).addClass("pressed");

setTimeout(function(){
$("#" + currentColor).removeClass("pressed");
},100);
}


function startOver(){

 level = 0;
  gamePattern=[];
  started = false;




}












