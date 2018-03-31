/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

/*     // LOOP: MAKE RESULT CARDS
	// ****** GET THE VALUE OF EACH MOOD IN THE weed ARRAY ******* //
	for (var i=0; i<weed.length; i++) {

		var happyMood = weed[i].Happy;
		var euphoricMood = weed[i].Euphoric;
		var energeticMood = weed[i].Energetic;
		var sleepyMood = weed[i].Creative;
		var relaxedMood = weed[i].Relaxed;
		var weedName = weed[i].Name;

		//APPEND RESULT CARDS WITH EACH CARD CONTAINING INFORMATION ABOUT THE STRAIN DISPLAYED WITH USER MATCH
		$('#results').append('<div id="card" data-id="' + i +'"><div class="cardname">' + weedName + '</div>' +
			'<div class="strain-type" data-id="' + weed[i].Type + '">'+ weed[i].Type +'</div>' +
			'<div class="thc-rate">THC: '+ weed[i].THC +' %</div>' +
			'<div class="cbd-rate">CBD: '+ weed[i].CBD +' %</div>' +
			//'<div class="card-text-rate">Match rate</div>' + 
			//'<div class="rate-background"><div class="rate-bar"></div></div>' +
			'<div id="happy-score" class="mood-result" data-id="' + weed[i]["Happy"] +'"><p>Happy: </p></div>' +
			'<div id="euphoric-score" class="mood-result" data-id="' + weed[i]["Euphoric"] + '"><p>Euphoric: </p></div>' +
			'<div id="energetic-score" class="mood-result" data-id="' + weed[i]["Energetic"] + '"><p>Energetic: </p></div>' +
			'<div id="sleepy-score" class="mood-result" data-id="' + weed[i]["Sleepy"] + '"><p>Sleepy: </p></div>' +
			'<div id="relaxed-score" class="mood-result" data-id="' + weed[i]["Relaxed"] + '"><p>Relaxed: </p></div>' +
			'</div>');
			//console.log($("#card").data('id'));
	}
	//console.log(happyMood);
	//console.log($("#card").data('id'));

	// ASSIGN YES OR NO SVG IMG DEPENDING ON WHETHER PROPERTY IS A 0 OR 1
	if (happyMood > 0) {
		$("#card #happy-score").append('<img src="img/yes.svg">')
	} else { 
		$("#card #happy-score").append('<img src="img/no.svg">')
	}

	if (euphoricMood > 0) {
		$("#card #euphoric-score").append('<img src="img/yes.svg">')
	} else { 
		$("#card #euphoric-score").append('<img src="img/no.svg">')
	}

	if (energeticMood > 0) {
		$("#card #energetic-score").append('<img src="img/yes.svg">')
	} else { 
		$("#card #energetic-score").append('<img src="img/no.svg">')
	}

	if (sleepyMood > 0) {
		$("#card #sleepy-score").append('<img src="img/yes.svg">')
	} else { 
		$("#card #sleepy-score").append('<img src="img/no.svg">')
	}

	if (relaxedMood > 0) {
		$("#card #relaxed-score").append('<img src="img/yes.svg">')
	} else { 
		$("#card #relaxed-score").append('<img src="img/no.svg">')
	} */


	// ****** SUBMIT BUTTON ****** //	
	$('#submitBtn').click(function(){

		//USER selections

	    //values of the radio buttons
	    var selectHappy = Number($('input[name=happy]:checked').val());
	    var selectEuphoric = Number($('input[name=euphoric]:checked').val());
	    var selectEnergetic = Number($('input[name=energetic]:checked').val());
	    var selectSleepy = Number($('input[name=sleepy]:checked').val());
	    var selectRelaxed = Number($('input[name=relaxed]:checked').val());
	    
	    //checks if the user wants the feature or not (0=not, 1=yes)
	    if (selectHappy < 1 ) {
	        var HappyPreference = 0;
	        } else {
	        var HappyPreference = 1;
	    }
	    
	    if (selectEuphoric < 1 ) {
	        var EuphoricPreference = 0;
	        } else {
	        var EuphoricPreference = 1;
	    }
	    
	    if (selectEnergetic < 1 ) {
	        var EnergeticPreference = 0;
	        } else {
	        var EnergeticPreference = 1;
	    }
	    
	    if (selectSleepy < 1 ) {
	        var SleepyPreference = 0;
	        } else {
	        var SleepyPreference = 1;
	    }
	    
	    if (selectRelaxed < 1 ) {
	        var RelaxedPreference = 0;
	        } else {
	        var RelaxedPreference = 1;
	    }

	     // LOOP: MAKE RESULT CARDS
		// ****** GET THE VALUE OF EACH MOOD IN THE weed ARRAY ******* //
		for (var i=0; i<weed.length; i++) {

			var happyMood = weed[i].Happy;
			var euphoricMood = weed[i].Euphoric;
			var energeticMood = weed[i].Energetic;
			var sleepyMood = weed[i].Creative;
			var relaxedMood = weed[i].Relaxed;
			var weedName = weed[i].Name;

			//APPEND RESULT CARDS WITH EACH CARD CONTAINING INFORMATION ABOUT THE STRAIN DISPLAYED WITH USER MATCH
			$('#results').append('<div id="card" data-id="' + i +'"><div class="cardname">' + weedName + '</div>' +
				'<div class="strain-type" data-id="' + weed[i].Type + '">'+ weed[i].Type +'</div>' +
				'<div class="thc-rate">THC: '+ weed[i].THC +' %</div>' +
				'<div class="cbd-rate">CBD: '+ weed[i].CBD +' %</div>' +
				//'<div class="card-text-rate">Match rate</div>' + 
				//'<div class="rate-background"><div class="rate-bar"></div></div>' +
				'<div id="happy-score" class="mood-result" data-id="' + weed[i]["Happy"] +'"><p>Happy: </p></div>' +
				'<div id="euphoric-score" class="mood-result" data-id="' + weed[i]["Euphoric"] + '"><p>Euphoric: </p></div>' +
				'<div id="energetic-score" class="mood-result" data-id="' + weed[i]["Energetic"] + '"><p>Energetic: </p></div>' +
				'<div id="sleepy-score" class="mood-result" data-id="' + weed[i]["Sleepy"] + '"><p>Sleepy: </p></div>' +
				'<div id="relaxed-score" class="mood-result" data-id="' + weed[i]["Relaxed"] + '"><p>Relaxed: </p></div>' +
				'</div>');
				//console.log($("#card").data('id'));
		}
		//console.log(happyMood);
		//console.log($("#card").data('id'));

		// ASSIGN YES OR NO SVG IMG DEPENDING ON WHETHER PROPERTY IS A 0 OR 1
		if (happyMood > 0) {
			$("#card #happy-score").append('<img src="img/yes.svg">')
		} else { 
			$("#card #happy-score").append('<img src="img/no.svg">')
		}

		if (euphoricMood > 0) {
			$("#card #euphoric-score").append('<img src="img/yes.svg">')
		} else { 
			$("#card #euphoric-score").append('<img src="img/no.svg">')
		}

		if (energeticMood > 0) {
			$("#card #energetic-score").append('<img src="img/yes.svg">')
		} else { 
			$("#card #energetic-score").append('<img src="img/no.svg">')
		}

		if (sleepyMood > 0) {
			$("#card #sleepy-score").append('<img src="img/yes.svg">')
		} else { 
			$("#card #sleepy-score").append('<img src="img/no.svg">')
		}

		if (relaxedMood > 0) {
			$("#card #relaxed-score").append('<img src="img/yes.svg">')
		} else { 
			$("#card #relaxed-score").append('<img src="img/no.svg">')
		}


	    for (var i=0; i<weed.length; i++) {

	    	$('#results #card').attr('data-id');
	    } 

	    $("#results #card").each(function(i, obj){

            //checking if the prefered featured matches the weed
            if ((HappyPreference==0 && happyMood==0) || (HappyPreference==1 && happyMood==1)) {
                var MatchHappy = true;
            } else {
                var MatchHappy = false;
            }
            
            if ((EuphoricPreference==0 && euphoricMood==0) || (EuphoricPreference==1 && euphoricMood==1)) {
                var MatchEuphoric = true;
            } else {
                var MatchEuphoric = false;
            }
            
            if ((EnergeticPreference==0 && energeticMood==0) || (EnergeticPreference==1 && energeticMood==1)) {
                var MatchEnergetic = true;
            } else {
                var MatchEnergetic = false;
            }
            
            if ((SleepyPreference==0 && sleepyMood==0) || (SleepyPreference==1 && sleepyMood==1)) {
                var MatchSleepy = true;
            } else {
                var MatchSleepy = false;
            }
            
            if ((RelaxedPreference==0 && relaxedMood==0) || (RelaxedPreference==1 && relaxedMood==1)) {
                var MatchRelaxed = true;
            } else {
                var MatchRelaxed = false;
            }
	                    
	        
	        //ASSIGN EACH STRAIN A SCORE
	        if (MatchHappy == true) {
	            var strainHappyScore = Math.abs(selectHappy);
	        } else {
	            var strainHappyScore = 0
	        }
	        
	        if (MatchEuphoric == true) {
	            var strainEuphoricScore = Math.abs(selectEuphoric);
	        } else {
	            var strainEuphoricScore = 0
	        }
	        
	        if (MatchHappy == true) {
	            var strainEnergeticScore = Math.abs(selectEnergetic);
	        } else {
	            var strainEnergeticScore = 0
	        }
	        
	        if (MatchHappy == true) {
	            var strainSleepyScore = Math.abs(selectSleepy);
	        } else {
	            var strainSleepyScore = 0
	        }
	        
	        if (MatchHappy == true) {
	            var strainRelaxedScore = Math.abs(selectRelaxed);
	        } else {
	            var strainRelaxedScore = 0
	        }
	        
	        // ASSIGN SCORE TO EACH CARD
	        var totalWeedScore = strainHappyScore + strainEuphoricScore + strainEnergeticScore + strainSleepyScore + strainRelaxedScore;
	      //  console.log(totalWeedScore);
	        
	        var userSelectScore = Math.abs(selectHappy) + Math.abs(selectEuphoric) + Math.abs(selectEnergetic) + Math.abs(selectSleepy) + Math.abs(selectRelaxed);
	      //  console.log(userSelectScore);
	        
	        var pctMatch = parseInt((totalWeedScore/userSelectScore) * 100);
	         console.log(pctMatch);
	        //adding weed strain match pct rate into the data-score attribute   

	        $(this).append('<div class="card-text-rate">Match rate for ' + weedName + '</div>' +
	        	'<div class="rate-background"><div class="rate-bar" style="width:'+ pctMatch +'%"><h4>'+ pctMatch +' %</h4></div></div>');
	   		console.log(this); 

	        $(this).attr('data-score', pctMatch); 

    	});  
        

        // REORGANIZING THE CARDS: new order based on data-score value
        
        var div = $('#results');
        
        var listitems = div.children('div#card').get();
        
        listitems.sort(function (a,b){
           
            return (+$(a).attr('data-score') > +$(b).attr('data-score')) ?
                -1 : (+$(a).attr('data-score') < +$(b).attr('data-score')) ?
                1 : 0;
            
        });
        
        $.each(listitems, function (idx, itm) {div.append(itm); });

	});

	//FILTERING

