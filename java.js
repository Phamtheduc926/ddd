let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const topBar = document.querySelector('.top-bar');
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > lastScrollY) {
    // Khi kéo xuống
    topBar.classList.add('hidden-top-bar');
    navbar.classList.add('hidden-navbar');
  } else {
    // Khi kéo lên
    topBar.classList.remove('hidden-top-bar');
    navbar.classList.remove('hidden-navbar');
  }

  lastScrollY = window.scrollY;
});

$(document).ready(function(){
  $(".sub-menu").hide();//ẩn sub menu
  $(".main-menu>li").hover(function(){
      $(this).children(".sub-menu").slideToggle();
  });
});