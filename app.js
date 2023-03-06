const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const article =
//       e.currentTarget.parentElement.parentElement;
//     article.classList.toggle("show-text");
//   });
// });

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  console.log(question);
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
