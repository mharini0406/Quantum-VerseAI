/*=========================================
QuantumVerse AI
script.js
Part 1
=========================================*/

// =============================
// Global Variables
// =============================

let circuit = [];

const workspace = document.getElementById("circuitWorkspace");
const gateCount = document.getElementById("gateCount");
const depthCount = document.getElementById("depthCount");
const statusText = document.getElementById("statusText");

// =============================
// Render Circuit Workspace
// =============================

function renderCircuit() {

    if (!workspace) return;

    workspace.innerHTML = "";

    if (circuit.length === 0) {

        workspace.innerHTML = `
            <div class="empty-workspace">
                No gates added yet.
            </div>
        `;

    } else {

        circuit.forEach((gate, index) => {

            const gateBox = document.createElement("div");

            gateBox.className = "workspace-gate";

            gateBox.innerHTML = `
                <span>${gate}</span>

                <button
                    class="remove-gate"
                    onclick="removeGate(${index})">
                    ✕
                </button>
            `;

            workspace.appendChild(gateBox);

        });

    }

    updateStatistics();

}

// =============================
// Add Gate
// =============================

function addGate(gate) {

    circuit.push(gate);

    renderCircuit();

}

// =============================
// Remove Gate
// =============================

function removeGate(index) {

    circuit.splice(index, 1);

    renderCircuit();

}

// =============================
// Clear Circuit
// =============================

function clearCircuit() {

    circuit = [];

    renderCircuit();

    const measurementOutput =
        document.getElementById("measurementOutput");

    if (measurementOutput)
        measurementOutput.textContent =
            "Waiting for execution...";

    const stateVector =
        document.getElementById("stateVector");

    if (stateVector)
        stateVector.textContent = "|0⟩";

    const explanation =
        document.getElementById("simulationExplanation");

    if (explanation)
        explanation.textContent =
            "Run a circuit to receive an explanation.";

    const executionLog =
        document.getElementById("executionLog");

    if (executionLog)
        executionLog.textContent =
            "QuantumVerse AI Simulator Ready...\nWaiting for execution...";

    statusText.textContent = "Ready";

}

// =============================
// Update Statistics
// =============================

function updateStatistics() {

    if (gateCount)
        gateCount.textContent = circuit.length;

    if (depthCount)
        depthCount.textContent = circuit.length;

    if (statusText)
        statusText.textContent = "Editing";

}

// =============================
// Gate Buttons
// =============================

document.addEventListener("DOMContentLoaded", function () {

    renderCircuit();

    const gateButtons =
        document.querySelectorAll(".gate-btn");

    gateButtons.forEach(button => {

        button.addEventListener("click", function () {

            addGate(this.dataset.gate);

        });

    });

    const clearButton =
        document.getElementById("clearCircuit");

    if (clearButton) {

        clearButton.addEventListener("click", clearCircuit);

    }

});

/*=========================================
Run Quantum Circuit
Part 2
=========================================*/

const runButton = document.getElementById("runCircuit");

if (runButton) {

    runButton.addEventListener("click", runCircuit);

}

// ======================================
// Run Circuit
// ======================================

async function runCircuit() {

    if (circuit.length === 0) {

        alert("Please add at least one quantum gate.");

        return;

    }

    statusText.textContent = "Running...";

    try {

        const response = await fetch("/run_circuit", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                gates: circuit

            })

        });

        const result = await response.json();

        if (result.success) {

            displayResults(result);

            statusText.textContent = "Completed";

        }

        else {

            statusText.textContent = "Error";

            alert(result.error);

        }

    }

    catch (error) {

        console.error(error);

        statusText.textContent = "Connection Error";

    }

}


// ======================================
// Display Results
// ======================================

function displayResults(result) {

    showMeasurement(result);

    showStatevector(result);

    showProbabilities(result);

    showExplanation(result);

    showExecutionLog(result);

    updateInformation(result);

}



// ======================================
// Measurement Counts
// ======================================

function showMeasurement(result) {

    const measurementOutput = document.getElementById("measurementOutput");

    if (!measurementOutput) return;

    measurementOutput.textContent = JSON.stringify(

        result.counts,

        null,

        4

    );

}



// ======================================
// State Vector
// ======================================

function showStatevector(result) {

    const stateVector = document.getElementById("stateVector");

    if (!stateVector) return;

    let text = "";

    result.statevector.forEach((value, index) => {

        text +=

        "|" + index + "⟩  :  "

        + value.real

        + " + "

        + value.imag

        + "i\n";

    });

    stateVector.textContent = text;

}



// ======================================
// Probability Output
// ======================================

function showProbabilities(result) {

    const explanation = document.getElementById("simulationExplanation");

    if (!explanation) return;

    let html = "<strong>Measurement Probabilities</strong><br><br>";

    for (const state in result.probabilities) {

        html +=

            "|"

            + state

            + "⟩ : "

            + result.probabilities[state]

            + "%<br>";

    }

    explanation.innerHTML = html;

}



