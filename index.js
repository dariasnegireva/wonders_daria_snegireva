const mobileMenuOpener = document.querySelector("#burger-img")
const mobileMenu = document.querySelector(".wonders-mobile-nav")

mobileMenuOpener.addEventListener("click", (e) => {
    const isMenuOpened = mobileMenu.classList.contains("wonders-mobile-nav-opened")
    if (!isMenuOpened) {
        mobileMenuOpener.src = "styles/img/burger-closed.svg"
        mobileMenu.classList.add("wonders-mobile-nav-opened")
    } else {
        mobileMenuOpener.src = "styles/img/Menu.svg"
        mobileMenu.classList.remove("wonders-mobile-nav-opened")
    }
})

