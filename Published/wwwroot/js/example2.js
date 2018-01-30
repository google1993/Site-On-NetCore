var canvas2 = document.getElementById("example2");
var ctx2 = canvas2.getContext("2d");
var textarea2 = document.getElementById("example2_code");
var reset2 = document.getElementById("example2_reset");
var edit2 = document.getElementById("example2_edit");
var code2 = textarea2.value;

function drawCanvas2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    eval(textarea2.value);
}

reset2.addEventListener("click", function () {
    textarea2.value = code2;
    drawCanvas2();
});

edit2.addEventListener("click", function () {
    textarea2.focus();
})

textarea2.addEventListener("input", drawCanvas2);
window.addEventListener("load", drawCanvas2);
