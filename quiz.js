// ============================================
// QuantumVerse AI - Quantum Computing Quiz
// Quiz Engine Part 1
// ============================================


const questions = [

    {
        question: "What is Quantum Computing?",
        options: [
            "A type of classical computing",
            "Computing based on quantum mechanics",
            "Cloud computing",
            "Analog computing"
        ],
        answer: 1
    },

    {
        question: "What is the basic unit of quantum information?",
        options: [
            "Bit",
            "Byte",
            "Qubit",
            "Register"
        ],
        answer: 2
    },

    {
        question: "A qubit can represent information using:",
        options: [
            "Only 0",
            "Only 1",
            "0 and 1 together through superposition",
            "Only decimal values"
        ],
        answer: 2
    },

    {
        question: "Which principle allows a qubit to exist in multiple states?",
        options: [
            "Encryption",
            "Superposition",
            "Compilation",
            "Iteration"
        ],
        answer: 1
    },

    {
        question: "Which theory is the foundation of quantum computing?",
        options: [
            "Classical Physics",
            "Quantum Mechanics",
            "Thermodynamics",
            "Electromagnetism"
        ],
        answer: 1
    },

    {
        question: "Who introduced the idea of quantum computing in 1980?",
        options: [
            "Richard Feynman",
            "Albert Einstein",
            "Alan Turing",
            "Isaac Newton"
        ],
        answer: 0
    },

    {
        question: "What is quantum entanglement?",
        options: [
            "A connection between quantum states",
            "A programming language",
            "A cooling method",
            "A storage device"
        ],
        answer: 0
    },

    {
        question: "Which gate is commonly used to create superposition?",
        options: [
            "NOT Gate",
            "Hadamard Gate",
            "AND Gate",
            "OR Gate"
        ],
        answer: 1
    },

    {
        question: "A classical computer uses information units called:",
        options: [
            "Qubits",
            "Pixels",
            "Bits",
            "Atoms"
        ],
        answer: 2
    },

    {
        question: "A quantum computer processes information using:",
        options: [
            "Transistors only",
            "Quantum bits",
            "Hard disks",
            "Mechanical parts"
        ],
        answer: 1
    },


    {
        question: "What does QPU stand for?",
        options: [
            "Quantum Processing Unit",
            "Quick Processing Utility",
            "Quantum Program User",
            "Quality Processing Unit"
        ],
        answer: 0
    },

    {
        question: "Which company provides IBM Quantum services?",
        options: [
            "IBM",
            "Microsoft Word",
            "Intel Graphics",
            "Adobe"
        ],
        answer: 0
    },

    {
        question: "The state of a qubit is represented using:",
        options: [
            "Probability amplitudes",
            "Only integers",
            "Binary code only",
            "Text values"
        ],
        answer: 0
    },

    {
        question: "Measurement of a qubit results in:",
        options: [
            "A definite classical state",
            "Unlimited states",
            "A new computer",
            "A larger memory"
        ],
        answer: 0
    },

    {
        question: "Which gate changes the state of a qubit?",
        options: [
            "Quantum Gate",
            "Web Gate",
            "Memory Gate",
            "Data Gate"
        ],
        answer: 0
    }

];


// ============================================
// Quiz Variables
// ============================================

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];


// ============================================
// Shuffle Function
// ============================================

function shuffle(array){

    return array.sort(() => Math.random() - 0.5);

}


// ============================================
// Start Quiz
// ============================================

function startQuiz(){

    quizQuestions = shuffle([...questions]).slice(0,10);

    currentQuestion = 0;

    score = 0;

    userAnswers = new Array(quizQuestions.length).fill(null);


    loadQuestion();

}// ============================================
// Quantum Computing Questions 16 - 35
// ============================================


