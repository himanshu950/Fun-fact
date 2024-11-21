const facts = [
    "I have been playing cricket since I was a child and dream of playing in a professional league one day.",
    "I love exploring new places, especially those with snowy landscapes.",
    "I am always on the lookout for the latest video games and enjoy discovering new gaming experiences.",
    "I have a knack for learning new sports and often try to incorporate them into my routine.",
    "I enjoy the thrill of adventure and often plan trips to explore new terrains and cultures."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
