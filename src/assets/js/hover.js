// dom 75px
// <div class="img" data-frame='60'></div>
function hover(dom) {
  let target = document.querySelector(dom);
  let frame = 0;
  let maxFrame = target.getAttribute('data-frame');
  var distance = 75;
  let _id; //用于清除动画

  function setPosition() {
    target.style.backgroundPositionY = '-' + distance * frame + 'px';
  }
  function hoverAnimate() {
    frame++;
    if(frame < maxFrame) {
      setPosition();
      _id = requestAnimationFrame(hoverAnimate);
    } else {
      cancelAnimationFrame(_id);
    }
  }
  function unhoverAnimate() {
    frame--;
    if(frame >= 0) {
      setPosition();
      _id = requestAnimationFrame(unhoverAnimate);
    } else {
      cancelAnimationFrame(_id);
    }
  }

  document.querySelector(dom).onmouseenter = function() {
    cancelAnimationFrame(_id);
    _id = requestAnimationFrame(hoverAnimate);
  }

  document.querySelector(dom).onmouseleave = function() {
    cancelAnimationFrame(_id);
    _id = requestAnimationFrame(unhoverAnimate);
  }
}
export default hover;