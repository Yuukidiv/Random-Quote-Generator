window.onload = init;
function init() {
    generateQuote();
}
function generateQuote() {
    let linkTwitter = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=";
    let quoteSize = QUOTES.length;
    let randomIndex = Math.floor(Math.random() * quoteSize); 
    let quoteGenerator = QUOTES[randomIndex];
    let colorsLength = COLORS.length;
    let randomColor = Math.floor(Math.random() * colorsLength);
    let colorGenerator = COLORS[randomColor];
    document.getElementById("tweet-quote").href = linkTwitter;
    document.getElementById("text").innerText = quoteGenerator.quote;
    document.getElementById("author").innerText = "- " + quoteGenerator.author;  
    document.body.style.backgroundColor = colorGenerator;
    document.getElementById("new-quote").style.backgroundColor = colorGenerator;
    document.getElementById("tweet-quote").style.backgroundColor = colorGenerator;

let twitterQuote = quoteGenerator.quote.replace(/ /g, "%20");
linkTwitter += twitterQuote;
let twitterAuthor = quoteGenerator.author.replace(/ /g, "%20");
linkTwitter += " - " + twitterAuthor;


}


const COLORS = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
