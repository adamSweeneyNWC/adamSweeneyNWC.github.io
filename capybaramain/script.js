const canvas = document.getElementById("canvas-1");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

//___________________ background draw ___________________

function background() {
  
  // water gradient, light blue to dark
  const grd = ctx.createLinearGradient(300, 90, 300, 290);
  grd.addColorStop(0, "#9ed9c9");
  grd.addColorStop(1, "#6db0af");
  // water
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //land gradient, light green to dark (left to right)
    const grd2 = ctx.createLinearGradient(100, 150, 700, 150);
  grd2.addColorStop(0, "#81a371");
  grd2.addColorStop(1, "#50824b");
  //land
  ctx.fillStyle = grd2;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(60, 140, 345, 145, 355, 120);
  ctx.bezierCurveTo(515, 90, canvas.width, 365, 370, 400);
  ctx.lineTo(canvas.width, 400);
  ctx.lineTo(canvas.width, 0);
  ctx.fill();
}

// __________________________ waterfall _____________________________
//stream
function stream() {
  const grd1 = ctx.createLinearGradient(300, 90, 300, 290);
  grd1.addColorStop(0, "#6db0af");
  grd1.addColorStop(1, "#578b9e");
  ctx.fillStyle = grd1;
  ctx.beginPath();
  ctx.fillRect(290, 0, 70, 170);
}

//drawing waters shadow or drops 
function waterShadowTxtr(x, y) {
  ctx.fillStyle = "#4a798a";
  ctx.beginPath();
  ctx.moveTo(300 + x, 10 + y);
  ctx.bezierCurveTo(295 + x, 30 + y, 295 + x, 40 + y, 300 + x, 50 + y);
  ctx.lineTo(300 + x, 10 + y);
  ctx.fill();
}

// starting y values 
let y = 0;
let y1 = 10; 
let y2 = 20; 
let y3 = 30; 
let y4 = 40;
let y5 = 60; 
let y6 = 70; 
let y7 = 90; 
let y8 = 100; 
let y9 = 105; 
let y10 = 0; 
let y11 = 120; 
let y12 = 120; 

// water moving function if space is pressed
function waterMove() {
  stream();
  if (right){
    y+= 1;
    y1+= 1;
    y2+= 1;
    y3+= 1;
    y4+= 1;
    y5+= 1;
    y6+= 1;
    y7+= 1;
    y8+= 1;
    y9+= 1;
    y10+= 1;
    y11+= 1;
    waterShadowTxtr(5, y);
    waterShadowTxtr(15, y1);
    waterShadowTxtr(35, y2);
    waterShadowTxtr(50, y3);
    waterShadowTxtr(5, y4);
    waterShadowTxtr(15, y5);
    waterShadowTxtr(35, y6);
    waterShadowTxtr(50, y7);
    waterShadowTxtr(15, y8);
    waterShadowTxtr(15, y9);
    waterShadowTxtr(35, y10);
    waterShadowTxtr(5, y11);
    if (y >= 135) y = -5;
    if (y1 >= 135) y1 = -5;
    if (y2 >= 135) y2 = -5;
    if (y3 >= 135) y3 = -5;
    if (y4 >= 135) y4 = -5;
    if (y5 >= 135) y5 = -5;
    if (y6 >= 135) y6 = -5;
    if (y7 >= 135) y7 = -5;
    if (y8 >= 135) y8 = -5;
    if (y9 >= 135) y9 = -5;
    if (y10 >= 135) y10 = -5;
    if (y11 >= 135) y11 = -5;
  } else{
    waterShadowTxtr(5, y);
    waterShadowTxtr(15, y1);
    waterShadowTxtr(35, y2);
    waterShadowTxtr(50, y3);
    waterShadowTxtr(5, y4);
    waterShadowTxtr(15, y5);
    waterShadowTxtr(35, y6);
    waterShadowTxtr(50, y7);
    waterShadowTxtr(15, y8);
    waterShadowTxtr(15, y9);
    waterShadowTxtr(35, y10);
    waterShadowTxtr(5, y11);
    
  }
}


//splash
function splash(x, y) {
  ctx.fillStyle = "#d0f4f5";
  ctx.beginPath();
  ctx.moveTo(290, 185);
  ctx.bezierCurveTo(246+x, 147+y, 305+x, 175+y, 315+x, 150+y);
  ctx.bezierCurveTo(330+x, 130+y, 340+x, 165+y, 340+x, 160+y);
  ctx.bezierCurveTo(350+x, 180+y, 395+x, 135+y, 370+x, 175+y);
  ctx.lineTo(360, 185);
  ctx.fill();
}


