"use strict";

// Grabbing some elements
const btn = document.querySelector(".btn");
const quoteDisplay = document.querySelector(".quote-display");

// Quotes array
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
  "My name is Freddy Nachos and welcome to Jackass!",
  "The Birth of Tragedy was lowkey the worst shit I ever wrote.",
  "My sister was the nazi, not me!!",
  "I love to eat Big Mac hamburger",
  "Tartinade au fromage à la crème.",
  "I got my head out the sunroof, I'm blasting my favourite tunes.",
  "When you gaze into the abyss, the abyss also gazes into you.",
  "There are no facts, only interpretations.",
  "When we are tired, we are attacked by ideas we conquered long ago.",
  "Art is the proper task of life.",
  "You like my hair? Gee, thanks, just bought it.",
  "Yeah, I'm gonna take my horse to the old town road.",
  "Bring a bucket and a mop.",
];

// Main function and Event Handler
const newQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  quoteDisplay.innerHTML = quotes[randomNumber];
};

btn.addEventListener("click", newQuote);
