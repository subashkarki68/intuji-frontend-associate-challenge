const sideNav = document.getElementById("side-nav");
const burgerMenu = document.getElementById("burger-menu");
console.log("🚀 ~ sideNav:", sideNav)
sideNav.classList.add("hidden");
// burgerMenu.classList.add("hidden");

burgerMenu.addEventListener("click", () => {
    sideNav.classList.toggle("hidden");
});
