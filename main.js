let panacek;
let mince;
let panacekSirka;
let panacekVyska;
let minceSirka;
let minceVyska;
let zvukMince = document.getElementById('zvukMince');
let zvukFanfara = document.getElementById('zvukFanfara');
let score = document.getElementById('score');
let skore = score.textContent;
let sirkaOkna = window.innerWidth;
let vyskaOkna = window.innerHeight;


function priNacteniStranky() {
	alert('Pro pohyb panáčka použij šipky. Hraješ dokud nedosáhneš 10 a víc bodů. Můžeš si vybrat pozadí. A nezapomeň si zapnout hudbu :)');
	panacek = document.getElementById('panacek');
	mince = document.getElementById('mince');
	panacekSirka = panacek.width;
	panacekVyska = panacek.height;
	minceSirka = mince.width;
	minceVyska = mince.height;
	nahodnaMince();
	umisteniPanacka();
	}


	// umístění panáčka na střed stránky
	
	function umisteniPanacka() {
		panacek.style.left = window.innerWidth / 2 - panacekSirka / 2 + 'px';
		panacek.style.top = window.innerHeight / 2 - panacekVyska / 2 + 'px';	
	}


	// ------- funkce na náhodné umístění mince -------

	let hodnotaMince = 1;

	function nahodnaMince() {
		
		let barvaMince = Math.floor(Math.random() * 10 + 1);
		
		if (barvaMince >= 9) {
			mince.src = 'obrazky/mince.png';
			hodnotaMince = 3;
		} else if (barvaMince >= 5 && barvaMince < 9) {
			mince.src = 'obrazky/mince-stribrna.png';
			hodnotaMince = 2;
		} else {
			mince.src = 'obrazky/mince-bronzova.png';
			hodnotaMince = 1;
		}

	nahodneUmisteniX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
	nahodneUmisteniY = Math.floor(Math.random() * (window.innerHeight - minceVyska) + 50);

	mince.style.left = nahodneUmisteniX + 'px';
	mince.style.top = nahodneUmisteniY + 'px';
}

	// ------- funkce na přičítání skóre -------
	
	let aktualniScore = 0;

		function bod() {
		
		aktualniScore = aktualniScore + hodnotaMince;    
		score.textContent = aktualniScore;
		
		if (aktualniScore >= 10) {
			zvukFanfara.play();  
			alert('Vyhrál jsi. Hrajeme znovu :)'); 
			umisteniPanacka();
			aktualniScore = 0;    
			score.textContent = '0';        
		} 
	}
	
	

 	// ------- ovladače hudby -------

	let audio = document.getElementById('hudba');
		
	function hudbaPlay() {
		audio.play();
		audio.loop = true;
		
	}
	
	function hudbaStop() {
		audio.pause();
	}


	// ------- funkce na změnu pozadí -------

	let aktualniPozadi = 1;

	function vyberPozadi() {
				
		if (aktualniPozadi === 1) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/hypnotize.png')";
		}
		if (aktualniPozadi === 2) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/round.png')";
		}
		if (aktualniPozadi === 3) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/seigaiha.png')";
		}
		if (aktualniPozadi === 4) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/swirl.png')";
		}
		if (aktualniPozadi === 5) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/weather.png')";
		}
		if (aktualniPozadi === 6) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/whirlpool.png')";
		}
		if (aktualniPozadi === 7) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/geometry.png')";
			aktualniPozadi = 1;
		}
		aktualniPozadi += 1;
	}


	// ------- funkce na pohyb panáčka + změna obrázku podle směru -------

	function pohybPanacka(udalost) {
		
		panacekX = parseInt(panacek.style.left);
		panacekY = parseInt(panacek.style.top);
		minceX = parseInt(mince.style.left);
		minceY = parseInt(mince.style.top);
		

		if (udalost.key === 'ArrowUp') {
			let posunY = panacekY - 10;
			panacek.style.top = posunY + 'px';
			panacek.src = 'obrazky/panacek-nahoru.png';
			if (panacekY <= 50) {
				panacek.style.top = 50 + 'px';
			}
			if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				zvukMince.play();
				bod();
				nahodnaMince();			
			}
		}	
			
		if (udalost.key === 'ArrowDown') {
			let posunY = panacekY + 10;
			panacek.style.top = posunY + 'px';
			panacek.src = 'obrazky/panacek.png';
			if ((panacekY + panacekVyska) >= vyskaOkna) {
				panacek.style.top = (vyskaOkna - panacekVyska) + 'px';
			}
			if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				zvukMince.play();
				bod();
				nahodnaMince();				
			}
		}

		if (udalost.key === 'ArrowLeft') {
			let posunX = panacekX - 10;
			panacek.style.left = posunX + 'px';
			panacek.src = 'obrazky/panacek-vlevo.png';
			if ((panacekX) <= 0) {
				panacek.style.left = 0 + 'px';
			}
			if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				zvukMince.play();	
				bod();
				nahodnaMince();						
			}
		}

		if (udalost.key === 'ArrowRight') {
			let posunX = panacekX + 10;
			panacek.style.left = posunX + 'px';
			panacek.src = 'obrazky/panacek-vpravo.png';
			if ((panacekX + panacekSirka) >= sirkaOkna) {
				panacek.style.left = (sirkaOkna - panacekSirka) + 'px';
			}
			if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				zvukMince.play();
				bod();
				nahodnaMince();
			}
		}
	}





