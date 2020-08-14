const toggleTag = document.querySelector("button.toggle-nav");
const mainTag = document.querySelector("main");
const settingsOptionTags = document.querySelectorAll(".settingsOption");

toggleTag.addEventListener("click", () => {
  mainTag.classList.toggle("open");

  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="assets/close.svg" alt="close icon"> Close`;
    settingsOptionTags.forEach(tag => tag.setAttribute("tabindex", "0"));
  } else {
    toggleTag.innerHTML = `<img src="assets/menu.svg" alt="menu icon"> Menu`;
    settingsOptionTags.forEach(tag => tag.setAttribute("tabindex", "-1"));
  }
});
