let lf = document.querySelector(".left-syn");
let rg = document.querySelector(".right-syn");
let lg = document.querySelector("#lg-name");

lf.addEventListener("click",()=>{
   
});
rg.addEventListener("click",()=>{

});
lg.addEventListener("click",()=>{
    textBox.style.display = "flex"
});



  const track = document.getElementById('scrollTrack');
  const img = track.querySelector('img');

  // Clone the image again to ensure seamless loop (only needed once more)
  const clone = img.cloneNode(true);
  track.appendChild(clone);