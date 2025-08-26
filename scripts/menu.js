(function main() {
  var menu = document.querySelector(".nav");
  var menuToggle = document.querySelector(".menu-button");
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
    menuToggle.classList.toggle("morphed");
    menuToggle.innerHTML = menu.classList.contains("open")
      ? "&times;"
      : "&#9776;";
  });
  var header = document.querySelector(".header");
  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY * 0.5;
    var transform = "translateY(" + Math.round(scroll) + "px)";
    header.style.transform = transform;
    header.style.webkitTransform = transform;
  });
})();
