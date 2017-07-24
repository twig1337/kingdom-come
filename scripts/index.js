/* global TimelineMax, Back, Power1 */

import './../index.html';
import './../styles/main.scss';

import 'bootstrap';
import 'gsap';
import $ from 'jquery';
import ScrollSpy from './scroll-spy';

const scrollSpy = new ScrollSpy();
const introTimeline = new TimelineMax();

let quoteLineOne = $('#intro-quote-line-one');
scrollSpy.add(quoteLineOne, () =>
  introTimeline
    .to(quoteLineOne, 3, {
      x: -25,
      y: 10,
      opacity: 1,
      ease: Power1.easeOut
    })
    .to($('#intro-quote-line-two'), 4, {
      opacity: 1,
      ease: Power1.easeOut
    }, '-=0.25')
    .to($('#demon-highlight'), 2, {
      scale: 1.05,
      rotation: 900,
      x: 1000,
      y: -1000,
      color: '#8A0707',
      ease: Power1.easeIn
    }, '-=2')
    .to($('#intro-quote-citation'), 4, {
      y: 10,
      opacity: 1,
      ease: Power1.easeOut
    }, '+=1')
);
