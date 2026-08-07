document.addEventListener("DOMContentLoaded", () => {
  // FAQ 折叠展开
  document.querySelectorAll(".accordion-item > button").forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.classList.toggle("open");
    });
  });

});
