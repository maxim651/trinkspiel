// ================================
// QUIZMASTER
// ================================

// Fragen
const questions = [

    // 🟢 LEICHT

    {
        category: "Allgemeinwissen · Leicht",
        question: "Wie viele Tage hat eine Woche?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },

    {
        category: "Geografie · Leicht",
        question: "Was ist die Hauptstadt von Frankreich?",
        answers: ["Madrid", "Paris", "Rom", "Lissabon"],
        correct: 1
    },

    {
        category: "Mathematik · Leicht",
        question: "Was ist 10 + 5?",
        answers: ["12", "15", "20", "25"],
        correct: 1
    },

    {
        category: "Natur · Leicht",
        question: "Welches Tier sagt typischerweise 'Miau'?",
        answers: ["Hund", "Katze", "Pferd", "Kuh"],
        correct: 1
    },

    {
        category: "Sport · Leicht",
        question: "Welche Sportart wird mit einem Ball und einem Korb gespielt?",
        answers: ["Tennis", "Basketball", "Golf", "Schwimmen"],
        correct: 1
    },

    {
        category: "Technik · Leicht",
        question: "Welche Farbe entsteht aus Blau und Gelb?",
        answers: ["Rot", "Grün", "Orange", "Lila"],
        correct: 1
    },

    {
        category: "Film · Leicht",
        question: "Wie heißt der berühmte Löwe aus 'Der König der Löwen'?",
        answers: ["Simba", "Shrek", "Nemo", "Woody"],
        correct: 0
    },

    {
        category: "Allgemeinwissen · Leicht",
        question: "Wie viele Monate hat ein Jahr?",
        answers: ["10", "11", "12", "13"],
        correct: 2
    },


    // 🟡 MITTEL

    {
        category: "Geografie · Mittel",
        question: "Welches Land hat die Form eines Stiefels?",
        answers: ["Spanien", "Italien", "Griechenland", "Portugal"],
        correct: 1
    },

    {
        category: "Geschichte · Mittel",
        question: "In welchem Jahr fiel die Berliner Mauer?",
        answers: ["1985", "1987", "1989", "1991"],
        correct: 2
    },

    {
        category: "Wissenschaft · Mittel",
        question: "Welcher Planet ist als 'Roter Planet' bekannt?",
        answers: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },

    {
        category: "Technik · Mittel",
        question: "Wofür steht HTML?",
        answers: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        category: "Sport · Mittel",
        question: "Wie viele Spieler stehen bei einer Fußballmannschaft normalerweise gleichzeitig auf dem Platz?",
        answers: ["9", "10", "11", "12"],
        correct: 2
    },

    {
        category: "Natur · Mittel",
        question: "Wie viele Beine hat eine Spinne?",
        answers: ["6", "8", "10", "12"],
        correct: 1
    },

    {
        category: "Mathematik · Mittel",
        question: "Was ist 12 × 8?",
        answers: ["86", "92", "96", "108"],
        correct: 2
    },

    {
        category: "Geografie · Mittel",
        question: "Welcher ist der größte Ozean der Erde?",
        answers: [
            "Atlantischer Ozean",
            "Indischer Ozean",
            "Arktischer Ozean",
            "Pazifischer Ozean"
        ],
        correct: 3
    },

    {
        category: "Wissenschaft · Mittel",
        question: "Welches Gas brauchen Menschen hauptsächlich zum Atmen?",
        answers: [
            "Helium",
            "Sauerstoff",
            "Kohlendioxid",
            "Wasserstoff"
        ],
        correct: 1
    },

    {
        category: "Film · Mittel",
        question: "Wie heißt der Zauberlehrling aus der bekannten Filmreihe?",
        answers: [
            "Frodo Beutlin",
            "Harry Potter",
            "Luke Skywalker",
            "Peter Parker"
        ],
        correct: 1
    },


    // 🔴 SCHWER

    {
        category: "Wissenschaft · Schwer",
        question: "Welches chemische Symbol hat Gold?",
        answers: ["Ag", "Fe", "Au", "Go"],
        correct: 2
    },

    {
        category: "Geografie · Schwer",
        question: "Wie heißt die Hauptstadt von Australien?",
        answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2
    },

    {
        category: "Geschichte · Schwer",
        question: "Wer war der erste Mensch auf dem Mond?",
        answers: [
            "Buzz Aldrin",
            "Neil Armstrong",
            "Yuri Gagarin",
            "John Glenn"
        ],
        correct: 1
    },

    {
        category: "Wissenschaft · Schwer",
        question: "Wie viele Knochen hat ein erwachsener Mensch ungefähr?",
        answers: ["106", "206", "306", "406"],
        correct: 1
    },

    {
        category: "Geografie · Schwer",
        question: "Welcher Berg ist der höchste der Erde über dem Meeresspiegel?",
        answers: ["K2", "Mount Everest", "Mont Blanc", "Kilimandscharo"],
        correct: 1
    },

    {
        category: "Geschichte · Schwer",
        question: "In welchem Jahr begann der Erste Weltkrieg?",
        answers: ["1912", "1914", "1916", "1918"],
        correct: 1
    },

    {
        category: "Mathematik · Schwer",
        question: "Wie viel ist 15²?",
        answers: ["125", "200", "225", "250"],
        correct: 2
    },

    {
        category: "Wissenschaft · Schwer",
        question: "Wie nennt man den Vorgang, bei dem Pflanzen Lichtenergie in chemische Energie umwandeln?",
        answers: [
            "Fermentation",
            "Photosynthese",
            "Osmose",
            "Destillation"
        ],
        correct: 1
    },

    {
        category: "Geografie · Schwer",
        question: "Welches Land besitzt die längste Küstenlinie der Welt?",
        answers: ["Russland", "Kanada", "Australien", "Brasilien"],
        correct: 1
    },

    {
        category: "Technik · Schwer",
        question: "Welche Zahl steht im Binärsystem für die Dezimalzahl 10?",
        answers: ["1001", "1010", "1100", "1110"],
        correct: 1
    },

    {
        category: "Wissenschaft · Schwer",
        question: "Welches Element hat die Ordnungszahl 1?",
        answers: ["Helium", "Wasserstoff", "Sauerstoff", "Kohlenstoff"],
        correct: 1
    },

    {
        category: "Geschichte · Schwer",
        question: "Wie hieß die Hauptstadt des Römischen Reiches?",
        answers: ["Athen", "Rom", "Sparta", "Alexandria"],
        correct: 1
    },

    {
        category: "Natur · Schwer",
        question: "Welches ist das größte lebende Landtier?",
        answers: [
            "Giraffe",
            "Afrikanischer Elefant",
            "Nashorn",
            "Flusspferd"
        ],
        correct: 1
    },

    {
        category: "Wissenschaft · Schwer",
        question: "Wie schnell breitet sich Licht im Vakuum ungefähr aus?",
        answers: [
            "30.000 km/s",
            "150.000 km/s",
            "300.000 km/s",
            "1.000.000 km/s"
        ],
        correct: 2
    },

    {
        category: "Mathematik · Schwer",
        question: "Was ist die Quadratwurzel von 144?",
        answers: ["10", "11", "12", "14"],
        correct: 2
    }

];


// ================================
// Kurzer
// ================================

const drinks = [
    "Kurzer 🥤",
    
];


// ================================
// VARIABLEN
// ================================

let currentQuestion = 0;
let score = 0;
let answered = false;


// ================================
// HTML ELEMENTE
// ================================

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const categoryElement =
    document.getElementById("category");

const progressText =
    document.getElementById("progressText");

const progressBar =
    document.getElementById("progressBar");

const nextButton =
    document.getElementById("nextBtn");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");

const scoreElement =
    document.getElementById("score");

const percentageElement =
    document.getElementById("percentage");

const resultMessage =
    document.getElementById("resultMessage");

const restartButton =
    document.getElementById("restartBtn");


// Getränke-Overlay

const drinkOverlay =
    document.getElementById("drinkOverlay");

const drinkName =
    document.getElementById("drinkName");

const drinkContinue =
    document.getElementById("drinkContinue");


// ================================
// FRAGEN ZUFÄLLIG MISCHEN
// ================================

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [questions[i], questions[j]] =
            [questions[j], questions[i]];
    }


    // Kategorie

    categoryElement.textContent =
        question.category;


    // Frage

    questionElement.textContent =
        question.question;


    // Fortschritt

    progressText.textContent =
        `Frage ${currentQuestion + 1} / ${questions.length}`;


    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    // Alte Antworten entfernen

    answersElement.innerHTML = "";


    // Neue Antworten erstellen

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.classList.add("answer");

            button.textContent =
                `${String.fromCharCode(65 + index)}. ${answer}`;


            button.addEventListener(
                "click",
                () => selectAnswer(index, button)
            );


            answersElement.appendChild(button);
        }
    );
}


