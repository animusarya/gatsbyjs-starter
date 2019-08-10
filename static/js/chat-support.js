function initFreshChat() {
  window.fcWidget.init({
    token: '5897f379-a2c0-4b2c-b1ef-9a129c97d6c5',
    host: 'https://wchat.freshchat.com',
  });
}
function initialize(i, t) {
  let e;
  i.getElementById(t)
    ? initFreshChat()
    : (((e = i.createElement('script')).id = t),
      (e.async = !0),
      (e.src = 'https://wchat.freshchat.com/js/widget.js'),
      (e.onload = initFreshChat),
      i.head.appendChild(e));
}
function initiateCall() {
  initialize(document, 'freshchat-js-sdk');
}
window.addEventListener
  ? window.addEventListener('load', initiateCall, !1)
  : window.attachEvent('load', initiateCall, !1);
