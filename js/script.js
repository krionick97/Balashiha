$(document).ready(function () {
  $('.input-phone > input').mask('+7 (999) 999-99-99');
  $('.photo-slider__slider').slick({
    dots: true,
    infinite: true,
    // speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow-prev"></div>',
    prevArrow: '<div class="arrow arrow-next"></div>',
    dotsClass: 'dots'
  });
});