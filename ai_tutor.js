// ================================
// QuantumVerse AI Tutor - Part 1
// ================================

// Chat messages container
const chatBox = document.getElementById("chatBox");

// User input
const userInput = document.getElementById("userInput");

// Knowledge base (Part 2 will add all questions here)
const knowledgeBase = [

{
keyword:"quantum computing",
answer:"Quantum computing is a type of computing that uses the principles of quantum mechanics to process information. It can solve certain complex problems much faster than classical computers."
},

{
keyword:"qubit",
answer:"A qubit (quantum bit) is the basic unit of information in a quantum computer. Unlike a classical bit, it can represent both 0 and 1 at the same time."
},

{
keyword:"bit",
answer:"A classical bit can only be 0 or 1, whereas a qubit can exist in a combination of both states simultaneously due to superposition."
},

{
keyword:"superposition",
answer:"Superposition is the ability of a qubit to exist in multiple states at the same time until it is measured."
},

{
keyword:"entanglement",
answer:"Quantum entanglement is a phenomenon where two or more qubits become connected, so the state of one instantly affects the state of the other, even if they are far apart."
},

{
keyword:"interference",
answer:"Quantum interference is the process where quantum states combine to increase the probability of correct outcomes and reduce incorrect ones."
},

{
keyword:"measure",
answer:"When a qubit is measured, its superposition collapses, and it becomes either 0 or 1."
},

{
keyword:"quantum gate",
answer:"A quantum gate is an operation that changes the state of one or more qubits. It is the quantum equivalent of a logic gate in classical computing."
},

{
keyword:"hadamard",
answer:"The Hadamard gate creates superposition by transforming a qubit from a definite state into a combination of 0 and 1."
},

{
keyword:"pauli",
answer:"The Pauli-X gate flips a qubit from 0 to 1 or from 1 to 0, similar to the classical NOT gate."
},

{
keyword:"cnot",
answer:"The Controlled-NOT (CNOT) gate is a two-qubit gate commonly used to create quantum entanglement."
},

{
keyword:"quantum circuit",
answer:"A quantum circuit is a sequence of quantum gates applied to qubits to perform a quantum computation."
},

{
keyword:"important",
answer:"Quantum computing is important because it has the potential to solve complex problems in cryptography, optimization, artificial intelligence, drug discovery, and scientific research much faster than classical computers."
},

{
keyword:"application",
answer:"Quantum computing is used in cryptography, optimization, machine learning, drug discovery, financial modeling, and materials science."
},

{
keyword:"qiskit",
answer:"Qiskit is an open-source Python software development kit created by IBM for programming and running quantum computers."
},

{
keyword:"supremacy",
answer:"Quantum supremacy is the point at which a quantum computer performs a task that is practically impossible for the most powerful classical computers."
},

{
keyword:"decoherence",
answer:"Decoherence is the loss of a qubit's quantum properties due to interactions with its environment, which can introduce errors into computations."
},

{
keyword:"quantum algorithm",
answer:"Quantum algorithms are computational procedures designed to run on quantum computers and take advantage of quantum phenomena such as superposition and entanglement."
},

{
keyword:"shor",
answer:"Shor's Algorithm is a famous quantum algorithm used for factoring large numbers efficiently."
},

{
keyword:"grover",
answer:"Grover's Algorithm is a famous quantum algorithm used for searching unsorted databases much faster than classical algorithms."
},

{
keyword:"replace classical",
answer:"No. Quantum computers are designed to solve specific types of complex problems, while classical computers remain more efficient for everyday computing tasks such as web browsing, word processing, and gaming."
}

];

// Add a message to the chat
function addMessage(sender, message) {

    const wrapper = document.createElement("div");
    wrapper.className = sender === "user" ? "user-row" : "bot-row";

    const bubble = document.createElement("div");
    bubble.className = sender === "user" ? "user-bubble" : "bot-bubble";

    bubble.innerHTML = message;

    wrapper.appendChild(bubble);
    chatBox.appendChild(wrapper);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Typing animation
function showTyping() {

    const wrapper = document.createElement("div");
    wrapper.className = "bot-row";
    wrapper.id = "typing";

    const bubble = document.createElement("div");
    bubble.className = "bot-bubble";

    bubble.innerHTML = "Typing...";

    wrapper.appendChild(bubble);

    chatBox.appendChild(wrapper);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Remove typing
function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {
        typing.remove();
    }
}

// Find answer
// ==========================================
// Part 3 - Smart AI Search
// ==========================================

function findAnswer(question) {

    question = question.toLowerCase().trim();

    // Exact keyword search
    for (let item of knowledgeBase) {

        if (question.includes(item.keyword)) {
            return item.answer;
        }

    }

    // Natural language search
    if(question.includes("what is"))
        return "Please mention the topic. For example: What is a qubit? What is superposition? What is Qiskit?";

    if(question.includes("explain"))
        return "Sure! Please tell me which quantum topic you'd like me to explain.";

    if(question.includes("tell me about"))
        return "Please specify the topic, such as qubits, superposition, entanglement, Qiskit, Grover's Algorithm, or Shor's Algorithm.";

    if(question.includes("hello") || question.includes("hi"))
        return "Hello 👋! I'm your Quantum AI Tutor. Ask me anything about Quantum Computing Basics.";

    if(question.includes("thank"))
        return "You're welcome! 😊 Feel free to ask another quantum computing question.";

    return "I couldn't find an answer for that question. Try asking about Quantum Computing, Qubits, Superposition, Entanglement, Quantum Gates, Qiskit, Quantum Algorithms, Grover's Algorithm, or Shor's Algorithm.";
}


// Better typing animation
function showTyping(){

    const wrapper=document.createElement("div");

    wrapper.className="bot-row";

    wrapper.id="typing";

    wrapper.innerHTML=`
        <div class="bot-bubble">
            <span>Thinking...</span>
        </div>
    `;

    chatBox.appendChild(wrapper);

    chatBox.scrollTop=chatBox.scrollHeight;

}


// Welcome message
window.onload=function(){

    addMessage(
        "bot",
        "👋 Hello! I am <b>QuantumVerse AI Tutor</b>.<br><br>I can answer questions about:<br><br>• Quantum Computing<br>• Qubits<br>• Superposition<br>• Entanglement<br>• Quantum Gates<br>• Quantum Circuits<br>• Qiskit<br>• Quantum Algorithms<br>• Grover's Algorithm<br>• Shor's Algorithm"
    );

};

// Send message
function sendMessage() {

    const question = userInput.value.trim();

    if (question === "") return;

    addMessage("user", question);

    userInput.value = "";

    showTyping();

    setTimeout(() => {

        removeTyping();

        const answer = findAnswer(question);

        addMessage("bot", answer);

    }, 700);

}

// Press Enter to send
userInput.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

// Welcome message
window.onload = function(){

    addMessage(
        "bot",
        "👋 Hello! I am your <b>Quantum AI Tutor</b>.<br><br>Ask me anything about Quantum Computing Basics."
    );

};

