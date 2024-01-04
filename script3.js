 let buttonGrid = document.querySelector(".card-view-button-grid");
 let buttonList = document.querySelector(".card-view-button-list");
 let ulItems = document.querySelector(".cards");
buttonList.onclick=function(){
    ulItems.classList.add("list");
    buttonList.classList.add("active");
    buttonGrid.classList.remove("active");
}
buttonGrid.onclick=function(){
    ulItems.classList.remove("list");
    buttonList.classList.remove("active");
    buttonGrid.classList.add("active");
    
}
