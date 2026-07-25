from flask import Flask, render_template

app = Flask(__name__)
LESSONS = [
    {
        "id": 0,
        "topic": "Introduction to Quantum Computing",
        "slug": "introduction",
        "content": """
Quantum computing is a new computing paradigm based on the principles of quantum mechanics.
Unlike classical computers that use bits (0 or 1), quantum computers use qubits, which can exist
in multiple states simultaneously. This enables quantum computers to solve certain complex problems
much faster than classical computers.

Key Points:
• Based on quantum mechanics.
• Uses qubits instead of bits.
• Solves optimization, cryptography, and simulation problems efficiently.
"""
    },

    {
        "id": 1,
        "topic": "History of Quantum Computing",
        "slug": "history",
        "content": """
The idea of quantum computing began in the 1980s.
Richard Feynman proposed using quantum systems to simulate nature.
David Deutsch later developed the concept of a universal quantum computer.

Key Points:
• 1981 - Richard Feynman
• 1985 - David Deutsch
• IBM, Google and Microsoft now develop quantum computers.
"""
    },

    {
        "id": 2,
        "topic": "Classical vs Quantum Computing",
        "slug": "classical",
        "content": """
Classical computers use bits that are either 0 or 1.
Quantum computers use qubits that can be 0, 1, or both simultaneously.

Classical Computing
• Binary bits
• Sequential processing

Quantum Computing
• Qubits
• Superposition
• Entanglement
"""
    },

    {
        "id": 3,
        "topic": "Qubits",
        "slug": "qubits",
        "content": """
A qubit is the fundamental unit of quantum information.

Unlike classical bits, qubits can exist in superposition,
allowing them to represent multiple possibilities simultaneously.
"""
    },

    {
        "id": 4,
        "topic": "Superposition",
        "slug": "superposition",
        "content": """
Superposition allows a qubit to exist in multiple states until it is measured.

This property gives quantum computers their computational advantage.
"""
    },

    {
        "id": 5,
        "topic": "Quantum Entanglement",
        "slug": "entanglement",
        "content": """
Entanglement is a quantum phenomenon where two qubits become connected.

Changing one qubit instantly affects the other regardless of distance.
"""
    },

    {
        "id": 6,
        "topic": "Quantum Gates",
        "slug": "gates",
        "content": """
Quantum gates manipulate qubits.

Examples:
• Hadamard Gate
• Pauli-X Gate
• CNOT Gate
"""
    },

    {
        "id": 7,
        "topic": "Quantum Circuits",
        "slug": "circuits",
        "content": """
Quantum circuits are sequences of quantum gates.

They perform quantum computations on qubits.
"""
    },

    {
        "id": 8,
        "topic": "Quantum Algorithms",
        "slug": "algorithms",
        "content": """
Popular algorithms include:
• Shor's Algorithm
• Grover's Algorithm
• Quantum Fourier Transform
"""
    },

    {
        "id": 9,
        "topic": "Qiskit",
        "slug": "qiskit",
        "content": """
Qiskit is IBM's open-source Python framework
used to program quantum computers.
"""
    },

    {
        "id": 10,
        "topic": "Applications of Quantum Computing",
        "slug": "applications",
        "content": """
Applications include:

• Drug Discovery
• Cryptography
• Machine Learning
• Financial Modeling
• Optimization
"""
    },

    {
        "id": 11,
        "topic": "Future of Quantum Computing",
        "slug": "future",
        "content": """
Quantum computing is expected to transform healthcare,
cybersecurity, finance, artificial intelligence,
and scientific research over the coming decades.
"""
    }
]


# ==========================
# Home
# ==========================
@app.route("/")
def home():
    return render_template("index.html")


# ==========================
# Learn
# ==========================
@app.route("/learn")
def learn():
    return render_template(
        "learn.html",
        lessons=LESSONS
    )


@app.route("/lesson/<int:lesson_id>")
def lesson(lesson_id):

    if lesson_id < 0 or lesson_id >= len(LESSONS):
        return "Lesson not found"

    lesson = LESSONS[lesson_id]

    previous = lesson_id - 1 if lesson_id > 0 else None
    next = lesson_id + 1 if lesson_id < len(LESSONS) - 1 else None

    return render_template(
        "lesson.html",
        lesson=lesson,
        lessons=LESSONS,
        previous=previous,
        next=next
    )


# ==========================
# Quantum Lab
# ==========================
@app.route("/lab")
def lab():
    return render_template("lab.html")


# ==========================
# Simulator
# ==========================
@app.route("/simulator")
def simulator():
    return render_template("simulator.html")


# ==========================
# Quiz
# ==========================
@app.route("/quiz")
def quiz():
    return render_template("quiz.html")


# ==========================
# AI Tutor
# ==========================
@app.route("/ai_tutor")
def ai_tutor():
    return render_template("ai_tutor.html")


# ==========================
# Dashboard
# ==========================
@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


# ==========================
# About
# ==========================
@app.route("/about")
def about():
    return render_template("about.html")


# ==========================
# Contact
# ==========================
@app.route("/contact")
def contact():
    return render_template("contact.html")


# ==========================
# Error Pages
# ==========================
@app.errorhandler(404)
def page_not_found(error):
    return render_template("404.html"), 404



# ==========================
# Run Application
# ==========================
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )