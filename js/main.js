$(document).ready(function () {
  const menuBtn = $(".m-menu-btn");
  const menu = $(".m-menu");
  const tab = $(".tab");
  menuBtn.on("click", function () {
    menu.toggleClass("active");
    $("body").toggleClass("lock");
  });

  tab.on("click", function () {
    let target = $(this).attr("data-target");
    tab.removeClass("active");
    $(this).toggleClass("active");
    $(".tabs-content").removeClass("visible");
    $(target).toggleClass("visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 2,
        navigation: {
          nextEl: ".btn-next",
        },
      },
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".btn-next",
        },
      },
    },
  });
});
