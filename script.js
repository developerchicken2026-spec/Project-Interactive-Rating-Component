const containerRating = document.querySelector("#container-rating");
const containerTks = document.querySelector("#container-tks");
const containerBtnRating = document.querySelectorAll(
  ".container-btn-rating button",
);
const containerBtnSubmit = document.querySelector(".container-btn");
const spanText = document.querySelector(".span-tks");
let ratingValue = 0;

containerBtnRating.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingValue = btn.textContent;
    spanText.textContent = `${ratingValue}`;
    containerBtnRating.forEach((act) => {
      act.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

containerBtnSubmit.addEventListener("click", () => {
  if (ratingValue === 0) {
    alert("Please select a rating before submitting.");
  } else {
    containerRating.style.display = "none";
    containerTks.style.display = "flex";
  }
});
