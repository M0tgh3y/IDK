const radioButtons = document.querySelectorAll('input[type="radio"]');
const name = document.querySelector('.getname');
const subbtn = document.getElementById("submitbtn");

const correctAnswers = {
  1: 'q12', // Motahare
  2: 'q23', // Blue
  3: 'q32', // Italy
  4: 'q43', // The silent mathematicion
  5: 'q53', // Myself
  6: 'q63', // Myself
  7: 'q73', // Better days
  8: 'q81', // پشمام
  9: 'q94', // Absolutely
  10: 'q101' // Osean
};

function checkAnswers() {
  let score = 0;
  radioButtons.forEach((radioButton) => {
    if (radioButton.checked && radioButton.id === correctAnswers[radioButton.name]) {
      score++;
    }
  });
  return score;
}

subbtn.addEventListener('click', () => {
    const score = checkAnswers();
    const paragraph = document.getElementById("answers");
    if (score <= 5) {
        paragraph.innerHTML = `${name.value}, I'm so sorry for you.<br>Your score is: ${score}`;
    } else if (score > 5 && score <= 9) {
        paragraph.innerHTML = `${name.value}, I'm happy for you. You know Motahare!<br>Your score is: ${score}`;
    } else if (score === 10) {
        paragraph.innerHTML = `You are Motahare or a CHEATER.<br>Your score is: ${score}`;
    }
});

