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

var resizeImages = function(images) {
	if (document.documentElement.clientWidth < 1122) {
		for (var i = images.length - 1; i >= 0; i--) {
			images[i].style.maxWidth = (document.documentElement.clientWidth -110) + 'px';
		}
	}
	else {
		for (var i = images.length - 1; i >= 0; i--) {
			images[i].style.maxWidth = '640px';
		}
	}
};
// called after page load
window.onload = function() {
  fixPosition(document.getElementsByTagName('nav')[0]);
  resizeImages(document.getElementsByTagName('img'));
}

// ... and again whenever resized.
window.onresize = function() {
    fixPosition(document.getElementsByTagName('nav')[0]);
	resizeImages(document.getElementsByTagName('img'));


}