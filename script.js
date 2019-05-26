const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const date = new Date();

function formatHours(){
    if (date.getHours().length === 1){
        return "0" + date.getHours();
    }
    else if (date.getHours().length === 0){
        return "00";
    }
    else {
        return date.getHours();
    }
}

function formatMinutes(){
    if (date.getMinutes().length === 1){
        return "0" + date.getMinutes();
    }
    else if (date.getMinutes().length === 0){
        return "00";
    }
    else {
        return date.getMinutes();
    }
};


function getTime(){
    hours.innerHTML = formatHours();
    minutes.innerHTML = formatMinutes();
};

getTime();