// array data structure which represents a deck of CEC People's Money cards
const deck = [
    {
        front: "images/1front.png",
        back: "images/questions.png"
    },
    {
        front: "images/2front.png",
        back: "images/questions.png"
    },
    {
        front: "images/3front.png",
        back: "images/projects.png"
    }
];

var position = 0; // starting position (first card in the deck)

// moves left in the deck
function goLeft() {
    if (position > 0) {
        var front = document.getElementById("front");
        var back = document.getElementById("back");
        position--;
        front.src = deck[position].front;
        back.src = deck[position].back;
    }
}

// moves right in the deck
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

// Testing the shuffle function to see if it is truly random
/* 
function testShuffle() {
    var one = 0;
    var two = 0;
    var three = 0;

    const iterations = 10000;
    
    for (let i = 0; i < iterations; i++) {
        var front = document.getElementById("front");
        if (deck[0].front == "images/1front.png") {
            one++;
        } else if (deck[0].front == "images/2front.png") {
            two++;
        } else {
            three++;
        }
        shuffle();
    }
    console.log("ONE: " + one);
    console.log("TWO: " + two);
    console.log("THREE: " + three);
    console.log("TOTAL: " + iterations)
} */