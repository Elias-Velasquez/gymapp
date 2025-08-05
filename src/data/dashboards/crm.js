import face4 from "/images/faces/4.jpg";
import face9 from "/images/faces/9.jpg";
import face8 from "/images/faces/8.jpg";
import face11 from "/images/faces/11.jpg";
import face15 from "/images/faces/15.jpg";
import face10 from "/images/faces/10.jpg";
import face12 from "/images/faces/12.jpg";
import Ethereum from "/images/crypto-currencies/regular/Ethereum.svg";

export
    /* Target Incomplete Chart */
    let targetSeries = [48],
    targetOptions = {
        chart: {
            height: 127,
            type: "radialBar",
        },

        colors: ["rgba(255,255,255,0.9)"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "55%",
                    background: "#fff"
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#fff",
                        fontSize: ".625rem",
                        show: false
                    },
                    value: {
                        offsetY: 5,
                        color: "#fff",
                        fontSize: ".875rem",
                        show: true,
                        fontWeight: 600
                    }
                }
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Status"]
    },

    /* Total Customers chart */
    customersseries = [{
        name: 'Value',
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
    }],
    customersOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(112, 162, 255)"],
    },


    /* Total revenue chart */
    revenueSeries = [{
        name: 'Value',
        data: [20, 14, 20, 22, 9, 12, 19, 10, 25]
    }],
    revenueOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(35, 183, 229)"],

    },
    /* Conversion ratio Chart */
    conversionSeries = [{
        name: 'Value',
        data: [20, 20, 22, 9, 14, 19, 10, 25, 12]
    }],
    conversionOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },

    /* Total Deals Chart */
    dealsSeries = [{
        name: 'Value',
        data: [20, 20, 22, 9, 12, 14, 19, 10, 25]
    }],
    dealsOptions = {
        chart: {
            type: 'line',
            height: 40,
            width: 100,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(245, 184, 73)"],

    },

    /* Revenue Analytics Chart */
    analyticsSeries = [
        {
            type: 'line',
            name: 'Profit',
            data: [
                {
                    x: 'Jan',
                    y: 100
                },
                {
                    x: 'Feb',
                    y: 210
                },
                {
                    x: 'Mar',
                    y: 180
                },
                {
                    x: 'Apr',
                    y: 454
                },
                {
                    x: 'May',
                    y: 230
                },
                {
                    x: 'Jun',
                    y: 320
                },
                {
                    x: 'Jul',
                    y: 656
                },
                {
                    x: 'Aug',
                    y: 830
                },
                {
                    x: 'Sep',
                    y: 350
                },
                {
                    x: 'Oct',
                    y: 350
                },
                {
                    x: 'Nov',
                    y: 210
                },
                {
                    x: 'Dec',
                    y: 410
                }
            ]
        },
        {
            type: 'line',
            name: 'Revenue',
            chart: {
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: '#000',
                    opacity: 0.1
                }
            },
            data: [
                {
                    x: 'Jan',
                    y: 180
                },
                {
                    x: 'Feb',
                    y: 620
                },
                {
                    x: 'Mar',
                    y: 476
                },
                {
                    x: 'Apr',
                    y: 220
                },
                {
                    x: 'May',
                    y: 520
                },
                {
                    x: 'Jun',
                    y: 780
                },
                {
                    x: 'Jul',
                    y: 435
                },
                {
                    x: 'Aug',
                    y: 515
                },
                {
                    x: 'Sep',
                    y: 738
                },
                {
                    x: 'Oct',
                    y: 454
                },
                {
                    x: 'Nov',
                    y: 525
                },
                {
                    x: 'Dec',
                    y: 230
                }
            ]
        },
        {
            type: 'area',
            name: 'Sales',
            chart: {
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: '#000',
                    opacity: 0.1
                }
            },
            data: [
                {
                    x: 'Jan',
                    y: 200
                },
                {
                    x: 'Feb',
                    y: 530
                },
                {
                    x: 'Mar',
                    y: 110
                },
                {
                    x: 'Apr',
                    y: 130
                },
                {
                    x: 'May',
                    y: 480
                },
                {
                    x: 'Jun',
                    y: 520
                },
                {
                    x: 'Jul',
                    y: 780
                },
                {
                    x: 'Aug',
                    y: 435
                },
                {
                    x: 'Sep',
                    y: 475
                },
                {
                    x: 'Oct',
                    y: 738
                },
                {
                    x: 'Nov',
                    y: 454
                },
                {
                    x: 'Dec',
                    y: 480
                }
            ]
        }
    ],
    analyticsOptions = {
        chart: {
            height: 350,
            animations: {
                speed: 500
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 8,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            },
        },
        colors: ["var(--primary-color)", "rgba(35, 183, 229, 0.85)", "rgba(119, 119, 142, 0.05)"],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        stroke: {
            curve: 'smooth',
            width: [2, 2, 0],
            dashArray: [0, 5, 0],
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value;
                }
            },
        },
        tooltip: {
            y: [{
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(0) : e
                }
            }, {
                formatter: function (e) {
                    return void 0 !== e ? "$" + e.toFixed(0) : e
                }
            }, {
                formatter: function (e) {
                    return void 0 !== e ? e.toFixed(0) : e
                }
            }]
        },
        legend: {
            show: true,
            customLegendItems: ['Profit', 'Revenue', 'Sales'],
            inverseOrder: true,
            markers: {
                strokeWidth: 0,
                size: 6
            },
        },
        title: {
            text: 'Revenue Analytics with sales & profit (USD)',
            align: 'left',
            style: {
                fontSize: '.8125rem',
                fontWeight: 'semibold',
                color: '#8c9097'
            },
        },
        markers: {
            hover: {
                sizeOffset: 5
            }
        }
    },

    /* Profits Earned Chart */
    earnedSeries = [{
        name: 'Profit Earned',
        data: [44, 42, 57, 86, 58, 55, 70],
    }, {
        name: 'Total Sales',
        data: [34, 22, 37, 56, 21, 35, 60],
    }],
    earnedOptions = {

        chart: {
            type: 'bar',
            height: 180,
            toolbar: {
                show: false,
            }
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        colors: ["var(--primary-color)", "#e4e7ed"],
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{
                        from: -100,
                        to: -46,
                        color: '#ebeff5'
                    }, {
                        from: -45,
                        to: 0,
                        color: '#ebeff5'
                    }]
                },
                columnWidth: '60%',
                borderRadius: 5,
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: undefined,
        },
        legend: {
            show: false,
            position: 'top',
        },
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '13px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                }
            }
        },
        xaxis: {
            type: 'week',
            categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            axisBorder: {
                show: true,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90
            }
        }
    },

    //Leads By Source
    SessionsSeries = [32, 27, 25, 16],
    SessionsOptions = {
        labels: ["Mobile", "Desktop", "Laptap", "Tablet",],
        chart: {
            height: 300,
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'round',
            colors: "#fff",
            width: 0,
            dashArray: 0,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '80%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '20px',
                            color: '#495057',
                            offsetY: -4
                        },
                        value: {
                            show: true,
                            fontSize: '18px',
                            color: undefined,
                            offsetY: 8,
                            formatter: function (val) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: false,
                            showAlways: true,
                            label: 'Total',
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#495057',
                        }

                    }
                }
            }
        },
        colors: ["var(--primary-color)", "rgba(35, 183, 229, 1)", "rgba(245, 184, 73, 1)", "rgba(38, 191, 148, 1)",],
    }

