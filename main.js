
let panacek = document.getElementById('panacek');
let mince = document.getElementById('mince');
let sirkaOkna = window.innerWidth;
let vyskaOkna = window.innerHeight;
let zvukMince = document.getElementById('zvukMince');
let zvukFanfara = document.getElementById('zvukFanfara');
let score = document.getElementById('score');
let aktualniScore = 0;

function hudba() {
let audio = document.getElementById('hudba');
audio.play();
audio.loop = true;
}


function umisteniMince() {
	nahodneUmisteniX = Math.floor(Math.random() * sirkaOkna) + 'px';
	nahodneUmisteniY = Math.floor(Math.random() * vyskaOkna) + 'px';
	mince.style.top = nahodneUmisteniX;
	mince.style.left = nahodneUmisteniY;
}

umisteniMince();

function umisteniPanacka() {
	panacek.style.top = '500px';
	panacek.style.left = '500px';
}

umisteniPanacka();

function bod () {
	aktualniScore = aktualniScore + 1;
	score.textContent = aktualniScore;
	if (aktualniScore === 5) {
		zvukFanfara.play();  
		alert('Vyhrál jsi. Můžeš si ale hrát dál.')     ;                  
	} 
}

function pohybPanacka(udalost) {
	
	let panacekX = parseInt(panacek.style.left);
	let panacekY = parseInt(panacek.style.top);
	let panacekSirka = 64;
	let panacekVyska = 70;	
	let minceX = parseInt(mince.style.left);
	let minceY = parseInt(mince.style.top);
	let minceSirka = 36;
	let minceVyska = 36;

	if (udalost.key === 'ArrowUp') {
		let posunY = panacekY - 10;
		panacek.style.top = posunY + 'px';
		panacek.src = 'obrazky/panacek-nahoru.png';
		if (panacekY <= 0) {
			panacek.style.top = panacekY + 'px';
		}
		if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
			umisteniMince();
			zvukMince.play();
			bod();
		}
	}	
		
	if (udalost.key === 'ArrowDown') {
		posunY = panacekY + 10;
		panacek.style.top = posunY + 'px';
		panacek.src = 'obrazky/panacek.png';
		if (panacekY >= vyskaOkna) {
			panacek.style.top = panacekY + 'px';
		}
		if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
			umisteniMince();
			zvukMince.play();
			bod();
		}
	}

	if (udalost.key === 'ArrowLeft') {
		let posunX = panacekX - 10;
		panacek.style.left = posunX + 'px';
		panacek.src = 'obrazky/panacek-vlevo.png';
		if (panacekX <= 0) {
			panacek.style.left = panacekX + 'px';
		}
		if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
			umisteniMince();
			zvukMince.play();
			bod();
		}
	}

	if (udalost.key === 'ArrowRight') {
		posunX = panacekX + 10;
		panacek.style.left = posunX + 'px';
		panacek.src = 'obrazky/panacek-vpravo.png';
		if (panacekX >= sirkaOkna) {
			panacek.style.left = panacekX + 'px';
		}
		if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
			umisteniMince();
			zvukMince.play();
			bod();
		}
	}
}




