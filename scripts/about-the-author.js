const
  aboutTheAuthorBtn = $('#about-the-author-btn'),
  aboutTheAuthor = $('#about-the-author'),
  dhLogo = $('#dh-logo'),
  dhVertBar = $('#dh-logo-vertical-top'),
  dhHorBar = $('#dh-logo-horizontal-top'),
  dhNwArc = $('#dh-logo-arc-nw'),
  dhNeArc = $('#dh-logo-curve-ne'),
  dhSeArc = $('#dh-logo-arc-se'),
  dhSwArc = $('#dh-logo-arc-sw'),
  dhBody = $('#dh-logo-body');

let dhLogoState = true;

aboutTheAuthorBtn.click(() => {
  if (dhLogoState) {
    new TimelineLite()
      .add(() => aboutTheAuthor.show())
      .to(dhVertBar, 0.5, { autoAlpha: 0 })
      .to(dhHorBar, 0.5, { autoAlpha: 0 }, '-=0.5')
      .to(dhBody, 0.5, { autoAlpha: 0 }, '-=0.5')
      .to(dhNwArc, 1, { autoAlpha: 0.2 }, '-=0.5')
      .to(dhNeArc, 1, { autoAlpha: 0.2 }, '-=1')
      .to(dhSeArc, 1, { autoAlpha: 0.2 }, '-=1')
      .to(dhSwArc, 1, { autoAlpha: 0.2 }, '-=1')
      .to(dhNwArc, 2, { x: -750, y: -750, ease: Power1.easeInOut }, '-=1')
      .to(dhNeArc, 2, { x: 750, y: -750, ease: Power1.easeInOut }, '-=2')
      .to(dhSeArc, 2, { x: 750, y: 750, ease: Power1.easeInOut }, '-=2')
      .to(dhSwArc, 2, { x: -750, y: 750, ease: Power1.easeInOut }, '-=2')
      .to(aboutTheAuthor, 2, { opacity: 1 })
      .to(dhLogo, 10, {
        rotation: 360,
        transformOrigin: "150px 90px",
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      }, '-=1.5')
      .to(dhLogo, 3, { y: 100 }, '-=12');
  } else {
    new TimelineLite()
      .to(aboutTheAuthor, 1, { opacity: 0 })
      .to(dhLogo, 1, { y: 0, rotation: 0, transformOrigin: "150px 90px", ease: Power1.easeInOut }, '-=1')
      .to(dhNwArc, 1, { x: 0, y: 0, autoAlpha: 1 })
      .to(dhNeArc, 1, { x: 0, y: 0, autoAlpha: 1 }, '-=1')
      .to(dhSeArc, 1, { x: 0, y: 0, autoAlpha: 1 }, '-=1')
      .to(dhSwArc, 1, { x: 0, y: 0, autoAlpha: 1 }, '-=1')
      .to(dhVertBar, 0.5, { autoAlpha: 1 }, '-=0.4')
      .to(dhHorBar, 0.5, { autoAlpha: 1 }, '-=0.5')
      .to(dhBody, 0.5, { autoAlpha: 1 }, '-=0.5')
      .add(() => aboutTheAuthor.hide());
  }

  dhLogoState = !dhLogoState;
});