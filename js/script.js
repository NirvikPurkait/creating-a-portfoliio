// this function is to showing and hiding the navbar on small sceen

function changingNavSection() {
  
  let toChange = document.getElementsByClassName('navList')[0];
  // gets the navlist for small screen

  let toCross = document.getElementsByClassName('hamburger')[0];
  // gets the hamburger button

  // conditional statement of whether to display the navbar or not
  if (toChange.style.display == 'flex') {
    toChange.style.display = 'none'
  }
  else {
    toChange.style.display = 'flex'
  }
  toCross.classList.toggle('cross');

}


// this function to show dropdowns

let aboutDropdown = document.getElementsByClassName('aboutDropdown')[0];
let workDropdown = document.getElementsByClassName('workDropdown')[0];
let galaryDropdown = document.getElementsByClassName('galaryDropdown')[0];


function showAboutDropdown() {

  if (aboutDropdown.style.display == 'block') {
    aboutDropdown.style.display = 'none';
  }
  else {
    aboutDropdown.style.display = 'block';
    workDropdown.style.display = 'none';
    galaryDropdown.style.display = 'none';
  }

}

function showWorkDropdown() {

  if (workDropdown.style.display == 'block') {
    workDropdown.style.display = 'none';
  }
  else {
    workDropdown.style.display = 'block';
    aboutDropdown.style.display = 'none';
    galaryDropdown.style.display = 'none';
  }

}function showGalaryDropdown() {

  if (galaryDropdown.style.display == 'block') {
    galaryDropdown.style.display = 'none';
  }
  else {
    galaryDropdown.style.display = 'block';
    aboutDropdown.style.display = 'none';
    workDropdown.style.display = 'none';
  }

}