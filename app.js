const submenus = document.querySelectorAll(".submenu a");

submenus.forEach(submenu => {
  const subcontent = submenu.nextElementSibling;
  const arrow = submenu.querySelector(".menu-arrow");

  let menuOpen = false;

  submenu.addEventListener("click",()=>{
    if (menuOpen) {
      subcontent.style.display="none";
      arrow.style.transform="rotate(0deg)";
      menuOpen = false;
    } else {
      subcontent.style.display="block";
      arrow.style.transform="rotate(90deg)";
      menuOpen = true;
    }
  });
});

//! Breadcrumb
// var activeBreadcrumb = document.querySelector('.breadcrumb-item.active');
// var activeBreadcrumbItem = activeBreadcrumb.querySelector('li');
// activeBreadcrumbItem.innerHTML = 'Örnek Sayfa';


