// Loader

window.addEventListener("load",()=>{

  const loader=document.getElementById("loader");

  setTimeout(()=>{
    loader.style.display="none";
  },1200);

});


// Scroll Top

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

  if(window.scrollY>300){
    scrollBtn.style.display="block";
  }else{
    scrollBtn.style.display="none";
  }

});

scrollBtn.addEventListener("click",()=>{

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});


// Theme Toggle

const toggle=document.getElementById("theme-toggle");

toggle.addEventListener("click",()=>{

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){

    document.body.style.background="#eafff3";
    document.body.style.color="#000";
    toggle.textContent="☀️";

  }else{

    document.body.style.background="#020b05";
    document.body.style.color="#00ff88";
    toggle.textContent="🌙";

  }

});


// Hacker Typer

const hackerOutput=document.getElementById("hackerOutput");

const startHack=document.getElementById("startHack");

const clearHack=document.getElementById("clearHack");

const hackerLines=[

  "[SYSTEM] Connecting secure server...",
  "[OK] Firewall bypassed.",
  "sudo nmap secure-terminal",
  "ACCESS GRANTED",
  "Decrypting files...",
  "ssh omi@server",
  "Injecting payload...",
  "Uploading matrix protocol...",
  "Tracing IP address...",
  "python3 cyber.py",
  "[SUCCESS] Connection established."

];

let hackerIndex=0;

function typeLine(){

  const code=hackerOutput.querySelector("code");

  code.textContent += "\n" + hackerLines[hackerIndex];

  hackerIndex++;

  if(hackerIndex>=hackerLines.length){
    hackerIndex=0;
  }

  hackerOutput.scrollTop=hackerOutput.scrollHeight;

}


// Keyboard Typing

document.addEventListener("keydown",(e)=>{

  if(
    e.key.length===1 ||
    e.key==="Enter" ||
    e.key===" "
  ){
    typeLine();
  }

});


// Start Button

startHack.addEventListener("click",()=>{

  typeLine();

  setTimeout(typeLine,100);

});


// Clear Button

clearHack.addEventListener("click",()=>{

  hackerOutput.querySelector("code").textContent=
  "// Terminal cleared...\n";

});
