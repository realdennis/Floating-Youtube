import throttle from 'lodash/throttle';
import floatStyle from './lib/floatStyle';
import switcher from './lib/switcher';
const float_video = () => {
  if (window._floatIsOpen === true) return;
  document.body.append(floatStyle);
  document.querySelector('div#movie_player').style.zIndex = 2;
  window.addEventListener('scroll', throttle(switcher, 100));
  // Actually done without exception
  window._floatIsOpen = true;
};
location.href.includes('watch')
  ? float_video()
  : document.addEventListener('yt-navigate-finish', e => {
      if (e.target.baseURI.includes('watch')) {
        // workaround
        setTimeout(float_video, 0);
      }
    });
