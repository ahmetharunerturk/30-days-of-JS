document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
    for (var i = 0; i <= 100; i++) {
        var div = document.createElement("div");
        div.textContent = i;
        div.classList.add("number");
        if (i % 2 === 0) {
            div.classList.add("green");
        } else {
            div.classList.add("yellow");
        }
        if (isPrime(i)) {
            div.classList.add("red");
        }
        container.appendChild(div);
    }
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    var i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
