(function() {
    setTime();
    setInterval(setTime, 1000);
    function setTime () {
        const now = new Date();
        
        let hourHand = document.querySelector('.hour-hand');
        let minHand = document.querySelector('.min-hand');
        let secHand = document.querySelector('.sec-hand');

        let seconds = now.getSeconds();
        let secondsDegree = ((seconds/60) *360) + 90;
        secHand.style.transform = `rotate(${secondsDegree}deg)`;
        let mins = now.getMinutes();
        let minsDegree = ((mins/60) *360) + 90;
        minHand.style.transform = `rotate(${minsDegree}deg)`;
        let hours = now.getHours();
        let hoursDegree = ((hours/12) *360) + 90;
        hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    }
}());