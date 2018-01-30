var canvas_test = document.getElementById("Canvas");

window.addEventListener('resize', () => {
    if (canvas_test.offsetWidth < 540) {
        canvas_test.classList.remove("container");
        canvas_test.classList.add("container-fluid");
    }
    else {
        canvas_test.classList.remove("container-fluid");
        canvas_test.classList.add("container");
    }
});