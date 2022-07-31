// array data structure which represents a deck of cards
const deck = [
    {
        front: "images/acehearts.png",
        back: "images/back.png"
    },
    {
        front: "images/2clubs.png",
        back: "images/back.png"
    },
    {
        front: "images/3diamonds.png",
        back: "images/back.png"
    },
    {
        front: "images/4spades.png",
        back: "images/back.png"
    }
];

var position = 0; // starting position (first card in the deck)

// moves left in the deck
function goLeft() {
    if (position > 0) {
        position--;
        if (position == 0) {
            document.getElementById("left-button").style.display="none";
        }
        document.getElementById("right-button").style.display="inline-block";
        var front = document.getElementById("front");
        var back = document.getElementById("back");
        
        front.src = deck[position].front;
        back.src = deck[position].back;
    }
}

// moves right in the deck
function goRight() {
    if (position < deck.length -  1) {
        position++;
        if (position == deck.length -  1) {
            document.getElementById("right-button").style.display="none";
        }
        document.getElementById("left-button").style.display="inline-block";
        var front = document.getElementById("front");
        var back = document.getElementById("back");
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
    document.getElementById("left-button").style.display="none";
    document.getElementById("right-button").style.display="inline-block";
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