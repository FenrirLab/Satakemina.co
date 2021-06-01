//navbarを常時上に表示する

window.onscroll = function() {navSticky()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function navSticky() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	}else{
		navbar.classList.remove("sticky");
	}
}

//