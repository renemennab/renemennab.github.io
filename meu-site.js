let lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
  let st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
     document.getElementById("navbar").style.top = "-300px";
   } else {
    document.getElementById("navbar").style.top = "0";
   }



   lastScrollTop = st <= 0 ? 0 : st;
}, false);
