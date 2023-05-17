document.addEventListener('DOMContentLoaded', () => {
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

    //teacher html apex charts start

    // Anket başarı durumu
    var options = {
        series: [{
            name: "Desktops",
            data: [90, 85, 80, 75, 80, 90, 100, 90, 85]
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
            categories: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağust.', 'Eylül'],
        }
    };

    var chart = new ApexCharts(document.querySelector("#teacher_success_average"), options);
    chart.render();


    const teacher_data = options.series[0].data;
    const sum = teacher_data.reduce((total, num) => total + num);
    const average = sum / teacher_data.length;
    const teacher_average = average.toFixed(2);
    const teacher_average_score = document.querySelector(".teacher_average_score");
    teacher_average_score.innerHTML = teacher_average;

    //  teacher_abilities
    var options = {
        series: [{
            name: 'Series 1',
            data: [95, 90, 85, 70, 50, 60, 50],
        }],
        chart: {
            height: 350,
            type: 'radar',
        },
        dataLabels: {
            enabled: true
        },
        plotOptions: {
            radar: {
                size: 140,
                polygons: {
                    strokeColors: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        title: {
            text: 'Yetenekler'
        },
        colors: ['#FF4560'],
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#FF4560',
            strokeWidth: 2,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        xaxis: {
            categories: ['Html', 'Css', 'Bootstrap', 'Javascript', 'Nodejs', 'Python', 'Django']
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function (val, i) {
                    if (i % 2 === 0) {
                        return val
                    } else {
                        return ''
                    }
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#teacher_abilities_id"), options);
    chart.render();


    //teacher html apex charts end

});

//!stdDashboard html start

var stdDash = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
        height: 350,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
        ]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var stdDash_chart = new ApexCharts(document.querySelector("#performance"), stdDash);
stdDash_chart.render();

//<-- ProgressBar->

var prgBar = {
    series: [{
        data: [1300, 1000, 800, 600, 500, 300, 200, ]
    }],
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
    },
    xaxis: {
        categories: ['Html', 'Css', 'Javascript', 'Python', 'Django', ],
    }
};

var prgBar_chart = new ApexCharts(document.querySelector("#progresBar"), prgBar);
prgBar_chart.render();

//!stdDashboard html end


