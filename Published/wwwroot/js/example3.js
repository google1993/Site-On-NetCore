var canvas3 = document.getElementById("example3");
var ctx3 = canvas3.getContext("2d");

function draw3() {
    roundedRect3(ctx3, 12, 12, 150, 150, 15);
    roundedRect3(ctx3, 19, 19, 150, 150, 9);
    roundedRect3(ctx3, 53, 53, 49, 33, 10);
    roundedRect3(ctx3, 53, 119, 49, 16, 6);
    roundedRect3(ctx3, 135, 53, 49, 33, 10);
    roundedRect3(ctx3, 135, 119, 25, 49, 10);

    ctx3.fillStyle = "yellow";
    ctx3.beginPath();
    ctx3.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx3.lineTo(31, 37);
    ctx3.fill();
    ctx3.fillStyle = "black";

    for (var i = 0; i < 8; i++) {
        ctx3.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
        ctx3.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
        ctx3.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx3.fillStyle = "red";
    ctx3.beginPath();
    ctx3.moveTo(83, 116);
    ctx3.lineTo(83, 102);
    ctx3.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx3.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx3.lineTo(111, 116);
    ctx3.lineTo(106.333, 111.333);
    ctx3.lineTo(101.666, 116);
    ctx3.lineTo(97, 111.333);
    ctx3.lineTo(92.333, 116);
    ctx3.lineTo(87.666, 111.333);
    ctx3.lineTo(83, 116);
    ctx3.fill();

    ctx3.fillStyle = "white";
    ctx3.beginPath();
    ctx3.moveTo(91, 96);
    ctx3.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx3.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx3.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx3.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx3.moveTo(103, 96);
    ctx3.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx3.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx3.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx3.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx3.fill();

    ctx3.fillStyle = "black";
    ctx3.beginPath();
    ctx3.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx3.fill();

    ctx3.beginPath();
    ctx3.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx3.fill();
}

function roundedRect3(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
}

window.addEventListener("load", draw3);