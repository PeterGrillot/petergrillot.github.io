(function main() {
  var years = document.querySelector("#years");
  years.textContent = new Date().getFullYear() - 2011;
  var header = document.querySelector(".header");
  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY * 0.6;
    var transform = "translateY(" + Math.round(scroll) + "px)";
    header.style.transform = transform;
    header.style.webkitTransform = transform;
  });
})();
