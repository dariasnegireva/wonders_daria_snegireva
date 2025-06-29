const mobileMenuOpener = document.querySelector("#burger-img")
const mobileMenu = document.querySelector(".wonders-mobile-nav")

mobileMenuOpener.addEventListener("click", (e) => {
    const isMenuOpened = mobileMenu.classList.contains("wonders-mobile-nav-opened")
    if (!isMenuOpened) {
        mobileMenuOpener.src = "assets/images/burger-closed.svg"
        mobileMenu.classList.add("wonders-mobile-nav-opened")
    } else {
        mobileMenuOpener.src = "assets/images/Menu.svg"
        mobileMenu.classList.remove("wonders-mobile-nav-opened")
    }
})

const personCountInput = document.querySelector("#person-count")
const personCountPlus = document.querySelector("#person-count-plus")
const personCountMinus = document.querySelector("#person-count-minus")

personCountPlus.addEventListener("click", (e) => {
    const currentValue = Number(personCountInput.value)
    if (currentValue < 12) {
        personCountInput.value = currentValue + 1
    }
})

personCountMinus.addEventListener("click", (e) => {
    const currentValue = Number(personCountInput.value)
    if (currentValue > 1) {
        personCountInput.value = currentValue - 1
    }
})


