let slider = document.querySelector(".nav-links");
let burger = document
  .querySelector(".burger")
  .addEventListener("click", function () {
    slider.style.right = 0;
  });

let cancel = document
  .querySelector(".cancel")
  .addEventListener("click", function () {
    slider.style.right = "-200px";
  });
