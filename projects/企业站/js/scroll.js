window.onload = function () {
  var body = document.querySelector('body');
  var nav = document.querySelector('nav');
  body.onscroll = function () {
      if (body.scrollTop > 900) {
          nav.style.background = "#888";
      }
      else {
          nav.style.background = "#000";
      }
  }
}