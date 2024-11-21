const allQuestions = {
    moda: [
        { 
            question: "En los números: 2, 3, 3, 4, 5, ¿cuál es el número que más se repite (moda)?", 
            options: ["2", "3", "4"], 
            correct: "3" 
        },
        { 
            question: "En estos números: 6, 7, 8, 9, 9, ¿cuál es el número más grande (máximo)?", 
            options: ["6", "8", "9"], 
            correct: "9" 
        },
        { 
            question: "Encuentra el número más pequeño (mínimo) en: 5, 5, 6, 7, 8", 
            options: ["5", "6", "7"], 
            correct: "5" 
        },
        { 
            question: "En los números: 1, 2, 2, 2, 3, ¿cuál es la moda?", 
            options: ["1", "2", "3"], 
            correct: "2" 
        },
        { 
            question: "¿Cuál es el número más grande (máximo) en: 4, 5, 5, 5, 6?", 
            options: ["4", "5", "6"], 
            correct: "6" 
        },
        { 
            question: "En el grupo: 7, 7, 8, 9, 10, ¿cuál es el número más pequeño (mínimo)?", 
            options: ["7", "8", "9"], 
            correct: "7" 
        },
        { 
            question: "Encuentra la moda en: 9, 9, 9, 10, 11", 
            options: ["9", "10", "11"], 
            correct: "9" 
        },
        { 
            question: "En los números: 3, 4, 5, 5, 5, ¿cuál es el número más grande (máximo)?", 
            options: ["3", "5", "4"], 
            correct: "5" 
        },
        { 
            question: "¿Cuál es el número más pequeño (mínimo) en: 6, 7, 8, 9, 9?", 
            options: ["6", "7", "8"], 
            correct: "6" 
        },
        { 
            question: "En estos números: 2, 2, 3, 4, 5, ¿cuál es la moda?", 
            options: ["2", "3", "4"], 
            correct: "2" 
        },
        { 
            question: "Encuentra el máximo en: 5, 6, 7, 8, 8", 
            options: ["6", "7", "8"], 
            correct: "8" 
        },
        { 
            question: "En los números: 10, 10, 10, 2, 3, ¿cuál es el número más pequeño (mínimo)?", 
            options: ["2", "3", "10"], 
            correct: "2" 
        },
        { 
            question: "¿Cuál es la moda en: 4, 4, 4, 5, 6?", 
            options: ["4", "5", "6"], 
            correct: "4" 
        },
        { 
            question: "Encuentra el mínimo en: 8, 9, 10, 11, 12", 
            options: ["8", "9", "10"], 
            correct: "8" 
        },
        { 
            question: "En los números: 1, 2, 3, 4, 5, ¿cuál es el número más grande (máximo)?", 
            options: ["3", "4", "5"], 
            correct: "5" 
        }
    ],
    posicion: [
        { question: "Escribe el valor posicional del 4 en el número 7,318,294.", options: ["4", "40", "400"], correct: "4" },
        { question: "¿Cuál es el valor posicional del 6 en 12,345,676?", options: ["6", "60", "600"], correct: "6" },
        { question: "¿Cuál es el valor posicional del 5 en el número 5,678?", options: ["5,000", "500", "50"], correct: "5,000" },
        { question: "Escribe el valor posicional del 2 en 2,345.", options: ["2,000", "200", "20"], correct: "2,000" },
        { question: "¿Cuál es el valor posicional del 7 en 1,237?", options: ["700", "70", "7"], correct: "7" },
        { question: "Escribe el valor posicional del 3 en 3,456.", options: ["3,000", "300", "30"], correct: "3,000" },
        { question: "¿Cuál es el valor posicional del 8 en 8,901?", options: ["8,000", "800", "80"], correct: "8,000" },
        { question: "Escribe el valor posicional del 9 en 4,593.", options: ["900", "90", "9"], correct: "90" },
        { question: "¿Cuál es el valor posicional del 1 en 1,234?", options: ["1,000", "100", "10"], correct: "1,000" },
        { question: "Escribe el valor posicional del 6 en 6,789.", options: ["6,000", "600", "60"], correct: "6,000" },
        { question: "¿Cuál es el valor posicional del 4 en 456?", options: ["400", "40", "4"], correct: "400" },
        { question: "¿Cuál es el valor posicional del 2 en 12,345?", options: ["2,000", "20,000", "200,000"], correct: "2,000" },
        { question: "Escribe el valor posicional del 8 en 28,947.", options: ["8,000", "80,000", "800"], correct: "8,000" },
        { question: "¿Cuál es el valor posicional del 7 en 67,890?", options: ["7,000", "70,000", "700,000"], correct: "70,000" },
        { question: "Escribe el valor posicional del 5 en 5,678.", options: ["5,000", "500", "50"], correct: "5,000" }
    ],
    operaciones: [
        { question: "¿Cuánto es 34 + 56?", options: ["90", "80", "100"], correct: "90" },
        { question: "¿Cuánto es 45 - 23?", options: ["22", "23", "21"], correct: "22" },
        { question: "¿Cuánto es 12 + 15?", options: ["27", "25", "30"], correct: "27" },
        { question: "¿Cuánto es 50 - 25?", options: ["25", "30", "35"], correct: "25" },
        { question: "¿Cuánto es 7 × 6?", options: ["42", "36", "48"], correct: "42" },
        { question: "¿Cuánto es 64 ÷ 8?", options: ["8", "7", "6"], correct: "8" },
        { question: "¿Cuánto es 100 - 45?", options: ["55", "65", "75"], correct: "55" },
        { question: "¿Cuánto es 9 × 5?", options: ["45", "40", "35"], correct: "45" },
        { question: "¿Cuánto es 81 ÷ 9?", options: ["9", "8", "7"], correct: "9" },
        { question: "¿Cuánto es 25 + 75?", options: ["100", "90", "80"], correct: "100" },
        { question: "¿Cuánto es 56 - 14?", options: ["42", "40", "44"], correct: "42" },
        { question: "¿Cuánto es 8 × 7?", options: ["56", "54", "58"], correct: "56" },
        { question: "¿Cuánto es 72 ÷ 8?", options: ["9", "8", "7"], correct: "9" },
        { question: "¿Cuánto es 15 + 85?", options: ["100", "90", "95"], correct: "100" },
        { question: "¿Cuánto es 60 - 30?", options: ["30", "40", "50"], correct: "30" }
    ],
    tripleQuintuple: [
        { question: "¿Cuál es el triple de 15?", options: ["45", "40", "30"], correct: "45" },
        { question: "¿Cuál es el quíntuple de 20?", options: ["100", "80", "120"], correct: "100" },
        { question: "¿Cuál es el triple de 33?", options: ["99", "90", "66"], correct: "99" },
        { question: "¿Cuál es el quíntuple de 12?", options: ["60", "55", "72"], correct: "60" },
        { question: "¿Cuál es el triple de 10?", options: ["30", "20", "25"], correct: "30" },
        { question: "¿Cuál es el quíntuple de 8?", options: ["40", "35", "45"], correct: "40" },
        { question: "¿Cuál es el triple de 7?", options: ["21", "24", "18"], correct: "21" },
        { question: "¿Cuál es el quíntuple de 5?", options: ["25", "20", "15"], correct: "25" },
        { question: "¿Cuál es el triple de 14?", options: ["42", "36", "40"], correct: "42" },
        { question: "¿Cuál es el quíntuple de 9?", options: ["45", "40", "35"], correct: "45" },
        { question: "¿Cuál es el triple de 18?", options: ["54", "48", "60"], correct: "54" },
        { question: "¿Cuál es el quíntuple de 11?", options: ["55", "50", "60"], correct: "55" },
        { question: "¿Cuál es el triple de 20?", options: ["60", "50", "70"], correct: "60" },
        { question: "¿Cuál es el quíntuple de 6?", options: ["30", "25", "35"], correct: "30" },
        { question: "¿Cuál es el triple de 25?", options: ["75", "70", "80"], correct: "75" }
    ],
    radioDiametro: [
        { question: "Si el radio de una esfera es 7 cm, ¿cuál es el diámetro?", options: ["14 cm", "21 cm", "10 cm"], correct: "14 cm" },
        { question: "Si el diámetro de una esfera es 16 cm, ¿cuál es el radio?", options: ["8 cm", "32 cm", "10 cm"], correct: "8 cm" },
        { question: "¿Cuál es el diámetro de una esfera con radio de 5 cm?", options: ["10 cm", "15 cm", "7 cm"], correct: "10 cm" },
        { question: "Si el radio de una esfera es 9 cm, ¿cuál es el diámetro?", options: ["18 cm", "12 cm", "15 cm"], correct: "18 cm" },
        { question: "Si el diámetro de un círculo es 20 cm, ¿cuál es su radio?", options: ["10 cm", "15 cm", "5 cm"], correct: "10 cm" },
        { question: "Si el radio de un círculo es 12 cm, ¿cuál es su diámetro?", options: ["24 cm", "18 cm", "20 cm"], correct: "24 cm" },
        { question: "¿Cuál es el radio de un círculo con diámetro de 30 cm?", options: ["15 cm", "20 cm", "25 cm"], correct: "15 cm" },
        { question: "Si el diámetro de un círculo es 8 cm, ¿cuál es su radio?", options: ["4 cm", "6 cm", "2 cm"], correct: "4 cm" },
        { question: "¿Cuál es el diámetro de un círculo con radio de 13 cm?", options: ["26 cm", "20 cm", "23 cm"], correct: "26 cm" },
        { question: "Si el radio de un círculo es 3 cm, ¿cuál es su diámetro?", options: ["6 cm", "9 cm", "3 cm"], correct: "6 cm" },
        { question: "¿Cuál es el radio de un círculo con diámetro de 18 cm?", options: ["9 cm", "12 cm", "15 cm"], correct: "9 cm" },
        { question: "Si el diámetro de un círculo es 50 cm, ¿cuál es su radio?", options: ["25 cm", "30 cm", "20 cm"], correct: "25 cm" },
        { question: "¿Cuál es el diámetro de un círculo con radio de 11 cm?", options: ["22 cm", "18 cm", "20 cm"], correct: "22 cm" },
        { question: "Si el radio de un círculo es 16 cm, ¿cuál es su diámetro?", options: ["32 cm", "28 cm", "24 cm"], correct: "32 cm" },
        { question: "¿Cuál es el radio de un círculo con diámetro de 40 cm?", options: ["20 cm", "25 cm", "30 cm"], correct: "20 cm" }
    ],
    cuerposSolidos: [
        { question: "Un cubo tiene 4 cm de lado. ¿Cuál es su volumen?", options: ["64 cm³", "16 cm³", "32 cm³"], correct: "64 cm³" },
        { question: "Un prisma rectangular tiene dimensiones 2 cm × 3 cm × 4 cm. ¿Cuál es su volumen?", options: ["24 cm³", "20 cm³", "30 cm³"], correct: "24 cm³" },
        { question: "Un cubo tiene 5 cm de lado. ¿Cuál es su volumen?", options: ["125 cm³", "100 cm³", "150 cm³"], correct: "125 cm³" },
        { question: "Un prisma rectangular tiene dimensiones 3 cm × 3 cm × 3 cm. ¿Cuál es su volumen?", options: ["27 cm³", "30 cm³", "33 cm³"], correct: "27 cm³" },
        { question: "Un cubo tiene 6 cm de lado. ¿Cuál es su volumen?", options: ["216 cm³", "180 cm³", "200 cm³"], correct: "216 cm³" },
        { question: "Un prisma rectangular mide 4 cm × 5 cm × 6 cm. ¿Cuál es su volumen?", options: ["120 cm³", "100 cm³", "110 cm³"], correct: "120 cm³" },
        { question: "Un cubo tiene 3 cm de lado. ¿Cuál es su volumen?", options: ["27 cm³", "9 cm³", "18 cm³"], correct: "27 cm³" },
        { question: "Un prisma rectangular tiene dimensiones 2 cm × 2 cm × 5 cm. ¿Cuál es su volumen?", options: ["20 cm³", "15 cm³", "10 cm³"], correct: "20 cm³" },
        { question: "Un cubo tiene 8 cm de lado. ¿Cuál es su volumen?", options: ["512 cm³", "400 cm³", "256 cm³"], correct: "512 cm³" },
        { question: "Un prisma rectangular mide 3 cm × 4 cm × 5 cm. ¿Cuál es su volumen?", options: ["60 cm³", "55 cm³", "65 cm³"], correct: "60 cm³" },
        { question: "Un cubo tiene 2 cm de lado. ¿Cuál es su volumen?", options: ["8 cm³", "6 cm³", "4 cm³"], correct: "8 cm³" },
        { question: "Un prisma rectangular mide 5 cm × 5 cm × 5 cm. ¿Cuál es su volumen?", options: ["125 cm³", "100 cm³", "150 cm³"], correct: "125 cm³" },
        { question: "Un cubo tiene 10 cm de lado. ¿Cuál es su volumen?", options: ["1000 cm³", "800 cm³", "900 cm³"], correct: "1000 cm³" },
        { question: "Un prisma rectangular mide 2 cm × 3 cm × 5 cm. ¿Cuál es su volumen?", options: ["30 cm³", "25 cm³", "35 cm³"], correct: "30 cm³" },
        { question: "Un cubo tiene 7 cm de lado. ¿Cuál es su volumen?", options: ["343 cm³", "300 cm³", "350 cm³"], correct: "343 cm³" }
    ],
    conversiones: [
        { question: "¿Cuántos mililitros hay en 1 litro?", options: ["1000 ml", "500 ml", "1500 ml"], correct: "1000 ml" },
        { question: "¿Cuántos litros hay en 2000 mililitros?", options: ["2 litros", "1.5 litros", "2.5 litros"], correct: "2 litros" },
        { question: "¿Cuántos mililitros hay en medio litro?", options: ["500 ml", "250 ml", "750 ml"], correct: "500 ml" },
        { question: "¿Cuántos litros hay en 3500 mililitros?", options: ["3.5 litros", "3 litros", "4 litros"], correct: "3.5 litros" },
        { question: "¿Cuántos mililitros hay en 3 litros?", options: ["3000 ml", "1500 ml", "3500 ml"], correct: "3000 ml" },
        { question: "¿Cuántos litros hay en 5000 mililitros?", options: ["5 litros", "4 litros", "6 litros"], correct: "5 litros" },
        { question: "¿Cuántos mililitros hay en 0.75 litros?", options: ["750 ml", "700 ml", "800 ml"], correct: "750 ml" },
        { question: "¿Cuántos litros hay en 2500 mililitros?", options: ["2.5 litros", "2 litros", "3 litros"], correct: "2.5 litros" },
        { question: "¿Cuántos mililitros hay en 4.5 litros?", options: ["4500 ml", "4000 ml", "5000 ml"], correct: "4500 ml" },
        { question: "¿Cuántos litros hay en 6000 mililitros?", options: ["6 litros", "5 litros", "7 litros"], correct: "6 litros" },
        { question: "¿Cuántos mililitros hay en 2.5 litros?", options: ["2500 ml", "2000 ml", "3000 ml"], correct: "2500 ml" },
        { question: "¿Cuántos litros hay en 1500 mililitros?", options: ["1.5 litros", "1 litro", "2 litros"], correct: "1.5 litros" },
        { question: "¿Cuántos mililitros hay en 0.25 litros?", options: ["250 ml", "500 ml", "750 ml"], correct: "250 ml" },
        { question: "¿Cuántos litros hay en 8000 mililitros?", options: ["8 litros", "7 litros", "9 litros"], correct: "8 litros" },
        { question: "¿Cuántos mililitros hay en 6 litros?", options: ["6000 ml", "5000 ml", "7000 ml"], correct: "6000 ml" }
    ],
    medidas: [
        { question: "¿Cuántos centímetros hay en 2 metros?", options: ["200 cm", "20 cm", "2 cm"], correct: "200 cm" },
        { question: "¿Cuántos gramos hay en 1 kilogramo?", options: ["1000 g", "500 g", "1500 g"], correct: "1000 g" },
        { question: "¿Cuántos minutos hay en 2 horas?", options: ["120 minutos", "60 minutos", "180 minutos"], correct: "120 minutos" },
        { question: "¿Cuántos días hay en 2 semanas?", options: ["14 días", "10 días", "20 días"], correct: "14 días" },
        { question: "¿Cuántos metros hay en 500 centímetros?", options: ["5 metros", "50 metros", "0.5 metros"], correct: "5 metros" },
        { question: "¿Cuántos gramos hay en 2 kilogramos?", options: ["2000 g", "1000 g", "1500 g"], correct: "2000 g" },
        { question: "¿Cuántos minutos hay en 3 horas?", options: ["180 minutos", "120 minutos", "150 minutos"], correct: "180 minutos" },
        { question: "¿Cuántos días hay en 3 semanas?", options: ["21 días", "14 días", "28 días"], correct: "21 días" },
        { question: "¿Cuántos centímetros hay en 1.5 metros?", options: ["150 cm", "100 cm", "200 cm"], correct: "150 cm" },
        { question: "¿Cuántos gramos hay en 0.5 kilogramos?", options: ["500 g", "50 g", "1000 g"], correct: "500 g" },
        { question: "¿Cuántos minutos hay en 1.5 horas?", options: ["90 minutos", "80 minutos", "100 minutos"], correct: "90 minutos" },
        { question: "¿Cuántos días hay en 4 semanas?", options: ["28 días", "30 días", "24 días"], correct: "28 días" },
        { question: "¿Cuántos metros hay en 750 centímetros?", options: ["7.5 metros", "75 metros", "0.75 metros"], correct: "7.5 metros" },
        { question: "¿Cuántos gramos hay en 3 kilogramos?", options: ["3000 g", "2000 g", "4000 g"], correct: "3000 g" },
        { question: "¿Cuántos minutos hay en 0.5 horas?", options: ["30 minutos", "50 minutos", "60 minutos"], correct: "30 minutos" }
    ]
};