let a = 0 ;
let numA = 0.5;

function splashAni() {
  if (right){
    a+= numA;
    splash(a, 0)
    if (a >= 10 || a <= -10) {
      numA *= -1;
    }}else splash(a, 0)
}


//_____________________ CAPYBARA _____________________________
function capybara() {
  //body
  ctx.fillStyle = "#805a3e";
  ctx.beginPath();
  ctx.moveTo(240, 220);
  ctx.bezierCurveTo(165, 165, 45, 210, 60, 270);
  // ctx.bezierCurveTo(320, 340, 160, 320, 150, 320);
  ctx.lineTo(160, 320);
  ctx.fill();

  //right ear
  ctx.fillStyle = "#4f3726";
  ctx.beginPath();
  ctx.ellipse(270, 225, 30, 20, (115 * Math.PI) / 180, 0, 2 * Math.PI);
  ctx.fill();

  //head
  ctx.fillStyle = "#966d4e";
  ctx.beginPath();
  ctx.moveTo(175, 235);
  ctx.bezierCurveTo(280, 170, 360, 250, 335, 320);
  ctx.bezierCurveTo(320, 340, 160, 320, 160, 320);
  ctx.bezierCurveTo(165, 320, 140, 310, 150, 280);
  ctx.lineTo(170, 235);
  ctx.fill();

  //left ear
  ctx.fillStyle = "#4f3726";
  ctx.beginPath();
  ctx.ellipse(180,255,30,20,
    (10 * Math.PI) / 180,
    (90 * Math.PI) / 180,
    (300 * Math.PI) / 180
  );
  ctx.fill();

  //nose
  ctx.fillStyle = "#4f3726";
  ctx.beginPath();
  ctx.moveTo(340, 320);
  ctx.bezierCurveTo(360, 280, 330, 250, 300, 260);
  ctx.bezierCurveTo(270, 270, 260, 330, 280, 330);
  ctx.lineTo(335, 325);
  ctx.fill();

  //_____ face ______

  //eye
  ctx.fillRect(222, 274, 15, 5);

  //nose
  //left
  ctx.fillStyle = "black";
  ctx.rotate((15 * Math.PI) / 180);
  ctx.fillRect(373, 200, 20, 5);
  ctx.rotate((-15 * Math.PI) / 180);
  //right
  ctx.fillStyle = "black";
  ctx.translate(325, 295);
  ctx.rotate((-25 * Math.PI) / 180);
  ctx.fillRect(0, 0, 20, 5);
  ctx.rotate((25 * Math.PI) / 180);
  ctx.translate(-325, -295);
  //middle
  ctx.fillRect(325, 295, 5, 30);
}

// function waterMove() {
//   stream();
//   waterTxtr(0, 0);
// }

// ___________________get keyboard input___________________
// ⇦73   ⇨39   ⇧38   ⇩40    W87   A65   S83   D68    spacebar32
const keys = [];
document.onkeydown = (event) => {
  keys[event.keyCode] = true;
  console.log(event.keyCode);
};
document.onkeyup = (event) => {
  keys[event.keyCode] = false;
};

//___________________new key input method___________________
let left = false;
let right = false;
let up = false;
let down = false;
let space = false;

window.addEventListener("keyup", function (event) {
  // console.log(event.code)

  switch (event.code) {
    case "ArrowRight":
      right = false;
      break;
    case "ArrowLeft":
      left = false;
      break;
    case "ArrowUp":
      up = false;
      break;
    case "ArrowDown":
      down = false;
      break;
    case "Space":
      space = false;
      break;
  }
});

window.addEventListener("keydown", function (event) {
  // console.log(left);
  switch (event.code) {
    case "ArrowRight":
      right = true;
      break;
    case "ArrowLeft":
      left = true;
      break;
    case "ArrowUp":
      up = true;
      break;
    case "ArrowDown":
      down = true;
      break;
    case "Space":
      space = true;
      break;
  }
});

//______________ ANIMATION _______________

function cycle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  background();
  capybara();
  waterMove();
  splashAni()

  requestAnimationFrame(cycle);
}
requestAnimationFrame(cycle);
