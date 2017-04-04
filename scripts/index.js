/* global TweenMax, Back */

import './../index.html';
import './../styles/main.scss';

import 'bootstrap';
import 'gsap';
import $ from 'jquery';
import ScrollSpy from './scroll-spy';

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
