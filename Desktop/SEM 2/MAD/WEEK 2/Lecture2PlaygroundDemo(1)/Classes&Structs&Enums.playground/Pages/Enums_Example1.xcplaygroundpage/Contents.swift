/*:
 [< Previous](@previous)                    [Home](Introduction)                    [Next >](@next)
 ## Introductio to Structs
 */
//generate a deck of cards and then a poker hand

import Foundation
struct Card {
    
    let rank: Rank
    let suit: Suit
    
    enum Rank {
        case two, three, four, five, six, seven, eigth, nine, ten, jack, queen, king, ace
    }
    
    enum Suit {
        case heart, diamond, club, spades
    }
}

struct PokerHand {
    let cards: [Card]
}
var myCard = Card(rank: .five, suit: .heart)

print("my card is : \(myCard.rank) of \(myCard.suit)")

var myHand = PokerHand(cards: [Card(rank: .six, suit: .heart), Card(rank: .seven, suit: .club)])
print("my poker hand is : \(myHand.cards[0].rank) of \(myHand.cards[0].suit) and \(myHand.cards[1].rank) of \(myHand.cards[1].suit)")

