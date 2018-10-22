var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

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
  // puts image url and image title and setDetails
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail) );
}
// Add Event Listener to click thumbnail and replace the window
function addThumbClickHandler(thumb){
  'use strict';
    thumb.addEventListener('click', function(event){
      event.preventDefault();
      setDetailsFromThumb(thumb);
  });
}
// retrieve all matching elements for THUMBNAIL_LINK_SELECTOR
function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}
function initializeEvents(){
  'use strict';
  // 1. This will get an array of thumbnails.
  // 2. It will iterate over the array, adding clickHandler
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}
initializeEvents();
