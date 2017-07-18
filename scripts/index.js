/* global TimelineLite, Back, Power1 */

import './../index.html';
import './../styles/main.scss';

import 'bootstrap';
import 'gsap';
import $ from 'jquery';
import ScrollSpy from './scroll-spy';

const scrollSpy = new ScrollSpy();
const introTimeline = new TimelineLite();

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
      x: 25,
      y: 5,
      opacity: 1,
      ease: Power1.easeOut
    }, '-=0.25')
    .to($('#intro-quote-citation'), 3, {
      y: 15,
      opacity: 1,
      ease: Power1.easeOut
    }, '-=2.5')
    .to($('#demon-highlight'), 3, {
      color: '#8A0707',
      // scale: 1.5,
      ease: Power1.easeOut
    })
);
