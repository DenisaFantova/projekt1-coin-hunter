
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
	nahodneUmisteniX = Math.floor((Math.random() * sirkaOkna) + 0);
	nahodneUmisteniY = Math.floor((Math.random() * vyskaOkna) + 0);
	if (nahodneUmisteniX >= sirkaOkna) {
		return nahodneUmisteniX = nahodneUmisteniX - 36;
	}
	if (nahodneUmisteniY >= vyskaOkna) {
		return nahodneUmisteniY = nahodneUmisteniY - 36;
	} 
	mince.style.left = nahodneUmisteniX + 'px';
	mince.style.top = nahodneUmisteniY + 'px'; 
}

umisteniMince();

function umisteniPanacka() {
	panacek.style.left = sirkaOkna / 2 + 'px';
	panacek.style.top = vyskaOkna / 2 + 'px';	
}

umisteniPanacka();

function bod () {
	aktualniScore = aktualniScore + 1;
	score.textContent = aktualniScore;
	if (aktualniScore === 5) {
		zvukFanfara.play();  
		alert('Vyhrál jsi. Můžeš si ale hrát dál.');                  
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
		let posunY = panacekY + 10;
		panacek.style.top = posunY + 'px';
		panacek.src = 'obrazky/panacek.png';
		if ((panacekY + 64) >= vyskaOkna) {
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
		if ((panacekX) <= 0) {
			panacek.style.left = panacekX + 'px';
		}
		if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
			umisteniMince();
			zvukMince.play();
			bod();
		}
	}

	if (udalost.key === 'ArrowRight') {
		let posunX = panacekX + 10;
		panacek.style.left = posunX + 'px';
		panacek.src = 'obrazky/panacek-vpravo.png';
		if ((panacekX + 70) >= sirkaOkna) {
			panacek.style.left = panacekX + 'px';
		}
		if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
			umisteniMince();
			zvukMince.play();
			bod();
		}
	}
}




