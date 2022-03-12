// screen load logic
window.onload = () => {
  document.getElementById('root').classList.add('--loaded');

  const titleContainer = document.getElementsByClassName('intro__title-container')[0];
};

// scroll event
window.addEventListener('scroll', (event) => {
  const { scrollY } = window;

  // hero image
  const intro = document.getElementById('intro');

  if (scrollY >= 0) {
    intro.style.opacity = 1 - scrollY / window.innerHeight;
  } else if (scrollY / window.innerHeight >= 1) {
    intro.style.opacity = 0;
  } else {
    intro.style.opacity = 1;
  }

  // scroll-indicator disable
  const scrollIndicator = document.getElementById('scroll-indicator');
  const SCROLL_INDICATOR_HIDDEN_HEIGHT = 160;

  if (scrollY >= SCROLL_INDICATOR_HIDDEN_HEIGHT) {
    scrollIndicator.classList.add('--hidden');
  } else {
    scrollIndicator.classList.remove('--hidden');
  }

  // bridge disable
  const bridge = document.getElementById('bridge');
  const bridgePos = bridge.getBoundingClientRect();
  const BRIDGE_REVEAL_HEIGHT = 240;

  if (bridgePos.top <= window.innerHeight - BRIDGE_REVEAL_HEIGHT) {
    bridge.classList.add('--visible');
  } else {
    bridge.classList.remove('--visible');
  }

  // products enable
  const products = document.getElementsByClassName('products__item');

  for (const item of products) {
    const productPos = item.getBoundingClientRect();

    if (productPos.top <= window.innerHeight * (2 / 3)) {
      item.classList.add('--active');
    } else {
      item.classList.remove('--active');
    }
  }

  // mobile active button
  const mobileCTA = document.getElementById('mobile-cta');
  const introCTAPos = document.getElementById('intro-cta').getBoundingClientRect();
  const outroCTAPos = document.getElementById('outro-cta').getBoundingClientRect();

  if (introCTAPos.top <= 0 && outroCTAPos.top - window.innerHeight >= 0) {
    mobileCTA.classList.add('--active');
  } else {
    mobileCTA.classList.remove('--active');
  }
});
