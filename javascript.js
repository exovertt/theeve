

var quotes = [
'https://twitter.com/intent/tweet?text=i%20love%20chanyeol%20so%0A%23CHANYEOL%0A%0A@weareoneEXO',
'IDC - YEOL',
]

function newQuote()
{
var randomNumber = Math.floor(Math.random()*(quotes.length));
window.open(quotes[randomNumber] , '_blank');
}