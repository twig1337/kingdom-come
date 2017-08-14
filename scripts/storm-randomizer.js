// Preload images
for (let i = 1; i <= 6; i++) {
  let img = new Image();
  img.src = `assets/img/vatican-storm-ease-${i}.jpg`
}

const bg = $('#lightning-cover');

const randomIdentifier = () => Math.floor(Math.random() * 6) + 1;

export default function summonLightning() {
  bg.css('background-image', `url(assets/img/vatican-storm-ease-${randomIdentifier()}.jpg)`);

  setTimeout(() => {
    bg.css('background-image', 'url(assets/img/vatican-storm-ease.jpg)');

    setTimeout(() => {
      bg.css('background-image', `url(assets/img/vatican-storm-ease-${randomIdentifier()}.jpg)`);

      setTimeout(() => {
        bg.css('background-image', 'url(assets/img/vatican-storm-ease.jpg)');
        setTimeout(summonLightning, randomIdentifier() * 1000);
      }, 150);
    }, 50);
  }, 150);
}
