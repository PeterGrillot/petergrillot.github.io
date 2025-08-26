(function main () {
  var menu = document.querySelector(".nav");
  var menuToggle = document.querySelector(".menu-button");
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
    menuToggle.classList.toggle("morphed");
    menuToggle.innerHTML = menu.classList.contains("open") ? "&times;" : "&#9776;";
  });
})();
