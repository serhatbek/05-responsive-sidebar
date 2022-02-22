const menuOpenBtn = document.querySelector('.open');
const menuCloseBtn = document.querySelector('.close');

const sidebarMenu = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar__overlay');

menuOpenBtn.addEventListener('click', openSidebar);
menuCloseBtn.addEventListener('click', closeSidebar);

function openSidebar() {
  sidebarMenu.classList.add('active');
  sidebarOverlay.classList.add('active');
}

function closeSidebar() {
  sidebarMenu.classList.remove('active');
  sidebarOverlay.classList.remove('active');
}
