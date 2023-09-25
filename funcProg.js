//Currency Convertor

let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

function convertCurrency(amount, rate){

    return amount * rate;

}

currencyTwo = convertCurrency(currencyOne,exchangeRate)

console.log(currencyTwo);

//First Class Function

//Function 1 'addTwoNums'
function addTwoNums(a, b) {
    console.log(a + b)
}

// Function 2 'randomNum'
function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}

//Function 3 'specificNum'
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

//Function 4 
if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())