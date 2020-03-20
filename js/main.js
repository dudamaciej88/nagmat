// Sidebar
document.getElementById("sidebar").addEventListener("mouseover", mouseOver);
document.getElementById("sidebar").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("sidebar").style.right = "0px";
}

function mouseOut() {
  document.getElementById("sidebar").style.right = "-35vw";
}

// Modal

document.getElementById("myHeader").addEventListener("click", closeModal);
document.getElementById("closeModal").addEventListener("click", closeModal);

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  clearSlides();
}

let links = document.querySelectorAll(".nav-links");
const linksArr = [...links];

links.forEach(item => {
  item.addEventListener("click", () => {
    radiobtn = document.getElementById("menu-btn");
    radiobtn.checked = false;
  });
});

let nodes = document.querySelectorAll(".img-container");
const arr = [...nodes];

nodes.forEach(item => {
  item.addEventListener("click", () => {
    openModal();

    showSlide(arr.indexOf(item));
    radiobtn = document.getElementById("menu-btn");
    radiobtn.checked = false;
  });
});

document.getElementById("modalDisplayer").addEventListener("click", e => {
  let target = e.target;
  if (target.classList.value === "next") {
    changeSlide(parseInt(target.id));
  }

  if (target.classList.value === "prev") {
    changeSlide(parseInt(target.id));
  }
});

function showSlide(n) {
  let bigSlide = document.createElement("div");
  bigSlide.classList.add("mySlides");
  bigSlide.style.display = "block";
  let counterDisplayer = document.createElement("div");
  counterDisplayer.classList.add("numbertext");
  counterDisplayer.innerText = `${n + 1} / ${nodes.length}`;
  bigSlide.appendChild(counterDisplayer);
  
  if (n > 0) {
    let prevSwitch = document.createElement("a");
    prevSwitch.classList.add("prev");
    prevSwitch.id = n - 1;
    let prevIcon = "❮";
    prevSwitch.innerText = prevIcon;
    bigSlide.appendChild(prevSwitch);
  }

  if (n + 1 != nodes.length) {
    let nextSwitch = document.createElement("a");
    nextSwitch.classList.add("next");
    nextSwitch.id = n + 1;
    let nextIcon = "❯";
    nextSwitch.innerText = nextIcon;
    bigSlide.appendChild(nextSwitch);
  }

  let imgDisplayer = document.createElement("img");
  imgDisplayer.src = `./assets/gallery/big/${n + 1}_1200.jpg`;
  bigSlide.appendChild(imgDisplayer);
  document.getElementById("modalDisplayer").appendChild(bigSlide);
}

function clearSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let arr = [...slides];

  arr.forEach(item => {
    item.style.display = "none";
  });
}

function changeSlide(n) {
  clearSlides();
  showSlide(n);
}
