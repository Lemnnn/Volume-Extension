const slider = document.getElementById("volumeSlider");
const value = document.querySelector(".percentage");
value.innerHTML = slider.value;

slider.oninput = function () {
  value.innerHTML = this.value;
};
