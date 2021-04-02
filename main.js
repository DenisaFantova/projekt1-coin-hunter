
let panacek = document.getElementById('panacek');
let mince = document.getElementById('mince');
let zvukMince = document.getElementById('zvukMince');
let zvukFanfara = document.getElementById('zvukFanfara');
let score = document.getElementById('score');
let sirkaOkna = window.innerWidth;
let vyskaOkna = window.innerHeight;
let aktualniScore = 0;
let panacekSirka = getComputedStyle(panacek);
panacekSirka = parseInt(panacekSirka.width);
let panacekVyska = getComputedStyle(panacek);
panacekVyska = parseInt(panacekVyska.height);
let minceSirka = getComputedStyle(mince);
minceSirka = parseInt(minceSirka.width);
let minceVyska = getComputedStyle(mince);
minceVyska = parseInt(minceVyska.height);

/* od Filipa

let hodnota_mince = 1; 
function random_coin(){
    let nahoda_mince = Math.floor(Math.random() * 10 + 1) // 1-10
 
    if(nahoda_mince >= 8){
        coin.src = "obrazky/mince.png"
        hodnota_mince = 3
    }else if(nahoda_mince >= 6){
        coin.src = "obrazky/mince-stribrna.png"
        hodnota_mince = 2
    }else{
        coin.src = "obrazky/mince-bronzova.png"
        hodnota_mince = 1
    }
 
    // Randomizer
    coin_x = (Math.floor(Math.random() * 20) + 1) * 10 ;
    coin_y = (Math.floor(Math.random() * 20) + 1) * 10 ;
    coin.style.left = coin_x + "px";
    coin.style.top = coin_y + "px";

	function pocitejCas(){
	setInterval(function(){
		time_score += 1;
		time_text.innerText = time_score + "s";
	}, 1000);
}

}
*/	
	function priNacteniStranky() {
		alert('Pro pohyb panáčka použij šipky. Hraješ dokud nedosáhneš 10 a víc bodů. Můžeš si vybrat pozadí. A nezapomeň si zapnout hudbu :)');
	}


	// umístění panáčka na střed stránky
	
	function umisteniPanacka() {
		panacek.style.left = sirkaOkna / 2 - panacekSirka / 2 + 'px';
		panacek.style.top = vyskaOkna / 2 - panacekVyska / 2 + 'px';	
	}

	umisteniPanacka();

	
	// ------- funkce na náhodné umístění mince -------

	let hodnotaMince = 1;
	
	function nahodnaMince() {
	
		let barvaMince = Math.floor(Math.random() * 10 + 1);
		
		if (barvaMince >= 9) {
			mince.src = 'obrazky/mince.png';
			hodnotaMince = 3;
		} 
		if (barvaMince >= 5 && barvaMince < 9) {
			mince.src = 'obrazky/mince-stribrna.png';
			hodnotaMince = 2;
		}
		if (barvaMince <5) {
			mince.src = 'obrazky/mince-bronzova.png';
			hodnotaMince = 1;
		}


	nahodneUmisteniX = Math.floor(Math.random() * sirkaOkna);
	nahodneUmisteniY = Math.floor(Math.random() * vyskaOkna);

	if (nahodneUmisteniX >= sirkaOkna) {
		return nahodneUmisteniX = nahodneUmisteniX - minceSirka;
	}
	if (nahodneUmisteniY >= vyskaOkna) {
		return nahodneUmisteniY = nahodneUmisteniY - minceVyska;
	}
	if (nahodneUmisteniY <= 50) {
		return nahodneUmisteniY = 50;
	}
	mince.style.left = nahodneUmisteniX + 'px';
	mince.style.top = nahodneUmisteniY + 'px';
	
}

	nahodnaMince();

	
	// ------- funkce na přičítání skóre -------
	
	
		function bod () {
		
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
			console.log(aktualniPozadi);
		}
		if (aktualniPozadi === 2) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/round.png')";
			console.log(aktualniPozadi);
		}
		if (aktualniPozadi === 3) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/seigaiha.png')";
			console.log(aktualniPozadi);
		}
		if (aktualniPozadi === 4) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/swirl.png')";
			console.log(aktualniPozadi);
		}
		if (aktualniPozadi === 5) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/weather.png')";
			console.log(aktualniPozadi);
		}
		if (aktualniPozadi === 6) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/whirlpool.png')";
			console.log(aktualniPozadi);
			
		}
			if (aktualniPozadi === 7) {
			document.body.style.backgroundImage = "url('obrazky/pozadi/geometry.png')";
			console.log(aktualniPozadi);
			aktualniPozadi = 1;
		}
		aktualniPozadi += 1;
	}


	// ------- funkce na pohyb panáčka + změna obrázku podle směru -------

	function pohybPanacka(udalost) {
		
		let panacekX = parseInt(panacek.style.left);
		let panacekY = parseInt(panacek.style.top);
		let minceX = parseInt(mince.style.left);
		let minceY = parseInt(mince.style.top);
		

		if (udalost.key === 'ArrowUp') {
			let posunY = panacekY - 10;
			panacek.style.top = posunY + 'px';
			panacek.src = 'obrazky/panacek-nahoru.png';
			if (panacekY <= 50) {
				panacek.style.top = panacekY + 'px';
			}
			if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				nahodnaMince();
				zvukMince.play();
				bod();
			}
		}	
			
		if (udalost.key === 'ArrowDown') {
			let posunY = panacekY + 10;
			panacek.style.top = posunY + 'px';
			panacek.src = 'obrazky/panacek.png';
			if ((panacekY + panacekVyska) >= vyskaOkna) {
				panacek.style.top = panacekY + 'px';
			}
			if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				nahodnaMince();
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
				nahodnaMince();
				zvukMince.play();
				bod();
			}
		}

		if (udalost.key === 'ArrowRight') {
			let posunX = panacekX + 10;
			panacek.style.left = posunX + 'px';
			panacek.src = 'obrazky/panacek-vpravo.png';
			if ((panacekX + panacekSirka) >= sirkaOkna) {
				panacek.style.left = panacekX + 'px';
			}
			if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				nahodnaMince();
				zvukMince.play();
				bod();
			}
		}
	}





