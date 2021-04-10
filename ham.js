
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");

}

const navLink=document.querySelector("navlink");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenue() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}