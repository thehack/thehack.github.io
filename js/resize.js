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

	//get rid of thumnails for mobile browsers cause they look lame.
	if (document.documentElement.clientWidth < 960) {
		for (var i = images.length - 1; i >= 0; i--) {
			if (images[i].className === 'thumb') {
				images[i].style.display = 'none';
			}
		}
	}
	else {
		for (var i = images.length - 1; i >= 0; i--) {
				images[i].style.display = 'block';
		}

	}
	//size down as browser resizes
	if (document.documentElement.clientWidth < 1122) {
		for (var i = images.length - 1; i >= 0; i--) {
			images[i].style.maxWidth = (document.documentElement.clientWidth -110) + 'px';
		}
	}
	//size back up as browser resizes
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