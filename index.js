/*** Flesh and Blood AI ***/
console.log("Flesh and Blood AI");

/* Card zones */
const hand = [];
const pitchPile = [];
const discardPile = [];
const banishPile = [];
const attackChain = [];
const deck = [
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

/* Play order options */
function PlayOption(totalDamage, cardsPlayed, cardsPitched, cardsLeftOver) {
    this.totalDamage = totalDamage;
    this.cardsPlayed = cardsPlayed;
    this.cardsPitched = cardsPitched;
    this.cardsLeftOver = cardsLeftOver;
}

/* Returns a random card from deck */
function drawCardFromDeck() {
    let randomCard;
    randomCard = Math.floor(Math.random() * (deck.length - 1));
    return deck[randomCard];
}



/* Draw hand */
function drawHand() {
    while(hand.length < 4) {
        hand.push(drawCardFromDeck());
    }
}
drawHand();

/* Show hand */
hand.forEach(card => console.log(card.title));

/* Pitch card from hand to pitch pile. Returns pitch value gained*/
function pitchCard(handArray, pitchCardIndex, pile) {
    pile.push(handArray[pitchCardIndex])
    handArray.splice(pitchCardIndex, 1);
}
function discardCard(cardArray, discardCardIndex, pile) {
    pile.push(cardArray[discardCardIndex])
    cardArray.splice(discardCardIndex, 1);
}
function calculateDamage(cardArray) {
    let totalDamage = 0;
    cardArray.forEach(card => totalDamage += card.attack);
    return totalDamage;
}

function calculatePlayOptions(hand) {
    let ap = 1;
    const playOptions = [];

    /* Loop through playing each card in hand first*/
    hand.forEach((card, index, array) => {
        const workingPitchPile = [];
        const workingDiscardPile = [];
        /*const banishPile = []; */
        /*const attackChain = [];*/
        let workingHand = array;
        let workingCard = card;
        let workingCardIndex = index;
        let pitchNeeded = card.cost;
        /*Loop through paying for card options */
        workingHand.forEach((card, index, array) => {
            if(card.pitch >= pitchNeeded) {
                pitchCard(array, index, workingPitchPile);
                discardCard(array, workingCardIndex, workingDiscardPile);
                const totalDamage = calculateDamage(workingDiscardPile);
                console.log(totalDamage);
                const workingPlayOption = new PlayOption(totalDamage, workingDiscardPile, workingPitchPile, workingHand);
                console.log(workingPlayOption.totalDamage);
                playOptions.push(workingPlayOption);
                console.log("Adding option");
            }
        })
        
    })
    playOptions.forEach(option => console.log(option.totalDamage));
}
calculatePlayOptions(hand);

