window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#menu").classList.toggle("is-active");
  });
  document.querySelector("#close").addEventListener("click", function () {
    document.querySelector("#menu").classList.toggle("is-active");
  });
});
