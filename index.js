// Header
const navToggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

// FAQ's section
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question__btn');

  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-answer');
      }
    });
    question.classList.toggle('show-answer');
  });
});
