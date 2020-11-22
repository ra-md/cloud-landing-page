function menuInitiator({ menu, btn_open, btn_close, menu_item }) {
  function openMenu() {
    menu.classList.add('menu--active');
  }

  function closeMenu() {
    menu.classList.remove('menu--active');
  }

  btn_open.addEventListener('click', openMenu);
  btn_close.addEventListener('click', closeMenu);

  menu_item.forEach(item => {
    item.addEventListener('click', closeMenu);
  });
}

menuInitiator({
  menu: document.querySelector('.site-header__nav'),
  btn_open: document.querySelector('.site-header__openNav'),
  btn_close: document.querySelector('.site-header__navClose'),
  menu_item: document.querySelectorAll('.site-header__link'),
});

menuInitiator({
  menu: document.querySelector('.docs__sidebar'),
  btn_open: document.querySelector('.docs__btnOpen'),
  btn_close: document.querySelector('.docs__btnClose'),
  menu_item: document.querySelectorAll('.docs__sidebarListItem'),
});
