$(document).ready(function () {
  $('.doctors-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    prevArrow: "<img src='/img/left-arrow.svg' class='prev slick-arrow' alt='предыдущая'>",
    nextArrow: "<img src='/img/right-arrow.svg' class='next slick-arrow' alt='следующая'>",
  });
});