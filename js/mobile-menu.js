(() => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenuButton = document.querySelector(".mobile-menu__close-button");
  const openMenuBtn = document.querySelector(".top-bar__hamburger");

  openMenuBtn.addEventListener("click", (e) => {
    mobileMenu.classList.remove("display-none");
  });

  closeMenuButton.addEventListener("click", (e) => {
    mobileMenu.classList.add("display-none");
  });
})();
