$(function () {
  $(document).ready(function () {
    $("#fullpage").fullpage({
      anchors: ["home", "about", "skills", "project", "contact"],
      menu: "#menu",
      navigation: true,
      navigationPosition: "left",
      responsiveWidth: 640,
      afterLoad: function (anchorLink, index) {
        if (index === 1) {
          $(".head_wrap").addClass("active");
        } else {
          $(".head_wrap").removeClass("active");
        }
      },
    });
  });
  const mainSwiper = new Swiper(".project > .swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
