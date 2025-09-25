
// Плейер
const audio = document.querySelector('.audioPlayer');
const container = document.querySelector('.audio-container');
const button = document.querySelector('.play-pause-button');

// Устанавливаем начальный класс как "paused", чтобы отображался плей
container.classList.add('paused');

container.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        container.classList.remove('paused'); // Показываем кнопку паузы
        container.classList.add('playing');
    } else {
        audio.pause();
        container.classList.remove('playing'); // Показываем кнопку плей
        container.classList.add('paused');
    }
});

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

// Используем формат ISO для корректной интерпретации даты
let endDate = '2025-10-15T16:00:00';

let x = setInterval(function () {
    let now = new Date().getTime();
    let targetDate = new Date(endDate).getTime();
    let distance = targetDate - now;

    // Проверка на отрицательное значение расстояния
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").style.display = 'none';
        // Если время вышло, установим все значения в 0
        if (days) days.innerHTML = '0<br><span>Dy</span>';
        if (hours) hours.innerHTML = '0<br><span>Hr</span>';
        if (minutes) minutes.innerHTML = '0<br><span>Min</span>';
        if (seconds) seconds.innerHTML = '0<br><span>Sec</span>';

        if (dd) dd.style.strokeDashoffset = 188.5;
        if (hh) hh.style.strokeDashoffset = 188.5;
        if (mm) mm.style.strokeDashoffset = 188.5;
        if (ss) ss.style.strokeDashoffset = 188.5;

        if (day_dot) day_dot.style.transform = `rotateZ(0deg)`;
        if (hr_dot) hr_dot.style.transform = `rotateZ(0deg)`;
        if (min_dot) min_dot.style.transform = `rotateZ(0deg)`;
        if (sec_dot) sec_dot.style.transform = `rotateZ(0deg)`;

        return; // Прерываем выполнение кода, если время прошло
    }

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    // Обновляем DOM элементы, только если они существуют
    if (days) days.innerHTML = d + "<br><span>Dy</span>";
    if (hours) hours.innerHTML = h + "<br><span>Hr</span>";
    if (minutes) minutes.innerHTML = m + "<br><span>Min</span>";
    if (seconds) seconds.innerHTML = s + "<br><span>Sec</span>";

    if (dd) dd.style.strokeDashoffset = 188.5 - (188.5 * d) / 365;
    if (hh) hh.style.strokeDashoffset = 188.5 - (188.5 * h) / 24;
    if (mm) mm.style.strokeDashoffset = 188.5 - (188.5 * m) / 60;
    if (ss) ss.style.strokeDashoffset = 188.5 - (188.5 * s) / 60;

    if (day_dot) day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
    if (hr_dot) hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
    if (min_dot) min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    if (sec_dot) sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
});


// Эффект паралакс
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.hidden-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.hidden-colors');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible_2');
            }
        });
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.hidden-heart');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible_3');
            }
        });
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});

const textarea = document.getElementById('name');

        textarea.addEventListener('input', function () {
            this.style.height = 'auto'; // Сбрасываем высоту
            this.style.height = this.scrollHeight + 'px'; // Устанавливаем новую высоту
        });
