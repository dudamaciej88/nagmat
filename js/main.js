

document.getElementById("sidebar").addEventListener('mouseover', mouseOver);
document.getElementById("sidebar").addEventListener('mouseout', mouseOut);




document.getElementById("myHeader").addEventListener('click', closeModal);
document.getElementById("closeModal").addEventListener('click', closeModal);

let nodes = document.querySelectorAll(".img-container")
const arr = [...nodes];

let links = document.querySelectorAll(".nav-links")
const linksArr = [...links]

links.forEach(item => {
  item.addEventListener('click', () => {
    radiobtn = document.getElementById("menu-btn");
    radiobtn.checked = false;
  })
})


nodes.forEach(item => {
  item.addEventListener('click', () => {
    openModal();
    showSlide(arr.indexOf(item));
    radiobtn = document.getElementById("menu-btn");
    radiobtn.checked = false;
  })
  })

let nexts = document.querySelectorAll(".next")
const nextsArr = [...nexts];

nexts.forEach(item => {
  item.addEventListener('click', () => {
    nextSlide(nextsArr.indexOf(item))}
)})

let prevs = document.querySelectorAll(".prev")
const prevsArr = [...prevs];

prevs.forEach(item => {
  item.addEventListener('click', () => {
    prevSlide(prevsArr.indexOf(item))}
)})

function mouseOver() {
    document.getElementById("sidebar").style.right = "0px";
  }
  
  function mouseOut() {
    
     document.getElementById("sidebar").style.right = "-35vw";
    }
  

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  clearSlides();
}



function showSlide(n) {
  let slides = document.getElementsByClassName("mySlides");
  slides[n].style.display = "block";
}

function clearSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let arr = [...slides]
  
  arr.forEach(item => {
    item.style.display = "none";
  })
}
 
function nextSlide(n) {
  clearSlides();
  showSlide(n+1)
  
}

function prevSlide(n) {
  clearSlides();
  showSlide(n)
  
}