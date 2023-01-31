let menu = document.querySelector(".menuopenner");
let nav = document.querySelector("nav");

menu.addEventListener("click",abrir);

function abrir(){
       if(nav.style.display === "none"){
         nav.style.display = "flex";
      }else{
         nav.style.display = "none";
       }
     

}








   
        
