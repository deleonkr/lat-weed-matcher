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
	}
	//VARIABLE FOR STORING SUBSET OF VALUES BASED ON MOOD PROPERTIES
	//var strains_subset = strains.map(function(item){ return [item.Happy, item.Euphoric, item.Energetic, item.Sleepy, item.Relaxed]});
	//console.log(strainscore);	

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

		// SET A NEW ARRAY TO STORE THE USER RATING OF MOOD
		var userPref = [];

		// ADD THE VALUES OF USER PREFERENCES AND PUSH/ADD TO NEW ARRAY
		userPref.push(happyDot, euphoricDot, energeticDot, sleepyDot, relaxedDot);
		console.log(userPref);


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

			/*function getStrains(item,index) {
			    var strainselect = [item.Happy, item.Euphoric, item.Energetic, item.Sleepy, item.Relaxed];
			    return strainselect;
			}

			var strainscore = strains.map(getStrains);
			console.log(strainscore);

			//GET SUBSET OF VALUES BASED ON MOOD PROPERTIES
			var strainscore = strains.map(function(item, i){ return [item.Happy, item.Euphoric, item.Energetic, item.Sleepy, item.Relaxed]});
			console.log(strainscore);	
*/

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

			//APPEND RESULT CARDS WITH EACH CARD CONTAINING INFORMATION ABOUT THE STRAIN DISPLAYED WITH USER MATCH
			$('.result-cards').append('<div class="card"><h3 class="cardname">' + strains[i]["Name"] + '</h3>' + 
				'<div id="pct-match">' + Math.round(scorewidth) + '%</div>' +
				'<div id="sum-userPref" class="bar"></div>' +
				'<div id="sum-score" class="bar"></div>' +
				'</div>');
			$('#sum-score').css({'width': scorewidth});
		}
			console.log(strains);

		$(".card").append('<div id="happy-score" class="mood-result"><p>Happy: </p></div>');
		$(".card").append('<div id="euphoric-score" class="mood-result"><p>Euphoric: </p></div>');
		$(".card").append('<div id="energetic-score" class="mood-result"><p>Energetic: </p></div>');
		$(".card").append('<div id="sleepy-score" class="mood-result"><p>Sleepy: </p></div>');
		$(".card").append('<div id="relaxed-score" class="mood-result"><p>Relaxed: </p></div>');


			if (happyscore > 0) {
				$("#happy-score").append('<img src="img/yes.svg">')
			} else { 
				$("#happy-score").append('<img src="img/no.svg">')
			}

			if (euphoricscore > 0) {
				$("#euphoric-score").append('<img src="img/yes.svg">')
			} else { 
				$("#euphoric-score").append('<img src="img/no.svg">')
			}

			if (energeticscore > 0) {
				$("#energetic-score").append('<img src="img/yes.svg">')
			} else { 
				$("#energetic-score").append('<img src="img/no.svg">')
			}

			if (sleepyscore > 0) {
				$("#sleepy-score").append('<img src="img/yes.svg">')
			} else { 
				$("#sleepy-score").append('<img src="img/no.svg">')
			}

			if (relaxedscore > 0) {
				$("#relaxed-score").append('<img src="img/yes.svg">')
			} else { 
				$("#relaxed-score").append('<img src="img/no.svg">')

			}
			

	/*		//GET SUBSET OF VALUES BASED ON MOOD PROPERTIES
			var strainscore = strains.map(function(item){ return [item.Happy, item.Euphoric, item.Energetic, item.Sleepy, item.Relaxed]});
			console.log(strainscore);	

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


		//VARIABLE FOR STORING SUBSET OF VALUES BASED ON MOOD PROPERTIES
	/*	var strainscore = strains.map(function(item in strains){ 
			return [item.Happy, item.Euphoric, item.Energetic, item.Sleepy, item.Relaxed]
		});
		console.log(strainscore);	
	*/	


		// ARRAY OF VALUES TO COMPARE WITH USER PREFERENCES
//		var strainscore = [];


		// **** FILTER BY STRAIN NAME **** //
		
/*		// GET VALUE OF CHECKED CHECKBOX AND STORE VALUE IN A VARIABLE
		var checkStrain = $("input:checkbox[name=strainName]:checked").map(function(){
			return $(this).val();
		}).get();
		console.log(checkStrain); 

		// only include items 
		strains = strains.filter(function(item){
  			return (item.checkStrain);
		});    
/*

		//FILTER BY STRAIN NAME
		var checkStrain = $("input:checkbox[name=strainName]:checked").map(function(){
			return $(this).val();
		}).get();

		console.log(checkStrain);

		//GET THE VALUE OF hybrid, sativa or indica
		for (var i = 0; i<strains.length; i++) {
			if (strains[i] == $('#strainT').val()) {
				break;
			} else {

			}
		}

		var checkTHC = $("input:checkbox[name=thclevel]:checked").map(function(){
			return this.value;
		}).get();

		console.log(checkTHC);

		var checkCBD = $("input:checkbox[name=cbdlevel]:checked").map(function(){
			return this.value;
		}).get();

		console.log(checkCBD);
*/
			      

	});


	

	

}); //end document.ready block
