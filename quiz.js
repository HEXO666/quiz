// ===== QUIZ DATA =====
const quizData = [
    {
        question: "À quel moment de la journée le narrateur réfléchit-il à sa solitude ?",
        options: ["Le matin, au réveil", "Le soir, quand tous dorment", "L'après-midi, à l'école", "À midi, pendant le déjeuner"],
        correct: 1,
        explanation: "« Le soir, quand tous dorment, les riches dans leurs chaudes couvertures, les pauvres sur les marches des boutiques… moi, je ne dors pas. »"
    },
    {
        question: "Quel âge a le petit garçon que le narrateur se remémore au début du chapitre ?",
        options: ["Quatre ans", "Cinq ans", "Six ans", "Sept ans"],
        correct: 2,
        explanation: "« Je vois, au fond d'une impasse que le soleil ne visite jamais, un petit garçon de six ans. »"
    },
    {
        question: "Que cherche à attraper le petit garçon avec son piège en fil de cuivre ?",
        options: ["Un chat", "Un papillon", "Un moineau", "Une souris"],
        correct: 2,
        explanation: "« …dresser un piège pour attraper un moineau mais le moineau ne vient jamais. »"
    },
    {
        question: "Que veut faire le garçon du moineau s'il l'attrape ?",
        options: ["Le manger", "Le vendre", "En faire son compagnon", "Le donner à sa mère"],
        correct: 2,
        explanation: "« Il ne le mangera pas, il ne le martyrisera pas. Il veut en faire son compagnon. »"
    },
    {
        question: "Comment s'appelle la maison où habite la famille du narrateur ?",
        options: ["Dar Salam", "Dar Chouafa", "Dar El Baroud", "Dar Noualla"],
        correct: 1,
        explanation: "« Nous habitions Dar Chouafa, la maison de la voyante. »"
    },
    {
        question: "Qui occupe le rez-de-chaussée de Dar Chouafa ?",
        options: ["La famille du narrateur", "Driss El Aouad", "La Chouafa (la voyante)", "Fatma Bziouya"],
        correct: 2,
        explanation: "« Les deux pièces du rez-de-chaussée étaient occupées par la Chouafa, principale locataire. »"
    },
    {
        question: "De quelle confrérie la Chouafa est-elle adepte ?",
        options: ["Les Aïssaouas", "Les Hamadchas", "Les Gnaouas (gens de Guinée)", "Les Tijania"],
        correct: 2,
        explanation: "« Adepte de la confrérie des Gnaouas (gens de Guinée), elle s'offrait, une fois par mois, une séance de musique et de danse nègres. »"
    },
    {
        question: "Comment s'appelle la fille de Driss El Aouad et Rahma ?",
        options: ["Fatima", "Khadija", "Zineb", "Aïcha"],
        correct: 2,
        explanation: "« Elle s'appelait Zineb et je ne l'aimais pas. »"
    },
    {
        question: "Avec qui la famille du narrateur partage-t-elle le deuxième étage ?",
        options: ["La Chouafa", "Driss El Aouad", "Fatma Bziouya", "Abdallah l'épicier"],
        correct: 2,
        explanation: "« Nous partagions avec Fatma Bziouya le deuxième étage. »"
    },
    {
        question: "Comment s'appelle l'école coranique que fréquente le narrateur ?",
        options: ["La Medersa", "Le Msid", "La Zaouïa", "Le Koutab"],
        correct: 1,
        explanation: "« Je me levais de bonne heure pour aller au Msid, école coranique située à deux pas de la maison. »"
    },
    {
        question: "Quels êtres surnaturels le narrateur sent-il autour de lui après les nuits de cérémonie ?",
        options: ["Les anges", "Les djinns", "Les jnouns", "Les fantômes"],
        correct: 2,
        explanation: "« Autour de moi, rôdaient les jnouns, les démons noirs évoqués par la sorcière. »"
    },
    {
        question: "Comment le narrateur décrit-il sa mémoire d'enfance ?",
        options: ["Une mémoire d'éléphant", "Une cire fraîche", "Un livre ouvert", "Une ardoise magique"],
        correct: 1,
        explanation: "« Ma mémoire était une cire fraîche et les moindres événements s'y gravaient en images ineffaçables. »"
    },
    {
        question: "Quel trait de caractère distingue le narrateur de ses camarades d'école ?",
        options: ["Il aimait se battre", "Il avait un penchant pour le rêve", "Il était très bavard", "Il était le plus fort"],
        correct: 1,
        explanation: "« Nous habitions des univers différents. J'avais un penchant pour le rêve. »"
    },
    {
        question: "Qui est Abdallah dans le récit ?",
        options: ["Le père du narrateur", "Le maître d'école", "L'épicier qui raconte des histoires", "Un voisin du rez-de-chaussée"],
        correct: 2,
        explanation: "« Abdallah, l'épicier, me raconta les exploits d'un roi magnifique qui vivait dans un pays de lumière, de fleurs et de parfums. »"
    },
    {
        question: "De quoi le père du narrateur lui parle-t-il ?",
        options: ["Des voyages", "Du Paradis", "Des études", "Du commerce"],
        correct: 1,
        explanation: "« Mon père me parlait du Paradis. Mais, pour y renaître, il fallait d'abord mourir. »"
    },
    {
        question: "Quel est le nom du fleuve mentionné en rapport avec le Paradis ?",
        options: ["Le Nil", "Le Salsabil", "Le Fès", "L'Euphrate"],
        correct: 1,
        explanation: "« Attendre de mourir pour renaître au bord du fleuve Salsabil. »"
    },
    {
        question: "Dans quelle rue habite le fqih (maître de l'école coranique) ?",
        options: ["Rue Dar Chouafa", "Rue Jiaf", "Rue Noualla", "Rue Seffarine"],
        correct: 1,
        explanation: "« Le fqih, un grand maigre à barbe noire, dont les yeux lançaient constamment des flammes de colère, habitait la rue Jiaf. »"
    },
    {
        question: "L'école coranique se trouve à la porte de quel derb ?",
        options: ["Derb Jiaf", "Derb Chouafa", "Derb Noualla", "Derb El Msid"],
        correct: 2,
        explanation: "« L'école était à la porte de Derb Noualla. »"
    },
    {
        question: "Comment le narrateur réagit-il la première fois qu'il entend les bruits du bain maure ?",
        options: [
            "Il rit aux éclats",
            "Il éclate en sanglots car il croit reconnaître les voix de l'Enfer",
            "Il reste indifférent",
            "Il veut y entrer immédiatement"
        ],
        correct: 1,
        explanation: "« La première fois que j'avais entendu ce bruit, j'avais éclaté en sanglots parce que j'avais reconnu les voix de l'Enfer telles que mon père les évoqua un soir. »"
    },
    {
        question: "Que promet la mère du narrateur pour le calmer au bain maure ?",
        options: [
            "Des jouets et des bonbons",
            "Une orange et un œuf dur",
            "Un nouveau vêtement",
            "De le ramener à la maison"
        ],
        correct: 1,
        explanation: "« Je t'emmène prendre un bain, je te promets une orange et un œuf dur et tu trouves le moyen de braire comme un âne ! »"
    }
];

