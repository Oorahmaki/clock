const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");

var update = setInterval(getTime, 1000);

function formatTime(time){
    if (time.length === 1){
        return "0" + time;
    }
    else if (time.length === 0){
        return "00";
    }
    else {
        return time;
    }
}

function getTime(){
    const date = new Date();
    hours.innerHTML = formatTime(date.getHours().toString());
    minutes.innerHTML = formatTime(date.getMinutes().toString());
};

getTime();