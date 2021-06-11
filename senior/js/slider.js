function slideTestimonials(direction) {
  let slider = document.getElementById("slider-testimonials");
  let scroll = 0;

  let slideVar = setInterval(function () {

    if (direction == "left") {
      slider.scrollLeft -= 300;
    } else {
      slider.scrollLeft += 300;
    }

    scroll += 300;

    if (scroll>= 300) {
      window.clearInterval(slideVar);
    }

  }, 50);

}
// 300 vervangen door breedte van content + smooth scroll


function slideMagazine(direction) {
  let slider = document.getElementById("slider-magazine");
  let scroll = 0;

  let slideVar = setInterval(function () {

    if (direction == "left") {
      slider.scrollLeft -= 300;
    } else {
      slider.scrollLeft += 300;
    }

    scroll += 300;

    if (scroll>= 300) {
      window.clearInterval(slideVar);
    }

  }, 50);

}

function slide() {

}
// 300 vervangen door breedte van content + smooth scroll + dubbele code weg doen