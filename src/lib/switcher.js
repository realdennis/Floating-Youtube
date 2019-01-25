const switcher = () => {
  const inViewPort =
    document.querySelector('ytd-player').getBoundingClientRect().bottom > 56;
  const video = document.querySelector('video');
  if (!inViewPort && !video.className.includes('float-video'))
    video.classList.add('float-video');
  if (inViewPort && video.className.includes('float-video'))
    video.classList.remove('float-video');
};
export default switcher;
