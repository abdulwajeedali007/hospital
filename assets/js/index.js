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

// navbar
let lastPositionvalue = 0;
let body = document.body;

window.addEventListener("scroll", () => {
  let currentPositionvalue = window.pageYOffset;

  if (currentPositionvalue <= 0) {
    body.classList.remove("remove_header");
  }

  if (
    currentPositionvalue > lastPositionvalue &&
    !body.classList.contains("remove_header")
  ) {
    body.classList.add("remove_header");
    body.classList.remove("show_header");
  }
  if (
    currentPositionvalue < lastPositionvalue &&
    body.classList.contains("remove_header")
  ) {
    body.classList.remove("remove_header");
    body.classList.add("show_header");
  }
  lastPositionvalue = currentPositionvalue;
});

// gototop

let gototop = document.querySelector(".gototop");
gototop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
