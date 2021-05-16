var check = 0;
var hourEl= $('#hour');
var timeDispEl= $("#time-display");
/*
var nineAm =[09, textArea, saveBtn9];
var tenAm =[10, textArea, saveBtn10];
var ElevenAm =[11, textArea, saveBtn11];
var twelvePm =[12, textArea, saveBtn12];
var onePm =[01, textArea, saveBtn01];
var twoPm =[02, textArea, saveBtn02];
var threePm =[03, textArea, saveBtn03];
var fourPm =[04, textArea, saveBtn04];
var fivePm =[05, textArea, saveBtn05];*/

/*
function checknow(check){
  for (i=0, i<9, i++){

  }
}
*/


function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  console.log(typeof rightNow);
  timeDispEl.text(rightNow);
  var present = rightNow.substring(16,18);
  var check = parseInt(present);
  console.log("this is check's value ",check);
  
  return check;
}

function checkpresent(present){
  console.log("Value of Present: " + present);
}


setInterval(displayTime, 1000);


