if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 252);

}

var x = 0;


var titleText = [ "j$", "ju!", "juu^", "juus$", "juust#", "juusti(", "juustic^", "juustice$", "M*", "Ma@", "Mad&", "Made)", "Made B%", "Made By$", "Made By S#", "Made By Sl@", "Made By Sle^", "Made By Slee&", "Made By Sleep#", " "
];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}