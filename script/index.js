//Explore button click event
$(".fancy").click(function (e) {
  e.preventDefault();
  gsap.to(window, { duration: 0.15, scrollTo: "#content" });
});

//Features buttons click event
$(".feature-container").click(function (e) {
  e.preventDefault();
  let cat = this.id.replace("-feature", "");
  if ($("#" + cat + "-description").hasClass("selected")) {
    $("#" + cat + "-feature").removeClass("current");
    $("#" + cat + "-description").removeClass("selected");
    $("#" + cat + "-description p").fadeOut("0.8s");
  } else {
    $("#" + cat + "-feature").addClass("current");
    $("#" + cat + "-description").addClass("selected");
    $("#" + cat + "-description p").fadeIn("0.8s");
  }
});

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
