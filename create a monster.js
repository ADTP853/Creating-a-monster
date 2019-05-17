//EXAMPLE OF HOW TO CREATE SHAPES

/*
// useful to have them as global variables
var canvas, ctx;

window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#myCanvas");
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // ready to go !
    // filled rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 30, 30);
  
    // wireframe rectangle
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 4;
    ctx.strokeRect(100, 40, 40, 40);
  
    // fill circle, will use current ctx.fillStyle
    ctx.beginPath();
    ctx.arc(60, 60, 10, 0, 2*Math.PI);
    ctx.fill();
  
    // some text
    ctx.fillStyle = "purple";
    ctx.font = "20px Arial";
    ctx.fillText("Hello!", 60, 20);
}
*/

/*
//HERE IS A BETTER PRACTICED VERSION FOR SAVING AND RESTORING

// useful to have them as global variables
var canvas, ctx, w, h; 

window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#myCanvas");
  
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // ready to go !
    drawFilledRectangle(10, 10, 20, 20, "red");
  
    drawFilledCircle(100, 100, 15, "green");
};

function drawFilledRectangle(x, y, width, height, color) {
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(x, y);
  
    ctx.fillStyle = color;
    // (0, 0) is the top left corner of the monster.
    ctx.fillRect(0, 0, width, height);
  
    // GOOD practice: restore the context
    ctx.restore();
}

function drawFilledCircle(x, y, radius, color) {
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(x, y);
  
    ctx.fillStyle = color;
    // (0, 0) is the top left corner of the monster.
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fill();
 
    // GOOD practice: restore the context
    ctx.restore();
}
*/

/*
//THIS DRAWS A MONSTER = )

// useful to have them as global variables
var canvas, ctx, w, h; 


window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#myCanvas");
  
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // ready to go !
    // Try to change the parameter values to move
    // the monster
    drawMyMonster(50, 50);
};

function drawMyMonster(x, y) {
    // draw a big monster !
    // head
  
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(x, y);
  
    // (0, 0) is the top left corner of the monster.
    ctx.strokeRect(0, 0, 100, 100);
  
    // eyes, x=20, y=20 is relative to the top left corner
    // of the previous rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(65, 20, 10, 10);
    
  
    // nose
    ctx.strokeRect(45, 40, 10, 40);
  
    // mouth
   ctx.strokeRect(35, 84, 30, 10);
  
   // teeth
   ctx.fillStyle = 'yellow';
   ctx.fillRect(38, 84, 10, 10);
   ctx.fillRect(52, 84, 10, 10);
   
  
   // GOOD practice: restore the context
   ctx.restore();
}
*/

//THIS MOVES THE MONSTER!!

// useful to have them as global variables
var canvas, ctx, w, h; 
var xMonster = 10;
var yMonster = 10;
var monsterSpeed = 1;

window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#myCanvas");
  
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // ready to go !
    mainLoop();
};

function mainLoop() {
  // 1 - clear the canvas. We told you that w, and h will be useful!
  ctx.clearRect(0, 0, w, h);
  
  // 2 - draw the monster
  drawMyMonster(xMonster, yMonster);
  
  // 3 - move the monster
  xMonster += monsterSpeed;
  
  // 4 - test collisions with vertical boundaries
   if (((xMonster + 100)> w) || (xMonster < 0))  {
     // collision with left or right wall
    // change the direction of movement
    monsterSpeed = -monsterSpeed;
  }
  
  // 5 - request a new frame of animation in 1/60s
  requestAnimationFrame(mainLoop);
}

function drawMyMonster(x, y) {
    // draw a big monster !
    // head
  
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
    // translate the coordinate system, draw relative to it
    ctx.translate(x, y);
  
    // (0, 0) is the top left corner of the monster.
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 100, 100);
  
    // eyes, x=20, y=20 is relative to the top left corner
    // of the previous rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(65, 20, 10, 10);
  
    // nose
    ctx.strokeRect(45, 40, 10, 40);
  
    // mouth
    ctx.fillStyle = 'black';
    ctx.fillRect(35, 84, 30, 10);
  
    // teeth
    ctx.fillStyle = 'yellow';
    ctx.fillRect(38, 84, 10, 10);
    ctx.fillRect(52, 84, 10, 10);
  
   // GOOD practice: restore the context
   ctx.restore();
}

