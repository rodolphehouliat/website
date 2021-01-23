export function fillheight(node, options) {
  function handleFillHeight() {
    const viewportHeight = window.innerHeight;
    const rect = node.getBoundingClientRect();
    node.style.height =
      viewportHeight -
      rect.top -
      ((options && options.marginBottom) || 0) +
      "px";
  }
  handleFillHeight();

  window.addEventListener("resize", handleFillHeight);
  return {
    destroy() {
      window.removeEventListener("resize", handleFillHeight);
    },
  };
}
