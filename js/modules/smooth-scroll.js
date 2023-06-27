export default function initSmoothScroll() {
  const button = document.querySelector("[data-smoothScroll]");
  if (button) {
    function activeScroll(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    button.addEventListener("click", activeScroll);
  }
}
