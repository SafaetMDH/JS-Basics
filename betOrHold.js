/*  

write a card counting function. 
It will receive a card parameter, which can be a number or a string, 
and increment or decrement the global count variable according to the
card's value (see table). The function will then return a string with 
the current count and the string Bet if the count is positive, 
or Hold if the count is zero or negative. The current count and 
the player's decision (Bet or Hold) should be separated by a single space.

*/

let count = 0;

function cardCounting(card) {

    if (['2', '3', '4', '5', '6'].includes(card.toString())) {
        count += 1;
    } else if (['10', 'J', 'Q', 'K', 'A'].includes(card.toString())) {
        count -= 1;
    }

    if (count > 0) {
        return `${count} Bet`;
    } else {
        return `${count} Hold`;
    }
}

console.log(cardCounting("2"));
