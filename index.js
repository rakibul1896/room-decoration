//** navHamburger */
let navHidden = document.querySelector(".navHidden");
let navHiddenContainer = document.querySelector(".navHiddenOpacity");
function hamburger() {
  navHidden.style.height = "100px";
  navHiddenContainer.style.display = "block";
  document.documentElement.style.position = "fixed";
}

function closeNav() {
  let navHidden = document.querySelector(".navHidden");
  navHidden.style.height = "0px";
  navHiddenContainer.style.display = "none";
  document.documentElement.style.position = "static";
}

//** Slideshow of images */
let count = 1;
slideShow(count);

function slideShowFunction(n) {
  slideShow((count += n));
}

function slideShow(n) {
  var headerPicture = document.querySelectorAll(".headerImagesPicture");
  let lnth = headerPicture.length;
  var i;
  for (i = 0; i < lnth; i++) {
    headerPicture[i].style.display = "none";
  }
  if (count > lnth) {
    count = 1;
  }
  if (count < 1) {
    count = lnth;
  }
  headerPicture[count - 1].style.display = "block";
}
