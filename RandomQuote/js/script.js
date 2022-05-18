/******************************************
 * CSIS3380
 * Author: Hyekyung Ko
 * Student ID: 300323007
*****************************************/

//console.log(quoteObject);
/*** 
 * `quotes` array - size is 7
 * let quotes = {
 *      quote: "this is quote string ",
 *      source: "this is person ",
 *      year: "2022"
 * }
***/
let quotes = [
                {
                    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                    source: "Nelson Mandela",
                    year: "1995"
                },
                {
                    quote: "The way to get started is to quit talking and begin doing.",
                    source: "Walt Disney",
                    year: "1965"
                },
                {
                    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
                    source: "Steve Jobs",
                    year: "2005"
                },
                {
                    quote: "If life were predictable it would cease to be life, and be without flavor.",
                    source: "Eleanor Roosevelt",
                    year: "1963"
                },
                {
                    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
                    source: "Oprah Winfrey",
                    year: "2018"
                },
                {
                    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
                    source: "James Cameron",
                    year: "2009"
                },
                {
                    quote: "Life is what happens when you\'re busy making other plans.",
                    source: "John Lennon",
                    year: "1981"
                }

];

//console.log(quotes.quote);

/***
 *  Return random Quote object
***/
function getRandomQuote(){
    // 1. Create a variable that generates a random number
    // between zero and the last index in the `quotes` array
    // 2. Use the random number variable and bracket notation
    // to grab a random object from the `quotes` array, and
    // store it in a variable
    // 3. Return the variable storing the random quote object  

    // num will get random number from 0 to 6
    let num = Math.floor(Math.random() * 6);

    return quotes[num];
}


/***
 * Print new quote objec to the Html
***/
function printQuote(){

    let randomQuote = getRandomQuote();

    console.log(randomQuote.quote);

    //
    let htmlString = "<p class='quote'>" + randomQuote.quote + "</p>" +
                    "<p class='source'>" + randomQuote.source;
                     //+ "<span class="citation">Twitter</span><span class="year">2016</span></p>"
    
    //Code to run if your condition evaluates to true
    if(randomQuote.hasOwnProperty('citation')){
        htmlString += "<span class='citation'>" + randomQuote.citation + "</span>";
    }
    if(randomQuote.hasOwnProperty('year')){
        htmlString += "<span class='year'>" + randomQuote.year + "</span>";
    }

    htmlString += "</p>";

    document.getElementById('quote-box').innerHTML = htmlString;
}


/***
 * click event listener for the print quote button
***/
document.getElementById('load-quote').addEventListener("click", printQuote);