window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;

   
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 0);
    ctx.lineTo(0, 50);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(canvas.width - 50, 0);
    ctx.lineTo(canvas.width, 50);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(50, canvas.height);
    ctx.lineTo(0, canvas.height - 50);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(canvas.width, canvas.height);
    ctx.lineTo(canvas.width - 50, canvas.height);
    ctx.lineTo(canvas.width, canvas.height - 50);
    ctx.closePath();
    ctx.fill();
}