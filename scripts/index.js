/* global TweenMax, Back */

require('./../index.html');
require('./../styles/main.scss');
require('bootstrap');
require('gsap');

import ScrollSpy from './scroll-spy';

const $ = require('jquery');
const scrollSpy = new ScrollSpy();

let quoteLineOne = $('#intro-quote-line-one');
scrollSpy.add(quoteLineOne, () =>
  TweenMax.to(quoteLineOne, 3, {
    right: 0,
    top: 0,
    opacity: 1,
    ease: Power1.easeOut
  })
);