const quizContainer = document.getElementById('quizContainer');
const submitBtn = document.getElementById('submitBtn');
const generateBtn = document.getElementById('generateBtn');
const resultsContainer = document.getElementById('results');

let currentQuestions = []; // Global variable for current questions

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function interleaveQuestions() {
    const interleaved = [];
    const topics = Object.values(allQuestions).map(topic => [...topic]); // Clone topics

    // Pick one question from each topic repeatedly until none are left
    while (topics.some(topic => topic.length > 0)) {
        topics.forEach(topic => {
            if (topic.length > 0) {
                interleaved.push(topic.shift());
            }
        });
    }
    return interleaved;
}

function getRandomQuestions() {
    const questions = interleaveQuestions(); // Get interleaved questions
    shuffleArray(questions); // Shuffle them for added randomness
    return questions.slice(0, 20); // Pick 10 questions for the exam
}

function loadQuiz() {
    currentQuestions = getRandomQuestions(); // Assign current questions
    quizContainer.innerHTML = ""; // Clear previous questions
    resultsContainer.style.display = "none"; // Hide results

    currentQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('mb-4');
        questionDiv.innerHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>`;

        const optionsList = document.createElement('ul');
        optionsList.classList.add('list-unstyled');

        shuffleArray(q.options);
        q.options.forEach(option => {
            const optionItem = document.createElement('li');
            optionItem.innerHTML = `
                <label class="d-block">
                    <input type="radio" name="question${index}" value="${option}" class="me-2">
                    ${option}
                </label>
            `;
            optionsList.appendChild(optionItem);
        });

        questionDiv.appendChild(optionsList);
        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswers() {
    let correctCount = 0;
    let feedback = "";

    currentQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const answer = selectedOption.value;
            if (answer === q.correct) {
                correctCount++;
                feedback += `<p>Pregunta ${index + 1}: Correcto. Respuesta: <strong>${q.correct}</strong>.</p>`;
            } else {
                feedback += `<p>Pregunta ${index + 1}: Incorrecto. Respuesta seleccionada: <strong>${answer}</strong>. Respuesta correcta: <strong>${q.correct}</strong>.</p>`;
            }
        } else {
            feedback += `<p>Pregunta ${index + 1}: No respondida. Respuesta correcta: <strong>${q.correct}</strong>.</p>`;
        }
    });

    resultsContainer.style.display = "block";
    resultsContainer.innerHTML = `
        <h3>Resultados</h3>
        <p>Respuestas correctas: ${correctCount} de ${currentQuestions.length}</p>
        ${feedback}
    `;
}

submitBtn.addEventListener('click', checkAnswers);
generateBtn.addEventListener('click', loadQuiz);

// Load the quiz at start
loadQuiz();