questions.push(

{
    question: "What is the purpose of a quantum simulator?",
    options:[
        "To simulate quantum systems on classical computers",
        "To replace internet browsers",
        "To store videos",
        "To create websites"
    ],
    answer:0
},

{
    question: "Which company developed the Qiskit framework?",
    options:[
        "IBM",
        "Google",
        "Amazon",
        "Tesla"
    ],
    answer:0
},

{
    question: "Qiskit is mainly used for:",
    options:[
        "Quantum programming",
        "Graphic designing",
        "Database management",
        "Video editing"
    ],
    answer:0
},

{
    question: "The smallest possible state of a quantum system is called:",
    options:[
        "Quantum state",
        "Database",
        "Algorithm",
        "Circuit"
    ],
    answer:0
},

{
    question: "Quantum gates operate on:",
    options:[
        "Qubits",
        "Files",
        "Images",
        "Web pages"
    ],
    answer:0
},

{
    question: "Which algorithm searches an unsorted database faster?",
    options:[
        "Grover's Algorithm",
        "Sorting Algorithm",
        "Binary Search",
        "DFS"
    ],
    answer:0
},

{
    question: "Grover's algorithm provides approximately:",
    options:[
        "Quadratic speedup",
        "No speedup",
        "Slow processing",
        "Only storage improvement"
    ],
    answer:0
},

{
    question: "Shor's algorithm is used for:",
    options:[
        "Integer factorization",
        "Image processing",
        "Machine learning only",
        "Data compression"
    ],
    answer:0
},

{
    question: "Quantum Fourier Transform is used in:",
    options:[
        "Quantum algorithms",
        "Operating systems",
        "Web development",
        "Computer graphics"
    ],
    answer:0
},

{
    question: "A quantum circuit consists of:",
    options:[
        "Quantum gates and qubits",
        "Only wires",
        "Only memory",
        "Only processors"
    ],
    answer:0
},

{
    question: "The Bloch sphere represents:",
    options:[
        "A single qubit state",
        "Internet connection",
        "Computer hardware",
        "Classical memory"
    ],
    answer:0
},

{
    question: "Quantum decoherence means:",
    options:[
        "Loss of quantum state information",
        "Increasing memory",
        "Creating new qubits",
        "Speed improvement"
    ],
    answer:0
},

{
    question: "Quantum computers require very low temperatures because:",
    options:[
        "To reduce noise and errors",
        "To increase screen brightness",
        "To save files",
        "To run websites"
    ],
    answer:0
},

{
    question: "Dilution refrigerators are used in:",
    options:[
        "Superconducting quantum computers",
        "Mobile phones",
        "Printers",
        "Classical laptops"
    ],
    answer:0
},

{
    question: "Superconducting qubits are based on:",
    options:[
        "Electrical circuits",
        "Paper circuits",
        "Mechanical gears",
        "Optical disks"
    ],
    answer:0
},

{
    question: "Quantum error correction helps to:",
    options:[
        "Reduce quantum errors",
        "Increase screen size",
        "Create websites",
        "Compress images"
    ],
    answer:0
},

{
    question: "Which is a quantum programming library?",
    options:[
        "PennyLane",
        "Photoshop",
        "Excel",
        "PowerPoint"
    ],
    answer:0
},

{
    question: "qBraid is a platform for:",
    options:[
        "Quantum computing development",
        "Social networking",
        "Video streaming",
        "Gaming"
    ],
    answer:0
},

{
    question: "Quantum internet aims to:",
    options:[
        "Connect quantum devices",
        "Replace electricity",
        "Increase screen resolution",
        "Store movies"
    ],
    answer:0
},

{
    question: "ZX Calculus is used for:",
    options:[
        "Representing and simplifying quantum processes",
        "Creating websites",
        "Operating systems",
        "Data entry"
    ],
    answer:0
}

);// ============================================
// Quantum Computing Questions 36 - 50
// ============================================


questions.push(

{
    question:"What is QAOA mainly used for?",
    options:[
        "Optimization problems",
        "Image editing",
        "Web design",
        "File storage"
    ],
    answer:0
},

{
    question:"Quantum advantage means:",
    options:[
        "A quantum computer performs a task better than classical computers",
        "A computer has more storage",
        "A computer has a bigger screen",
        "A faster keyboard"
    ],
    answer:0
},

{
    question:"A quantum algorithm is designed to run on:",
    options:[
        "Quantum computers",
        "Printers",
        "Scanners",
        "Monitors"
    ],
    answer:0
},

{
    question:"The DiVincenzo criteria define requirements for:",
    options:[
        "Building a practical quantum computer",
        "Creating websites",
        "Developing mobile apps",
        "Designing processors"
    ],
    answer:0
},

{
    question:"Quantum states are described using:",
    options:[
        "Wave functions",
        "Text files",
        "Images",
        "Tables"
    ],
    answer:0
},

{
    question:"The probability of measuring a qubit is calculated using:",
    options:[
        "Probability amplitudes",
        "Computer memory",
        "Internet speed",
        "Storage capacity"
    ],
    answer:0
},

{
    question:"Which type of qubit uses trapped atoms?",
    options:[
        "Ion trap qubits",
        "Mechanical qubits",
        "Magnetic disks",
        "Binary chips"
    ],
    answer:0
},

{
    question:"Quantum machine learning combines:",
    options:[
        "Quantum computing and machine learning",
        "Networking and printing",
        "Hardware and batteries",
        "Games and graphics"
    ],
    answer:0
},

{
    question:"The main challenge in quantum computing is:",
    options:[
        "Error and noise control",
        "Lack of keyboards",
        "Screen size",
        "Internet cables"
    ],
    answer:0
},

{
    question:"Quantum supremacy refers to:",
    options:[
        "A quantum computer solving a task beyond classical ability",
        "A larger hard drive",
        "Faster typing",
        "Better graphics"
    ],
    answer:0
},

{
    question:"What does entanglement allow?",
    options:[
        "Correlations between quantum particles",
        "More storage space",
        "Faster charging",
        "Bigger processors"
    ],
    answer:0
},

{
    question:"A quantum register contains:",
    options:[
        "Multiple qubits",
        "Only one bit",
        "Files",
        "Images"
    ],
    answer:0
},

{
    question:"Which gate flips a qubit state?",
    options:[
        "Pauli-X gate",
        "Hadamard gate",
        "CNOT gate",
        "Phase gate"
    ],
    answer:0
},

{
    question:"CNOT gate operates on:",
    options:[
        "Two qubits",
        "One file",
        "A database",
        "A processor"
    ],
    answer:0
},

{
    question:"Quantum computing can help solve problems in:",
    options:[
        "Optimization, simulation, and cryptography",
        "Only typing",
        "Only gaming",
        "Only storage"
    ],
    answer:0
}

);


