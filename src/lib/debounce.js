const debounce = (fn, delay = 100) => {
  let timer = null;
  return function() {
    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
};
export default debounce;