// ================================
// ANTWORT AUSWÄHLEN
// ================================

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    // Wenn bereits beantwortet
    if (answered) {
        return;
    }


    answered = true;


    const question =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(".answer");


    // Alle Buttons deaktivieren

    buttons.forEach(
        button => {
            button.disabled = true;
        }
    );


    // RICHTIG

    if (selectedIndex === question.correct) {

        selectedButton.classList.add("correct");

        score++;

        nextButton.disabled = false;

    }

    // FALSCH

    else {

        selectedButton.classList.add("wrong");


        // Richtige Antwort anzeigen

        buttons[
            question.correct
        ].classList.add("correct");


        // Zufälligen alkoholfreien Kurzen anzeigen

        showRandomDrink();
    }
}


// ================================
// ZUFÄLLIGES GETRÄNK
// ================================

function showRandomDrink() {

    const randomIndex =
        Math.floor(
            Math.random() * drinks.length
        );


    const randomDrink =
        drinks[randomIndex];


    drinkName.textContent =
        randomDrink;


    drinkOverlay.classList.remove("hidden");
}


// ================================
// GETRÄNKE-MELDUNG SCHLIESSEN
// ================================

drinkContinue.addEventListener(
    "click",
    () => {

        drinkOverlay.classList.add("hidden");

        nextButton.disabled = false;
    }
);


