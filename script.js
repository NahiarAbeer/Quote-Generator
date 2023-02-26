const quotes = {
    "Nelson Mandela": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Walt Disney": "The way to get started is to quit talking and begin doing.",
    "Steve Jobs": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    "Mark Twain": "The secret of getting ahead is getting started.",
    "Maya Angelou": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Oscar Wilde": "Be yourself; everyone else is already taken.",
    "Albert Einstein": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Elon Musk": "When something is important enough, you do it even if the odds are not in your favor.",
    "Abraham Lincoln": "In the end, it's not the years in your life that count. It's the life in your years.",
    "Martin Luther King Jr.": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    "Mother Teresa": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "Mahatma Gandhi": "Be the change that you wish to see in the world.",
    "Theodore Roosevelt": "Believe you can and you're halfway there.",
    "Helen Keller": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "Thomas Edison": "I have not failed. I've just found 10,000 ways that won't work.",
    "William Shakespeare": "To be, or not to be, that is the question.",
    "Stephen Hawking": "Remember to look up at the stars and not down at your feet. Try to make sense of what you see and wonder about what makes the universe exist. Be curious.",
    "Henry Ford": "Whether you think you can or you think you can't, you're right.",
    "Ralph Waldo Emerson": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Coco Chanel": "Success is most often achieved by those who don't know that failure is inevitable.",
    "Leonardo da Vinci": "Art is never finished, only abandoned.",
    "Friedrich Nietzsche": "He who has a why to live can bear almost any how.",
    "Sigmund Freud": "The mind is like an iceberg, it floats with one-seventh of its bulk above water.",
    "Virginia Woolf": "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
    "John Lennon": "Life is what happens when you're busy making other plans.",
    "Bob Marley": "The truth is, everyone is going to hurt you. You just got to get the ones worth suffering for.",
    "Audrey Hepburn": "Nothing is impossible, the word itself says 'I'm possible'!",
    "J.K. Rowling": "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    "Steve Jobs": "The only way to do great work is to love what you do.",
    "Will Rogers": "Don't let yesterday take up too much of today.",
    "Winston Churchill": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Mahatma Gandhi": "Be the change you wish to see in the world.",
    "Jimmy Dean": "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "Maya Angelou": "Success is liking yourself, liking what you do, and liking how you do it.",
    "Christian D. Larson": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Wayne Gretzky": "You miss 100% of the shots you don't take.",
    "Ralph Waldo Emerson": "The only person you are destined to become is the person you decide to be.",
    "Eleanor Roosevelt": "The future belongs to those who believe in the beauty of their dreams.",
    "Confucius": "It does not matter how slowly you go as long as you do not stop.",
    "Franklin D. Roosevelt": "The only limit to our realization of tomorrow will be our doubts of today.",
    "Nelson Mandela": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Stephen Covey": "I am not a product of my circumstances. I am a product of my decisions.",
    "Sam Levenson": "Don't watch the clock; do what it does. Keep going.",
    "Alan Kay": "The best way to predict the future is to invent it.",
    "Thomas Edison": "I have not failed. I've just found 10,000 ways that won't work.",
    "Theodore Roosevelt": "Do what you can, with what you have, where you are.",
    "John Holt": "The true test of character is not how much we know how to do, but how we behave when we don't know what to do.",
    "Mahatma Gandhi": "The best way to find yourself is to lose yourself in the service of others."
};

const colors = [
    'rgb(135, 206, 250)',      // Sky Blue
    'rgb(176, 196, 222)',      // Light Steel Blue
    'rgb(218, 112, 214)',      // Orchid
    'rgb(255, 192, 203)',      // Pink
    'rgb(255, 105, 180)',      // Hot Pink
    'rgb(255, 69, 0)',         // Orange Red
    'rgb(255, 215, 0)',        // Gold
    'rgb(154, 205, 50)',       // Yellow Green
    'rgb(127, 255, 0)',        // Chartreuse
    'rgb(0, 255, 0)',          // Lime
    'rgb(30, 144, 255)',       // Dodger Blue
    'rgb(70, 130, 180)',       // Steel Blue
    'rgb(240, 228, 128)',
    'rgb(255, 99, 71)',        // Tomato
    'rgb(255, 165, 0)',        // Orange
    'rgb(255, 215, 0)',        // Gold
    'rgb(255, 255, 0)',        // Yellow
    'rgb(173, 255, 47)',       // Green Yellow
    'rgb(50, 205, 50)',        // Lime Green
    'rgb(0, 255, 127)',        // Spring Green
    'rgb(0, 128, 128)',        // Teal
    'rgb(0, 0, 255)',          // Blue
    'rgb(138, 43, 226)',       // Blue Violet
    'rgb(255, 0, 0)',          // Red
    'rgb(255, 20, 147)',       // Deep Pink
    'rgb(218, 165, 32)',       // Goldenrod
    'rgb(255, 215, 0)',        // Gold
    'rgb(255, 69, 0)',         // Orange Red
    'rgb(255, 105, 180)',      // Hot Pink
    'rgb(255, 192, 203)',      // Pink
    '#3C1414'
    
]
const quotesArray = Object.values(quotes);
const namesofPerson = Object.keys(quotes);
console.log(colors.length)
let show = () => {
    let num = parseInt(Math.random() * quotesArray.length);
    document.getElementById('Txt').innerHTML = quotesArray[num];
    document.getElementById('name').innerHTML = "-" + namesofPerson[num];
    let colornum = parseInt(Math.random() * colors.length);
    document.body.style.background = colors[colornum]
    if (num == colornum) {
        document.body.style.color = colors[num + 1]
        
    } else if(num>colornum){
        document.body.style.color = colors[colornum - 3]

    } else {
        document.body.style.color = colors[num]

    }
    console.log("hi")
}

show()
