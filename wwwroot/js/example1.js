var canvas1 = document.getElementById("example1");
var ctx1 = canvas1.getContext("2d");
var textarea1 = document.getElementById("example1_code");
var reset1 = document.getElementById("example1_reset");
var edit1 = document.getElementById("example1_edit");
var code1 = textarea1.value;

function drawCanvas1() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    eval(textarea1.value);
}

reset1.addEventListener("click", function () {
    textarea1.value = code1;
    drawCanvas1();
});

edit1.addEventListener("click", function () {
    textarea1.focus();
})

textarea1.addEventListener("input", drawCanvas1);
window.addEventListener("load", drawCanvas1);
