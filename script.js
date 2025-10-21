let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let homeImg = document.querySelector('.home-img img');


const portrait = "./images/portraitGpt.png";
const portraitGpt = "./images/portrait.JPG";

homeImg.addEventListener("click", () => {
  homeImg.src = homeImg.src.includes("portraitGpt.png") ? portraitGpt : portrait;
});


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

