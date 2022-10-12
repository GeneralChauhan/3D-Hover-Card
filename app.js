
const card = document.querySelector(".box");
const container = document.querySelector(".card");

const title = document.querySelector(".title");

const jordans = document.querySelector(".jordans img");

const purchase = document.querySelector(".purchase");

const description = document.querySelector(".info h3");

const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  glare
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "0.2s ease";
  
  title.style.transform = "translateZ(150px)";
  jordans.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.2s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  
  title.style.transform = "translateZ(0px)";
  jordans.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});