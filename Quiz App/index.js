
const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Earth', 'Jupiter'],
      answer: 'Mars'
    },
    {
      question: 'Who wrote "To be, or not to be"?',
      options: ['Shakespeare', 'Hemingway', 'Fitzgerald', 'Twain'],
      answer: 'Shakespeare'
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const quizContainer = document.getElementById('quizContainer');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('nextButton');
  const resultContainer = document.getElementById('result');
  const scoreElement = document.getElementById('score');

  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => {
        if (option === currentQuestion.answer) {
          score++;
        }
        if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex++;
          loadQuestion();
        } else {
          showResult();
        }
      });
      optionsElement.appendChild(button);
    });
  }

  function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = score;
  }

  nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      showResult();
    }
  });

  loadQuestion();
