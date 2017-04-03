require('./../index.html');
require('./../styles/main.scss');
require('bootstrap');

const $ = require('jquery');
const {TweenMax} = require('gsap');

$(document).ready(function() {
  const w = $(window);
  w.on('scroll resize', {w, elements: $('.animation-scrollspy')}, triggerVisibleAnimationElements);
  w.trigger('scroll');


  TweenMax.to('#intro-quote-container', 2, {});
});

/**
 * A function to trigger animations on elements when they are fully visible in the window.
 * @param e
 */
function triggerVisibleAnimationElements(e) {
  const w = e.data.w;
  const windowTop = w.scrollTop();
  const windowBottom = windowTop + w.height();

  $.each(e.data.elements, function() {
    let element = $(this);
    let elementTop = element.offset().top;
    let elementBottom = (elementTop + element.outerHeight());

    // Is the element fully visible within the viewport?
    if (elementBottom >= windowTop && elementTop <= windowBottom) {
      element.addClass('revealed');
    }
  });
}