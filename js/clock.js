function myClock(){
    setTimeout(function(){
        const d = new Date();
        const n = d.toLocaleTimeString();
        document.getElementById("clock").innerHTML = n;
        myClock();
    }, 1000)
}
myClock();