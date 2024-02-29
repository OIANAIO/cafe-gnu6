document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector("nav");
  var navbarSquare = document.querySelector(".navsquare"); // 상단바 네모
  var navbarText = document.querySelectorAll(".navbutton"); // 상단텍스트
  var navbarSquraeSub = document.querySelector(".navsquare-sub") // 서브메뉴 네모
  var navbarTextSub = document.querySelectorAll(".navsubbutton") // 서브텍스트

  init();

  function init() {
    navDown();
    navDownColorChange();
  }

  navbar.addEventListener("mouseover", function(){
    mouseOverNav();
  })

  navbar.addEventListener("mouseout",function(){
    mouseOutNav();
  })

  function mouseOutNav(){
    subNavUp();
    navSubUpColorChange();
  }

  function mouseOverNav(){
    subNavDown();
    navSubDownColorChange()
  }

  function navUp() {
    navbarSquare.classList.add("shrink");
    navbarSquare.classList.remove("expanded");
  }
  function navDown() {
    navbarSquare.classList.add("expanded");
    navbarSquare.classList.remove("shrink");
  }
  function navUpColorChange() {
    navbarText.forEach(function (button) {
      button.classList.add("text-white");
      button.classList.remove("text-success");
    });
  }
  function navDownColorChange() {
    navbarText.forEach(function (button) {
      button.classList.add("text-success");
      button.classList.remove("text-white");
    });
  }
  function subNavUp(){
    navbarSquraeSub.classList.remove("expanded");
    navbarSquraeSub.classList.add("shrink");
  }
  function subNavDown() {
    navbarSquraeSub.classList.add("expanded");
    navbarSquraeSub.classList.remove("shrink");
  }
  function navSubUpColorChange() {
    navbarTextSub.forEach(function (button) {
      button.classList.add("text-white");
      button.classList.remove("text-black-50");
    });
  }
  function navSubDownColorChange() {
    navbarTextSub.forEach(function (button) {
      button.classList.add("text-black-50");
      button.classList.remove("text-white");
    });
  }
});
