let mainImage = document.querySelector(".active-photo");
let smallImage = document.querySelectorAll(".item-preview-list a");

let activeImage= smallImage[1];
for (let activeImage of smallImage){
activeImage.onclick=function(evt){
    previewDefault()
mainImage.src = activeImage.href;

let currentActive = document.querySelector (".item -preview-list .active");
currentActive.classList.remove("active");
activeImage.classList.add("active"); 
}
}