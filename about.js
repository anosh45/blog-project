// Fun Fact Generator
const funFacts = [
    "Did you know that honey never spoils?",
    "A group of flamingos is called a 'flamboyance'.",
    "The first email was sent in 1971.",
    "Sharks existed before trees.",
    "Bananas are berries, but strawberries aren't!",
    "There are more stars in the universe than grains of sand on Earth."
];

document.getElementById("fun-fact-btn").addEventListener("click", function() {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById("fun-fact-output").textContent = randomFact;
});
