/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block


	// ****** GET THE VALUE OF EACH MOOD IN THE STRAINS ARRAY ******* //
	for (var i=0; i<strains.length; i++) {

		var happyMood = strains[i].Happy;
		var euphoricMood = strains[i].Euphoric;
		var energeticMood = strains[i].Energetic;
		var sleepyMood = strains[i].Sleepy;
		var relaxedMood = strains[i].Relaxed;

		//APPEND RESULT CARDS WITH EACH CARD CONTAINING INFORMATION ABOUT THE STRAIN DISPLAYED WITH USER MATCH
		$('#result-cards').append('<div class="card"><h3 class="cardname">' + strains[i]["Name"] + '</h3>' + 
			'<div id="pct-match"></div>' +
			'<div id="sum-userPref" class="bar"></div>' +
			'<div id="sum-score" class="bar"></div>' +
			'<div id="happy-score" class="mood-result" data-id="' + strains[i]["Happy"] +'"><p>Happy: </p></div>' +
			'<div id="euphoric-score" class="mood-result" data-id="' + strains[i]["Euphoric"] + '"><p>Euphoric: </p></div>' +
			'<div id="energetic-score" class="mood-result" data-id="' + strains[i]["Energetic"] + '"><p>Energetic: </p></div>' +
			'<div id="sleepy-score" class="mood-result" data-id="' + strains[i]["Sleepy"] + '"><p>Sleepy: </p></div>' +
			'<div id="relaxed-score" class="mood-result" data-id="' + strains[i]["Relaxed"] + '"><p>Relaxed: </p></div>' +
			'</div>');
	}

	// ASSIGN YES OR NO SVG IMG DEPENDING ON WHETHER PROPERTY IS A 0 OR 1
	if (happyMood > 0) {
		$(".card #happy-score").append('<img src="img/yes.svg">')
	} else { 
		$(".card #happy-score").append('<img src="img/no.svg">')
	}

	if (euphoricMood > 0) {
		$(".card #euphoric-score").append('<img src="img/yes.svg">')
	} else { 
		$(".card #euphoric-score").append('<img src="img/no.svg">')
	}

	if (energeticMood > 0) {
		$(".card #energetic-score").append('<img src="img/yes.svg">')
	} else { 
		$(".card #energetic-score").append('<img src="img/no.svg">')
	}

	if (sleepyMood > 0) {
		$(".card #sleepy-score").append('<img src="img/yes.svg">')
	} else { 
		$(".card #sleepy-score").append('<img src="img/no.svg">')
	}

	if (relaxedMood > 0) {
		$(".card #relaxed-score").append('<img src="img/yes.svg">')
	} else { 
		$(".card #relaxed-score").append('<img src="img/no.svg">')
	}


	// ****** SUBMIT BUTTON ****** //	
	$('#submitBtn').click(function(){

		// GET THE VALUES OF USER PREFERENCE FOR MOOD SELECTION
	 	var happyDot = Number($('input[name=happy]:checked').val());
	 	var euphoricDot = Number($('input[name=euphoric]:checked').val());
	 	var energeticDot = Number($('input[name=energetic]:checked').val());
	 	var sleepyDot = Number($('input[name=sleepy]:checked').val());
	 	var relaxedDot = Number($('input[name=relaxed]:checked').val());


	 	// check if you got those volues
	 	console.log(happyDot)
		console.log(euphoricDot);
		console.log(energeticDot);
		console.log(sleepyDot);
		console.log(relaxedDot);
		
	});

/*

		// FOR EACH OBJECT IN ARRAY
		for (i = 0; i < strains.length; i+=1) {

			// MULTIPLY THE USER PREFERENCE FOR MOOD BY THE ARRAY VALUE OF THAT PROPERTY
			// AND STORE THAT MULTIPLICATION PRODUCT IN A NEW VARIABLE FOR EACH MOOD
			var happyscore = happyMood*happyDot;
			var euphoricscore = euphoricMood*euphoricDot;
			var energeticscore = energeticMood*energeticDot;
			var sleepyscore = sleepyMood*sleepyDot;
			var relaxedscore = relaxedMood*relaxedDot;

			// AND FOR EACH OBJECT IN THE ARRAY OF 'STRAINS', SET IT EQUAL TO THE MULTIPLICATION PRODUCT VARIABLE FROM ABOVE
			strains[i].Happy = happyscore;
			strains[i].Euphoric = euphoricscore;
			strains[i].Energetic = energeticscore;
			strains[i].Sleepy = sleepyscore;
			strains[i].Relaxed = relaxedscore;

			//console.log(strains);



			//GET SUBSET OF VALUES BASED ON MOOD PROPERTIES

			var strainscore = strains.map(function(item){ return [item.Happy, item.Euphoric, item.Energetic, item.Sleepy, item.Relaxed]});
			console.log(strainscore[0]);	

			// MAKE A FUNCTION THAT ADDS UP NUMERIC VALUES IN ARRAY
			function add(a, b) {
			    return a + b;
			}

			//SUM OF STRAIN SCORES
			var sum_score = strainscore[0].reduce(add, 0);

			// SUM OF USER PREFERENCES
			var sum_userPref = userPref.reduce(add, 0);

			console.log(sum_score);
			console.log(sum_userPref);

			var scorewidth = (sum_score / sum_userPref) * 100;
			console.log(scorewidth);

/*			//APPEND RESULT CARDS WITH EACH CARD CONTAINING INFORMATION ABOUT THE STRAIN DISPLAYED WITH USER MATCH
			$('.result-cards').append('<div class="card"><h3 class="cardname">' + strains[i]["Name"] + '</h3>' + 
				'<div id="pct-match">' + Math.round(scorewidth) + '%</div>' +
				'<div id="sum-userPref" class="bar"></div>' +
				'<div id="sum-score" class="bar"></div>' +
				'</div>');
			$('#sum-score').css({'width': scorewidth});
		}
			console.log(strains);



		
			     

	});


	*/

	

}); //end document.ready block
