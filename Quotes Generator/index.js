const quotes = [
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" }
];

const quoteDisplay = document.getElementById("quoteDisplay");
const authorDisplay = document.getElementById("authorDisplay");
const newQuoteButton = document.getElementById("newQuote");

function displayRandomQuote(){
    const randomIndex=Math.floor(Math.random()*quotes.length);
    const randomQuote =quotes[randomIndex].quote;
    const randomAuthor =quotes[randomIndex].author;
    quoteDisplay.textContent=`"${randomQuote}"`;
    authorDisplay.textContent=`"${randomAuthor}"`;
}
displayRandomQuote();
newQuoteButton.addEventListener("click" ,displayRandomQuote);