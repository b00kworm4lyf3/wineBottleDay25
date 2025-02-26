// Create falling hearts in the background for the letter
function createFallingHearts() {
    const letterDiv = document.getElementById('letter');
    const hearts = ['💖', '💕', '💘', '💗', '💓'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        letterDiv.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// function startQuiz() {
//     document.getElementById('welcome').style.display = 'none';
//     document.getElementById('quiz').style.display = 'block';
// }

// function checkAnswers() {
//     // In a real quiz, you'd check the answers here
//     // But since this is for fun, let's just show the letter regardless
//     document.getElementById('quiz').style.display = 'none';
//     document.getElementById('letter').style.display = 'block';
//     createFallingHearts();
// }

// Fortune responses
const fortunes = [
    "The stars reveal that many adventures await you both. Your bond will grow stronger with each passing month.",
    "I see laughter in your future. The joy you bring to each other will light up even the darkest days.",
    "The cosmic forces suggest that your connection is rare and special - a once in a lifetime love that will overcome any obstacle.",
    "Your future together shimmers with possibility. Each day will bring new reasons to cherish what you have built together.",
    "The mystical energies indicate that your relationship will continue to deepen, revealing new layers of love and understanding.",
    "I sense that your journey together will be long and fulfilling. Your hearts are aligned in ways that transcend ordinary connection.",
    "The ethereal signs point to a future filled with growth and mutual support. You will help each other become your best selves.",
    "The crystal ball shows images of celebration and contentment. Your love creates a sanctuary in this chaotic world.",
    "Your paths are intertwined by forces beyond comprehension. This connection was written in the stars long ago.",
    "I foresee many cozy nights, heartfelt conversations, and moments of pure understanding between you both in the years to come."
];

const defaultQuestions = [
    "What does our future hold?",
    "Will we always be happy together?",
    "Are we meant to be?",
    "What makes our love special?",
    "How strong is our connection?"
];

let fortuneCount = 0;
const maxFortunes = 5;

function startFortuneTeller() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('fortune-teller').style.display = 'block';
}

function askFortune() {
    if (fortuneCount >= maxFortunes) {
        return;
    }
    
    // Get the question (or use a default one)
    const questionInput = document.getElementById('fortune-question');
    let question = questionInput.value.trim();
    questionInput.value = '';

    if (!question) {
        question = defaultQuestions[Math.floor(Math.random() * defaultQuestions.length)];
        defaultQuestions.splice(defaultQuestions.indexOf(question), 1); //remove used question
    }
    
    // Animation effect for crystal ball
    const crystalBall = document.querySelector('.crystal-ball');
    crystalBall.style.animation = 'none';
    setTimeout(() => {
        crystalBall.style.animation = 'glow 4s infinite alternate';
    }, 10);
    
    // Display the fortune
    const fortuneText = document.getElementById('fortune-text');
    fortuneText.style.opacity = 0;
    
    setTimeout(() => {
        // Pick a random fortune that hasn't been shown yet
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const fortune = fortunes[randomIndex];
        
        // Remove the used fortune to avoid repetition
        fortunes.splice(randomIndex, 1);
        
        fortuneText.innerHTML = `<div class="stars">✨ ✨ ✨</div><div class="question-text">"${question}"</div><p>${fortune}</p><div class="stars">✨ ✨ ✨</div>`;
        fortuneText.style.opacity = 1;
        
        // Increment fortune count
        fortuneCount++;
        document.getElementById('fortune-counter').textContent = `Fortunes revealed: ${fortuneCount} of ${maxFortunes}`;
        
        // Show continue button if we've reached max fortunes
        if (fortuneCount >= maxFortunes) {
            document.getElementById('continue-button').style.display = 'block';
        }
    }, 1000);
}

function showLetter() {
    document.getElementById('fortune-teller').style.display = 'none';
    document.getElementById('letter').style.display = 'block';
    createFallingHearts();
}