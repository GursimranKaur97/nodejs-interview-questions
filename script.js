async function fetchQuestions() {
    try {
        const response = await fetch('./constant.json');  // Fetch the JSON file
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const questions = await response.json();  // Parse the JSON
        displayQuestions(questions);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayQuestions(questions) {
    const beginnerContainer = document.getElementById('beginner-questions-container');
    const intermediateContainer = document.getElementById('intermediate-questions-container');
    const advancedContainer = document.getElementById('advanced-questions-container');

    questions.forEach(question => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<strong>${question.question}</strong><p>${question.answer}</p>`;
        
        if (question.level === 'beginner') {
            beginnerContainer.appendChild(questionDiv);
        } else if (question.level === 'intermediate') {
            intermediateContainer.appendChild(questionDiv);
        } else if (question.level === 'advanced') {
            advancedContainer.appendChild(questionDiv);
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchQuestions);