var check = 0;
var hourEl= $('#hour');
var timeDispEl= $("#time-display")

/*var blockOfTime =[
  {hour :"text",
  activity:"",
  save-btn:

} ]*/

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  console.log(typeof rightNow);
  timeDispEl.text(rightNow);
  var present = rightNow.substring(16,18);
  var check = parseInt(present);
  console.log("this is check's value ",check)
  
  return check;
}

function checkpresent(present){
  console.log("Value of Present: " + present);
}

setInterval(displayTime, 1000);
checkpresent();

