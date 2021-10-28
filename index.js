setInterval(function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minuts = currentTime.getMinutes();
    var secons = currentTime.getSeconds();
    var period = "AM";
    
    if(hours>=12){
        period = "PM";
    }
    if(hours>12){
        hours = hours -12;
    }
    if(minuts<10){
        minuts = "0" + minuts;
    }
    if(secons<10){
        secons = "0" + secons;
    }

    var clockTime = hours + ":" + minuts + ":" + secons + "" + period;
    var clock = document.getElementById("clock");
    clock.innerHTML = clockTime;
    
}, 1000);