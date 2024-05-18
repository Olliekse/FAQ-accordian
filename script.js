document.addEventListener("DOMContentLoaded", () => {
  const expandBox = (e) => {
    const btn = e.currentTarget.querySelector(".faq__question-btn");
    const paragraph = e.currentTarget.nextElementSibling;
    const question = e.currentTarget.querySelector(".faq__question");

    if (btn.getAttribute("src") === "./assets/images/icon-plus.svg") {
      btn.setAttribute("src", "./assets/images/icon-minus.svg");
      paragraph.classList.remove("hidden");
      paragraph.classList.add("visible");
      question.classList.add("faq__question_active");
    } else {
      btn.setAttribute("src", "./assets/images/icon-plus.svg");
      paragraph.classList.remove("visible");
      paragraph.classList.add("hidden");
      question.classList.remove("faq__question_active");
    }
  };

  const questionContainers = document.querySelectorAll(
    ".faq__question-container"
  );
  questionContainers.forEach((container) => {
    container.addEventListener("click", expandBox);
  });
});
