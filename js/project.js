//-----------------     Counter
sum = 0;
function clickMe() {
    const count = document.getElementById('count');
    sum += 1;
    count.innerText = sum;
}
const minus = document.getElementById('minus-btn');
minus.addEventListener('click', function () {
    sum -= 1;
    const count = document.getElementById('count');
    count.innerText = sum;
})

//-----------------     Review
document.getElementById('submit-btn').addEventListener('click', function (event) {
    const textArea = document.getElementById('text-area');
    const reviewText = textArea.value;
    const container = document.getElementById('review');
    const p = document.createElement('p');
    p.innerText = reviewText;
    p.style.color = 'green'
    container.appendChild(p);
    textArea.value = '';
});
document.getElementById('text-area').addEventListener('keyup', function(event) {
    if(event.key === 'Enter') {
        const reviewText = event.target.value;
        const container = document.getElementById('review');
        const p = document.createElement('p');
        p.innerText = reviewText;
        p.style.color = 'green'
        container.appendChild(p);
        event.target.value = '';    
    }
})

//----------------------    Random Quote
const quotes = [
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Do something today that your future self will thank you for.",
        author: "Unknown"
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar"
    }
];
document.getElementById('quote').addEventListener('click', function () {
    const quote = document.getElementById('quote-p');
    const author = document.getElementById('name-author');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[randomIndex].quote;
    author.innerText = quotes[randomIndex].author;
})