const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

const quoteContainer = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote-btn');

newQuoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.textContent = quotes[randomIndex];
});

// Display an initial random quote
newQuoteBtn.click();
