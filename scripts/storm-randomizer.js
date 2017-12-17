import stormImage1 from '../assets/img/vatican-storm-ease-1.jpg';
import stormImage2 from '../assets/img/vatican-storm-ease-2.jpg';
import stormImage3 from '../assets/img/vatican-storm-ease-3.jpg';
import stormImage4 from '../assets/img/vatican-storm-ease-4.jpg';
import stormImage5 from '../assets/img/vatican-storm-ease-5.jpg';
import stormImage6 from '../assets/img/vatican-storm-ease-6.jpg';

// Preload images
new Image().src = stormImage1;
new Image().src = stormImage2;
new Image().src = stormImage3;
new Image().src = stormImage4;
new Image().src = stormImage5;
new Image().src = stormImage6;

const bg = $('#lightning-cover');

const randomIdentifier = () => Math.floor(Math.random() * 6) + 1;

export default function summonLightning() {
  bg.css('background-image', `url(../assets/img/vatican-storm-ease-${randomIdentifier()}.jpg)`);

  setTimeout(() => {
    bg.css('background-image', 'url(../assets/img/vatican-storm-ease.jpg)');

    setTimeout(() => {
      bg.css('background-image', `url(../assets/img/vatican-storm-ease-${randomIdentifier()}.jpg)`);

      setTimeout(() => {
        bg.css('background-image', 'url(../assets/img/vatican-storm-ease.jpg)');
        setTimeout(summonLightning, randomIdentifier() * 1000);
      }, 150);
    }, 50);
  }, 150);
}
