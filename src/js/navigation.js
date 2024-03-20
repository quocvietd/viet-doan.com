function showMenu() {
    document.querySelector('.dropdown-menu').classList.toggle('open')
    const isOpen = document.querySelector('.dropdown-menu').classList.contains('open')
    
    document.querySelector('.nav-menu i').classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
  }