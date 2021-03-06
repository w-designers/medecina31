$(document).ready(function() {
  if (document.body.clientWidth > 900) {
    $('.doctors-list').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      prevArrow: "<img src='/img/left-arrow.svg' class='prev slick-arrow' alt='предыдущая'>",
      nextArrow: "<img src='/img/right-arrow.svg' class='next slick-arrow' alt='следующая'>",
    });
  }
  else if ((document.body.clientWidth < 900) && (document.body.clientWidth > 768)) {
    $('.doctors-list').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      prevArrow: "<img src='/img/left-arrow.svg' class='prev slick-arrow' alt='предыдущая'>",
      nextArrow: "<img src='/img/right-arrow.svg' class='next slick-arrow' alt='следующая'>",
    });
  }  
  else if ((document.body.clientWidth < 768) && (document.body.clientWidth > 576)) {
    $('.doctors-list').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      prevArrow: "<img src='/img/left-arrow.svg' class='prev slick-arrow' alt='предыдущая'>",
      nextArrow: "<img src='/img/right-arrow.svg' class='next slick-arrow' alt='следующая'>",
    });
  }  
  else if (document.body.clientWidth < 576) {
  $('.doctors-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: "<img src='/img/left-arrow.svg' class='prev slick-arrow' alt='предыдущая'>",
    nextArrow: "<img src='/img/right-arrow.svg' class='next slick-arrow' alt='следующая'>",
  });
  }  
});


let header_phone = document.querySelector('.header_a-phone');
document.querySelector('.menu-icon-wrapper').onclick = function() {
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  if (document.querySelector('.menu-icon').classList.contains('menu-icon-active')) {
    header_phone.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  else {
    header_phone.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

