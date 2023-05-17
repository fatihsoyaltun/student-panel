//Sidebar menu open-close

const submenus = document.querySelectorAll(".submenu a");

submenus.forEach(submenu => {
  const subcontent = submenu.nextElementSibling;
  const arrow = submenu.querySelector(".menu-arrow");

  submenu.addEventListener("click", () => {
    const isActive = submenu.classList.contains("active");

    // Diğer menülerin otomatik kapanması
    const openSubmenus = document.querySelectorAll(".submenu a.active");
    openSubmenus.forEach(openSubmenu => {
      const openSubcontent = openSubmenu.nextElementSibling;
      const openArrow = openSubmenu.querySelector(".menu-arrow");
      openSubcontent.style.display = "none";
      openArrow.style.transform = "rotate(0deg)";
      openSubmenu.classList.remove("active");
    });

    // Seçilen menünün açılması veya kapanması
    if (!isActive) {
      subcontent.style.display = "block";
      arrow.style.transform = "rotate(90deg)";
      submenu.classList.add("active");
    } else {
      subcontent.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
      submenu.classList.remove("active");
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

// student-dashboard /<--CountDown2-->

function updateCounter() {
  const now = new Date();
  const currentDay = now.getDay(); // 0: Pazar, 1: Pazartesi, 2: Salı, ... , 6: Cumartesi
  const currentTime = now.getTime(); // Geçerli zamanın milisaniye cinsinden değeri

  let targetDay = currentDay;
  let targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0, 0).getTime(); // Hedef günün saat 19:00'unun milisaniye cinsinden değeri

  if (currentDay === 0 || currentDay === 2 || currentDay === 4) {
    // Pazar, Çarşamba veya Cuma ise hedef gün bir sonraki gün olacak
    targetDay = (currentDay + 1) % 7;
    targetTime += 24 * 60 * 60 * 1000; // Bir sonraki günün saat 19:00'unun milisaniye cinsinden değerini hesapla
  }

  const remainingTime = targetTime - currentTime; // Kalan süreyi milisaniye cinsinden hesapla

  // Kalan süreyi saat, dakika ve saniye cinsinden dönüştür
  const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
  const hours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

  document.getElementById('day').innerText = `${days}g`;
  document.getElementById('hour').innerText = `${hours}s`;
  document.getElementById('minute').innerText = `${minutes}d`;
  document.getElementById('second').innerText = `${seconds}s`;
}

// Kalan süreyi güncellemek için periyodik olarak çağır
setInterval(updateCounter, 1000); // Her saniye güncelle


//teacher/teacher-profile.html
//teacher sayaç
var countDownDate = new Date("Jun 30, 2023 19:00:00").getTime();


var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".time_left_for_class").innerHTML = days + "g " + hours + "s " +
    minutes + "d " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".time_left_for_class").innerHTML = "EXPIRED";
  }
}, 1000);













