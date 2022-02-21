const quoteContaine = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote
function newQoute() {
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

	if (!quote.author) {
		authorText.textContent = 'Unkonow';
	} else {
		authorText.textContent = quote.author;
	}

	// check Quote length to determine styling
	if (quote.text.length < 50) {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}

	quoteText.textContent = quote.text;
}

// Get Quotes From Api
async function getQuote() {
	const apiUrl = 'https://type.fit/api/quotes';

	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQoute();
	} catch (error) {
		alert(error);
	}
}

// Tweet Quote
function tweetQuote() {
	const urlTwitter = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(urlTwitter, '_blank');
}




newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote)
