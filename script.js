document.addEventListener("DOMContentLoaded", function () {
  /******************** ACTIVE INACTIVE FUNCTION STARTS HERE****************/
  document.querySelectorAll(".box").forEach(function (box) {
    box.addEventListener("click", function () {
      var childEl = box.children[0];

      if (childEl.classList.contains("active")) {
        childEl.classList.remove("active");
      } else {
        childEl.classList.add("active");
      }
    });
  });
  /******************** ACTIVE INACTIVE FUNCTION STARTS HERE****************/
});
