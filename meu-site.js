// js for navbar to desapear on scroll
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

/* let lastScrollTop = 0;
window.addEventListener("click", function(event){ 
  const menu = document.getElementById('navbar');
  const togglerIcon = document.getElementsByClassName('navbar-toggler-icon');
  const toggler = document.getElementsByClassName('navbar-toggler');
	if (event.target == togglerIcon && showing){
     document.getElementById("movelmenu").style.top = "-300px";
   } else if (event.target == togglerIcon ){
    document.getElementById("movelmenu").style.top = "0";
   }

}); */






// js for navbar to desapear when clicking outside of it
/* window.addEventListener('click', function(event){
  const menu = document.getElementById('navbar');
  const movelmenu = document.getElementById('movelmenu');
  const toggler = document.getElementsByClassName('navbar-toggler');
  const togglerIcon = document.getElementsByClassName('navbar-toggler-icon');
	if (event.target != menu && event.target.parentNode != menu  && event.target != togglerIcon[0]){
        toggler[0].click();
        //movelmenu.style.display = 'none';
        console.log(event.target);
    }
}); */

//console.log(event.target)

//menu.style.display = 'none'
//event.target != toggler[0]

window.addEventListener('click', function(event){
  const menu = document.getElementById('navbar');
  const movelmenu = document.getElementById('movelmenu');
  //const toggler = document.getElementsByClassName('navbar-toggler');
	if (event.target != menu && event.target.parentNode != menu){
    movelmenu.classList.remove("show");
    }
});

/* window.addEventListener('click', function(event){
  const menu = document.getElementById('navbar');
  const toggler = document.getElementsByClassName('navbar-toggler');
	if (event.target != menu && event.target.parentNode != menu){
        toggler[0].click();
    }
}); */