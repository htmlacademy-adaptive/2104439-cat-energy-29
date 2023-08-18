if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

let navMain = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', function (evt) {
  evt.preventDefault;
  navMain.classList.toggle('nav--opened');
});
