//navbarを常時上に表示する

window.onscroll = function() {navSticky()};

const topnav = document.getElementById("topnav");
const sticky = topnav.offsetTop;

function navSticky() {
	if (window.pageYOffset >= sticky) {
		topnav.classList.add("sticky")
	}else{
		topnav.classList.remove("sticky");
	}
}


//js-scrollclassでフェードインさせる
//https://codepen.io/yukinouz1/pen/mdeNQXe
const scrollTarget = document.querySelectorAll('.js-scroll');

window.addEventListener('scroll', () => {
  for (let i = 0; i < scrollTarget.length; i++){
    const rect = scrollTarget[i].getBoundingClientRect().top;

    const scroll = window.pageYOffset || document.documentElement.scrollTop;

    const offset = rect + scroll;

    const windowHeight = window.innerHeight; // 現在のブラウザの高さ

    if (scroll > offset - windowHeight + 300) {
      scrollTarget[i].classList.add('scrolled');
    }
  }
});