document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("burger").addEventListener("click", function () {
  document.getElementById("modal").classList.toggle("hidden");
});
document
  .getElementById("close-modal")
  .addEventListener("click", function () {
    document.getElementById("modal").classList.toggle("hidden");
  });