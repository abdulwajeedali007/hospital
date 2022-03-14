$(document).ready(() => {
  $(".filter_gallery .items").isotope({
    itemSelector: ".item",
    layoutMode: "fitRows",
  });
  $(".btns button").click(function () {
    $(".btns button").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    console.log(this);
    $(".filter_gallery .items").isotope({
      filter: selector,
    });
    return false;
  });

  // OWL Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});

// gototop

let gototop = document.querySelector(".gototop");
gototop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
