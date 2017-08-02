class Deck {
    constructor() {
        this.deck = [];
        this.addSuit('s').addSuit('h').addSuit('d').addSuit('c');
    }

    addSuit(suit) {
        for (var i=1; i<14; i++) {
            if (i == 1) {
                this.deck.push(Card(suit, 'A'));
            }
            else if (i == 11){
                this.deck.push(Card(suit, "J"));
            }
            else if (i == 12){
                this.deck.push(Card(suit, "Q"));
            }
            else if (i == 13){
                this.deck.push(Card(suit, "K"));
            }
            else {
                this.deck.push(Card(suit, i));
            }
        }
    }

    reset() {
        this.deck = [];
        this.addSuit('s'),addSuit('h').addSuit('d').addSuit('c');
        return this;
    }

    shuffle(){
        let m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }

    deal() {
        return this.deck.pop()
    }
}

class Card {
    constructor(suit, val) {
        this.suit = suit;
        this.val = val;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    take(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard(deck) {
        this.hand.pop;
        return this;
    }
}