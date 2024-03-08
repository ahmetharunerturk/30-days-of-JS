const year = document.querySelector('.year');

function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

setInterval(function() {
    year.style.color = randomColor();
}, 1000);
