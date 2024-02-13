let min = 9;
let sec = 60;

let countdown = () => {
    setInterval(function(){
        if(min == 0 && sec == 1){
            document.querySelector('#min').innerHTML = "00";
            document.querySelector('#sec').innerHTML = "00";
        }
        else{
            sec--;
            document.querySelector('#sec').innerHTML = sec;
            if(sec == 0){
                min--;
                document.querySelector('#min').innerHTML = min;
                sec = 60;
                if(min == 0){
                    min = min;
                }
            }
        }
    }, 1000)
}

countdown()

let icon = document.querySelector('.icon');
let msg = document.querySelector('#msg');

icon.addEventListener('click', () => {
    msg.style.display = "none";
})