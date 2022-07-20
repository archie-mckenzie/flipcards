const deck = [
    {
        front: "images/front1.png",
        back: "images/questions.png"
    },
    {
        front: "images/front2.png",
        back: "images/questions.png"
    }
];

var position = 0;

function goLeft() {
    if (position > 0) {
        var front = document.getElementById("front");
        var back = document.getElementById("back");
        position--;
        front.src = deck[position].front
        back.src = deck[position].back
    }
}

function goRight() {
    if (position < deck.length -  1) {
        var front = document.getElementById("front");
        var back = document.getElementById("back");
        position++;
        front.src = deck[position].front
        back.src = deck[position].back
    }
}

function shuffle() {

}



