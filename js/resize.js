/*  The fixed nav on the left-hand size is visually neat, but would cover the other text on some devices. 
This little function brings it to the top. */

var fixPosition = function(nav) {
  if (document.documentElement.clientWidth < 770) {
    nav.style.position = 'relative';

  }
  else {
    nav.style.position = 'fixed';

  }
};

// called after page load
window.onload = function() {
  fixPosition(document.getElementsByTagName('nav')[0]);
}

// ... and again whenever resized.
window.onresize = function() {
    fixPosition(document.getElementsByTagName('nav')[0]);

}