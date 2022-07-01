// this function is to showing and hiding the navbar on small sceen

function changingNavSection() {
  
  let toChange = document.getElementsByClassName('navList');
  // gets the navlist for small screen

  let toCross = document.getElementsByClassName('hamburger');
  // gets the hamburger button

  // conditional statement of whether to display the navbar or not
  if (toChange[0].style.display == 'flex') {
    toChange[0].style.display = 'none'
  }
  else {
    toChange[0].style.display = 'flex'
  }
  toCross[0].classList.toggle('cross');

}