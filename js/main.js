// preloader
$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
});

$(document).ready(function () {
  // navbar shrink
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  // video popup
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
      }
    }
  });

  // Features Carousel
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    respnsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Screenshots Carousel
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    respnsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Testimonials Carousel
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    respnsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Testimonials Carousel
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    respnsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // page scrolling
  $.scrollIt({
    topOffset: -50,
  });

  // navbar collapse
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // toggle theme
  function toggleTheme() {
    if (localStorage.getItem("carma-theme") !== null) {
      if (localStorage.getItem("carma-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();

  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("carma-theme", "dark");
    } else {
      localStorage.setItem("carma-theme", "light");
    }
    updateIcon();
  });

  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").addClass("fa-moon");
      $(".toggle-theme i").removeClass("fa-sun");
    }
  }
});