// ============================================
// Load Question Function
// ============================================

function loadQuestion(){

    let q = quizQuestions[currentQuestion];


    document.getElementById("question")
    .innerHTML =
    `${currentQuestion + 1}. ${q.question}`;


    let optionsBox =
    document.getElementById("options");


    optionsBox.innerHTML="";


    q.options.forEach((option,index)=>{


        let button =
        document.createElement("button");


        button.className="option";


        button.innerHTML=option;


        button.onclick=function(){

            selectAnswer(index);

        };


        optionsBox.appendChild(button);


    });



    let progress =
    ((currentQuestion+1) /
    quizQuestions.length)*100;


    document.getElementById("progress")
    .style.width =
    progress+"%";


}// ============================================
// Answer Selection
// ============================================

function selectAnswer(index){

    userAnswers[currentQuestion] = index;


    let buttons =
    document.querySelectorAll(".option");


    buttons.forEach((btn)=>{

        btn.style.border = "1px solid #ccc";

    });


    buttons[index].style.border =
    "3px solid #4CAF50";

}



// ============================================
// Next Question
// ============================================

function nextQuestion(){


    if(userAnswers[currentQuestion] === null){

        alert("Please select an answer before continuing.");

        return;

    }



    if(currentQuestion < quizQuestions.length - 1){

        currentQuestion++;

        loadQuestion();

    }

    else{

        showResult();

    }

}



// ============================================
// Previous Question
// ============================================

function previousQuestion(){


    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();

    }

}



// ============================================
// Calculate Score
// ============================================

function calculateScore(){


    score = 0;


    quizQuestions.forEach((question,index)=>{


        if(userAnswers[index] === question.answer){

            score++;

        }


    });


}



// ============================================
// Show Result
// ============================================

function showResult(){


    calculateScore();



    let quizArea =
    document.getElementById("quiz-container");



    quizArea.innerHTML = `

        <div class="result-box">

            <h2>🎉 Quiz Completed</h2>

            <h3>
            Your Score: ${score} / ${quizQuestions.length}
            </h3>


            <p>
            ${
            score >= 8
            ?
            "Excellent! You have a strong understanding of Quantum Computing."
            :
            "Good attempt! Keep learning Quantum Computing."
            }
            </p>


            <button onclick="reviewAnswers()">
            Review Answers
            </button>


            <button onclick="startQuiz()">
            Restart Quiz
            </button>


        </div>

    `;


}



// ============================================
// Review Answers
// ============================================

function reviewAnswers(){


    let html = `

    <h2>Answer Review</h2>

    `;



    quizQuestions.forEach((q,index)=>{


        let user =
        q.options[userAnswers[index]];


        let correct =
        q.options[q.answer];



        html += `

        <div class="review-card">

            <h4>
            ${index+1}. ${q.question}
            </h4>


            <p>
            Your Answer:
            <b>${user}</b>
            </p>


            <p>
            Correct Answer:
            <b>${correct}</b>
            </p>


        </div>


        `;


    });



    html += `

    <button onclick="startQuiz()">
    Restart Quiz
    </button>

    `;



    document.getElementById("quiz-container")
    .innerHTML = html;


}// ============================================
// Quiz Initialization
// ============================================


document.addEventListener("DOMContentLoaded", function(){


    startQuiz();


});



// ============================================
// Keyboard Navigation Support
// ============================================

document.addEventListener("keydown", function(event){


    if(event.key === "ArrowRight"){

        nextQuestion();

    }


    if(event.key === "ArrowLeft"){

        previousQuestion();

    }


});



// ============================================
// Export Quiz Data (Optional)
// ============================================

console.log(
    "QuantumVerse AI Quiz Loaded Successfully"
);

console.log(
    "Total Questions:",
    questions.length
);