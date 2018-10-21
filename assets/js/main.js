var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR); // Grabs image
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR); //Grabs title
  // Set Attribute takes the el attribute in the first parameter and sets the el in the second parameter
  // changes the image
  detailImage.setAttribute('src',imageUrl);
  // textContent sets another text
  // changes the title
  detailTitle.textContent = titleText;
}
// Returns image url
function imageFromThumb(thumbnail){
  'use strict';
  // this getsAttribute of data-image-url value
  return thumbnail.getAttribute('data-image-url');
}
// Returns title value
function titleFromThumb(thumbnail){
  'use strict';
  // this getsAttribute of data-image-url value
  return thumbnail.getAttribute('data-image-title');
}
function setDetailsFromThumb(thumbnail){
  'use strict';
  setDetails(titleFromThumb(), imageFromThumb());
}