// ===== STATE =====
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let answered = false;

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#6C5CE7', '#A29BFE', '#FD79A8', '#00B894', '#FDCB6E'];
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 8 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
        particle.style.animationDelay = (Math.random() * 15) + 's';
        container.appendChild(particle);
    }
}

// ===== NAVIGATION =====
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    answered = false;
    showScreen('quiz');
    loadQuestion();
}

function restartQuiz() {
    showScreen('landing');
}

// ===== QUIZ LOGIC =====
function loadQuestion() {
    answered = false;
    const q = quizData[currentQuestion];
    const total = quizData.length;

    document.getElementById('question-counter').textContent = `Question ${currentQuestion + 1} / ${total}`;
    document.getElementById('score-display').textContent = `Score : ${score}`;
    document.getElementById('progress-fill').style.width = ((currentQuestion) / total * 100) + '%';
    document.getElementById('question-number').textContent = String(currentQuestion + 1).padStart(2, '0');
    document.getElementById('question-text').textContent = q.question;

    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-letter">${letters[i]}</span>
            <span class="option-text">${opt}</span>
        `;
        btn.addEventListener('click', () => selectOption(i, btn));
        grid.appendChild(btn);
    });

    const nextBtn = document.getElementById('btn-next');
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestion === total - 1 ? 'Voir les résultats →' : 'Question suivante →';
}

function selectOption(index, selectedBtn) {
    if (answered) return;
    answered = true;

    const q = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    const isCorrect = index === q.correct;

    userAnswers.push({
        questionIndex: currentQuestion,
        selected: index,
        correct: q.correct,
        isCorrect: isCorrect
    });

    if (isCorrect) score++;

    // Mark all buttons
    buttons.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === q.correct) {
            btn.classList.add('correct');
            btn.innerHTML += '<span class="option-feedback">✅</span>';
        } else if (i === index && !isCorrect) {
            btn.classList.add('wrong');
            btn.innerHTML += '<span class="option-feedback">❌</span>';
        }
    });

    document.getElementById('btn-next').disabled = false;
    document.getElementById('score-display').textContent = `Score : ${score}`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
        showResults();
    } else {
        // Animate transition
        const card = document.getElementById('question-card');
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            loadQuestion();
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, 250);
    }
}

// ===== RESULTS =====
function showResults() {
    showScreen('results');
    const total = quizData.length;
    const percent = Math.round((score / total) * 100);

    // Icon and title
    let icon, title, message;
    if (percent >= 90) {
        icon = '🏆'; title = 'Excellent !';
        message = 'Vous maîtrisez parfaitement le premier chapitre de La Boîte à Merveilles. Bravo !';
    } else if (percent >= 70) {
        icon = '🌟'; title = 'Très bien !';
        message = 'Vous avez une bonne compréhension du chapitre. Quelques détails à revoir.';
    } else if (percent >= 50) {
        icon = '📚'; title = 'Pas mal !';
        message = 'Vous connaissez les grandes lignes, mais relisez le chapitre pour approfondir.';
    } else {
        icon = '💪'; title = 'Courage !';
        message = 'Relisez attentivement le premier chapitre et réessayez. Vous pouvez y arriver !';
    }

    document.getElementById('results-icon').textContent = icon;
    document.getElementById('results-title').textContent = title;
    document.getElementById('results-message').textContent = message;
    document.getElementById('stat-correct').textContent = score;
    document.getElementById('stat-wrong').textContent = total - score;

    // Score circle
    const scoreText = document.getElementById('score-text');
    scoreText.innerHTML = `<span class="score-number">${percent}%</span><span class="score-label">${score} / ${total}</span>`;

    // Animate circle
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (percent / 100) * circumference;
    const progressEl = document.getElementById('score-progress');

    // Add gradient def to SVG
    const svg = progressEl.closest('svg');
    if (!svg.querySelector('defs')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        grad.id = 'scoreGradient';
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#6C5CE7');
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#A29BFE');
        grad.appendChild(stop1);
        grad.appendChild(stop2);
        defs.appendChild(grad);
        svg.prepend(defs);
    }

    progressEl.style.stroke = 'url(#scoreGradient)';
    setTimeout(() => {
        progressEl.style.strokeDashoffset = offset;
    }, 100);

    // Update progress bar to full
    document.getElementById('progress-fill').style.width = '100%';
}

// ===== REVIEW =====
function showReview() {
    showScreen('review');
    const list = document.getElementById('review-list');
    list.innerHTML = '';

    userAnswers.forEach((ans) => {
        const q = quizData[ans.questionIndex];
        const item = document.createElement('div');
        item.className = `review-item ${ans.isCorrect ? 'review-correct' : 'review-wrong'}`;

        let answerHTML = '';
        if (ans.isCorrect) {
            answerHTML = `<span class="correct-text">✅ ${q.options[ans.selected]}</span>`;
        } else {
            answerHTML = `
                <span class="wrong-text">❌ ${q.options[ans.selected]}</span><br>
                <span class="correct-text">✅ Bonne réponse : ${q.options[ans.correct]}</span>
            `;
        }

        item.innerHTML = `
            <div class="review-question">${ans.questionIndex + 1}. ${q.question}</div>
            <div class="review-answer">${answerHTML}</div>
        `;
        list.appendChild(item);
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    // Add transition to question card
    const card = document.getElementById('question-card');
    card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
});
