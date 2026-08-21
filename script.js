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

// Zusätzliche Fragen für den erweiterten Fragenpool
const extraQuestions = [
    ["Geografie · Leicht", "Welcher Kontinent ist der größte?", ["Afrika", "Asien", "Europa", "Australien"], 1],
    ["Geografie · Leicht", "Welche Farbe hat die Flagge Japans hauptsächlich?", ["Blau", "Grün", "Weiß", "Schwarz"], 2],
    ["Geografie · Leicht", "In welchem Land liegt die Stadt Rom?", ["Italien", "Spanien", "Frankreich", "Österreich"], 0],
    ["Geografie · Leicht", "Welches Meer liegt zwischen Europa und Afrika?", ["Nordsee", "Mittelmeer", "Ostsee", "Karibisches Meer"], 1],
    ["Geografie · Leicht", "Wie heißt die Hauptstadt von Deutschland?", ["Hamburg", "München", "Berlin", "Köln"], 2],
    ["Geografie · Leicht", "Welcher Fluss fließt durch Wien?", ["Rhein", "Donau", "Elbe", "Oder"], 1],
    ["Geografie · Leicht", "Welche Insel ist die größte der Welt?", ["Island", "Grönland", "Sizilien", "Madagaskar"], 1],
    ["Geografie · Leicht", "In welchem Land steht der Eiffelturm?", ["Belgien", "Frankreich", "Schweiz", "Italien"], 1],
    ["Geografie · Leicht", "Wie heißt die Hauptstadt von Spanien?", ["Barcelona", "Valencia", "Madrid", "Sevilla"], 2],
    ["Geografie · Mittel", "Welches Land grenzt an Deutschland?", ["Portugal", "Polen", "Irland", "Norwegen"], 1],
    ["Geografie · Mittel", "Welcher Kontinent liegt am Südpol?", ["Antarktis", "Asien", "Afrika", "Europa"], 0],
    ["Geografie · Mittel", "Wie heißt die Hauptstadt von Kanada?", ["Toronto", "Vancouver", "Ottawa", "Montreal"], 2],
    ["Geografie · Mittel", "Welche Wüste ist die größte Trockenwüste?", ["Gobi", "Sahara", "Atacama", "Kalahari"], 1],
    ["Geografie · Mittel", "Welcher Staat ist flächenmäßig der größte?", ["China", "Kanada", "Russland", "Brasilien"], 2],
    ["Geografie · Mittel", "Auf welchem Kontinent liegt Brasilien?", ["Afrika", "Südamerika", "Asien", "Nordamerika"], 1],
    ["Geschichte · Leicht", "Wer erfand der Überlieferung nach den Buchdruck mit beweglichen Lettern in Europa?", ["Johannes Gutenberg", "Galileo Galilei", "Isaac Newton", "Marco Polo"], 0],
    ["Geschichte · Leicht", "Wie viele Jahre hat ein Jahrhundert?", ["10", "50", "100", "1.000"], 2],
    ["Geschichte · Leicht", "Welche Stadt wurde im Altertum durch einen Vulkanausbruch verschüttet?", ["Pompeji", "London", "Berlin", "Karthago"], 0],
    ["Geschichte · Leicht", "Wer war Kleopatra?", ["Eine ägyptische Königin", "Eine römische Dichterin", "Eine griechische Göttin", "Eine französische Kaiserin"], 0],
    ["Geschichte · Leicht", "In welchem Land standen die Olympischen Spiele der Antike ursprünglich?", ["Griechenland", "Ägypten", "China", "Spanien"], 0],
    ["Geschichte · Mittel", "Wann endete der Zweite Weltkrieg in Europa?", ["1943", "1945", "1947", "1950"], 1],
    ["Geschichte · Mittel", "Wer war der erste Präsident der Vereinigten Staaten?", ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], 1],
    ["Geschichte · Mittel", "Welche Stadt war das Zentrum des antiken Römischen Reiches?", ["Rom", "Athen", "Kairo", "Paris"], 0],
    ["Geschichte · Mittel", "Wie nennt man die Epoche zwischen Antike und Neuzeit?", ["Mittelalter", "Barock", "Aufklärung", "Renaissance"], 0],
    ["Geschichte · Schwer", "Wer schrieb die 95 Thesen?", ["Martin Luther", "Karl der Große", "Aristoteles", "Napoleon"], 0],
    ["Geschichte · Schwer", "Welche Kultur errichtete Machu Picchu?", ["Maya", "Inka", "Römer", "Wikinger"], 1],
    ["Wissenschaft · Leicht", "Welcher Planet ist der Sonne am nächsten?", ["Venus", "Merkur", "Mars", "Erde"], 1],
    ["Wissenschaft · Leicht", "Wie viele natürliche Monde hat die Erde?", ["0", "1", "2", "4"], 1],
    ["Wissenschaft · Leicht", "Was misst ein Thermometer?", ["Luftdruck", "Temperatur", "Geschwindigkeit", "Lautstärke"], 1],
    ["Wissenschaft · Leicht", "Welche Kraft zieht Gegenstände zur Erde?", ["Reibung", "Schwerkraft", "Magnetismus", "Auftrieb"], 1],
    ["Wissenschaft · Leicht", "Welches Organ pumpt Blut durch den Körper?", ["Lunge", "Herz", "Leber", "Magen"], 1],
    ["Wissenschaft · Leicht", "Wie viele Zähne hat ein erwachsener Mensch normalerweise?", ["24", "28", "32", "36"], 2],
    ["Wissenschaft · Mittel", "Was ist die kleinste Einheit eines Lebewesens?", ["Zelle", "Organ", "Gewebe", "Knochen"], 0],
    ["Wissenschaft · Mittel", "Welches Vitamin bildet der Körper unter Sonneneinstrahlung?", ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], 3],
    ["Wissenschaft · Mittel", "Wie viele Planeten hat unser Sonnensystem?", ["7", "8", "9", "10"], 1],
    ["Wissenschaft · Mittel", "Was ist H2O?", ["Wasser", "Sauerstoff", "Salz", "Wasserstoff"], 0],
    ["Wissenschaft · Schwer", "Welche Einheit misst elektrische Stromstärke?", ["Volt", "Watt", "Ampere", "Ohm"], 2],
    ["Wissenschaft · Schwer", "Wie nennt man die Wissenschaft von Erdbeben?", ["Seismologie", "Biologie", "Meteorologie", "Astronomie"], 0],
    ["Natur · Leicht", "Welche Farbe haben reife Bananen meistens?", ["Blau", "Gelb", "Lila", "Schwarz"], 1],
    ["Natur · Leicht", "Welches Tier ist ein Säugetier?", ["Adler", "Delfin", "Eidechse", "Forelle"], 1],
    ["Natur · Leicht", "Wie nennt man die Verwandlung einer Raupe zum Schmetterling?", ["Metamorphose", "Gärung", "Erosion", "Kristallisation"], 0],
    ["Natur · Leicht", "Welche Pflanze produziert Eicheln?", ["Buche", "Eiche", "Birke", "Tanne"], 1],
    ["Natur · Leicht", "Welches Tier ist für seinen schwarz-weißen Streifen bekannt?", ["Zebra", "Tiger", "Leopard", "Panda"], 0],
    ["Natur · Mittel", "Wie nennt man Tiere, die nachts aktiv sind?", ["Tagtiere", "Nachtaktive Tiere", "Wassertiere", "Weidetiere"], 1],
    ["Natur · Mittel", "Welcher Baum trägt Kastanien?", ["Kastanie", "Ahorn", "Weide", "Pappel"], 0],
    ["Natur · Mittel", "Was sammeln Bienen aus Blüten?", ["Nektar", "Sand", "Salz", "Harz"], 0],
    ["Natur · Schwer", "Wie nennt man die Lehre von den Pilzen?", ["Mykologie", "Geologie", "Ökologie", "Zoologie"], 0],
    ["Sport · Leicht", "Wie viele Ringe hat das olympische Symbol?", ["3", "4", "5", "6"], 2],
    ["Sport · Leicht", "Welche Sportart wird auf Eis gespielt?", ["Eishockey", "Volleyball", "Cricket", "Fechten"], 0],
    ["Sport · Leicht", "Wie nennt man einen Treffer im Fußball?", ["Touchdown", "Tor", "Punktstoß", "Satz"], 1],
    ["Sport · Leicht", "Welche Farbe trägt der Führende bei der Tour de France?", ["Gelb", "Grün", "Rot", "Weiß"], 0],
    ["Sport · Mittel", "Wie viele Felder hat ein Schachbrett?", ["32", "48", "64", "81"], 2],
    ["Sport · Mittel", "Wie heißt der längste Laufwettbewerb der Leichtathletik?", ["Sprint", "Marathon", "Hürdenlauf", "Staffel"], 1],
    ["Sport · Mittel", "In welcher Sportart verwendet man einen Puck?", ["Eishockey", "Tennis", "Handball", "Baseball"], 0],
    ["Sport · Schwer", "Wie viele Punkte zählt ein Touchdown im American Football normalerweise?", ["3", "6", "7", "10"], 1],
    ["Musik · Leicht", "Wie viele Tasten hat ein klassisches Klavier normalerweise?", ["66", "88", "96", "100"], 1],
    ["Musik · Leicht", "Welches Instrument hat typischerweise sechs Saiten?", ["Flöte", "Gitarre", "Trompete", "Schlagzeug"], 1],
    ["Musik · Leicht", "Wie nennt man ein Musikstück für zwei Personen?", ["Duett", "Solo", "Quartett", "Chor"], 0],
    ["Musik · Mittel", "Wer komponierte die 9. Sinfonie?", ["Beethoven", "Mozart", "Bach", "Chopin"], 0],
    ["Musik · Mittel", "Wie heißt das Zeichen für eine kurze Pause in der Musik?", ["Pausenzeichen", "Doppelpunkt", "Klammer", "Akzent"], 0],
    ["Kunst · Leicht", "Welche Farben entstehen aus Rot und Weiß?", ["Rosa", "Grün", "Braun", "Türkis"], 0],
    ["Kunst · Leicht", "Womit malt man auf einer Leinwand?", ["Pinsel", "Lineal", "Kompass", "Schraubenzieher"], 0],
    ["Kunst · Mittel", "Wer malte das Bild 'Die Sternennacht'?", ["Vincent van Gogh", "Edvard Munch", "Rembrandt", "Michelangelo"], 0],
    ["Sprache · Leicht", "Was ist das Gegenteil von 'kalt'?", ["nass", "warm", "hell", "schnell"], 1],
    ["Sprache · Leicht", "Wie viele Vokale hat das deutsche Alphabet?", ["3", "5", "7", "9"], 1],
    ["Sprache · Mittel", "Was ist ein anderes Wort für 'beginnen'?", ["enden", "starten", "verlieren", "warten"], 1],
    ["Technik · Leicht", "Womit kann man im Internet Webseiten öffnen?", ["Browser", "Toaster", "Scanner", "Mikroskop"], 0],
    ["Technik · Leicht", "Was speichert ein Computer dauerhaft?", ["Daten", "Licht", "Wind", "Wärme"], 0],
    ["Technik · Mittel", "Wofür steht WLAN?", ["Wireless Local Area Network", "Wide Language Access Node", "Web Link And Name", "World Line Area Net"], 0],
    ["Allgemeinwissen · Leicht", "Wie viele Stunden hat ein Tag?", ["12", "24", "36", "48"], 1],
    ["Allgemeinwissen · Leicht", "Welche Farbe entsteht aus Rot und Gelb?", ["Grün", "Orange", "Violett", "Blau"], 1],
    ["Allgemeinwissen · Leicht", "Wie viele Seiten hat ein Würfel?", ["4", "6", "8", "12"], 1],
    ["Allgemeinwissen · Mittel", "Wie nennt man ein Vieleck mit drei Seiten?", ["Viereck", "Dreieck", "Fünfeck", "Kreis"], 1],
    ["Allgemeinwissen · Mittel", "Welche Sprache wird in Brasilien hauptsächlich gesprochen?", ["Spanisch", "Portugiesisch", "Französisch", "Englisch"], 1],
    ["Allgemeinwissen · Schwer", "Wie viele Nullen hat eine Million?", ["3", "5", "6", "9"], 2]
];

questions.push(...extraQuestions.map(([category, question, answers, correct]) => ({
    category,
    question,
    answers,
    correct
})));

for (let number = 1; number <= 24; number++) {
    const first = number + 4;
    const second = number + 2;
    const result = first + second;

    questions.push({
        category: "Mathematik · Leicht",
        question: `Was ist ${first} + ${second}?`,
        answers: [String(result - 2), String(result), String(result + 2), String(result + 4)],
        correct: 1
    });
}


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