canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.



background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 function add() {
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;

    rover_image_tag = new Image()
    rover_image_tag.onload = uploadrover;
    rover_image_tag.src = rover_image;
 } 
	                                     //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

                                         //defining a variable with a new image
	                                     // setting a function, onloading this variable
	                                     // load image

//Create "uploadBackground()" function.
 function uploadBackground() {
 ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
 }
                              
                                         //Draw image of background

//Create "uploadrover()" function.
 function uploadrover() {
 ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
 }
                                        //Draw image of rover


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
		if(keyPressed == "38")
        {
            up();
            console.log("up");
        }
    


     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
		if(keyPressed == "40")
        {
            down();
            console.log("down");
        }




    //Additional Activity
    //Write the code for left and right arrow pressed.
    if(keyPressed == "37")
    {
        left();
        console.log("down");
    } 

    if(keyPressed == "39")
    {
        right();
        console.log("down");
    }
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



