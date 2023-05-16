const submenus = document.querySelectorAll(".submenu a");

submenus.forEach(submenu => {
  const subcontent = submenu.nextElementSibling;
  const arrow = submenu.querySelector(".menu-arrow");

  let menuOpen = false;

  submenu.addEventListener("click", () => {
    if (menuOpen) {
      subcontent.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
      menuOpen = false;
    } else {
      subcontent.style.display = "block";
      arrow.style.transform = "rotate(90deg)";
      menuOpen = true;
    }
  });
});

// Dark Mode start
const ball = document.querySelector(".dark-mode");
const items = document.querySelectorAll(
  "body, .navbar,.sidebar,.toggle-ball,.dark-mode,.student-panel, footer, .section, .classes_information_card,.classes_bar, .classes_participation_rate, #SvgjsText1097, .apexcharts-zoomin-icon, .apexcharts-zoomout-icon, .apexcharts-selected.dark, .apexcharts-reset-icon, apexcharts-menu-icon, text, #events-calendar, #events, .continuation_table, .card, .student-header-text, .student-info, .student-profil, .card-body, .student-accordion-button, .student-accordion-body, .student_profil_card_header, .student-profil-card-title, .student-subjects-nav-btn, .frontend_subjects, .backend_subjects, .subjects-nav-btn, .teacher_head_bottom_profile, .teacher_about, .teacher_analyces, .teacher_abilities, .teacher-about-edit, .teacher_my_classes, .my_classes, .quiz-project-notes"
);
const changeImg = document.querySelector(".navbar-brand_img");

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("dark-mode-active"));
  if (ball.classList.contains("dark-mode-active")) {
    document.cookie =
      "dark-mode=on; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    //changeImg.src = "/img/neosLogoWhite.png";
  } else {
    document.cookie =
      "dark-mode=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    //changeImg.src = "/img/neos.PNG";
  }
});

// Check if the cookie exists and set the dark mode accordingly
const darkModeCookie = document.cookie.split(";").find((c) => c.trim().startsWith("dark-mode="));
if (darkModeCookie && darkModeCookie.split("=")[1] === "on") {
  ball.classList.add("dark-mode-active");
  items.forEach((item) => item.classList.add("dark-mode-active"));
};

// flatpickr
try {
  document.getElementById("kt_datepicker_1").flatpickr();
} catch (error) {
  // console.error("Flatpickr initialization failed: ", error);
}

//FroalaEditor
try {
  let editor = new FroalaEditor('#example');
} catch (error) {
  // console.log(error);
}



//inbox
let mailRead = document.querySelectorAll('.subject');

mailRead.forEach(element => {
  element.addEventListener('click', () => {
    window.location.href = "inbox-read.html"
  });
});

//inbox read

let backInbox = document.querySelectorAll('.back-inbox');

backInbox.forEach(element => {
  element.addEventListener('click', () => {
    window.location.href = "inbox.html"
  });
});


// student-profil html certificate_status
const certificate_status = document.querySelector(".certificate_status");
const cert_photo = document.querySelector(".cert_photo");

if (70 >= 80) {
    certificate_status.innerHTML = `<span style="color: green;"><i class="fa fa-check-circle"></i> Not ortalaması sertifka almak için uygundur.</span>`
    cert_photo.style.filter = "grayscale(1%)";
} else {
    certificate_status.innerHTML = `<span style="color: red;"><i class="fa fa-times-circle"></i> Not Ortalaması sertifika almaya uygun değildir. Not ortalamasını % ${80 - 70} oranında arttırması gerekmektedir.</span>`
    cert_photo.style.filter = "grayscale(100%)";
}












