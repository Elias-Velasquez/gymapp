
import face13 from "/images/faces/13.jpg";
import face6 from "/images/faces/6.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face1 from "/images/faces/1.jpg";
import face10 from "/images/faces/10.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face8 from "/images/faces/8.jpg";
import face4 from "/images/faces/4.jpg";
import face16 from "/images/faces/16.jpg";
import face9 from "/images/faces/9.jpg";
import face20 from "/images/faces/20.jpg";

export
    // Bitcoin Chart
    let Bitcoinseries = [
        {
            data: [34, 55, 41, 67, 22, 43, 21]
        },
    ], Bitcoinoptions = {

        chart: {
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                right: 6,
                blur: 3,
                color: ['#47bbed'],
                opacity: 0.2
            },
            type: 'line',
            height: 20,
            width: 100
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        },
        colors: ["#47bbed"],
        stroke: {
            width: [1.5],
            curve: ['smooth'],
        },
        xaxis: {
            crosshairs: {
                show: false,
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
    },

    // Ethereum coin Chart
    Ethereumseries = [
        {
            data: [34, 55, 41, 47, 32, 53, 31]
        },
    ], Ethereumoptions = {

        chart: {
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                right: 6,
                blur: 3,
                color: ['#28D193'],
                opacity: 0.2
            },
            type: 'line',
            height: 20,
            width: 100
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        },
        colors: ["#28D193"],
        stroke: {
            width: [1.5],
            curve: ['smooth'],
        },
        xaxis: {
            crosshairs: {
                show: false,
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
    },

    // Dash coin Chart
    Dashseries = [
        {
            data: [31, 53, 32, 47, 41, 55, 44]
        },
    ],
    Dashoptions = {

        chart: {
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                right: 6,
                blur: 3,
                color: ['#FF534D'],
                opacity: 0.2
            },
            type: 'line',
            height: 20,
            width: 100
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        },
        colors: ["#FF534D"],
        stroke: {
            width: [1.5],
            curve: ['smooth'],
        },
        xaxis: {
            crosshairs: {
                show: false,
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
    },

    // Golem coin Chart
    Golemseries = [
        {
            data: [21, 43, 22, 45, 35, 55, 34]
        },
    ], Golemoptions = {

        chart: {
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 3,
                right: 6,
                blur: 3,
                color: ['#FFBE14'],
                opacity: 0.2
            },
            type: 'line',
            height: 20,
            width: 100
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function (seriesName) {
                        return ''
                    }
                }
            },
            marker: {
                show: false
            }
        },
        colors: ["#FFBE14"],
        stroke: {
            width: [1.5],
            curve: ['smooth'],
        },
        xaxis: {
            crosshairs: {
                show: false,
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.9,
                opacityTo: 0.9,
                stops: [0, 98],
            }
        },
    },

    // Total revenue chart
    revenueseries = [{
        name: "Revenue",
        data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55]
    }], revenueoptions = {

        chart: {
            height: 180,
            type: "area",
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1.4],
            show: true,
            curve: ['smooth'],
        },
        xaxis: {
            crosshairs: {
                show: false,
            }
        },
        yaxis: {
            min: 50,
            max: 59,
        },
        legend: {
            show: false
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        markers: {
            size: 0
        },
        colors: ["#FFBE14"],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.7,
                stops: [0, 100]
            }
        },
    },

    // Sessions By Device Chart
    Sessionsseries = [
        {
            name: "Tablet",
            data: [[10, 35, 80]]
        },
        {
            name: "Mobile",
            data: [[22, 10, 80]]
        },
        {
            name: "Desktop",
            data: [[25, 25, 150]]
        },
    ], Sessionsoptions = {

        chart: {
            height: 350,
            type: "bubble",
            toolbar: {
                show: false
            }
        },
        grid: {
            borderColor: '#f3f3f3',
            strokeDashArray: 3
        },
        colors: ["#ff8c33", "#28d193", "#4b9bfa"],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true,
            fontSize: '13px',
            labels: {
                colors: '#959595',
            },
            markers: {
                size: 6,
                strokeWidth: 0
            }
        },
        xaxis: {
            min: 0,
            max: 50,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            max: 50,
            labels: {
                show: false,
            },
        }
    },
    // Target report chart
    reportseries = [{
        data: [17, 22, 37, 47, 39, 28, 14],
        name: 'Revenue',
    }],
    reportoptions = {
        chart: {
            type: 'bar',
            height: 235,
            toolbar: {
                show: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 6,
                left: 6,
                blur: 3,
                color: '#000',
                opacity: 0.05
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '35%',
                borderRadius: 4,
                horizontal: false,
                colors: {
                    ranges: [{
                        from: 41,
                        to: Infinity,
                        color: "var(--primary-color)"
                    },
                    {
                        from: 0,
                        to: 40,
                        color: "var(--primary02)"
                    }]
                },
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: false,
            borderColor: 'transparent',
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        xaxis: {
            categories: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            colors: '#fff',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                rotate: -90,
                style: {
                    fontFamily: 'Inter, sans-serif',
                },
            }
        },
        yaxis: {
            colors: '#fff',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            }
        },
    },
    // Recent Applicants
    pageviewsseries = [{
        name: 'Job Applied',
        type: 'line',
        data: [25, 50, 30, 55, 20, 45, 30]
    }, {
        name: 'Job Viewed',
        type: 'area',
        data: [35, 25, 40, 30, 45, 35, 60]
    }],
    pageviewsoptions = {

        chart: {
            height: 348,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 7,
                left: 1,
                blur: 3,
                color: '#000',
                opacity: 0.2
            },
        },
        colors: ["var(--primary-color)", "var(--primary01)"],
        grid: {
            borderColor: '#e9edf4',
            padding: {
                top: 10,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        stroke: {
            width: [2, 2],
            curve: 'smooth',
            dashArray: [0, 4]
        },
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        markers: {
            size: 4,
            hover: {
                size: 5
            }
        },
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shadeIntensity: 1,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        legend: {
            show: true,
            position: 'top',
            fontFamily: 'Inter, sans-serif',
            markers: {
                size: 6,
                strokeWidth: 0
            }
        },
        xaxis: {
            type: 'week',
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
        },
        yaxis: {
            min: 10,
            max: 70,
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600
                },
            },
            labels: {
                offsetX: -8,
                formatter: function (y) {
                    return y.toFixed(0) + "";
                }
            }
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;

                }
            }
        }
    },
    ActiveMembers = [
        {
            progress: [
                { name: "Active Candidates", count: "3,274", progressValue: "25%", progress: "25" },
                { name: "Active Recruiters", count: "8,726", progressValue: "75%", progress: "75" },
            ]
        }
    ],

    coins = [
        { id: 1, title: "Bitcoin", badgeText: "+25.8%", price: "$12,800", iconShorcut: "BTC", chartId: "btcCoin", chart: { options: Bitcoinoptions, series: Bitcoinseries, }, icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-info" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M94.3 71.4c-.5-3.6-2.3-6.4-5.4-8.2-1.4-.8-3.1-1.4-4.7-2.1.2-.1.3-.3.4-.3 7.9-4.1 7.2-16.3 1.5-20.5-2.3-1.7-4.9-2.8-7.7-3.4-2-.4-3.9-.7-6-1.1 0-3.5.1-8.5.1-12.4H65c0 3.8-.1 8.7-.1 12.1H59c0-3.5 0-8.3.1-12.1h-7.4c0 4-.1 8.8-.1 12.3-5.1 0-10-.1-15-.1 0 2.7 0 5.3-.1 7.9h3c.9 0 1.9 0 2.8.1 2.6.2 3.9 1.6 3.9 4.2l-.3 31.9c0 2.3-1 3.3-3.3 3.3h-5c-.5 3-1 5.9-1.6 8.9 5 .1 10 .1 15 .2 0 3.8 0 8.7-.1 12.7h7.4c0-4 .1-8.7.1-12.5 2.1.1 4 .1 5.9.2 0 3.8-.1 8.4-.1 12.3h7.4c0-4 .1-8.7.1-12.4.3 0 .5-.1.6-.1 3.5-.6 7.2-.9 10.6-1.7 4.5-1.1 8.1-3.7 9.9-8.2 1.7-3.6 2-7.2 1.5-11zM59 44.3c4.6 0 9.1-.4 13.4 1.5 2.8 1.2 4.2 3.5 4 6.3-.2 2.9-1.9 5-4.8 6-4.1 1.3-8.3 1.3-12.7 1.1 0-5 .1-9.8.1-14.9zm16.2 37.1c-4.1 1.8-8.5 1.8-12.8 1.9-1.2 0-2.4-.1-3.8-.1.1-5.5.1-10.9.2-16.4 5.6 0 11.2-.4 16.5 1.9 2.7 1.2 4.3 3.3 4.3 6.4 0 3.1-1.6 5.1-4.4 6.3z"></path></svg>` },
        { id: 2, title: "Ethereum", badgeText: "+12.9%", price: "$18,600", iconShorcut: "ETH", chartId: "ethCoin", chart: { options: Ethereumoptions, series: Ethereumseries, }, icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-success" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M65.2 87.2v22.7l28.1-39.5zM92.3 63.1l-27.1-45v32.7zM65.2 53.3v28l26.9-15.7zM35.8 63.1l27-45v32.7zM62.8 53.3v28L35.9 65.6zM62.8 87.2v22.7L34.7 70.4z"></path></svg>` },
        { id: 3, title: "Dash", badgeText: "+15.7%", price: "$16,580", iconShorcut: "DSH", chartId: "dshCoin", chart: { options: Dashoptions, series: Dashseries, }, icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-danger" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M20.8 89.3c1.4-4.1 2.7-7.9 4.1-11.8.1-.4.9-.7 1.3-.7 2.3-.1 4.7 0 7 0H79c1.2 0 1.8-.4 2.1-1.5 2.5-7.5 5.2-15 7.8-22.5.1-.4.2-.8.4-1.4H33.8c1.4-4.2 2.8-8.1 4.1-12 .1-.3.7-.6 1.1-.6 1.4-.1 2.8 0 4.2 0 18.8 0 37.6.1 56.3-.1 5.6-.1 11.6 4.3 9.2 12.5-1.8 6.1-4.1 12.1-6.2 18.2-.7 2.1-1.4 4.1-2.1 6.2-2.6 7.2-7.9 11.6-15.2 13.6-.7.2-1.4.2-2.1.2H22.3c-.4-.1-.8-.1-1.5-.1z"></path><path fill="#fff" d="M55.9 58.1c-1.4 4-2.8 7.7-4.2 11.4-.1.3-.7.5-1 .5H19.2c-.1 0-.3-.1-.6-.2 1.3-3.7 2.6-7.3 4-10.9.1-.3.7-.7 1-.7 10.7-.1 21.4-.1 32.3-.1z"></path></svg>` },
        { id: 4, title: "Golem", badgeText: "+12.1%", price: "$12,545", iconShorcut: "GLM", chartId: "glmCoin", chart: { options: Golemoptions, series: Golemseries, }, icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-warning" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path><path fill="#fff" d="M63.8 22.6c3.7-.1 7.2.6 10.2 2.7 1.4.9 2.4.8 3.6-.5 2.4-2.6 5-5 7.5-7.6.9-.9 1.8-1.5 2.9-.2 1.1 1.1.8 2-.2 2.9-2.6 2.6-5 5.2-7.6 7.8-1.1 1.1-1.3 1.9-.5 3.3 5.8 10.4 2.9 22.5-8.6 28.1-1.1.5-2.3.8-3.5 1-1.4.3-1.9 1-1.9 2.5.1 3 .1 6 0 8.9 0 1.6.5 2.3 2.1 2.7 6.2 1.5 10.6 5.2 13.3 10.9 2.6 5.5 1.9 15.4-3.8 21.3-4.8 4.9-13.2 6.9-19.5 4.4-7.5-3-12.1-9.6-12.2-17.5-.1-9.6 5.1-16.4 14.3-19 1.4-.4 2.2-1 2.1-2.5-.1-3.4 0-6.8-.2-10.2 0-.6-1.1-1.4-1.8-1.6-6-1.6-10.4-5.2-12.9-10.8-5.6-13 4.3-27.4 16.7-26.6zM79 92.8c0-7.9-6.9-15.1-14.5-15.1-8-.1-15.3 7-15.4 15-.1 7.9 7.3 15.6 14.9 15.5 8.1-.1 15-7.2 15-15.4zM49.3 41.1c0 8.6 6.6 15.6 14.9 15.6 7.7 0 14.8-7.1 14.8-15.1 0-7.4-5.5-15.2-14.7-15-8.4.1-14.9 6.3-15 14.5z"></path></svg>` },
    ],
    data = [
        { id: 1, title: "Total Sales", value: "15,800", change: "+25.8%", icon: "briefcase-2-line", color: "primary", badgeColor: "success" },
        { id: 2, title: "Total Tax", value: "$12,650", change: "+12.2%", icon: "bill-line", color: "secondary", badgeColor: "success" },
        { id: 3, title: "Total Income", value: "$14,800", change: "+7.45%", icon: "wallet-2-line", color: "success", badgeColor: "success" },
        { id: 4, title: "Total Expenses", value: "$7,566", change: "-3.21%", icon: "line-chart-line", color: "info", badgeColor: "danger" },
        { id: 5, title: "Sales Profit", value: "$7,474", change: "+36.03%", icon: "money-dollar-box-line", color: "warning", badgeColor: "success" },
        { id: 6, title: "Opex Ratio", value: "32%", change: "+0.89%", icon: "profile-line", color: "danger", badgeColor: "success" },
    ],

    dropdowns = [
        {
            dropdown1: [{ name: "Action" }, { name: "Another action" }, { name: "Something else here" },],
            dropdown2: [{ name: "Download" }, { name: "Import" }, { name: "Export" },],
            dropdown3: [{ name: "New" }, { name: "Popular" }, { name: "Relevant" },],
            dropdown4: [{ name: "Day" }, { name: "Month" }, { name: "Year" },],
            dropdown5: [{ name: "Today" }, { name: "This Week" }, { name: "Last Week" },],
            dropdown5: [{ name: "Buy" }, { name: "Sell" },],
        }
    ],

    imge = [
        { images: [{ img: face2, imgClass: "w-100" }, { img: face12, imgClass: "w-100" }, { img: face20, imgClass: "w-100" },] }
    ],
    stats = [
        { id: 1, textColor: "muted", tredIconColor: "success", avatarRounded: "avatar-rounded", label: 'Total Candidates', count: '9,231', trend: '0.5%', iconClass: 'people-fill', bgColor: 'primary-transparent', iconColor: "primary", countColor: 'fs-5 fw-semibold' },
        { id: 2, textColor: "muted", tredIconColor: "success", avatarRounded: "avatar-rounded", label: 'Total Subscriptions', count: '3,571', trend: '0.42%', iconClass: 'person-lines-fill', bgColor: 'secondary-transparent', iconColor: "secondary", countColor: 'fs-5 fw-semibold' },
        { id: 3, textColor: "muted", tredIconColor: "success", avatarRounded: "avatar-rounded", label: 'Page Views', count: '1,986', trend: '5.1%', iconClass: 'eye-fill', bgColor: 'success-transparent', iconColor: "success", countColor: 'fs-5 fw-semibold' },
        { id: 4, textColor: "muted", tredIconColor: "success", avatarRounded: "avatar-rounded", label: 'New Registrations', count: '773', trend: '3.5%', iconClass: 'file-earmark-text-fill', bgColor: 'info-transparent', iconColor: "info", countColor: 'fs-5 fw-semibold' },
    ],
    TotalRecruiters = [
        { id: 1, textColor: "muted", tredIconColor: "success", mbClass: "mb-4", label: 'Total Recruiters', count: '9,231', trend: '0.5%', iconClass: 'person-square', bgColor: 'secondary', countColor: 'fs-5 fw-semibold' },
        { id: 2, textColor: "light", tredIconColor: "light", mbClass: "mb-4", cardBgColor: "card-bg-primary text-fixed-white", label: 'Premium Recruiters', count: '9,231', trend: '0.42%', iconClass: 'person-square', bgColor: 'secondary', countColor: 'fs-5 fw-semibold' },
    ],
    PremiumRecruiters = [
        { id: 1, tredIconColor: "success", label: 'Premium Recruiters', count: '7 New', countColor: "fs-12 text-success", iconClass: 'chevron-right transform-arrow', bgColor: 'primary-transparent', firstIcon: "people", firstIconColor: "primary ", avatarRounded: "avatar-rounded", someCount: "386", someConetent: "Recents", img: [{ src: face2 }, { src: face12 }, { src: face20 }] },
    ],
    ActiveMember = [
        { id: 1, textColor: "default", tredIconColor: "success", fsClass: "fs-20", avatarRounded: "avatar-rounded", viewAll: true, label: '1,773', count: 'Active Members', countColor: "muted", iconClass: 'people-fill fs-16', bgColor: 'info', countColor: "" },
        { id: 2, textColor: "default", tredIconColor: "success", fsClass: "fs-20", avatarRounded: "avatar-rounded", viewAll: true, label: '116', count: 'Registrations', countColor: "muted", iconClass: 'file-earmark-text fs-16', bgColor: 'success', countColor: "" },
    ],
    Expenses = [
        { id: 1, textColor: "light", tredIconColor: "light", cardBgColor: "card-bg-primary text-fixed-white", label: 'Expenses', count: '3571', firstIcon: "coin", firstIconColor: "light ", firstIconTextColor: "primary" },
    ],
    status = [
        { id: 1, title: 'Total Candidates', description: 'Magna sit elitr kasd consetetur.', count: '2,460', trend: '2.5%', iconClass: 'users', color: 'primary', progress: '14%', progressColor: 'primary', progressValue: 14, dropdowns: [{ name: "Action" }, { name: "Another Action" }, { name: "Something Else Here" },] },
        { id: 2, title: 'Recruiters', description: 'Elitr at gubergren sit sed.', count: '7,539', trend: '3.1%', iconClass: 'user-circle', color: 'secondary', progress: '55%', progressColor: 'secondary', progressValue: 55, dropdowns: [{ name: "Action" }, { name: "Another Action" }, { name: "Something Else Here" },] },
        { id: 3, title: 'Page Views', description: 'Sed duo ut sanctus gubergren.', count: '13,693', trend: '5.4%', iconClass: 'view-360', color: 'success', progress: '24%', progressColor: 'success', progressValue: 24, dropdowns: [{ name: "Action" }, { name: "Another Action" }, { name: "Something Else Here" },] },
        { id: 4, title: 'Total Subscriptions', description: 'Invidunt magna voluptua.', count: '1,116', trend: '3.2%', iconClass: 'view-360', color: 'indigo', progress: '67%', progressColor: 'indigo', progressValue: 67, dropdowns: [{ name: "Action" }, { name: "Another Action" }, { name: "Something Else Here" },] }
    ],
    Timeline = [
        {
            day: "02",
            week: "Mon",
            iconClass: 'bi-circle-fill',
            mainText: ` <p class="mb-1 text-truncate timeline-widget-content text-wrap">You have an announcement - Ipsum Est
                          Diam Eirmod</p>
                        <p class="mb-0 fs-12 lh-1 text-muted">10:00AM<span
                            class="badge bg-primary-transparent ms-2">Announcement</span></p>`,
            textColor: "default"

        },
        {
            day: "15",
            week: "Sun",
            mainText: `<p class="mb-1 text-truncate timeline-widget-content text-wrap">National holiday - Vero Jayanti</p>
                        <p class="mb-0 fs-12 lh-1 text-muted"><span class="badge bg-warning-transparent">Holiday</span></p>`,
            textColor: "default"

        },
        {
            day: "23",
            week: "Mon",
            mainText: `<p class="mb-1 text-truncate timeline-widget-content text-wrap">John pup birthday - Team Member</p>
                        <p class="mb-4 fs-12 lh-1 text-muted">09:00AM<span
                            class="badge bg-success-transparent ms-2">Birthday</span></p>
                        <p class="mb-1 text-truncate timeline-widget-content text-wrap">Amet sed no dolor kasd - Et Dolores
                          Tempor Erat</p>
                        <p class="mb-0 fs-12 lh-1 text-muted">04:00PM<span
                            class="badge bg-primary-transparent ms-2">Announcement</span></p>`,
            textColor: "default"

        },
        {
            day: "31",
            week: "Tue",
            mainText: `<p class="mb-1 text-truncate timeline-widget-content text-wrap">National Holiday - Dolore Ipsum</p>
                       <p class="mb-0 fs-12 lh-1 text-muted"><span class="badge bg-warning-transparent">Holiday</span></p>`,
            textColor: "default"

        },
    ],
    TotalProducts = [
        { label: 'Total Products', value: '45,280', icon: 'ti-package', bgColor: 'bg-primary', change: 1.31 },
        { label: 'Total Sales', value: '10,500', icon: 'ti-rocket', bgColor: 'bg-secondary', change: -1.14 },
        { label: 'Income', value: '$69,270', icon: 'ti-wallet', bgColor: 'bg-success', change: 2.58 },
        { label: 'Total Orders', value: '12,088', icon: 'ti ti-packge-import fs-18', bgColor: 'bg-warning', change: 12.05 }
    ],
    trendingStocks1 = [
        { id: 1, icon: "bi-apple text-primary fs-18", name: "Apple", count: "$12,289.44", percentage: "0.14%", money: "+$1,780.80", iconClass: 'border', percentageIcon1Class: 'ti ti-trending-up fs-11 me-1 d-inline-block' },
        { id: 2, icon: "bi-currency-bitcoin text-primary fs-18", name: "Bitcoin", count: "$58,151.02", percentage: "2.14%", money: "+$5,745.62", iconClass: 'border', percentageIcon1Class: 'ti ti-trending-up fs-11 me-1 d-inline-block' },
    ],

    UsersByCountry = [
        {
            users: [
                { iconClass: "ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-primary", country: "Usa", count: "3,201" },
                { iconClass: "ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-secondary", country: "India", count: "2,345" },
                { iconClass: "ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-danger", country: "Vatican City", count: "106" },
                { iconClass: "ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-info", country: "Canada", count: "2,857" },
                { iconClass: "ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-orange", country: "Mauritius", count: "169" },
                { iconClass: "ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-warning", country: "Singapore", count: "1,950" },
                { iconClass: "ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-success", country: "Palau", count: "224" },
                { iconClass: "ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-pink", country: "Maldives", count: "147" },
                { iconClass: "ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-dark", country: "São Tomé and Príncipe", count: "182" },
            ],
            dropdown: [{ name: "Action" }, { name: "Another action" }, { name: "Something else here" },],
            stats: [
                { value: '25,350', timePeriod: 'This month', bgClass: 'bg-primary-transparent', textClass: 'text-primary', },
                { value: '19,200', timePeriod: 'Last month', bgClass: 'bg-info-transparent', textClass: 'text-default', },
                { value: '1,24,890', timePeriod: 'This Year', bgClass: 'bg-success-transparent', textClass: 'text-success', },
                { value: '97,799', timePeriod: 'Last Year', bgClass: 'bg-secondary-transparent', textClass: 'text-secondary', },
            ],
            countries: [
                { country: 'Brazil', visitors: '1,290', percentageChange: 2.90, iconClass: 'primary' },
                { country: 'Greenland', visitors: '2,596', percentageChange: -1.1, iconClass: 'secondary' },
                { country: 'Russia', visitors: '3,710', percentageChange: 0.8, iconClass: 'success' },
                { country: 'Palestine', visitors: '1,116', percentageChange: 10.06, iconClass: 'warning' },
                { country: 'Canada', visitors: '12,150', percentageChange: 9.05, iconClass: 'danger' }
            ]

        }
    ],
    countries = [
        { country: 'Brazil', visitors: '1,290', percentageChange: 2.90, iconClass: 'primary', textColor: "success", dir: "up" },
        { country: 'Greenland', visitors: '2,596', percentageChange: -1.1, iconClass: 'secondary', textColor: "danger", dir: "down" },
        { country: 'Russia', visitors: '3,710', percentageChange: 0.8, iconClass: 'success', textColor: "success", dir: "up" },
        { country: 'Palestine', visitors: '1,116', percentageChange: 10.06, iconClass: 'warning', textColor: "danger", dir: "down" },
        { country: 'Canada', visitors: '12,150', percentageChange: 9.05, iconClass: 'danger', textColor: "success", dir: "up" },
    ],
    state = [
        { value: '25,350', timePeriod: 'This month', bgClass: 'primary-transparent', textClass: 'primary', },
        { value: '19,200', timePeriod: 'Last month', bgClass: 'light', textClass: 'default', },
        { value: '1,24,890', timePeriod: 'This Year', bgClass: 'success-transparent', textClass: 'success', },
        { value: '97,799', timePeriod: 'Last Year', bgClass: 'secondary-transparent', textClass: 'secondary', },
    ],
    recentTasks = [
        { id: '01', title: 'Server Side Validation', avatars: [face2, face8, face2, face10], progress: 60, status: 'In Progress', date: '17-04-2023', color: "bg-primary-transparent", value: '2' },
        { id: '02', title: 'Multipurpose Dashboard Template', avatars: [face6, face8], progress: 0, status: 'Pending', date: '14-05-2023', color: "bg-warning-transparent", value: '' },
        { id: '03', title: 'Documentation Project', avatars: [face4, face15, face11], progress: 100, status: 'Completed', date: '20-04-2023', color: "bg-success-transparent", value: '1' },
        { id: '04', title: 'HR Management Template Design', avatars: [face5, face12, face13], progress: 50, status: 'In Progress', date: '29-05-2023', color: "bg-primary-transparent", value: '3' },
        { id: '05', title: 'Developing Backend', avatars: [face1, face8, face9], progress: 50, status: 'In Progress', date: '25-05-2023', color: "bg-primary-transparent", value: '3' },
        { id: '06', title: 'Design New Dashboard Template', avatars: [face4, face12, face16], progress: 100, status: 'Completed', date: '04-05-2023', color: "bg-success-transparent", value: '3' },
    ],
    trafficSources = [
        { name: "Google", icon: "ri-google-fill", growth: "23,379", current: "16,890", progress: "34" },
        { name: "Safari", icon: "ri-safari-line", growth: "78,973", current: "29,906", progress: "58" },
        { name: "Opera", icon: "ri-opera-fill", growth: "12,457", current: "8,674", progress: "62" },
        { name: "Edge", icon: "ri-edge-fill", growth: "8,570", current: "4,980", progress: "71" },
        { name: "Firefox", icon: "ri-firefox-fill", growth: "6,135", current: "4,436", progress: "48" },
        { name: "Ubuntu", icon: "ri-ubuntu-fill", growth: "4,789", current: "2,447", progress: "28" }
    ],
    cards = [
        { type: 'revenue', title: 'Total Revenue', amount: '$12,897', percentage: '3.5%', paddingClass: "p-3", iconClass: 'bg-secondary', icon: 'bi bi-receipt fs-16', chart: { options: revenueoptions, series: revenueseries }, },
        { type: 'members', title: 'Active Members', amount: '$12,897', percentage: '3.5%', paddingClass: "p-0", iconClass: 'bg-success', icon: 'bi bi-people fs-16', activeCandidates: 3274, candidateProgress: 25, activeRecruiters: 8726, recruiterProgress: 75 }
    ],
    days = [
        {
            name: "Mon",
            date: "09",
            events: [
                { title: "Meeting with client", location: "Video Conference", time: "9:00am - 10:00am" },
                { title: "Lunch with team members", location: "Dolores Ait Labore Sit", time: "12:00pm - 12:45pm" },
                { title: "General board meeting", location: "Golden Park", time: "4:00pm - 5:30pm" },
                { title: "Create New Registration Page", location: "2UA Project", time: "5:00pm - 5:45pm" },
            ],
        },
        {
            name: "Tue",
            date: "10",
            events: [
                { title: "Meeting with client", location: "Video Conference", time: "9:00am - 10:00am" },
                { title: "Lunch with team members", location: "Dolores Ait Labore Sit", time: "12:00pm - 12:45pm" },
                { title: "General board meeting", location: "Golden Park", time: "4:00pm - 5:30pm" },
                { title: "Create New Registration Page", location: "2UA Project", time: "5:00pm - 5:45pm" },
            ],
        },
        {
            name: "Wed",
            date: "11",
            events: [
                { title: "Meeting with client", location: "Video Conference", time: "9:00am - 10:00am" },
                { title: "Lunch with team members", location: "Dolores Ait Labore Sit", time: "12:00pm - 12:45pm" },
                { title: "General board meeting", location: "Golden Park", time: "4:00pm - 5:30pm" },
                { title: "Create New Registration Page", location: "2UA Project", time: "5:00pm - 5:45pm" },
            ],
        },
        {
            name: "Thu",
            date: "12",
            events: [
                { title: "Meeting with client", location: "Video Conference", time: "9:00am - 10:00am" },
                { title: "Lunch with team members", location: "Dolores Ait Labore Sit", time: "12:00pm - 12:45pm" },
                { title: "General board meeting", location: "Golden Park", time: "4:00pm - 5:30pm" },
                { title: "Create New Registration Page", location: "2UA Project", time: "5:00pm - 5:45pm" },
            ],
        },
        {
            name: "Fri",
            date: "13",
            events: [
                { title: "Meeting with client", location: "Video Conference", time: "9:00am - 10:00am" },
                { title: "Lunch with team members", location: "Dolores Ait Labore Sit", time: "12:00pm - 12:45pm" },
                { title: "General board meeting", location: "Golden Park", time: "4:00pm - 5:30pm" },
                { title: "Create New Registration Page", location: "2UA Project", time: "5:00pm - 5:45pm" },
            ],
        },
        {
            name: "Sat",
            date: "14",
            events: [
                { title: "Meeting with client", location: "Video Conference", time: "9:00am - 10:00am" },
                { title: "Lunch with team members", location: "Dolores Ait Labore Sit", time: "12:00pm - 12:45pm" },
                { title: "General board meeting", location: "Golden Park", time: "4:00pm - 5:30pm" },
                { title: "Create New Registration Page", location: "2UA Project", time: "5:00pm - 5:45pm" },
            ],
        },
        {
            name: "Sun",
            date: "15",
            events: [
                { title: "Meeting with client", location: "Video Conference", time: "9:00am - 10:00am" },
                { title: "Lunch with team members", location: "Dolores Ait Labore Sit", time: "12:00pm - 12:45pm" },
                { title: "General board meeting", location: "Golden Park", time: "4:00pm - 5:30pm" },
                { title: "Create New Registration Page", location: "2UA Project", time: "5:00pm - 5:45pm" },
            ],
        },
    ],
    charts1 = [
        { height: "350px", type: "line", chart: { options: pageviewsoptions, series: pageviewsseries }, },
    ],
    charts2 = [
        { height: "350px", type: "bubble", chart: { options: Sessionsoptions, series: Sessionsseries }, },
    ],
    charts3 = [
        { height: "235px", type: "bar", chart: { options: reportoptions, series: reportseries }, },
    ]




