/**click - eleman tıklandığında
dblclick - eleman çift tıklandığında
mouseenter - fare noktası öğeye girdiğinde
mouseleave - fare işaretçisi öğeden ayrıldığında
mousemove - fare işaretçisi öğe üzerinde hareket ettiğinde
mouseover - fare işaretçisi öğe üzerinde hareket ettiğinde
mouseout - fare işaretçisi öğeden dışarı çıktığında
input - değer giriş alanına girildiğinde
change - giriş alanında değer değiştiğinde
blur - öğe odaklanmadığında
keydown - bir tuş düştüğünde
keyup - bir anahtar bittiğinde
keypress - herhangi bir tuşa bastığımızda
onload - tarayıcı bir sayfayı yüklemeyi bitirdiğinde */


const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    console.log("e gives the event listener object:", e);
    console.log("e.target gives the selected element: ", e.target);
    console.log(
        "e.target.textContent gives content of selected element: ",
        e.target.textContent
    );
});

const clickMe = () => {
    alert("We can attach event on HTML element");
};