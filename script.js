(function () {

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('navbar');
  var header2 = document.getElementById('nav2');

  var checkScroll = function () {

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

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 550) {

      //replace 52 with the height of your header in px

      header.classList.add('hide');
      header2.classList.add('show');
      prevDirection = direction;
    }
    else if (direction === 1 && curScroll < 500) {
      header2.classList.remove('show');
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

})();

function openNav() {
  document.getElementById("side-container").style.width = "100%";
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("side-container").style.width = "0";
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "rgb(252, 252, 252)";
}