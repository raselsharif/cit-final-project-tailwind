$(document).ready(function () {
  // banner 
  $(".banner").slick({
    dots: false,
    speed: 500,
    prevArrow: ".prev",
    nextArrow: ".next",
  });
  // testimonial

  $(".testimonial").slick({
    arrows: false,
    // autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplaySpeed: 2000,
    dots: false,
    speed: 500,
    dots: true,
  });
});
