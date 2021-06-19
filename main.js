canvas = document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(100, 210, 80, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc (280, 210, 80, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc (480, 210, 80, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc (200, 300, 80, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc (400, 300, 80, 0, 2 * Math.PI);
ctx.stroke();

