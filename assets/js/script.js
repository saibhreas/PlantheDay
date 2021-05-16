var timeDispEl= $("#time-display");
//changes
/* making sure everything loads proplerly, in the right order for DOM seraches*/
$(document).ready(function(){
  console.log("ready");
})
var row9=$(09, text);
console.log("This is the value of id 09  "+ row9)
console.log(typeof row9.value);


function displayTime() {
  //console.log("started");
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  //console.log(typeof rightNow);
  timeDispEl.text(rightNow);
  var present = rightNow.substring(16,18);
  var check = parseInt(present);
  //console.log("this is check's value ",check);
  
  return check;
}

function checkpresent(present){
  console.log("Value of Present: " + present);
}


setInterval(displayTime, 1000);


