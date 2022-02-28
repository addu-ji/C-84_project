canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_Keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		if(keyPressed == '')
		{
			alphabetkey();
			document.getElementById("d1").innerHTML="You pressed an alphabet key";
			console.log("alphabet key");
		}

		{
			numberkey();
			document.getElementById("d1").innerHTML="You pressed a number key";
			console.log("number key");
		}

		{
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed an arrow key";
			console.log("arrow key");
		}

		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed a special key";
			console.log("special key");
		}
	
		
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function alphabetkey()
{
	img_image="Alpkey.jpg";
	add();
}

function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.jpg";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
