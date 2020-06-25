const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");

toggleTag.addEventListener("click", () => {
  mainTag.classList.toggle("open");

  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="/plant-life/assets/close.svg" alt="close icon"> Close`
  } else {
    toggleTag.innerHTML = `<img src="/plant-life/assets/menu.svg" alt="menu icon"> Menu`;
  }
})
