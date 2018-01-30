var canvas = document.getElementsByTagName("canvas")[0];                    //Поле Canvas
var canvas_x = parseInt(document.getElementById('canvas_x').value, 10);     //Ширина
var canvas_y = parseInt(document.getElementById('canvas_y').value, 10);     //Высота
var canvas_dot = parseInt(document.getElementById('canvas_dot').value, 10); //Размер точки
var canvas_elapsed = document.getElementById('canvas_elapsed').checked;     //Флаг замыкания поля
var time_cycle = parseInt(document.getElementById('time_cycle').value, 10); //Время цикла
var count_step = parseInt(document.getElementById('count_step').value, 10); //Кол-во прыжков
var flag_cycle;                     //Параметр для SetInterval
var ctx = canvas.getContext('2d');  //Работа с Canvas
var mass = [];                      //Массив точек поля
var count_life = document.getElementById('count_life');

//Изменение параметров
function change_param() {
    clearInterval(flag_cycle);
    canvas_x = parseInt(document.getElementById('canvas_x').value, 10);
    canvas_y = parseInt(document.getElementById('canvas_y').value, 10);
    canvas_dot = parseInt(document.getElementById('canvas_dot').value, 10);
    canvas_elapsed = document.getElementById('canvas_elapsed').checked;
}

//Создание поля Canvas
function initialize_canvas() {
    count_life.innerHTML = 0;
    clearInterval(flag_cycle);
    canvas.width = canvas_x * canvas_dot;
    canvas.height = canvas_y * canvas_dot;
    for (var i = 0; i < canvas_x; i++) {
        mass[i] = [];
        for (var j = 0; j < canvas_y; j++) {
            mass[i][j] = false;
        }
    }
}

//Выполнение шага
function parse_step() {
    var new_mass = [];
    for (var i = 0; i < canvas_x; i++) {
        new_mass[i] = [];
        for (var j = 0; j < canvas_y; j++) {
            var count = 0;
            count += check_life(i - 1, j - 1);
            count += check_life(i, j - 1);
            count += check_life(i + 1, j - 1);
            count += check_life(i - 1, j);
            count += check_life(i + 1, j);
            count += check_life(i - 1, j + 1);
            count += check_life(i, j + 1);
            count += check_life(i + 1, j + 1);
            new_mass[i][j] = (count == 2) ? mass[i][j] : (count == 3) ? true : false;
        }
    }
    mass = new_mass;
    count_life.innerHTML = parseInt(count_life.innerHTML)+1;
}

//Подсчет соседей у точки
function check_life(x, y) {
    if ((x >= 0) && (x < canvas_x) && (y >= 0) && (y < canvas_y))
        return (mass[x][y]) ? 1 : 0;
    if (!canvas_elapsed)
        return 0;
    var a = (x < 0) ? x + canvas_x : (x >= canvas_x) ? x - canvas_x : x;
    var b = (y < 0) ? y + canvas_y : (y >= canvas_y) ? y - canvas_y : y;
    return (mass[a][b]) ? 1 : 0;
}

//Рисуем поле
function draw() {
    ctx = canvas.getContext('2d');
    for (var i = 0; i < canvas_x; i++) {
        for (var j = 0; j < canvas_y; j++) {
            ctx.fillStyle = (mass[i][j]) ? "green" : "white";

            ctx.fillRect(i * canvas_dot, j * canvas_dot, canvas_dot, canvas_dot);
            if (canvas_dot >= Math.floor(10 * (canvas.width / canvas.offsetWidth)))
                ctx.strokeRect(i * canvas_dot, j * canvas_dot, canvas_dot, canvas_dot);
        }
    }
}


var empty = document.getElementById('empty'); //Кнопка инициализации поля
empty.onclick = function () {
    change_param();
    initialize_canvas();
    draw();
}

//Взаимодействие с полем Canvas
canvas.onclick = function (e) {
    var i = Math.floor(e.offsetX / canvas_dot * (canvas.width / canvas.offsetWidth));
    var j = Math.floor(e.offsetY / canvas_dot * (canvas.height / canvas.offsetHeight));
    mass[i][j] = (mass[i][j]) ? false : true;
    draw();
}

//Выполнение шага
function play_cycle() {
    parse_step();
    draw();
}

var step = document.getElementById('step'); //Кнопка шага
step.onclick = function () {
    clearInterval(flag_cycle);
    play_cycle();
}

var pause = document.getElementById('pause'); //Кнопка паузы
pause.onclick = function () {
    clearInterval(flag_cycle);
}

var start = document.getElementById('start'); //Кнопка выпонения шагов в цикле
start.onclick = function () {
    clearInterval(flag_cycle);
    time_cycle = parseInt(document.getElementById('time_cycle').value, 10);
    flag_cycle = setInterval(play_cycle, time_cycle);
}

var jump = document.getElementById('jump'); //Кнопка выполнения прыжка
jump.onclick = function () {
    clearInterval(flag_cycle);
    count_step = parseInt(document.getElementById('count_step').value, 10);
    for (var i = 0; i < count_step; i++)
        setTimeout(play_cycle, 1);
}

var random = document.getElementById('random'); //Кнопка заполнения поля случайными значениями
random.onclick = function () {
    change_param();
    initialize_canvas();
    for (var i = 0; i < canvas_x; i++) {
        for (var j = 0; j < canvas_y; j++) {
            mass[i][j] = !!+(Math.floor(Math.random() * 2));
        }
    }
    draw();
}
