window.onload=function(){
	train = document.getElementById('trainn'),
	currentSlide = 0,
	screenheight = screen.height,
	next = document.getElementById('nxt'),
	prev = document.getElementById('prv'),
	lct  = train.style.left;
	prev.style.top = ((screenheight/2)-200)+'px';
	next.style.top = ((screenheight/2)-200)+'px';

	nextSlide = function(){
	// if (lct!=0) {
	// 	prev.style.display = "block";
	// }
		go2slide(currentSlide+1);

	}

	prvSlide = function(){
		go2slide(currentSlide-1);
	}

	next.onclick=nextSlide;
	prev.onclick=prvSlide;
	}


function go2slide(n){
		train.style.left=(-900*n)+'px';
		currentSlide=n;
	}