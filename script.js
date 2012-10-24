window.onload=function(){
		train = document.getElementById('trainn'),
		currentSlide = 0;

	nextSlide = function(){
		go2slide(currentSlide+1);
	}

	prvSlide = function(){
		go2slide(currentSlide-1);
	}

	document.getElementById('nxt').onclick=nextSlide;
	document.getElementById('prv').onclick=prvSlide;
}


function go2slide(n){
		train.style.left=(-900*n)+'px';
		currentSlide=n;
	}