const birthday = new Date("2011-07-24");

const message = `

Happy Birthday Princess ❤️

Semoga di umurmu yang baru,
kamu selalu sehat ya cengeng,
bahagia, jangan suka marah,
dan semua impianmu tercapai.

Terima kasih sudah hadir di hidupku.

Aku sayang banget sama kamu.

Selamat ulang tahun sayangku. 🥳❤️

`;

const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");

const sections = [
document.querySelector(".countdown"),
document.querySelector(".letter"),
document.querySelector(".gallery"),
document.querySelector(".cake"),
document.querySelector(".ending")
];

openBtn.onclick = ()=>{

sections.forEach(sec=>{
sec.classList.remove("hidden");
});

music.play();

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

};

const typing=document.getElementById("typing");

let i=0;

function type(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(type,40);

}

}

openBtn.addEventListener("click",()=>{

setTimeout(type,800);

});

function updateCountdown(){

const now=new Date().getTime();

const distance=birthday-now;

if(distance<=0){

document.getElementById("days").innerHTML="00";
document.getElementById("hours").innerHTML="00";
document.getElementById("minutes").innerHTML="00";
document.getElementById("seconds").innerHTML="00";

return;

}

document.getElementById("days").innerHTML=Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").innerHTML=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML=Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML=Math.floor((distance%(1000*60))/1000);

}

setInterval(updateCountdown,1000);

updateCountdown();

document.getElementById("blowBtn").onclick=()=>{

document.getElementById("cakeEmoji").innerHTML="🎂";

alert("Yeyyy!! Lilinnya berhasil ditiup! 🎉❤️");

};
