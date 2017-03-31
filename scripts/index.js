require('./../index.html');
require('./../styles/main.scss');
require('bootstrap');

$(document).ready(function() {
  var $animation_elements = $('.animation-scrollspy');
  var $window = $(window);

  function checkElementsVisible() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
        $element.addClass('revealed');
      }
    });
  }

  $window.on('scroll resize', checkElementsVisible);
  $window.trigger('scroll');
});