(function() {
    function getDateDetail() {
        var date = new Date(),
            hours = document.getElementsByClassName('hour')[0],
            minutes = document.getElementsByClassName('minute')[0],
            seconds = document.getElementsByClassName('second')[0],
            dates = document.getElementsByClassName('date-detail')[0],
            periods = document.getElementsByClassName('period')[0];
        if(date.getHours() > 12){
            var hour = date.getHours() - 12;
            if( hour <= 9) {
                hours.innerHTML = "0" +hour + " :";
            } else {
                hours.innerHTML = hour + " :";
            }
        }
        else {
            if(date.getHours() <= 9) {
                hours.innerHTML = "0" + date.getHours() + ":";
            } else {
                hours.innerHTML = date.getHours() + " :";
            }
        }
        if (date.getMinutes() <= 9) {
            minutes.innerHTML = " 0" + date.getMinutes();
        } else {
            minutes.innerHTML = " " +date.getMinutes();
        }
        if (date.getSeconds() <= 9) {
            seconds.innerHTML = "0" + date.getSeconds();
        } else {
            seconds.innerHTML = date.getSeconds();
        }
        if(date.getHours() >= 12){
            periods.innerHTML = "Pm";
        } else {
            periods.innerHTML = "Am";
        }
        var days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        dates.innerHTML = days[date.getDay()] + " , " + months[date.getMonth()] + " , " + date.getFullYear();
    }
    setInterval(getDateDetail,100);
}());