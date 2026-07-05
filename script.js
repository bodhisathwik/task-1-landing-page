document.addEventListener("DOMContentLoaded", () => {

    // NAVBAR SCROLL
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){
            navbar.classList.add("scrolled");
        }else{
            navbar.classList.remove("scrolled");
        }

    });

    // MOBILE MENU
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

});