const quotes = require('./quotes');

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  console.log(randomQuote);
}

showRandomQuote();
