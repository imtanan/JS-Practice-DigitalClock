let clock = document.querySelector('#clock');
setInterval(()=>{
let localeT = new Date()
clock.innerText = localeT.toLocaleTimeString()

}, 1000);