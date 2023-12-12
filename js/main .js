

var quotes = [
    {
        "quote": "“It is better to be hated for what you are than to be loved for what you are not.”",
        "author": "― Andre Gide, Autumn Leaves"
    },
    {
        "quote": "“If you tell the truth, you don't have to remember anything.”",
        "author": "― Mark Twain"
    },
    {
        "quote": "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "author": "― Maya Angelou"
    },
    {
        "quote": "“To live is the rarest thing in the world. Most people exist, that is all.”",
        "author": "― Oscar Wilde"
    },
    {
        "quote": "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        "author": "― Mahatma Gandhi"
    },
    {
        "quote": "“Without music, life would be a mistake.”",
        "author": "― Friedrich Nietzsche, Twilight of the Idols"
    },
    {
        "quote": "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        "author": "― Ralph Waldo Emerson"
    },
    {
        "quote": "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        "author": "― J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        "quote": "“In three words I can sum up everything I've learned about life: it goes on.”",
        "author": "― Robert Frost"
    },
    {
        "quote": "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        "author": "― Dr. Seuss"
    }
];


var quoteElement = document.getElementById("quote");
var authorElement = document.getElementById("auther");
var arrCheck = [];

function getQuotes() {
    do {
        var numRandom = Math.floor(Math.random() * quotes.length);
    } while (arrCheck.includes(numRandom));

    if (arrCheck.length === quotes.length) {
        arrCheck.length = 0;
    } else {
        arrCheck.push(numRandom);
        console.log(numRandom);
        quoteElement.innerHTML = quotes[numRandom].quote;
        authorElement.innerHTML = quotes[numRandom].author;
    }
}

getQuotes();
