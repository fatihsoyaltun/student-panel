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


//! AYHAN APP JS //
//teacher sayaç
var countDownDate = new Date("Mar 30, 2023 19:00:00").getTime();


var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.querySelector(".time_left_for_class").innerHTML = days + "g " + hours + "s "
  + minutes + "d " + seconds + "s ";
  
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".time_left_for_class").innerHTML = "EXPIRED";
  }
}, 1000);


//* AYHAN APP JS--->

//* müfredat
var options = {
  series: [25],
  chart: {
  height: 220,
  type: 'radialBar',
  toolbar: {
    show: false
  }
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: 225,
     hollow: {
      margin: 0,
      size: '60%',
      background: '#fff',
      image: undefined,
      imageOffsetX: 0,
      imageOffsetY: 0,
      position: 'front',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 4,
        opacity: 0.24
      }
    },
    track: {
      background: '#fff',
      strokeWidth: '67%',
      margin: 0, // margin is in pixels
      dropShadow: {
        enabled: true,
        top: -3,
        left: 0,
        blur: 4,
        opacity: 0.35
      }
    },

    dataLabels: {
      show: true,
      name: {
        offsetY: -10,
        show: true,
        color: '#888',
        fontSize: '14px'
      },
      value: {
        formatter: function(val) {
          return parseInt(val);
        },
        color: '#111',
        fontSize: '30px',
        show: true,
      }
    }
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'dark',
    type: 'horizontal',
    shadeIntensity: 0.5,
    gradientToColors: ['#18122b'],
    inverseColors: true,
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 100]
  }
},
stroke: {
  lineCap: 'round'
},
labels: ['Müfredat'],
};

var chart = new ApexCharts(document.querySelector("#curriculum_progress"), options);
chart.render();


//* sınıf ortalaması
var options = {
  series: [85],
  chart: {
  height: 220,
  type: 'radialBar',
  toolbar: {
    show: false
  }
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: 225,
     hollow: {
      margin: 0,
      size: '60%',
      background: '#fff',
      image: undefined,
      imageOffsetX: 0,
      imageOffsetY: 0,
      position: 'front',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 4,
        opacity: 0.24
      }
    },
    track: {
      background: '#fff',
      strokeWidth: '67%',
      margin: 0, // margin is in pixels
      dropShadow: {
        enabled: true,
        top: -3,
        left: 0,
        blur: 4,
        opacity: 0.35
      }
    },

    dataLabels: {
      show: true,
      name: {
        offsetY: -10,
        show: true,
        color: '#888',
        fontSize: '14px'
      },
      value: {
        formatter: function(val) {
          return parseInt(val);
        },
        color: '#111',
        fontSize: '30px',
        show: true,
      }
    }
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'dark',
    type: 'horizontal',
    shadeIntensity: 0.5,
    gradientToColors: ['#443c68'],
    inverseColors: true,
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 100]
  }
},
stroke: {
  lineCap: 'round'
},
labels: ['Not Ortalaması'],
};

var chart = new ApexCharts(document.querySelector("#classes_average_id"), options);
chart.render();

//* sınıf katılım durumu
var options = {
  series: [{
  name: 'Konu Sayısı',
  type: 'column',
  data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
}, {
  name: 'Öğrenci Sayısı',
  type: 'line',
  data: [10, 10, 8, 7, 6, 9, 10, 9, 10, 8, 10, 9]
}],
  chart: {
  height: 350,
  type: 'line',
},
stroke: {
  width: [0, 4]
},
title: {
  text: 'Katılım / Konu Sayısı'
},
dataLabels: {
  enabled: true,
  enabledOnSeries: [1]
},
labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
xaxis: {
  type: 'datetime'
},
yaxis: [{
  title: {
    text: 'Konu Sayısı',
  },

}, {
  opposite: true,
  title: {
    text: 'Öğrenci Sayısı'
  }
}]
};

var chart = new ApexCharts(document.querySelector("#classes_participation_rate_id"), options);
chart.render();

// classed_processed_button tıklandığında
const processedButtons = document.querySelectorAll('.classed_processed_button');
processedButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const listItem = this.closest('li');
    const link = listItem.querySelector('a');
    link.style.color = 'green';
    link.style.fontWeight = 'bold';
  });
});

// classed_not_processed tıklandığında
const notProcessedButtons = document.querySelectorAll('.classed_not_processed');
notProcessedButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const listItem = this.closest('li');
    const link = listItem.querySelector('a');
    link.style.color = 'gray';
    link.style.fontWeight = 'normal';
  });
});