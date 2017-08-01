/* global TweenLite, Back, Linear, Power1 */

export default class {
  constructor() {
    let {density, speed} = arguments;

    let
      winHeight = $('#title-content').height(),
      winWidth = $('#title-content').width();

    this.density = density || 70;
    this.speed = speed || 0.5;

    this.start = {
      yMin: winHeight - 50,
      yMax: winHeight,
      xMin: (winWidth / 2) + 10,
      xMax: (winWidth / 2) + 40,
      scaleMin: 0.1,
      scaleMax: 0.25,
      scaleXMin: 0.1,
      scaleXMax: 1,
      scaleYMin: 1,
      scaleYMax: 2,
      opacityMin: 0.1,
      opacityMax: 0.4
    };

    this.mid = {
      yMin: winHeight * 0.4,
      yMax: winHeight * 0.9,
      xMin: winWidth * 0.1,
      xMax: winWidth * 0.9,
      scaleMin: 0.2,
      scaleMax: 0.8,
      opacityMin: 0.5,
      opacityMax: 1
    };

    this.end = {
      yMin: -180,
      yMax: -180,
      xMin: -100,
      xMax: winWidth + 180,
      scaleMin: 0.1,
      scaleMax: 1,
      opacityMin: 0.4,
      opacityMax: 0.7
    };
  }

  createParticle() {
    let i, particleSpark;
    for (i = 0; i < this.density; i++) {
      particleSpark = document.createElement('div');
      particleSpark.classList.add('spark');
      $('#title-content').append(particleSpark);
      this.spawn(particleSpark);
    }
  }

  range(map, prop) {
    let
      min = map[prop + 'Min'],
      max = map[prop + 'Max'];

    return min + (max - min) * Math.random();
  }

  spawn(particle) {
    let
      wholeDuration = (10 / this.speed) * (0.7 + Math.random() * 0.4),
      delay = wholeDuration * Math.random(),
      partialDuration = (wholeDuration + 1) * (0.2 + Math.random() * 0.3);

    TweenLite.set(particle, {
      y: this.range(this.start, 'y'),
      x: this.range(this.start, 'x'),
      scaleX: this.range(this.start, 'scaleX'),
      scaleY: this.range(this.start, 'scaleY'),
      scale: this.range(this.start, 'scale'),
      opacity: this.range(this.start, 'opacity'),
      visibility: 'hidden'
    });

    // Moving upward
    TweenLite.to(particle, partialDuration, {
      delay: delay,
      y: this.range(this.mid, 'y'),
      ease: Math.random() < 0.5 ? Back.easeInOut : Linear.easeOut
    });
    TweenLite.to(particle, wholeDuration - partialDuration, {
      delay: partialDuration + delay,
      y: this.range(this.end, 'y'),
      ease: Back.easeIn
    });

    // Moving on axis X
    TweenLite.to(particle, partialDuration, {
      delay: delay,
      x: this.range(this.mid, 'x'),
      ease: Power1.easeOut
    });
    TweenLite.to(particle, wholeDuration - partialDuration, {
      delay: partialDuration + delay,
      x: this.range(this.end, 'x'),
      ease: Power1.easeIn
    });

    // Opacity and scale
    partialDuration = wholeDuration * (0.5 + Math.random() * 0.3);
    TweenLite.to(particle, partialDuration, {
      delay: delay,
      scale: this.range(this.mid, 'scale'),
      autoAlpha: this.range(this.mid, 'opacity'),
      ease: Linear.easeNone
    });
    TweenLite.to(particle, wholeDuration - partialDuration, {
      delay: partialDuration + delay,
      scale: this.range(this.end, 'scale'),
      autoAlpha: this.range(this.end, 'opacity'),
      ease: Linear.easeNone,
      onComplete: this.spawn,
      onCompleteParams: [particle]
    });
  }
}
