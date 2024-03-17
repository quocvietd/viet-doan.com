// const toggleBtn = document.querySelector('.nav-menu');
// const toggleBtnIcon = document.querySelector('.nav-menu i');
// const dropDownMenu = document.querySelector('.dropdown-menu');

// toggleBtn.onclick = function() {
//   dropDownMenu.classList.toggle('open');
//   const isOpen = dropDownMenu.classList.contains('open');
  
//   toggleBtnIcon.className = isOpen
//     ? "fa-solid fa-xmark"
//     : "fa-solid fa-bars";
// };

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav.nav-bar ul.nav-bookmarks a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };