var timeDispEl= $("#time-display");
var check = "";
var theDay =[
  {
    id :09,
    textarea: "",
  },
  {
    id:10,
    textarea: "",
  },
  {
    id :11,
    textarea: "",
  },
  {
    id:12,
    textarea: "",
  },
  {
    id :01,
    textarea: "",
  },
  {
    id :09,
    textarea: "",
  },
  {
    id:10,
    textarea: "",
  },
  {
    id :11,
    textarea: "",
  },
  {
    id:12,
    textarea: "",
  },
  {
    id :01,
    textarea: "",
  },
  
]


var row1=09;
var row2=10
var row3=11;
var row4=12;
var row5=01;
var row6=02;
var row7=03
var row8=04;
var row9=05;
var row10=06;

var timeSlots =(row1, row2, row3, row4, row5, row6, row7, row8, row8, row9, row10);
//changes
/* making sure everything loads proplerly, in the right order for DOM seraches*/
$(document).ready(function(){
  console.log("ready");
})
console.log("This is the value of id 09  "+ row1)
console.log("This is row9's value  "+ row9);
console.log(theDay);




function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDispEl.text(rightNow);
  var present = rightNow.substring(16,18);
  
  var check = parseInt(present);
  //console.log ("my check of check " + check);
  return check;


  function checkpresent(theDay, check){
    console.log(theDay.length);
    console.log("Value of Present: " + check);
    for (i =0; i<theDays.length; i++) {
      if (check >timeSlots[i].id){
        console.log(theDay[i].id);
        console.log(check);
      document.querySelector('.textarea').style.backgroundColor = "#808080";
      console.log("Check "+ check +" Time Slots= " + timeSlots[i]);
      }
      else if  (check == timeSlots[i]){
        document.querySelector('.textarea').style.backgroundColor = "red";
      }
      else
      document.querySelector('.textarea').style.backgroundColor = "green";

    }
  }
}


setInterval(displayTime, 1000);


