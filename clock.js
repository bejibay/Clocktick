
var today, h, m, s, period;
function showTime(){

// create the date object
date = new Date();
h = today.getHours();
m = today.getMonths();
s = today.getSeconds();
m  = control(m);
s  = control(s);
if(h<12){period="AM";}
if(h>12){period="PM";}
document.getElementById("clockTick").InnerHTML= h+":"+m+":"+s+period;
setTimeout(showTime,1000);

}
function control(t) {
if(t<12){return "0"+t;}
else{return t;
}
}

