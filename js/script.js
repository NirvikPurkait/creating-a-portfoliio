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


// this function to show dropdowns
function showAboutDropdown() {

  let aboutDropdown = document.getElementsByClassName('aboutDropdown');

  if (aboutDropdown[0].style.display == 'block') {
    aboutDropdown[0].style.display = 'none';
  }
  else {
    aboutDropdown[0].style.display = 'block';
  }

}

function showWorkDropdown() {

  let workDropdown = document.getElementsByClassName('workDropdown');

  if (workDropdown[0].style.display == 'block') {
    workDropdown[0].style.display = 'none';
  }
  else {
    workDropdown[0].style.display = 'block';
  }

}function showGalaryDropdown() {

  let galaryDropdown = document.getElementsByClassName('galaryDropdown');

  if (galaryDropdown[0].style.display == 'block') {
    galaryDropdown[0].style.display = 'none';
  }
  else {
    galaryDropdown[0].style.display = 'block';
  }

}