const secondHand = document.querySelector('.second-hand')
const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
function setDate () {
    const now = new Date ();
    // setting Seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    // setting Hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    //setting Minutes
    const minutes = now.getMinutes()
    const minuteDegress = ((minutes / 60) * 360) + 90
    minHand.style.transform = `rotate(${minuteDegress}deg)`

}

setInterval(setDate, 1000)