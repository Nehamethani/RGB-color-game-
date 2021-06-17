var numSquares = 6;
var pickedColor ;
var colors = [];
var squares =  document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colordisplay");
colorDisplay.textContent = pickedColor;
var message = document.querySelector("#message");
var heading = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init()
{
//MODE BUTTONS......
for(var i=0;i<modeButtons.length;i++)
{
    modeButtons[i].addEventListener("click" , function()
    {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
  //figure out how many squares to show
  //pick a new color
  //pick a new picked color
  //update page to reflect changes.........
   if(this.textContent === "Easy")
   {
       numSquares = 3;
   }
   else
   {
       numSquares = 6;
   }
   reset();
    })
}
for(var i=0;i<squares.length;i++)
{
  //add click listeners to square...
squares[i].addEventListener("click" , function()
{
  var clickedColor = this.style.background;
  //COMPARE COLOR TO PICKED COLOR
  if(clickedColor === pickedColor)
  {
heading.style.background = clickedColor; 
 message.textContent = "Correct !!!!!";
 colorChange(clickedColor);
 resetButton.textContent = "Play Again?"
  }
  else
  {
  this.style.background = "rgb(26, 26, 26)";
  message.textContent = "Try Again";
  }
})
}
reset();
}


function reset()
{
    message.textContent = "";
     //Generate all new colors
     colors = generateRandomNumbers(numSquares);
     //pick random color from an array
     pickedColor = pickColor();
     //change color display to match picked color
     colorDisplay.textContent = pickedColor;
     resetButton.textContent = "New Colors";
     //Change color of squares...
     for(var i=0;i<squares.length;i++)
 {
    if(colors[i])
           {
               squares[i].style.display = "block";
               squares[i].style.background = colors[i];
           }
           else{
               squares[i].style.display = "none";
           }
 }
   heading.style.backgroundColor = "steelblue"; 
}

resetButton.addEventListener("click",function()
{
    reset();
})


function colorChange(color)
{
    //Loop through all squares to match the correct Color
    for(var i=0;i<squares.length;i++)
    {
        //Change the background color.......
        squares[i].style.background = color;
    }
}

function pickColor()
{
    //Pick a random color from the colors Array.......
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomNumbers(num)
{
    var arr= [];
    for(var i=0 ;i < num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random()* 256);
    var b=Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}
