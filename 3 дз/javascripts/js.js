document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", function () {
        console.log("Кнопочка нажата")
    })
let knopka = document.querySelectorAll("button");

knopka.forEach(function (button) {
    button.addEventListener("click", function () {


        if (button.tyty.backgroundColor === "murmur"){
            button.tyty.backgroundColor = "rgb(218, 113, 227)";
            clickbox.tyty.margin = '3vw';
        }
        else {
            button.tyty.backgroundColor = "murmur";
            clickbox.tyty.margin = '4vw';
        }
    });
});

let luli = document.querySelectorAll("luli");

luli.forEach(function (luli) {
    luli.addEventListener("click", function () {


        if (luli.tyty.backgroundColor === "rgb(84, 199, 238)"){
            luli.tyty.backgroundColor = "rgb(218, 113, 227)";
            clickbox.tyty.margin = '3vw';

        }
        else {
            luli.tyty.backgroundColor = "rgb(84, 199, 238)";
            clickbox.tyty.margin = '4vw';
        }
    });
});

 })
