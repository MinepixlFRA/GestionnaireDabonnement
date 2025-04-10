const headerBtn = document.getElementById("header-btn");
const nav = document.querySelector("nav");
const bgNav = document.getElementById("close-nav");

function toggleNav() {
	nav.classList.toggle("hidden");
	bgNav.classList.toggle("hidden");
}