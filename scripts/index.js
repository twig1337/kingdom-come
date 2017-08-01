/* global TimelineLite, Back, Power1, Linear */

import './../index.html';
import './../styles/main.scss';

import 'bootstrap';
import 'gsap';
import $ from 'jquery';
import ScrollSpy from './scroll-spy';
import Sparks from './sparks';

const scrollSpy = new ScrollSpy();
const embers = new Sparks();

$(function() {
  embers.createParticle();
});

/*
 * Fancy title animation.
 */
const titleTimeline = new TimelineLite();
const titleContent = $('#title-content');
const titleContentBorderTop = $('#title-content-border-top');
const titleContentBorderBottom = $('#title-content-border-bottom');
scrollSpy.add(titleContent, () => {
  // Snag the width of the parent element so we know how far to slide our borders over for a proper intro.
  let titleContainerWidth = titleContent.width() + 40;
  titleContentBorderTop.width(titleContainerWidth);
  titleContentBorderBottom.width(titleContainerWidth);

  titleContentBorderTop.css({
    left: -titleContainerWidth,
    visibility: 'visible'
  });
  titleContentBorderBottom.css({
    left: titleContainerWidth,
    visibility: 'visible'
  });

  titleTimeline
    .to(titleContentBorderTop, 2.5, {
      x: titleContainerWidth,
      ease: Linear.easeNone
    })
    .to(titleContentBorderBottom, 2.5, {
      x: -titleContainerWidth,
      ease: Linear.easeNone
    }, '-=2.5')
    .to($('#intro-quote-line-one'), 3, {
      x: -25,
      y: 10,
      opacity: 1,
      ease: Power1.easeOut
    }, '+=0.5')
    .to($('#intro-quote-line-two'), 4, {
      opacity: 1,
      ease: Power1.easeOut
    }, '-=0.25')
    .to($('#demon-highlight'), 2, {
      color: '#8A0707',
      ease: Power1.easeIn
    }, '-=2')
    .to($('#intro-quote-citation'), 4, {
      y: 10,
      opacity: 1,
      ease: Power1.easeOut
    }, '+=1');
});
