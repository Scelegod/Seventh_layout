let mySidenav = document.getElementById("mySidenav");
let header__burger = document.querySelector(".header__burger");
window.addEventListener("click", function (e) {
  // Бургер меню с лева
  if (mySidenav.style.width == "300px") {
    mySidenav.style.width = "0";
  } else if (e.target.closest(".header__burger") == header__burger) {
    mySidenav.style.width = "300px";
  }
  
  if (e.target.closest(".sidenav") == document.querySelector(".sidenav")) {
    mySidenav.style.width = "300px";
  }
  
  if (e.target.closest(".sidenav__icons__cancel")) {
    mySidenav.style.width = "0";
  }
});