let darkThemeButton = document.querySelector(".theme-button-dark");
let whiteThemeButton = document.querySelector(".theme-button-light");

let sansSerif = document.querySelector (".font-button-sans-serif");
let seriff = document.querySelector(".font-button-serif");



darkThemeButton.onclick = function (){
    document.body.classList.add("dark")
whiteThemeButton.classList.remove("active");
darkThemeButton.classList.add("active");
console.log("работает")
}

whiteThemeButton.onclick = function(){
 document.body.classList.remove("dark")   
darkThemeButton.classList.remove("active");
whiteThemeButton.classList.add ("active");
}

seriff.onclick = function(){
    document.body.classList.add("serif");
    sansSerif.classList.remove("active");
    seriff.classList.add("active");
}
sansSerif.onclick = function(){
    document.body.classList.remove ("serif");
    sansSerif.classList.add("active");
    seriff.classList.remove("active");
}
