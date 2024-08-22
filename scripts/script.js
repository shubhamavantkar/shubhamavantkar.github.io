document.querySelector('.toggle-button').addEventListener('click', function () {
    document.querySelector('.navbar-links').classList.toggle('active');
});

window.onload = function () {
    document.getElementById("my_audio").play();
}

// set up text to print, each item in array is new line
var aText = new Array(
   "Welcome to the shadows of my world",
   "I am Shubham Avantkar, a developer with a mind as sharp as a blade, delving into the unseen realms of code.",
   "I don’t just build—I manifest, bringing ideas to life with an eerie precision that echoes in the silence.",
   "My code is the architect of the web’s hidden corridors, where every line I write is a whisper in the dark.",
   "Whether crafting impenetrable systems or commanding teams from the shadows, I move with a purpose—delivering results that echo long after the work is done.",
   "Let’s create something extraordinary, something that lingers in the darkness."
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();

