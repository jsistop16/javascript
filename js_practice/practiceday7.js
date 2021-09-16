const clock = document.getElementById('clock');

var hour = 0;
var min = 0;
var sec = 0;



function timer(){
    
    sec++;
    if (sec==60){
        min++;
        sec=0;
    }
    
    if(min==60){
        hour++;
        min=0;
    }
    
    if(hour==100){
        init();

    }

    clock.innerHTML=((hour < 10 ? '0' + hour : hour) + ':' +(min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec));
    start();
}

function start(){
    tmp = setTimeout(timer, 100);
}

function pause(){
    clearTimeout(tmp);
}

function init(){
    sec=0;
    min=0;
    hour=0;
    clearTimeout(tmp);
    clock.innerHTML="00:00:00";
}

