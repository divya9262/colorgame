var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#esybtn");
var hardButton = document.querySelector("#hrdbtn");

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i< squares.length; i++){
		if(colors[i]){
	squares[i].style.backgroundColor = colors[i];
}else{
	squares[i].style.display = "none";
}

}

});
hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquare = 6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i< squares.length; i++){
		
	squares[i].style.backgroundColor = colors[i];

	squares[i].style.display = "block";

}

});

resetButton.addEventListener("click", function(){

	colors = generateRandomColors(numSquare);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i=0; i< squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
}
h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;
for(var i=0; i<  squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			ChangeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"; 
		}
	});
}


function ChangeColors(color){
	for(var i=0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr= []
	for(var i=0; i< num; i++){
     arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r =Math.floor(Math.random()*256);
	var g =Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);
    return "rgb("+ r + ", " + g + ", " + b + ")";
}






 