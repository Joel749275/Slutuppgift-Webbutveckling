document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
    const dropdown = document.querySelector(".dropdown");
  
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  
    // Dropdown-knapp funkar med klick på mobil
    const dropbtn = document.querySelector(".dropbtn");
    dropbtn.addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });
  });