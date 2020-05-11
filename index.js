var tone=["green","red","yellow","blue"];
var col=[];
var levelrem="Level - ";
var levelup=[];
var counter=0;
var gamecounter=0;

//key click
$(document).keydown(function (event){
  if(gamecounter==0)
  {
    if(event.key=="a" || event.key=="A")
    {
        $(".right").fadeOut();

        setTimeout(trig,800);
        gamecounter=1
    }
  }
});

//button click
$(".btn").click(function (){

  var tp=$(this).attr("id");
  col.push(tp);
  setone(tp);
  buttonanimate(tp);
  for(var i=0;i<col.length;i++)
  {
     if(col[i] !== levelup[i])
    {
      gameoveranimate();
    }
    else if(i==(counter-1))
    {
        setTimeout(trig,500);
    }
  }
});

function trig()
{
  counter=counter+1;
  $("h1").text(levelrem+counter);
  var temptone=randomtone();
  levelup.push(temptone);
  setone(temptone);
  randomanimate(temptone);
  col=[];
}

function gameoveranimate()
{
    gamecounter=0;
    counter=0;
    col=[];
    levelup=[];
    $("body").addClass("game-over");

    setTimeout(function (){
      $("body").removeClass("game-over");
    },100);
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("h1").text("Game over.Press A key to restart.")
}

function randomtone()
{
   var n=Math.floor((Math.random() * 4));
   return tone[n];
}
function randomanimate(colorbtn)
{
  $("#"+colorbtn).addClass("blink");

  setTimeout(function (){
    $("#"+colorbtn).removeClass("blink");
  },100);
}
function buttonanimate(colorbtn)
{
  $("#"+colorbtn).addClass("pressed");

  setTimeout(function (){
    $("#"+colorbtn).removeClass("pressed");
  },100);
}
function setone(colorbtn)
{
  var audio;
  switch (colorbtn) {
    case "red":
        audio=new Audio("sounds/red.mp3");
        audio.play();
    break;
    case "yellow":
        audio=new Audio("sounds/yellow.mp3");
        audio.play();
    break;
    case "green":
        audio=new Audio("sounds/green.mp3");
        audio.play();
    break;
    case "blue":
        audio=new Audio("sounds/blue.mp3");
        audio.play();
    break;
    default:
        audio=new Audio("sounds/wrong.mp3");
        audio.play();
  }
}
