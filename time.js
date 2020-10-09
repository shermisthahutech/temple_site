function renderTime() {
    //date
    var mydate = new Date();
    var year = mydate.getFullYear();
    if (year < 1000) {
        year += 1900

    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var montharray = new Array("Jan", "Feb", "Mar", "April", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

    //time
    var currentTime = new Date();
    var m = currentTime.getMinutes();
    var h = currentTime.getHours();

    if (h == 24) {
        h = 0;
    } else if (h > 12) {
        h = h - 0;
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;

    }
    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" + dayarray[day] + " " + daym + " " + montharray[month] + "" + year + "   " + h + ":" + m;
    myClock.innerText = "" + dayarray[day] + " " + daym + " " + montharray[month] + "" + year + "   " + h + ":" + m;

    setTimeout("renderTime()", 1000);
}
renderTime();