const adressbtn = document.querySelector("#adress-form");
const adressclose = document.querySelector("#adress-close");

adressbtn.addEventListener("click", function () {
  document.querySelector('.adress-form').style.display = "flex";
});
adressclose.addEventListener("click", function () {
  document.querySelector('.adress-form').style.display = "none";
});
//Slider------------------------
const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');
const imgNuber = document.querySelectorAll('.slider-content-left-top img');
let index = 0;
rightbtn.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNuber.length - 1) {
    index = 0;
  }
  document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
});
leftbtn.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0)
  {
    index = imgNuber.length - 1;
    }
  document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
});
//slider 1----------------
const imgNuberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNuberLi.forEach(function (image,index) {
  image.addEventListener("click", function () {
    removeactive(); 
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
    image.classList.add("active")
   })
})
function removeactive() {
  let imgactive = document.querySelector('.active')
  imgactive.classList.remove("active")
}
//---------------slider2-----------
function imgAuto() {
  index = index + 1
  if (index > imgNuber.length - 1) {
    index = 0;
  }
   removeactive();
  document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
  imgNuberLi[index].classList.add("active")
  // console.log(index)
}
setInterval(imgAuto, 4000)
// ------------slider-product----------- 
const rightbtntwo = document.querySelector(".fa-chevron-right-two");
const leftbtntwo = document.querySelector(".fa-chevron-left-two")
const imgNubertwo = document.querySelectorAll(
  "slider-product-one-content-items"
)
rightbtntwo.addEventListener("click", function () {
  index = index + 1;
  if (index > imgNubertwo.length - 1) {
    index = 0;
  }
  document.querySelector(
    ".slider-product-one-content-items-content"
  ).style.right = index * 100 + "%";
})
leftbtntwo.addEventListener("click", function () {
  index = index - 1;
  if (index <= 0) {
    index = imgNubertwo.length - 1;
  }
  document.querySelector(
    ".slider-product-one-content-items-content"
  ).style.right = index * 100 + "%";
})
