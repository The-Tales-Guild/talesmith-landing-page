//Explore button click event
$(".fancy").click(function (e) {
  e.preventDefault();
  gsap.to(window, { duration: 0.15, scrollTo: "#content" });
});
$(".scroll-arrow").click(function (e) {
  e.preventDefault();
  gsap.to(window, { duration: 0.15, scrollTo: "#content" });
});

//Next button click event
const PAGE_TOTAL = 3;
let currentPage = 0;

$(".next").click(function (e) {
  e.preventDefault();
  for (let i = 0; i < PAGE_TOTAL; i++) {
    $(".page-" + i).css(
      "transform",
      "translateX(" + (i * 100 - ((currentPage + 1) % PAGE_TOTAL) * 200) + "%)"
    );
    $(".slogan-" + i).css(
      "transform",
      "translateX(" + (i * 100 - ((currentPage + 1) % PAGE_TOTAL) * 200) + "%)"
    );
    $("#caroussel-description-page-" + (currentPage % PAGE_TOTAL)).toggleClass(
      "current"
    );
    $(
      "#caroussel-description-page-" + ((currentPage + 1) % PAGE_TOTAL)
    ).toggleClass("current");
  }
  currentPage = (currentPage + 1) % 3;
});

//Previous button click event
$(".previous").click(function (e) {
  e.preventDefault();
  for (let i = 0; i < PAGE_TOTAL; i++) {
    $(".page-" + i).css(
      "transform",
      "translateX(" +
        -(-i * 100 + ((currentPage + PAGE_TOTAL - 1) % PAGE_TOTAL) * 200) +
        "%)"
    );
    $(".slogan-" + i).css(
      "transform",
      "translateX(" +
        -(-i * 100 + ((currentPage + PAGE_TOTAL - 1) % PAGE_TOTAL) * 200) +
        "%)"
    );
    $("#caroussel-description-page-" + (currentPage % PAGE_TOTAL)).toggleClass(
      "current"
    );
    $(
      "#caroussel-description-page-" +
        ((currentPage + PAGE_TOTAL - 1) % PAGE_TOTAL)
    ).toggleClass("current");
  }
  currentPage = (currentPage + PAGE_TOTAL - 1) % PAGE_TOTAL;
});

//Features buttons click event
let lastOpenedCat = "script";

$(".feature-container").click(function (e) {
  e.preventDefault();
  let cat = this.id.replace("-feature", "");
  if (cat == lastOpenedCat) {
    if ($("#" + cat + "-description").hasClass("selected")) {
      $("#" + cat + "-feature").removeClass("current");
      $("#" + cat + "-description").removeClass("selected");
      $("#" + cat + "-description p").fadeOut("0.8s");
    } else {
      $("#" + cat + "-feature").addClass("current");
      $("#" + cat + "-description").addClass("selected");
      $("#" + cat + "-description p").fadeIn("0.8s");
    }
  } else {
    if ($("#" + cat + "-description").hasClass("selected")) {
      $("#" + cat + "-feature").removeClass("current");
      $("#" + cat + "-description").removeClass("selected");
      $("#" + cat + "-description p").fadeOut("0.8s");
    } else {
      $("#" + lastOpenedCat + "-feature").removeClass("current");
      $("#" + lastOpenedCat + "-description").removeClass("selected");
      $("#" + lastOpenedCat + "-description p").fadeOut("0.8s");
      $("#" + cat + "-feature").addClass("current");
      $("#" + cat + "-description").addClass("selected");
      $("#" + cat + "-description p").fadeIn("0.8s");
      lastOpenedCat = cat;
    }
  }
});

//Modal
var modal = document.getElementById("preview-modal");
var img = document.getElementById("clickable-zone-preview");
var modalImg = document.getElementById("talesmith-preview-image");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "flex";
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-cross")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

//Parallax
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  $(".fancy").css({
    opacity: function () {
      var elementHeight = $(this).height();
      return (elementHeight - scrollTop) / elementHeight;
    },
  });
});

function castParallax() {
  var opThresh = 350;
  var opFactor = 750;

  window.addEventListener("scroll", function (event) {
    var top = this.scrollY;
    var layers = document.getElementsByClassName("parallax");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
      layer = layers[i];
      speed = layer.getAttribute("data-speed");
      var yPos = -((top * speed) / 100);
      layer.setAttribute(
        "style",
        "transform: translate3d(0px, " + yPos + "px, 0px)"
      );
    }
  });
}

document.body.onload = castParallax();
