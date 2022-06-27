const btn = document.querySelector(".btn");
const quoteDisplay = document.querySelector(".quote-display");

const quotes = [
  "Without music, life would be a mistake.",
  "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
  "That which does not kill us makes us stronger.",
  "And those who were seen dancing were thought to be insane by those who could not hear the music.",
  "It is hard enough to remember my opinions, without also remembering my reasons for them!",
  "You must have chaos within you to give birth to a dancing star.",
  "In heaven, all the interesting people are missing.",
  "The thought of suicide is a great consolation: by means of it one gets through many a dark night.",
  "Thoughts are the shadows of our feelings -- always darker, emptier and simpler.",
  "Man is the cruelest animal.",
  "Stinky balls are the true measure of a man.",
  "My name is Freddy Nachos and welcome to Jackass!",
  "The Birth of Tragedy was lowkey the worst shit I ever wrote.",
  "My sister was the nazi, not me!!",
  "I love to eat Big Mac hamburger",
  "Tartinade au fromage à la crème.",
  "Stinky binky got no winky touch my dick and make it stinky (yuh yuh yuh yuh)",
  "This shit bussin' bussin' no cap not even trolling",
  "I love peanut 💜",
  "I got my head out the sunroof, I'm blasting my favourite tunes",
  "Chinese Elon Musk is superior to that Tesla one",
];

const newQuote = function () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  quoteDisplay.innerHTML = quotes[randomNumber];
};

btn.addEventListener("click", newQuote);