// ================================
// NÄCHSTE FRAGE
// ================================

nextButton.addEventListener(
    "click",
    () => {

        currentQuestion++;


        // Noch Fragen vorhanden

        if (
            currentQuestion <
            questions.length
        ) {

            loadQuestion();
        }


        // Quiz beendet

        else {

            showResult();
        }
    }
);


// ================================
// ERGEBNIS
// ================================

function showResult() {

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    scoreElement.textContent =
        score;


    percentageElement.textContent =
        `${percentage}%`;


    // Nachricht

    if (percentage === 100) {

        resultMessage.textContent =
            "Perfekt! Alle Fragen richtig! 🔥";
    }

    else if (percentage >= 80) {

        resultMessage.textContent =
            "Sehr stark! Du kennst dich richtig gut aus! 🎉";
    }

    else if (percentage >= 60) {

        resultMessage.textContent =
            "Gut gemacht! Das war schon ziemlich stark. 💪";
    }

    else if (percentage >= 40) {

        resultMessage.textContent =
            "Nicht schlecht! Versuch es noch einmal. 🙂";
    }

    else {

        resultMessage.textContent =
            "Da geht noch mehr! Versuch es direkt noch einmal. 🚀";
    }
}


// ================================
// NEUSTART
// ================================

restartButton.addEventListener(
    "click",
    () => {

        currentQuestion = 0;

        score = 0;

        shuffleQuestions();

        resultScreen.classList.add("hidden");

        quizScreen.classList.remove("hidden");

        loadQuestion();
    }
);


// ================================
// QUIZ STARTEN
// ================================

shuffleQuestions();
loadQuestion();