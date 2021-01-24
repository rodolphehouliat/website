// catch onscroll event and go down one viewport height as soon as scroll event is detected
export function scrolltoanchor(node, options) {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  let scrolling = false;
  let previousevent = null;
  let currentLink = 0;
  let previousDelta = 0;

  function preventDefault(e) {
    e.preventDefault();
    if (previousevent && Date.now() - previousevent < 100) {
      previousevent = Date.now();
      return (previousDelta = Math.abs(e.deltaY));
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
        behavior: "smooth",
      });
      window.location.href = links[currentLink].id;
      node.dispatchEvent(
        new CustomEvent("path", { detail: links[currentLink].id })
      );
    }
  }

  function navigatedown() {
    if (currentLink < links.length - 1) {
      currentLink = currentLink + 1;
      window.scrollTo({
        top: links[currentLink].offsetTop,
        behavior: "smooth",
      });
      window.location.href = links[currentLink].id;
      node.dispatchEvent(
        new CustomEvent("path", { detail: links[currentLink].id })
      );
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  function handlescroll(e) {
    e.preventDefault();
    console.log(e);
  }
  const links = (
    Object.values(document.getElementsByTagName("a")) || []
  ).filter((a) => a.id);
  // call this to Disable
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  return {
    destroy: () => {
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, false);
      window.removeEventListener("touchmove", preventDefault, false);
      window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    },
  };
}
