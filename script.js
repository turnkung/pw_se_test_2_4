const imgUrl = [
  "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=",
  "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];
const slider = document.getElementById("slider");
const sliderNav = document.getElementById("slider-nav");
$(document).ready(function () {
  imgUrl.forEach((url, i) => {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.setAttribute("id", `slide-${i + 1}`);
    slider.appendChild(imgElement);

    const aElement = document.createElement("a");
    aElement.setAttribute("onclick", `showSlide(${i + 1}, 'fixed')`);
    sliderNav.appendChild(aElement);
  });
  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "»";
  nextBtn.setAttribute("onClick", `changeSlide(${+1})`);
  sliderNav.appendChild(nextBtn);
});
var slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n), "plus");
}

function showSlide(n, type) {
  var i;
  var x = document.getElementById("slider");
  if (n > x.childNodes.length - 1) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.childNodes.length - 1;
  }

  if (type == "fixed") {
    slideIndex = n;
  }

  for (i = 1; i < x.childNodes.length; i++) {
    x.childNodes[i].style.display = "none";
  }
  x.childNodes[slideIndex].style.display = "block";
}