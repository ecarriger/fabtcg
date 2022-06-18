/*** Flesh and Blood AI ***/
console.log("Flesh and Blood AI");

let deck = [
    {
        title: "Arrow 1 - Red",
        pitch: 1,
        cost: 1,
        defence: 3,
        attack: 5,
        type: ["Attack", "Action", "Arrow"],
        classes: ["Ranger"],
        goAgain: false
    },
    {
        title: "Arrow 1 - Yellow",
        pitch: 2,
        cost: 1,
        defence: 3,
        attack: 4,
        type: ["Attack", "Action", "Arrow"],
        classes: ["Ranger"],
        goAgain: false
    },
    {
        title: "Arrow 1 - Blue",
        pitch: 3,
        cost: 1,
        defence: 3,
        attack: 3,
        type: ["Attack", "Action", "Arrow"],
        classes: ["Ranger"],
        goAgain: false
    },
    {
        title: "Arrow 2 - Red",
        pitch: 1,
        cost: 0,
        defence: 3,
        attack: 4,
        type: ["Attack", "Action", "Arrow"],
        classes: ["Ranger"],
        goAgain: false
    },
    {
        title: "Arrow 2 - Yellow",
        pitch: 2,
        cost: 0,
        defence: 3,
        attack: 3,
        type: ["Attack", "Action", "Arrow"],
        classes: ["Ranger"],
        goAgain: false
    },
    {
        title: "Arrow 2 - Blue",
        pitch: 3,
        cost: 0,
        defence: 3,
        attack: 2,
        type: ["Attack", "Action", "Arrow"],
        classes: ["Ranger"],
        goAgain: false
    },
    {
        title: "Arrow 3 - Red",
        pitch: 1,
        cost: 0,
        defence: 2,
        attack: 4,
        type: ["Attack", "Action", "Arrow"],
        classes: ["Ranger"],
        goAgain: true
    },
    {
        title: "Arrow 3 - Yellow",
        pitch: 1,
        cost: 0,
        defence: 2,
        attack: 3,
        type: ["Attack", "Action", "Arrow"],
        classes: ["Ranger"],
        goAgain: true
    },
    {
        title: "Arrow 3 - Blue",
        pitch: 1,
        cost: 0,
        defence: 2,
        attack: 2,
        type: ["Attack", "Action", "Arrow"],
        classes: ["Ranger"],
        goAgain: true
    }
];

/* Returns a random card from deck */
function drawCardFromDeck() {
    let randomCard;
    randomCard = Math.floor(Math.random() * (deck.length - 1));
    return deck[randomCard];
}

/* hand array holds the cards in hand */
let hand = [];
let pitchPile = [];
let discardPile = [];
let banishPile = [];
let attachChain = [];

/* Draw hand */
function drawHand() {
    while(hand.length < 4) {
        hand.push(drawCardFromDeck());
    }
}
drawHand();

/* Show hand */
hand.forEach(card => console.log(card.title));

function payForCard(cardCost, cardInHand) {

}

function calculateMaxDmg() {
    /* Loop through playing each card in hand first*/
    hand.forEach(card, index, array => {
        /* Remove played card from hand */
        array.splice(index, 1);
        let pitchNeeded = card.cardCost;
        /*Loop through paying for card options */
        hand.forEach(card, index, array => {
            array.splice(index, 1);
            pitchNeeded -= card.pitch;
        })

    })
}