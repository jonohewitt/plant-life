const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

let currentSlide = 0;
let z = 1;

slideArea.addEventListener("click", () => {
  if (currentSlide < images.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  images.forEach(image => {
    image.style.animation = "";
  });

  z++;
  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = "fade 0.5s";
});

slideArea.addEventListener("mouseover", () => {
  images.forEach(image => {
    const x = Math.floor(Math.random() * 5) * 20 - 40;
    const y = Math.floor(Math.random() * 5) * 20 - 40;
    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

slideArea.addEventListener("mouseleave", () => {
  images.forEach(image => {
    image.style.transform = "";
  });
});
