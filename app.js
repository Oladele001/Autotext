const typedtext = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["OLADELE", "AYONI", "AYO", "CODE-KING👑"];

const typingdelay = 200;
const erasingdelay = 200;
const newletterdelay = 2000;
let index = 0;
let charindex = 0;

document.addEventListener('DOMContentLoaded', ()=>{
    if(words.length){
        setTimeout(type,newletterdelay)
    }
})

function type() {
  if (charindex < words[index].length) {
    typedtext.textContent += words[index].charAt(charindex);
    charindex++;
    setTimeout(type, typingdelay);
  } else {
    setTimeout(erase, newletterdelay);
  }
}

function erase() {
  if (charindex > 0) {
    typedtext.textContent = words[index].substring(0, charindex - 1);
    charindex--;
    setTimeout(erase, erasingdelay)
  }else{
    index ++
    if(index >= words.length){
        index = 0
    }
    setTimeout(type, typingdelay + 1100)
  }
}
