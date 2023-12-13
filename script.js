const menuBtn = document.querySelector('.menuBtns');
  const menuLinks = document.querySelectorAll('nav');
  
  menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('open'));
  menuLinks.forEach((item) => item.addEventListener('click' , () => document.querySelector('html').classList.toggle('open')));