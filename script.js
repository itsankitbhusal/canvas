// grab canvas from html
const canvas = document.getElementById("canvas");

// get context 
const ctx = canvas.getContext("2d");

// center
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// rectangle

// ctx.fillStyle = "red";
// ctx.fillRect(50, 50, 20, 10);

// stroke reactangle
// ctx.lineWidth = 1;
// ctx.strokeStyle = "blue";
// ctx.strokeRect(50, 70, 20, 10);

// clear rectange
// ctx.clearRect(60, 60, 10, 10);

// text

// ctx.font = "bold 4rem monospace";
// ctx.fillStyle = "green";
// ctx.textAlign = "center";
// ctx.textBaseline = "middle";
// ctx.fillText("@itsankitbhusal", canvas.width / 2, canvas.height / 2);


// paths

// ctx.beginPath();
// ctx.moveTo(300, 100);
// ctx.lineTo(700, 100);
// ctx.lineTo(500, 400);
// // ctx.lineTo(300, 100)
// ctx.closePath();
// // ctx.stroke();
// ctx.fillStyle = "tomato"
// ctx.fill();


// Arc

ctx.beginPath();
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

ctx.moveTo(centerX + 100, centerY)
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

ctx.moveTo(centerX - 60, centerY - 80);
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

ctx.moveTo(centerX + 100, centerY - 80);
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

ctx.lineWidth = 2;
ctx.stroke();