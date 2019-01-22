(() => {
  const float_video = () => {
    if (window._floatIsOpen === true) return;
    window._floatIsOpen = true;
    let style = document.createElement('style');
    style.innerHTML = `
  .float-video{
  left: unset !important;
  right: 20px !important;
  top: unset !important;
  bottom: 20px !important;
  width: 398px !important;
  height: 224px !important;
  position: fixed !important;
  }
  `;
    document.body.append(style);
    document.querySelector('div#movie_player').style.zIndex = 2;

    const debounce = (fn, delay = 100) => {
      let timer = null;
      return function() {
        if (timer) return;
        timer = setTimeout(() => {
          fn.apply(this, arguments);
          timer = null;
        }, delay);
      };
    };

    const switcher = () => {
      const inViewPort =
        document.querySelector('ytd-player').getBoundingClientRect().bottom >
        56;
      const video = document.querySelector('video');
      if (!inViewPort && !video.className.includes('float-video'))
        video.className += ' float-video';
      if (inViewPort && video.className.includes('float-video'))
        video.className = video.className.replace('float-video', '');
    };

    window.addEventListener('scroll', debounce(switcher, 500));
  };
  if (location.href.includes('watch')) float_video();
  else {
    document.addEventListener('yt-navigate-finish', e => {
      if (e.target.baseURI.includes('watch')) {
        float_video();
      }
    });
  }
})();