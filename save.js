var MyTimer;
var space = document.getElementById("space");
var myArr = [];
var j = -1;
var timerLevel = 300;
var howManyNumbers = 5;

function start(){
    document.getElementById("start").style.display = "none";
for (var i = 0; i < howManyNumbers; i++) {
  myArr[i] = getRandomIntInclusive();
}

MyTimer = setInterval(display, timerLevel);
}

function randomColor() {
  return (
    "#" + ("00000" + ((Math.random() * 16777216) << 0).toString(16)).substr(-6)
  );
}

function display() {
  j++;
    
    
  if (j > myArr.length - 1) {
    clearInterval(MyTimer);

    document.getElementById("desc").style.display = "none";
    document.getElementById("inputArea").style.display = "block";
    document.getElementById("text").focus();
      space.textContent = "";
    
  }
    else{
        space.textContent = myArr[j];
  space.style.color = randomColor();
    }
}

function getRandomIntInclusive() {
  min = 1;
  max = 9;
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function after() {
  var answer = document.getElementById("text").value;
  if (myArr.join("") == answer) {
    alert("Good Job!");
  } else {
    alert("Sorry, better luck next time!");
  }
  document.getElementById("inputArea").style.display = "none";
  //document.getElementById("desc").style.display = "none";
  document.getElementById("again").style.display = "block";
}

document.getElementById("text").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("Btn").click();
  }
});

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

