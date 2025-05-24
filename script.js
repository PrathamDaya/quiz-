const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const nextBtnEl = document.getElementById('next-btn');
const feedbackAreaEl = document.getElementById('feedback-area');

let currentQuestionIndex = 0;
let selectedOptionButton = null; // To keep track of the selected option button

function loadQuestion() {
    selectedOptionButton = null; // Reset selected option
    feedbackAreaEl.textContent = '';
    feedbackAreaEl.className = 'feedback'; // Reset feedback class
    nextBtnEl.disabled = true; // Disable next button until an option is selected

    if (currentQuestionIndex >= quizQuestions.length) {
        questionTextEl.textContent = "Quiz Completed!";
        optionsContainerEl.innerHTML = '';
        nextBtnEl.textContent = "Restart Quiz";
        nextBtnEl.disabled = false;
        nextBtnEl.onclick = () => { // Change button behavior to restart
            currentQuestionIndex = 0;
            loadQuestion();
            nextBtnEl.textContent = "Next Question";
            nextBtnEl.onclick = handleNextButtonClick; // Revert to original click handler
        };
        return;
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionTextEl.textContent = currentQuestion.questionText;
    optionsContainerEl.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(button, index, currentQuestion.correctAnswerIndex, currentQuestion.explanation));
        optionsContainerEl.appendChild(button);
    });
}

function selectOption(button, selectedIndex, correctIndex, explanation) {
    // Remove 'selected' class from previously selected option, if any
    if (selectedOptionButton) {
        selectedOptionButton.classList.remove('selected');
    }

    // Add 'selected' class to the newly clicked option
    button.classList.add('selected');
    selectedOptionButton = button; // Update the selected option button

    // Enable the Next button
    nextBtnEl.disabled = false;

    // Provide immediate feedback (optional, can be shown on next click too)
    if (selectedIndex === correctIndex) {
        feedbackAreaEl.textContent = "Correct! " + explanation;
        feedbackAreaEl.className = 'feedback correct';
    } else {
        feedbackAreaEl.textContent = "Incorrect. " + explanation;
        feedbackAreaEl.className = 'feedback incorrect';
    }
}

function handleNextButtonClick() {
    currentQuestionIndex++;
    loadQuestion();
}

// Initial setup
nextBtnEl.addEventListener('click', handleNextButtonClick);
loadQuestion(); // Load the first question when the page loads
