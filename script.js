const frame=document.querySelector('.frame');

function runClock(){
    
    var hrs=new Date().getHours();
    var mins=new Date().getMinutes();
    var sec=new Date().getSeconds();
    var txt="AM";
    
    if(hrs>12){hrs=hrs-12;txt="PM"
    }else if(hrs==0){hrs=12;txt="AM"}

    hrs=hrs<10?'0'+ hrs:hrs;
    mins=mins<10?'0'+ mins:mins;
    sec=sec<10?'0'+ sec:sec;

    frame.innerHTML=(`${hrs} : ${mins} : ${sec} ${txt}`);

}
runClock();
setInterval(runClock,1000);