// ======================================
// Educational Explanation
// ======================================

function showExplanation(result) {

    const executionLog = document.getElementById("executionLog");

    if (!executionLog) return;

    let text = "";

    result.explanation.forEach(item => {

        text +=

        "• "

        + item

        + "\n";

    });

    executionLog.textContent = text;

}



// ======================================
// Update Statistics
// ======================================

function updateInformation(result) {

    const qubits = document.getElementById("qubitCount");

    if (qubits)

        qubits.textContent = result.num_qubits;

    if (gateCount)

        gateCount.textContent = result.gates.length;

    if (depthCount)

        depthCount.textContent = result.depth;

}



// ======================================
// Execution Log
// ======================================

function showExecutionLog(result) {

    const executionLog = document.getElementById("executionLog");

    if (!executionLog) return;

    executionLog.textContent +=

        "\n\nCircuit Executed Successfully.\n";

}

/*=========================================
QuantumVerse AI
script.js
Part 3
=========================================*/

// =====================================
// Chart Variables
// =====================================

let probabilityChart = null;
let histogramChart = null;


// =====================================
// Draw Probability Chart
// =====================================

function drawProbabilityChart(probabilities){

    const canvas = document.getElementById("probabilityChart");

    if(!canvas) return;

    const labels = Object.keys(probabilities);

    const values = Object.values(probabilities);

    if(probabilityChart){

        probabilityChart.destroy();

    }

    probabilityChart = new Chart(canvas,{

        type:"bar",

        data:{

            labels:labels,

            datasets:[{

                label:"Probability (%)",

                data:values,

                borderWidth:1

            }]

        },

        options:{

            responsive:true,

            scales:{

                y:{

                    beginAtZero:true,

                    max:100

                }

            }

        }

    });

}



// =====================================
// Draw Histogram
// =====================================

function drawHistogram(counts){

    const canvas = document.getElementById("histogramChart");

    if(!canvas) return;

    const labels = Object.keys(counts);

    const values = Object.values(counts);

    if(histogramChart){

        histogramChart.destroy();

    }

    histogramChart = new Chart(canvas,{

        type:"bar",

        data:{

            labels:labels,

            datasets:[{

                label:"Measurement Counts",

                data:values,

                borderWidth:1

            }]

        },

        options:{

            responsive:true,

            scales:{

                y:{

                    beginAtZero:true

                }

            }

        }

    });

}



// =====================================
// Update displayResults()
// =====================================

const oldDisplayResults = displayResults;

displayResults = function(result){

    oldDisplayResults(result);

    drawProbabilityChart(result.probabilities);

    drawHistogram(result.counts);

}



// =====================================
// Example Circuits
// =====================================

document.querySelectorAll(".loadExample").forEach(button=>{

    button.addEventListener("click",function(){

        const example=this.dataset.example;

        if(example==="bell"){

            circuit=["H","CX","Measure"];

        }

        else if(example==="grover"){

            circuit=["H","H","X","CX","Measure"];

        }

        else if(example==="qft"){

            circuit=["H","S","T","CX","Measure"];

        }

        renderCircuit();

    });

});



// =====================================
// Export Circuit
// =====================================

document.querySelectorAll(".btn-primary").forEach(button=>{

    if(button.textContent.includes("Export")){

        button.addEventListener("click",function(){

            const text=JSON.stringify(circuit,null,4);

            const blob=new Blob([text],{type:"application/json"});

            const url=URL.createObjectURL(blob);

            const a=document.createElement("a");

            a.href=url;

            a.download="quantum_circuit.json";

            a.click();

        });

    }

});



// =====================================
// Save Circuit (Browser)
// =====================================

document.querySelectorAll(".btn-secondary").forEach(button=>{

    if(button.textContent.includes("Save")){

        button.addEventListener("click",function(){

            localStorage.setItem(

                "QuantumVerseCircuit",

                JSON.stringify(circuit)

            );

            alert("Circuit saved successfully.");

        });

    }

});



// =====================================
// Restore Circuit
// =====================================

window.addEventListener("load",function(){

    const saved=

    localStorage.getItem(

        "QuantumVerseCircuit"

    );

    if(saved){

        circuit=JSON.parse(saved);

        renderCircuit();

    }

});



// =====================================
// Keyboard Shortcuts
// =====================================

document.addEventListener("keydown",function(e){

    if(e.ctrlKey && e.key==="r"){

        e.preventDefault();

        runCircuit();

    }

    if(e.ctrlKey && e.key==="Delete"){

        e.preventDefault();

        clearCircuit();

    }

});



// =====================================
// Finished
// =====================================

console.log("QuantumVerse AI Simulator Loaded Successfully.");