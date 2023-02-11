let saat = document.getElementById("saat")
let dakika = document.getElementById("dakika")
let saniye = document.getElementById("saniye")
let tarih = document.getElementById("tarih")
let ay = document.getElementById("ay")
let gun = document.getElementById("gun")

function gunceltarih(){

    let saatt = new Date().getHours()
    let dakikam = new Date().getMinutes()
    let saniyem = new Date().getSeconds()
    let tarihim = new Date().getFullYear()
    let aym= new Date().getMonth()
    let gunm = new Date().getDay()

    
    if (saatt>12){
        saatt = saatt -2
    }
    
    saatt = saatt <10 ? "0" + saatt : saatt;
    dakikam = dakikam <10 ? "0" + dakikam : dakikam;
    saniyem = saniyem <10 ? "0" + saniyem : saniyem;
    aym = aym <10 ? "0" + aym : aym;
    gunm = gunm <10 ? "0" + gunm : gunm;
    
    saat.innerText = saatt
    dakika.innerText = dakikam
    saniye.innerText = saniyem
    tarih.innerText = tarihim
    ay.innerText = aym
    gun.innerText = gunm
    setTimeout(()=>{
        gunceltarih()
    },1000)
}

gunceltarih();