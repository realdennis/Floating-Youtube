import throttle from 'lodash/throttle';
import floaStyle from './lib/floatStyle';
import switcher from './lib/switcher';
const float_video = () => {
  if (window._floatIsOpen === true) return;
  window._floatIsOpen = true;
  document.body.append(floaStyle);
  document.querySelector('div#movie_player').style.zIndex = 2;
  window.addEventListener('scroll', throttle(switcher, 100));
};
(() => {
  location.href.includes('watch')
    ? float_video()
    : document.addEventListener('yt-navigate-finish', e => {
        if (e.target.baseURI.includes('watch')) {
          float_video();
        }
      });
})();
