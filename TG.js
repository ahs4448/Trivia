//first I need my timer to stop at 0,
//then I need to store correct answer values in variables
//then I need to display a record of right/wrong answers based on those values on a
//I need to make sure each answer choice can only be chosen once 
//seperate page when a user clicks "submit answers"

// jQuery inactive






$(document).ready(function(){








var timer = 60;


var setIntervalId = setInterval(function()
{ 
	(timer--);


$("#ScoreCard").html(timer);
if(timer === 0){
	clearInterval(setIntervalId);
	alert("Time is up!!! check score at the top of the page!")
}

},1000);

var rights = 0;
var wrongs = 0;

// var correct1 = 0
// var correct2 = 0
// var correct3 = 0
// var correct4 = 0
// var correct5 = 0
// var correct6 = 0

	$("input[value='correct']").click(function(){
		
		
		   rights+=1;

			$("#right").html(rights)
			console.log("correct");

		 })

	$("input[value='wrong']").click(function(){

wrongs+=1
$("#wrong").html(wrongs)
console.log("wrongs")
})


	});













































