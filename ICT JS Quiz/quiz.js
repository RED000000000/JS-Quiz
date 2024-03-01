const questions = [
  {
    question: "What is the summer capital of the Philippines?",
    options: ["Baguio", "Boracay", "Luzon", "Isabella"],
    correctAnswer: "Baguio"
  },
  {
    question: "Who was the Ancient Greek God of the Sun?",
    options: ["Helios", "Zeus", "Hercules", "Apollo"],
    correctAnswer: "Apollo"
  },
  {
    question: "Aureolin is a shade of what color?",
    options: ["Yellow", "Blue", "Red", "Green"],
    correctAnswer: "Yellow"
  },
  {
    question: "What was the roman name of Aphrodite the Goddess of Love of Greek mythology?",
    options: ["Mars", "Saturn", "Venus", "Jupiter"],
    correctAnswer: "Venus"
  },
  {
    question: "Kratos is the main character of what video game series?",
    options: ["Read Dead Redemption", "Mega Man", "The Legend of Zelda", "God of War"],
    correctAnswer: "God of War"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const currentQ = questions[currentQuestion];

  questionContainer.textContent = currentQ.question;
  optionsContainer.innerHTML = "";

  currentQ.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestion].correctAnswer;
  const resultMessage = selectedAnswer === correctAnswer ? "Correct!" : `Incorrect! The correct answer is ${correctAnswer}.`;

  alert(resultMessage);

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    alert("Quiz completed!");
    resetQuiz();
  }
}
function resetQuiz() {
window.location.href='Front page.html';

}


loadQuestion();
