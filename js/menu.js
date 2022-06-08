(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenuOpen);
  refs.closeMenuBtn.addEventListener("click", toggleMenuClose);

  function toggleMenuOpen() {
    refs.menu.classList.toggle("is-hidden");
  }
  function toggleMenuClose() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
