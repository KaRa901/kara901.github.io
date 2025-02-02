import throttle from "https://cdn.skypack.dev/lodash@4/throttle";

function onScroll() {
  if (window.pageYOffset) {
    $$header.classList.add("is-active");
  } else {
    $$header.classList.remove("is-active");
  }
}

const $$header = document.querySelector(".js-header");

window.addEventListener("scroll", throttle(onScroll, 300));

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const header_right = document.querySelector('.header_right');

  hamburger.addEventListener('click', () => {
      header_right.classList.toggle('active');
  });
});

     
function enlargeImage(imgElement) {
  const overlay = document.getElementById('overlay');
  const enlargedImage = document.getElementById('enlargedImage');
  enlargedImage.src = imgElement.src;
  overlay.style.display = 'flex';
}

function closeImage() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}