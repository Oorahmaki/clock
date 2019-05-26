const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const date = new Date();


function formatTime(time){
    if (time.length === 1){
        return "0" + date.getHours();
    }
    else if (time.length === 0){
        return "00";
    }
    else {
        return time;
    }
}

function getTime(){
    hours.innerHTML = formatTime(date.getHours());
    minutes.innerHTML = formatTime(date.getMinutes());
};

getTime();