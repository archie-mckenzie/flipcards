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
        front.src = deck[position].front;
        back.src = deck[position].back;
    }
}

function goRight() {
    if (position < deck.length -  1) {
        var front = document.getElementById("front");
        var back = document.getElementById("back");
        position++;
        front.src = deck[position].front;
        back.src = deck[position].back;
    }
}

// swaps two cards in the deck, used for shuffle
function swap(i, j) {
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

// Fisher-Yates shuffle algorithm implementation
function shuffle() {
    for (let i = deck.length; i > 0; i--) {
        const randInt = Math.floor(Math.random() * i);
        const index = i - 1;
        swap(index, randInt)
    }
    var front = document.getElementById("front");
    var back = document.getElementById("back");
    position = 0;
    front.src = deck[position].front;
    back.src = deck[position].back;
}



