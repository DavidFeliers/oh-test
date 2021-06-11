let scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 20)
};

// all elements with the animation
let elementsToShow = document.querySelectorAll('.show-on-scroll');
  
function loop() {
  // all elements in array
  Array.prototype.forEach.call(elementsToShow, function(element){
    if(isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}
  
// Call the loop for the first time
loop();
  
// to know when element is visible on screen
function isElementInViewport(el) {
  let rect = el.getBoundingClientRect(); //size of element and its position relative to the viewport.
  return (
    (rect.top <= 100 && rect.bottom >= 0) || //top position is <= 100 and bottom position is 0
    (rect.bottom >= window.innerHeight && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || //bottom height is >= screensize(100vh) and top height <= screensize or element height 
    (rect.top >= -100 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) // top position >= -100 and bottom position <= screensize or screensize or element height 
  );
} // -> not completely done, something is off and is not correct