<script>
  var currentSlide = 0;
  var slider = document.getElementById("slider");
  var slides = document.querySelectorAll(".slider-item");
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }
  function updateSlider() {
    slider.style.transform = "translateX(" + -currentSlide * 100 + "%)";
  }
  setInterval(nextSlide, 2000);
</script>