//Deals Statistics
export let
    dealsStatistics = [
        { checkboxId: 'checkboxNoLabel2', checked: false, avatar: face4, name: 'Mayor Kelly', role: 'Manufacture', email: 'mayorkelly@gmail.com', country: 'Germany', countryBadge: 'bg-info-transparent', dateRange: 'Sep 15 - Oct 12, 2023', },
        { checkboxId: 'checkboxNoLabel13', checked: true, avatar: face15, name: 'Andrew Garfield', role: 'Development', email: 'andrewgarfield@gmail.com', country: 'Canada', countryBadge: 'bg-primary-transparent', dateRange: 'Apr 10 - Dec 12, 2023', },
        { checkboxId: 'checkboxNoLabel4', checked: false, avatar: face11, name: 'Simon Cowel', role: 'Service', email: 'simoncowel234@gmail.com', country: 'Europe', countryBadge: 'bg-danger-transparent', dateRange: 'Sep 15 - Oct 12, 2023', },
        { checkboxId: 'checkboxNoLabel5', checked: true, avatar: face8, name: 'Mirinda Hers', role: 'Marketing', email: 'mirindahers@gmail.com', country: 'USA', countryBadge: 'bg-warning-transparent', dateRange: 'Apr 14 - Dec 14, 2023', },
        { checkboxId: 'checkboxNoLabel3', checked: true, avatar: face9, name: 'Jacob Smith', role: 'Social Platform', email: 'jacobsmith@gmail.com', country: 'Singapore', countryBadge: 'bg-success-transparent', dateRange: 'Feb 25 - Nov 25, 2023', },
    ],
    deal = [
        { name: "Michael Jordan", textFw: "fw-semibold fs-15", text: "michael.jordan@example.com", balance: "$2,893", avatar: face10, size: "avatar avatar-sm", avatarRounded: "avatar-rounded", textColors: "muted" },
        { name: "Emigo Kiaren", textFw: "fw-semibold fs-15", text: "emigo.kiaren@gmail.com", balance: "$4,289", initials: "EK", bgColor: "bg-warning-transparent", size: "avatar avatar-sm", avatarRounded: "avatar-rounded", textColors: "muted" },
        { name: "Randy Origoan", textFw: "fw-semibold fs-15", text: "randy.origoan@gmail.com", balance: "$6,347", avatar: face12, size: "avatar avatar-sm", avatarRounded: "avatar-rounded", textColors: "muted" },
        { name: "George Pieterson", textFw: "fw-semibold fs-15", text: "george.pieterson@gmail.com", balance: "$3,894", initials: "GP", bgColor: "bg-success-transparent", size: "avatar avatar-sm", avatarRounded: "avatar-rounded", textColors: "muted" },
        { name: "Kiara Advain", textFw: "fw-semibold fs-15", text: "kiaraadvain214@gmail.com", balance: "$2,679", initials: "KA", bgColor: "bg-primary-transparent", size: "avatar avatar-sm", avatarRounded: "avatar-rounded", textColors: "muted" },
    ],
    activities = [
        {
            avatarClass: 'primary',
            iconClass: 'bi-circle-fill',
            mainText: `Update of calendar events &amp;<a href="javascript:void(0);" class="text-primary fw-semibold"> Added new events in next week.</a>`,
            time: '4:45PM',
            spanText: 'fw-semibold'
        },
        {
            avatarClass: 'secondary',
            iconClass: 'bi-circle-fill',
            mainText: `New theme for <span class="fw-semibold">Spruko Website</span> completed <span class="d-block fs-12 text-muted">Lorem ipsum, dolor sit amet.</span>`,
            time: '3 hrs'
        },
        {
            avatarClass: 'success',
            iconClass: 'bi-circle-fill',
            mainText: `Created a <span class="text-success fw-semibold">New Task</span> today <span class="avatar avatar-xs bg-purple-transparent avatar-rounded ms-1"><i class="ri-add-fill text-purple fs-12"></i></span>`,
            time: '22 hrs'
        },
        {
            avatarClass: 'pink',
            iconClass: 'bi-circle-fill',
            mainText: `New member <span class="badge bg-pink-transparent">@andreas gurrero</span> added today to AI Summit.`,
            time: 'Today'
        },
        {
            avatarClass: 'warning',
            iconClass: 'bi-circle-fill',
            mainText: `32 New people joined summit.`,
            time: '22 hrs'
        },
        {
            avatarClass: 'info',
            iconClass: 'bi-circle-fill',
            mainText: `Neon Tarly added <span class="text-info fw-semibold">Robert Bright</span> to AI summit project.`,
            time: '12 hrs'
        },
        {
            avatarClass: 'dark',
            iconClass: 'bi-circle-fill',
            mainText: `Replied to new support request <i class="ri-checkbox-circle-line text-success fs-16 align-middle"></i>`,
            time: '4 hrs'
        },
        {
            avatarClass: 'purple',
            iconClass: 'bi-circle-fill',
            mainText: `Completed documentation of <a href="javascript:void(0);" class="text-purple text-decoration-underline fw-semibold">AI Summit.</a>`,
            time: '4 hrs'
        }
    ],
    crmCard = [
        { id: 1, image: Ethereum, icon: "ti-users", iconBg: "primary", name: "Total Customers", count: "1,02,890", viewAllColor: "text-primary", percentage: "+40%", percentageColor: "success", chartId: "crm-total-customers", chart: { options: customersOptions, series: customersseries }, all: "View All", month: "this month" },
        { id: 2, icon: "ti-wallet ", iconBg: "secondary", name: "Total Revenue", count: "$56,562", viewAllColor: "text-secondary", percentage: "+25%", percentageColor: "success", chartId: "crm-total-revenue", chart: { options: revenueOptions, series: revenueSeries }, all: "View All", month: "this month" },
        { id: 3, icon: "ti-wave-square", iconBg: "success", name: "Conversion Ratio", count: "12.08%", viewAllColor: "text-success", percentage: "-12%", percentageColor: "danger", chartId: "crm-conversion-ratio", chart: { options: conversionOptions, series: conversionSeries }, all: "View All", month: "this month" },
        { id: 4, icon: "ti-briefcase", iconBg: "warning", name: "Total Deals", count: "2,543", viewAllColor: "text-warning", percentage: "+19%", percentageColor: "success", chartId: "crm-total-deals", chart: { options: dealsOptions, series: dealsSeries }, all: "View All", month: "this month" },
    ],
    dealsStatus = [
        { title: 'Successful Deals', count: 987, color: 'primary' },
        { title: 'Pending Deals', count: 1073, color: 'info' },
        { title: 'Rejected Deals', count: 1674, color: 'warning' },
        { title: 'Upcoming Deals', count: 921, color: 'success' },
    ],
    dealsStatusProgress = [
        { color: "bg-primary", width: "21%" },
        { color: "bg-info", width: "26%" },
        { color: "bg-warning", width: "35%" },
        { color: "bg-success", width: "18%" },
    ],
    Earned = [
        { height: "190px", type: "bar", chart: { options: earnedOptions, series: earnedSeries } }
    ],
    RevenueAnalytics = [
        { height: "360px", type: "line", chart: { options: analyticsOptions, series: analyticsSeries } }
    ]