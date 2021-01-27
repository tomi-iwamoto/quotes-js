//I need to have an array of quotes
/*When I click the button, the quote will display a sentence. 
How will that happen? 
To have something random, I'll have to use Math.random(). 
Then I can use the random number to access any element index in the array*/

let quotes = ['You got this!', 'One day at a time!', 'Never give up!'];
let randomNum = Math.floor(Math.random() * quotes.length);
let randomQuote = quotes[randomNum];


let box = document.getElementById('box');
let quoteText = document.getElementById('quoteText');
let button = document.getElementById('button');

function generateQuote(){
    return quoteText.innerHTML = randomQuote;
}

generateQuote();




