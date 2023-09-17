let interval,sec=0,min=0,hr=0;
function startTimer(){
interval=setInterval(updateTimer,1000);
}
function stopTimer(){
    clearInterval(interval);
}
function updateTimer(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hr++;
    }
const formattedTime=formatTime(hr)+":"+formatTime(min)+":"+formatTime(sec);

document.getElementById("timer").textContent=formattedTime;
}
function formatTime(time){
    return time<10 ? "0" + time : time;
}