//show all categories
var _showCategories = function(item) {
  for (var x = 0; x < item.length; ++x) {
    $(item[x]).fadeIn();
  }
};

//categories array will be used to store the parent ID of each .results block
//the resources array will hold all the input[type="checkbox"]:checked values
//the initial will be used as a string container to target the specific result that needs to be displayed

for (var i = 0; i < weed.length; i++) {

var categories = [],
  resources = [],
  initial = "";

//list all the category blocks
categories[i] = $('#card .strain-type').attr("data-id");
categories[i] = $('#card .thc-rate').attr("data-id");
categories[i] = $('#card .cbd-rate').attr("data-id");

}

$('div.tags').find('input[type="checkbox"]').click(function() {
  
  //everytime there is a new category/clicked
  //remove values from the resources array and initial variable
  //to remove duplication of entries
  resources = [];
  initial = "";
  
  //check everything on the first checkbox block if anything is checked
  if ($('div.tags.categories input[type="checkbox"]:checked').length > 0) {
    $('#card').hide();
    //we remove the attribute on the
    //second checkbox block to be able to filter it
    $('.topics input[type="checkbox"]').removeAttr('disabled');
    
    //in all inputs that are checked, get it's value (rel in this case)
    //check if the value already exists in our resources array
    //if not, put all those values into the array
    $('div.tags').find('input:checked').each(function() {
      if (($.inArray($(this).attr('rel'), resources)) === -1) {
        resources.push($(this).attr('rel'));
      }
      
      //convert our resources array to string
      //then replace the commas (,) with periods (.)
      initial = resources.toString();
      initial = initial.replace(/,/g, '.');
    });    
    
    //iterate through all the categories
    //and check if a category block's li children has the classes 
    //that we inserted in the initial variable
    //else fade the block out
    for (var i = 0; i < categories.length; ++i) {
      if ($(categories[i] + " .results > li." + initial).length != 0) {
        $(".results > li." + initial).show('fast');
        $(categories[i]).fadeIn('fast');
      } else {
        $(categories[i]).fadeOut('fast');
      }
    }
  } else {
    //reset all when all of the checkboxes are unticked
    $('.topics input[type="checkbox"]').attr('disabled', 'disabled');
    $('.results > li').fadeIn('fast');
    _showCategories(categories);
  }
});





}); //end document.ready block
