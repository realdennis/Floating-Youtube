const switcher = () => {
  const inViewPort =
    document.querySelector('ytd-player').getBoundingClientRect().bottom >
    56;
  const video = document.querySelector('video');
  if (!inViewPort && !video.className.includes('float-video'))
    video.className += ' float-video';
  if (inViewPort && video.className.includes('float-video'))
    video.className = video.className.replace(' float-video', '');
};
export default switcher;