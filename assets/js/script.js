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

var $text9= $("#text9AM");
var $text10= $("#text10AM");
var $text11= $("#text11AM");
var $text12= $("#text12PM");
var $text1= $("#text12PM");
var $text2= $("#text12PM");
var $text3= $("#text12PM");
var $text4= $("#text12PM");
var $text5= $("#text12PM");

$("button").on("click", function(){
  localStorage.setItem("9AM", ($text9AM.val()))

})





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


