import $ from 'jquery';

export default class {
  constructor() {
    this._window = $(window);
    this._watchedElements = [];

    $(document).ready(() => {
      this._window.on('scroll resize', () => this._triggerVisibleAnimationElements());
      this._window.trigger('scroll');
    });
  }

  /* Public */

  add(reference, action, options = {}) {
    if (!reference || !action) return;
    this._watchedElements.push({ reference, action, options });
  }

  /* Private */

  _triggerVisibleAnimationElements() {
    const windowTop = this._window.scrollTop();
    const windowBottom = windowTop + this._window.height();

    this._watchedElements.forEach(element => {
      if (element.isComplete) return;

      let elementTop = element.reference.offset().top + (element.options.offsetTop || 0);
      let elementBottom = (elementTop + element.reference.outerHeight());

      // Is the element within the viewport?
      if (elementBottom >= windowTop && elementTop <= windowBottom) {
        element.isComplete = true;
        element.action();
      }
    });
  }
}