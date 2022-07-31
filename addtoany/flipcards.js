const deck = [ // EXAMPLE DECK, MAKE SURE TO INSERT YOUR OWN CARDS
    {
        front: "images/front.png", // Example front image of a card
        back: "images/back.png" // Example back image of a card
    },
    {
        front: "images/front2.png",
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