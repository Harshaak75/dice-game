var generate_random1 = Math.random() * 6;
var generate_random2 = Math.random() * 6;

var change1 = Math.floor(generate_random1) + 1;
var change2 = Math.floor(generate_random2) + 1;


document.querySelector(".img1").setAttribute("src", "./images/dice" + change1 + ".png");

document.querySelector(".img2").setAttribute("src", "./images/dice" + change2 + ".png");

if (change1 == change2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (change1 > change2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else {
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
}

    