  window.onload = function togg(){ 
    let togg1 = document.getElementById("togg1");
    let d1 = document.getElementById("d1");
    
      if(getComputedStyle(d1).visibility != "hidden"){
        d1.style.visibility = "hidden";
      } else {
        d1.style.visibility = "visible";
      }
    
    togg1.onclick = togg ;
}; 

