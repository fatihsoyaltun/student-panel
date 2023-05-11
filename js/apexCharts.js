
// Apex Charts Admin Page 
var options = {
    series: [{
        name: "Eğitmen",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    {
        name: "Öğrenci",
        data: [20, 34, 45, 56, 67, 78, 89, 90, 78]
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

var chart = new ApexCharts(document.getElementById("apexcharts-area"), options);
chart.render();

// Apex Charts Admin Page - Charts Two

var options2 = {
    series: [{
        name: "Eğitmen",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    {
        name: "Öğrenci",
        data: [20, 34, 45, 56, 67, 78, 89, 90, 78]
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

var chart2 = new ApexCharts(document.getElementById("apexcharts-bar"), options2);
chart2.render();


//classes html apex charts start

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
                    formatter: function (val) {
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

var chart = new ApexCharts(document.getElementById("curriculum_progress"), options);
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
                    formatter: function (val) {
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

var chart = new ApexCharts(document.getElementById("classes_average_id"), options);
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

var chart = new ApexCharts(document.getElementById("classes_participation_rate_id"), options);
chart.render();

//classes html apex charts end

//student-profil html apex charts start
// grade average_id
const averageSeries = [70];

const options_average = {
    series: averageSeries,
    chart: {
        height: 200,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    labels: ['Not Ortalaması'],
};

var chart = new ApexCharts(document.getElementById("grade_average_id"), options_average);
chart.render();

// class_rank_id
var options_rank = {
    series: [10],
    chart: {
        height: 200,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    labels: ['Sınıf Sıra'],
};

var chart = new ApexCharts(document.getElementById("class_rank_id"), options_rank);
chart.render();

// number_of_lessons_id
var options_lessons = {
    series: [10],
    chart: {
        height: 200,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    labels: ['Ders Sayısı'],
};

var chart = new ApexCharts(document.getElementById("number_of_lessons_id"), options_lessons);
chart.render();

// participation_rate_id
var options_participation = {
    series: [90],
    chart: {
        height: 200,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    labels: ['Katılım Oranı'],
};

var chart = new ApexCharts(document.getElementById("participation_rate_id"), options_participation);
chart.render();


//student-profil html apex charts end

