


const navShow = () => {

  let doc = document.documentElement;
  let w = window;

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  let header = document.getElementById('header');
  let header2 = document.getElementById('nav2');

  const checkScroll = () => {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  const toggleHeader = (direction, curScroll) => {
    const x = document.getElementById('sec1-btn');
    if (direction === 2 && curScroll > x.offsetTop) {

      //replace 52 with the height of your header in px

      header.classList.add('hide');
      header2.classList.add('show');

      prevDirection = direction;
    }
    else if (direction === 1 && curScroll < x.offsetTop) {
      header2.classList.remove('show');
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

}; navShow();


const navBtn = document.getElementById('li-btn');

navBtn.addEventListener('click', () => {
    const handle = setInterval(up, 10);
    function up() {
      if (window.scrollY == 0) {
        clearInterval(handle);
      } else {
        window.scrollBy(0,-50); 
      }
    }
});



function openNav() {
  document.getElementById("side-container").style.width = "100%";
  document.getElementById("mySidenav").style.display = "flex";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("side-container").style.width = "0";
  document.body.style.backgroundColor = "rgb(252, 252, 252)";
}