export function scrolltoanchor(node, options) {
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};
  let scrolling = false;
  let previousevent = null;
  let currentLink = 0;
  let previousDelta = 0;
  function preventDefault(e) {
    e.preventDefault();
    if (previousevent && Date.now() - previousevent < 100) {
      previousevent = Date.now();
      return previousDelta = Math.abs(e.deltaY);
    }
    previousevent = Date.now();
    e.deltaY > 0 ? navigatedown() : navigateup();
  }
  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
  function navigateup() {
    if (currentLink != 0) {
      currentLink = currentLink - 1;
      window.scrollTo({
        top: links[currentLink].offsetTop,
        behavior: "smooth"
      });
      window.location.href = links[currentLink].id;
    }
  }
  function navigatedown() {
    if (currentLink < links.length - 1) {
      console.log(currentLink, links.length);
      currentLink = currentLink + 1;
      window.scrollTo({
        top: links[currentLink].offsetTop,
        behavior: "smooth"
      });
      window.location.href = links[currentLink].id;
    }
  }
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
      get: function() {
        supportsPassive = true;
      }
    }));
  } catch (e) {
  }
  var wheelOpt = supportsPassive ? {passive: false} : false;
  var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  function handlescroll(e) {
    e.preventDefault();
    console.log(e);
  }
  const links = (Object.values(document.getElementsByTagName("a")) || []).filter((a) => a.id);
  window.addEventListener("DOMMouseScroll", preventDefault, false);
  window.addEventListener(wheelEvent, preventDefault, wheelOpt);
  window.addEventListener("touchmove", preventDefault, wheelOpt);
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  return {
    destroy: () => {
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, false);
      window.removeEventListener("touchmove", preventDefault, false);
      window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    }
  };
}
//# sourceMappingURL=scrolltoanchor.js.map
