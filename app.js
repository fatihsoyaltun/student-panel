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


//! Apex Charts

var options = {
  series: [{
    name: "Eğitmen",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
},
{
  name:"Öğrenci",
  data:[20,34,45,56,67,78,89,90,78]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
title: {
  text: 'Product Trends by Month',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',],
}
};

var chart = new ApexCharts(document.querySelector("#apexcharts-area"), options);
chart.render();

//* Charts Two

var options2 = {
  series: [{
    name: "Eğitmen",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
},
{
  name:"Öğrenci",
  data:[20,34,45,56,67,78,89,90,78]
}],
  chart: {
  height: 350,
  type: 'bar',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
title: {
  text: 'Product Trends by Month',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',],
}
};

var chart2 = new ApexCharts(document.querySelector("#apexcharts-bar"), options2);
chart2.render();

//* Charts Student
var options3 = {
  series: [{
    name: "Katılım",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
},{
  name:"Not Ortalaması",
  data:[20,34,45,56,67,78,89,90,78]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
title: {
  text: 'Product Trends by Month',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
}
};

var chart3 = new ApexCharts(document.querySelector("#apexcharts-student"), options3);
chart3.render();

//! Calendar

// document.addEventListener('DOMContentLoaded', function() {
//   var calendarEl = document.getElementById('calendar');
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'dayGridMonth',
//     selectable: true,
//     select: function(start, end ,allDays){
//       console.log(start,end,allDays);
//     }
//   });
//   calendar.render();
// });
// <div id="calendar" class="calendar-container"></div>

//* SAyfa yönlendirme
