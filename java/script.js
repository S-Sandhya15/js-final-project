// gallery.js

function upDate(previewPic) {
    // 1) Change the background image of the div with id "image" to the source of the preview image
    document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
    
    // 2) Change the text of the div with id "image" to the alt text of the preview image
    document.getElementById('image').innerText = previewPic.alt;
}

function unDo() {
    // 1) Update the background image of the div with id "image" back to the original image (use the CSS background-image)
    var originalImageUrl = 'url("original-image.jpg")'; // Replace with the original URL from CSS if necessary
    document.getElementById('image').style.backgroundImage = originalImageUrl;

    // 2) Change the text of the div with id "image" back to the original text
    document.getElementById('image').innerText = 'Hover over an image below to display here.'; // Replace with original text
}
