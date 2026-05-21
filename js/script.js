// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(()=>{loader.style.opacity="0";setTimeout(()=>loader.remove(),600);},1200);
});

// Scroll Reveal
const fades = document.querySelectorAll(".fade");
const reveal = () => {
  fades.forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight-100){el.classList.add("show");}});
};
window.addEventListener("scroll",reveal);
reveal();

// Scroll Top
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll",()=>{scrollBtn.style.display = window.scrollY>300?"block":"none";});
scrollBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"});});

// Dark / Light Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  toggle.textContent=document.body.classList.contains("light")?"☀️":"🌙";
});

// EN / BN Toggle
const langBtn = document.getElementById("langToggle");
const identityText = document.getElementById("identityText");
const englishText = `<p>Nature calls to me in a silent language only the heart can hear.</p><p>Beneath the endless blue sky, with the soft touch of the wind, I feel deeply rooted—exactly where I belong.</p><p>I long to drift with the ocean’s currents, where the waves whisper stories and my restless mind finally finds peace.</p><p>Lost among trees, I discover myself anew; surrounded by mountains, water, and sky, something honest awakens within me.</p><p><b>Those who love nature truly know how to love people—and that belief is who I am.</b></p>`;
const banglaText = `<p>প্রকৃতি আমাকে ডাকে এক নীরব ভাষায়, যা শুধু হৃদয়ই বুঝতে পারে।</p><p>অসীম নীল আকাশের নিচে, বাতাসের কোমল ছোঁয়ায় আমি গভীরভাবে অনুভব করি—এটাই আমার ঠিকানা।</p><p>সমুদ্রের স্রোতের সঙ্গে ভেসে যেতে ইচ্ছে করে, যেখানে ঢেউরা নিজেদের গল্প ফিসফিস করে আর আমার অস্থির মন ধীরে ধীরে শান্ত হয়ে যায়।</p><p>গাছের ভেতর হারিয়ে গিয়ে নিজেকে নতুন করে আবিষ্কার করি; পাহাড়, জল আর আকাশের মাঝে আমার ভেতরের সৎ মানুষটি জেগে ওঠে।</p><p><b>যে প্রকৃতিকে ভালোবাসতে জানে, সে মানুষকেও সত্যিকার অর্থে ভালোবাসতে জানে—এই বিশ্বাসটাই আমার পরিচয়।</b></p>`;
let isEnglish=true;
langBtn.addEventListener("click",()=>{
  if(isEnglish){identityText.innerHTML=banglaText;langBtn.textContent="EN";}
  else{identityText.innerHTML=englishText;langBtn.textContent="BN";}
  isEnglish=!isEnglish;
  identityText.classList.remove("show");
  setTimeout(()=>identityText.classList.add("show"),50);
});

// Animate paragraphs
const projectSection = document.querySelector(".projects");
const animateText = ()=>{
  if(projectSection.getBoundingClientRect().top < window.innerHeight - 100){
    identityText.classList.add("show");
  }
};
window.addEventListener("scroll",animateText);
animateText();





// Expandable Side Menu
const mainBtn = document.querySelector(".side-main-btn");
const subBtns = document.querySelector(".side-sub-btns");

mainBtn.addEventListener("click", () => {
  subBtns.classList.toggle("show");

  if (subBtns.classList.contains("show")) {
    subBtns.style.maxHeight = subBtns.scrollHeight + "px";
  } else {
    subBtns.style.maxHeight = "0";
  }
});
