// js for navbar to desapear on scroll
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
	let st = window.pageYOffset || document.documentElement.scrollTop;
	if (st > lastScrollTop) {
		document.getElementById("navbar").style.top = "-300px";
	} else {
		document.getElementById("navbar").style.top = "0";
	}
	lastScrollTop = st <= 0 ? 0 : st;
}, false);

// js for navbar to desapear when clicking outside of it
window.addEventListener('click', function (event) {
	const menu = document.getElementById('navbar');
	const movelmenu = document.getElementById('movelmenu');
	if (event.target != menu && event.target.parentNode != menu) {
		movelmenu.classList.remove("show");
	}
});