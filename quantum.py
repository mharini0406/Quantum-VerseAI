"""
==========================================
QuantumVerse AI
quantum.py
Part 1
==========================================
"""

from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit.quantum_info import Statevector
import numpy as np


# ==========================================
# Create Circuit
# ==========================================

def create_circuit(qubits=2):
    """
    Creates a quantum circuit.

    Parameters
    ----------
    qubits : int

    Returns
    -------
    QuantumCircuit
    """

    circuit = QuantumCircuit(qubits, qubits)

    return circuit


# ==========================================
# Apply Single Gate
# ==========================================

def apply_gate(circuit, gate, target=0):

    gate = gate.upper()

    if gate == "H":
        circuit.h(target)

    elif gate == "X":
        circuit.x(target)

    elif gate == "Y":
        circuit.y(target)

    elif gate == "Z":
        circuit.z(target)

    elif gate == "S":
        circuit.s(target)

    elif gate == "T":
        circuit.t(target)

    elif gate == "I":
        circuit.id(target)

    return circuit


# ==========================================
# Apply Two-Qubit Gates
# ==========================================

def apply_two_qubit_gate(circuit,
                         gate,
                         control=0,
                         target=1):

    gate = gate.upper()

    if gate == "CX" or gate == "CNOT":

        circuit.cx(control, target)

    elif gate == "CZ":

        circuit.cz(control, target)

    elif gate == "SWAP":

        circuit.swap(control, target)

    return circuit


# ==========================================
# Measurement
# ==========================================

def measure_all(circuit):

    circuit.measure_all()

    return circuit


# ==========================================
# Build Circuit From Gate List
# ==========================================

def build_circuit(gates):

    """
    gates example

    [
        "H",
        "CX",
        "Measure"
    ]
    """

    qc = create_circuit()

    for gate in gates:

        gate = gate.upper()

        if gate in ["H","X","Y","Z","S","T","I"]:

            apply_gate(qc, gate)

        elif gate in ["CX","CNOT","CZ","SWAP"]:

            apply_two_qubit_gate(qc, gate)

        elif gate == "MEASURE":

            measure_all(qc)

    return qc

# ==========================================
# Run Quantum Circuit
# ==========================================

def run_circuit(qc, shots=1024):
    """
    Executes the circuit using AerSimulator
    and returns measurement counts.
    """

    simulator = AerSimulator()

    compiled = qc.copy()

    result = simulator.run(
        compiled,
        shots=shots
    ).result()

    counts = result.get_counts()

    return counts


# ==========================================
# State Vector
# ==========================================

def get_statevector(gates):
    """
    Returns statevector before measurement.
    """

    qc = QuantumCircuit(2)

    for gate in gates:

        gate = gate.upper()

        if gate == "H":
            qc.h(0)

        elif gate == "X":
            qc.x(0)

        elif gate == "Y":
            qc.y(0)

        elif gate == "Z":
            qc.z(0)

        elif gate == "S":
            qc.s(0)

        elif gate == "T":
            qc.t(0)

        elif gate in ["CX", "CNOT"]:
            qc.cx(0, 1)

        elif gate == "CZ":
            qc.cz(0, 1)

        elif gate == "SWAP":
            qc.swap(0, 1)

    state = Statevector.from_instruction(qc)

    return state


# ==========================================
# Probabilities
# ==========================================

def get_probabilities(statevector):
    """
    Converts statevector amplitudes
    into probabilities.
    """

    probabilities = {}

    values = statevector.probabilities_dict()

    for state, probability in values.items():

        probabilities[state] = round(
            float(probability) * 100,
            2
        )

    return probabilities


# ==========================================
# Educational Explanation
# ==========================================

def explain_circuit(gates):

    explanation = []

    for gate in gates:

        gate = gate.upper()

        if gate == "H":
            explanation.append(
                "Hadamard gate creates superposition."
            )

        elif gate == "X":
            explanation.append(
                "Pauli-X flips |0⟩ to |1⟩."
            )

        elif gate == "Y":
            explanation.append(
                "Pauli-Y rotates around the Y-axis."
            )

        elif gate == "Z":
            explanation.append(
                "Pauli-Z changes the phase."
            )

        elif gate == "S":
            explanation.append(
                "S gate applies a π/2 phase shift."
            )

        elif gate == "T":
            explanation.append(
                "T gate applies a π/4 phase shift."
            )

        elif gate in ["CX", "CNOT"]:
            explanation.append(
                "CNOT creates entanglement between qubits."
            )

        elif gate == "CZ":
            explanation.append(
                "Controlled-Z introduces a conditional phase."
            )

        elif gate == "SWAP":
            explanation.append(
                "SWAP exchanges the states of two qubits."
            )

        elif gate == "MEASURE":
            explanation.append(
                "Measurement collapses the quantum state."
            )

    return explanation

# ==========================================
# Main Function
# ==========================================

def run_quantum_circuit(gates):
    """
    Runs the complete quantum workflow and
    returns results in dictionary format.
    """

    try:

        # Build circuit
        circuit = build_circuit(gates)

        # Execute circuit
        counts = run_circuit(circuit)

        # Statevector (before measurement)
        state = get_statevector(gates)

        # Probabilities
        probabilities = get_probabilities(state)

        # Educational explanation
        explanation = explain_circuit(gates)

        # Statevector formatting
        statevector = []

        for value in state.data:
            statevector.append({
                "real": round(float(value.real), 6),
                "imag": round(float(value.imag), 6)
            })

        # Circuit drawing (text)
        circuit_diagram = circuit.draw(output="text").single_string()

        return {

            "success": True,

            "gates": gates,

            "counts": counts,

            "probabilities": probabilities,

            "statevector": statevector,

            "circuit": circuit_diagram,

            "explanation": explanation,

            "depth": circuit.depth(),

            "num_qubits": circuit.num_qubits,

            "num_clbits": circuit.num_clbits

        }

    except Exception as e:

        return {

            "success": False,

            "error": str(e)

        }


# ==========================================
# Local Testing
# ==========================================

if __name__ == "__main__":

    sample = [

        "H",

        "CX",

        "Measure"

    ]

    result = run_quantum_circuit(sample)

    print("\n========== QuantumVerse AI ==========\n")

    print("Circuit:\n")
    print(result["circuit"])

    print("\nCounts:")
    print(result["counts"])

    print("\nProbabilities:")
    print(result["probabilities"])

    print("\nStatevector:")
    print(result["statevector"])

    print("\nExplanation:")

    for item in result["explanation"]:
        print("-", item)

    print("\nDepth:", result["depth"])
    print("Qubits:", result["num_qubits"])