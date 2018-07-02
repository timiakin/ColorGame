// generating a radom color and adding it to an empty array;
// colors is the array of 6 colours
var numSquares = 6;
var colors = generateRandomColors(numSquares); //colors is an array of 
//(num) number of random colors

//Generating one random color
function randomColor(){         
	// add red generate number from 0 -255
	 var r =Math.floor(Math.random()* 256)
    //add blue
    var g = Math.floor(Math.random()* 256)
	// add green
	var b = Math.floor(Math.random()* 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Generating 6 random colors
function generateRandomColors(num){
	//make an array
var arr =[];
// add num random colors to array
for(i=0; i < num; i++){
arr.push(randomColor()); 
}
//return an array
return arr;
}


// picking a random color from the array genearated, this color will be 
// the answer

var squares = document.getElementsByClassName("square")

var pickedcolor = pickColor();
function pickColor(){
			var random = Math.floor(Math.random()* colors.length)
			return colors[random];
		}

// displays the answer on the top
colordisplay1 = document.getElementById('colordisplay');
colordisplay1.innerHTML = pickedcolor;



//easy and hard button
var Easybtn = document.getElementById('easybtn');
var Hardbtn = document.getElementById('hardbtn'); 


// Easybtn.addEventListener("click", colordifficulty2);
// function colordifficulty2(){
// 	Hardbtn.classList.remove("selected");
// 	Easybtn.classList.add("selected");
// 	colors = generateRandomColors(3);
// 	pickedcolor = pickColor();
// 	colordisplay.innerHTML = pickedcolor;
// 	for(var i = 0; i < squares.length; i++){
// // if colors 1, 2,3 add colors to squares else hide the remaining squares
// 		if (colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.background = 'none';
// 		}
//    }

// }  


// my version updating the easy difficulty    
Easybtn.addEventListener("click", colordifficulty2);
function colordifficulty2(){
	Hardbtn.classList.remove("selected");
	Easybtn.classList.add("selected");
// generating random colors for the first 3 squares
   numSquares = 3;
	colors = generateRandomColors(numSquares);
// making sure the picked color can only be within the first 3 squares
	pickedcolor = pickColor();
	colordisplay.innerHTML = pickedcolor;
	for(var i = 0; i < squares.length; i++){
       squares[i].style.background = colors[i];
// hiding the bttom 3 squares
       if (i >= 3){
       	squares[i].style.background = 'none';
		 }
       }

}                  

Hardbtn.addEventListener("click", colordifficulty);
function colordifficulty(){
	Easybtn.classList.remove("selected");
	Hardbtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickColor();
	colordisplay.innerHTML = pickedcolor;
	for(var i = 0; i < squares.length; i++){
       squares[i].style.background = colors[i];
       if (i >= 3){
       	squares[i].style.background = 'block';
		 }
     
       }
	
}






var messageDisplay = document.getElementById('message')
var heading = document.getElementsByTagName('h1')[0];
var resetButton = document.getElementById('reset');


for(var i = 0; i < squares.length; i++){
	// adding random colors to squares
	squares[i].style.background = colors[i];

	//add click listeners
	squares[i].addEventListener("click",click);
	function click(){
		// grab color of clicked square
		var clickedcolor = this.style.background;
		//compare color to pickedcolor  
		if(clickedcolor == pickedcolor){
			messageDisplay.innerHTML = "Correct"
			changeColors(pickedcolor);
			heading.style.background = pickedcolor;
			resetButton.innerHTML = 'Play Again';

		}else{
			this.style.background =  '#232323';
			messageDisplay.innerHTML = "Try Again"
		}
// after getting the right color, change all square colors to the right color
		function changeColors(color){
			//loop through the squares
			for (var i = 0; i < squares.length; i++) {
				//change each color to match the given color
				squares[i].style.background = color;
			}
		}
		
	}

	 
}

// Reset Button
resetButton.addEventListener("click", resetclick);
function resetclick(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedcolor = pickColor();
	// change colordisplay to match picked color
	colordisplay.innerHTML = pickedcolor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
   }
   heading.style.background = 'steelblue';
   resetButton.innerHTML = 'New Game';

}