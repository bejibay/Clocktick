
var date, h, m. s, period;
function showTime(){

// create the date object
date = new Date();
h = date.getHours();
m = date.getMonths();
s = date.getSeconds();
m  = control(m);
s  = control(s);
if(h<12){period="AM";return h;}
if(h>12){period="PM" return h;}
document.getElementById("display").InnerHTML= h+":"+m+":"+s+period;
setTimeout(showTime, 500);

}
function control(t) {
if(t<12){return "0"+t;}
else{return t;
}
}

