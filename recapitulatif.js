  window.onload = function togg(){ 
    let togg1 = document.getElementById("togg1");
    let d1 = document.getElementById("d1");
    
      if(getComputedStyle(d1).display != "block"){
        d1.style.display = "none";
      } else {
        d1.style.display = "block";
      }
    
    togg1.onclick = togg ;
}; 

