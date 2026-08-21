// ================================
// QUIZMASTER
// ================================

// ================================
// FRAGEN
// ================================

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
    },

    {
        category: "Geografie · Leicht",
        question: "Wie heißt der längste Fluss der Welt?",
        answers: ["Amazonas", "Nil", "Rhein", "Donau"],
        correct: 1
    },

    {
        category: "Natur · Leicht",
        question: "Wie viele Kontinente gibt es auf der Erde?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },

    {
        category: "Mathematik · Leicht",
        question: "Was ist 9 × 9?",
        answers: ["72", "81", "89", "99"],
        correct: 1
    },

    {
        category: "Geschichte · Mittel",
        question: "Wer malte die Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: 2
    },

    {
        category: "Wissenschaft · Mittel",
        question: "Wie nennt man den Mittelpunkt eines Atoms?",
        answers: ["Elektron", "Molekül", "Atomkern", "Proton"],
        correct: 2
    },

    {
        category: "Sport · Mittel",
        question: "In welcher Sportart gibt es einen Aufschlag?",
        answers: ["Tennis", "Boxen", "Leichtathletik", "Rugby"],
        correct: 0
    },

    {
        category: "Film · Mittel",
        question: "Wie heißt die Stadt, in der Batman lebt?",
        answers: ["Metropolis", "Gotham City", "Hill Valley", "Springfield"],
        correct: 1
    },

    {
        category: "Technik · Schwer",
        question: "Wofür steht die Abkürzung CPU?",
        answers: ["Central Processing Unit", "Computer Personal User", "Core Program Utility", "Central Power Unit"],
        correct: 0
    },

    {
        category: "Natur · Schwer",
        question: "Wie nennt man Tiere, die sowohl Pflanzen als auch Fleisch fressen?",
        answers: ["Vegetarier", "Karnivoren", "Omnivoren", "Insektenfresser"],
        correct: 2
    },

    {
        category: "Geografie · Leicht",
        question: "Welches Land ist für seine Pyramiden von Gizeh bekannt?",
        answers: ["Ägypten", "Mexiko", "Indien", "Peru"],
        correct: 0
    },

    {
        category: "Mathematik · Leicht",
        question: "Wie viel ist 100 geteilt durch 4?",
        answers: ["20", "25", "30", "40"],
        correct: 1
    },

    {
        category: "Natur · Leicht",
        question: "Welcher Stoff ist der Hauptbestandteil der Luft?",
        answers: ["Sauerstoff", "Stickstoff", "Wasserstoff", "Kohlendioxid"],
        correct: 1
    },

    {
        category: "Geschichte · Mittel",
        question: "Wie hieß der erste deutsche Bundeskanzler?",
        answers: ["Willy Brandt", "Helmut Kohl", "Konrad Adenauer", "Angela Merkel"],
        correct: 2
    },

    {
        category: "Geografie · Mittel",
        question: "Durch welche Stadt fließt die Themse?",
        answers: ["Paris", "London", "Dublin", "Brüssel"],
        correct: 1
    },

    {
        category: "Sport · Mittel",
        question: "Wie lange dauert ein reguläres Fußballspiel ohne Verlängerung?",
        answers: ["60 Minuten", "75 Minuten", "90 Minuten", "120 Minuten"],
        correct: 2
    },

    {
        category: "Wissenschaft · Schwer",
        question: "Wie lautet die chemische Formel von Wasser?",
        answers: ["CO2", "O2", "H2O", "NaCl"],
        correct: 2
    },

    {
        category: "Film · Schwer",
        question: "Wie heißt der Roboter aus dem Film 'Star Wars'?",
        answers: ["Gandalf", "R2-D2", "Spock", "WALL-E"],
        correct: 1
    },

    {
        category: "Kunst · Schwer",
        question: "Wie viele Saiten hat eine klassische Gitarre?",
        answers: ["4", "5", "6", "8"],
        correct: 2
    }

];


// ================================
// GETRÄNKE
// ================================

const drinks = [
    "Kurzer 🥤"
];


// ================================
// VARIABLEN
// ================================

let currentQuestion = 0;
let score = 0;
let answered = false;


// ================================
// WARTEN BIS HTML GELADEN IST
// ================================

document.addEventListener("DOMContentLoaded", () => {

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

    const drinkOverlay =
        document.getElementById("drinkOverlay");

    const drinkName =
        document.getElementById("drinkName");

    const drinkContinue =
        document.getElementById("drinkContinue");


    // ================================
    // FRAGEN MISCHEN
    // ================================

    function shuffleQuestions() {

        for (let i = questions.length - 1; i > 0; i--) {

            const j =
                Math.floor(Math.random() * (i + 1));

            [questions[i], questions[j]] =
                [questions[j], questions[i]];
        }
    }


    // ================================
    // FRAGE LADEN
    // ================================

    function loadQuestion() {

        answered = false;

        nextButton.disabled = true;

        const question =
            questions[currentQuestion];


        categoryElement.textContent =
            question.category;

        questionElement.textContent =
            question.question;

        progressText.textContent =
            `Frage ${currentQuestion + 1} / ${questions.length}`;

        progressBar.style.width =
            `${((currentQuestion + 1) / questions.length) * 100}%`;


        answersElement.innerHTML = "";


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

        if (answered) {
            return;
        }

        answered = true;

        const question =
            questions[currentQuestion];

        const buttons =
            document.querySelectorAll(".answer");


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

            buttons[
                question.correct
            ].classList.add("correct");

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

        drinkName.textContent =
            drinks[randomIndex];

        drinkOverlay.classList.remove("hidden");
    }


    // ================================
    // GETRÄNK SCHLIESSEN
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

            if (
                currentQuestion <
                questions.length
            ) {

                loadQuestion();

            } else {

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


        if (percentage === 100) {

            resultMessage.textContent =
                "Perfekt! Alle Fragen richtig! 🔥";

        } else if (percentage >= 80) {

            resultMessage.textContent =
                "Sehr stark! Du kennst dich richtig gut aus! 🎉";

        } else if (percentage >= 60) {

            resultMessage.textContent =
                "Gut gemacht! Das war schon ziemlich stark. 💪";

        } else if (percentage >= 40) {

            resultMessage.textContent =
                "Nicht schlecht! Versuch es noch einmal. 🙂";

        } else {

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

});