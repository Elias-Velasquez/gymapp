import face6 from "/images/faces/6.jpg";
import face3 from "/images/faces/3.jpg";
import face1 from "/images/faces/1.jpg";
import face10 from "/images/faces/10.jpg";
import face14 from "/images/faces/14.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face9 from "/images/faces/9.jpg";
import face7 from "/images/faces/7.jpg";
import french from "/images/flags/french_flag.jpg";
import argentina from "/images/flags/argentina_flag.jpg";
import germany from "/images/flags/germany_flag.jpg";
import us from "/images/flags/us_flag.jpg";
import mexico from "/images/flags/mexico_flag.jpg";
import uae from "/images/flags/uae_flag.jpg";
import russia from "/images/flags/russia_flag.jpg";
import china from "/images/flags/china_flag.jpg";
import canada from "/images/flags/canada_flag.jpg";

export let
    /* Water Tracking Chart */
    waterTrackingSeries = [{
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
    }],
    waterTrackingOptions = {
        chart: {
            height: 115,
            type: 'area',
            fontFamily: 'Roboto, Arial, sans-serif',
            foreColor: '#5d6162',
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
            }
        },
        tooltip: {
            enabled: true,
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
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: undefined,
        },
        grid: {
            borderColor: 'transparent',
        },
        xaxis: {
            crosshairs: {
                show: false,
            }
        },
        colors: ["rgb(112, 162, 255)"],
        stroke: {
            width: [1],
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.5,
                opacityTo: 0.2,
                stops: [0, 60],
            }
        },
    },
    /* Sleep Tracking Chart */
    sleepTrackingSeries = [{
        data: [102, 148, 87, 112, 105, 145, 80, 110, 98]
    }],
    sleepTrackingOptions = {
        chart: {
            height: 115,
            type: 'area',
            fontFamily: 'Roboto, Arial, sans-serif',
            foreColor: '#5d6162',
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
            }
        },
        tooltip: {
            enabled: true,
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
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: undefined,
        },
        grid: {
            borderColor: 'transparent',
        },
        xaxis: {
            crosshairs: {
                show: false,
            }
        },
        colors: ["#64af6d"],
        stroke: {
            width: [1],
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.5,
                opacityTo: 0.2,
                stops: [0, 60],
            }
        },
    };

export let
    Discover = [
        { label: 'Bills', iconClass: 'bi-cash-coin', buttonClass: 'btn-info-light' },
        { label: 'Shopping', iconClass: 'bi-shop-window', buttonClass: 'btn-primary-light' },
        { label: 'Travel', iconClass: 'bi-compass', buttonClass: 'btn-warning-light' },
        { label: 'Food', iconClass: 'bi-gift', buttonClass: 'btn-secondary-light' },
        { label: 'Stocks', iconClass: 'bi-currency-bitcoin', buttonClass: 'btn-danger-light' },
        { label: 'Others', iconClass: 'bi-three-dots', buttonClass: 'btn-light' },
    ],
    FavouriteContacts = [
        { name: "Kiara Advain", size: "avatar", textColors: "muted", text: "+(72)-8765700876", avatar: face2, addIcon: "bi bi-heart-fill", dropdowns: [{ name: "Action" }, { name: "Another Action" }, { name: "Something Else Here" },] },
        { name: "Jason Mama", size: "avatar", textColors: "muted", text: "+(72)-234226333", avatar: face9, addIcon: "bi bi-heart-fill", dropdowns: [{ name: "Action" }, { name: "Another Action" }, { name: "Something Else Here" },] },
        { name: "Stuart Edward", size: "avatar", textColors: "muted", text: "+(11)-16743256", avatar: face10, addIcon: "bi bi-heart-fill", dropdowns: [{ name: "Action" }, { name: "Another Action" }, { name: "Something Else Here" },] },
    ],
    goals = [
        { title: "Maldives Trip", progress: 80, iconClass: "bi-globe2", iconBgClass: "bg-secondary-transparent", progressBarClass: "bg-secondary", progressTextClass: "text-secondary", },
        { title: "Savings For Birthday", progress: 90, iconClass: "bi-balloon-heart", iconBgClass: "bg-warning-transparent", progressBarClass: "bg-warning", progressTextClass: "text-warning", },
        { title: "Join Guitar Class", progress: 40, iconClass: "bi-lightning", iconBgClass: "bg-primary-transparent", progressBarClass: "bg-primary", progressTextClass: "text-primary", },
    ],
    imges = [
        { img: face1 }, { img: face9 }, { img: face3 }, { img: face11 }, { img: face6 }, { img: face14 },
    ],
    personal = [
        { id: 1, color: "primary", icon: "droplet", name: "Water Tracking", points: "87 Points", message: "0.9 Lt more to reach goal", count: "8.1", text: "Lt", chart: { options: waterTrackingOptions, series: waterTrackingSeries } },
        { id: 2, color: "success", icon: "alarm", name: "Sleep Tracking", points: "54 Points", message: "2.8 Hrs more to reach goal", count: "5.2", text: "Hrs", chart: { options: sleepTrackingOptions, series: sleepTrackingSeries } },
    ],
    RecentMessages = [
        { title: "Elin Misk", comtent: "Hello there! How are you doing? Call me when...", time: "2 min", badgeText: "2", badgeColor: "primary ", avatar: face12 },
        { title: "Shakira Shen", comtent: "I would like to discuss about that assets...", time: "9:43Pm", badgeText: "", badgeColor: "", avatar: face2 },
        { title: "Sebastian", comtent: "Shall we go to the cafe at downtown...", time: "Yesterday", badgeText: "2", badgeColor: "primary ", avatar: "" },
    ],
    UpcomingEvents = [
        { avatarRounded: "avatar-rounded", size: "avatar", name: `<span>Meeting with <span class="text-primary fw-semibold">Umar Xai</span></span>`, text: "2 Hours", badge: "11-06-2023", icons: "bi-calendar2-heart", bgColor: "bg-light", textColour: "primary", bgColour: "primary-transparent" },
        { avatarRounded: "avatar-rounded", size: "avatar", name: `<span><span class="text-primary fw-semibold">Shin Map</span> Birthday Party</span>`, text: "5 Hours", badge: "15-06-2023", avatar: face2, bgColour: "success-transparent" },
        { avatarRounded: "avatar-rounded", size: "avatar", name: "Holiday Trip To Italy", text: "1 Week", badge: "20-06-2023", icons: "bi-compass", bgColor: "bg-light", textColour: "pink", bgColour: "danger-transparent" },
        { avatarRounded: "avatar-rounded", size: "avatar", name: "Wedding Anniversary", text: "1 Day", badge: "24-07-2023", icons: "bi-balloon-heart", bgColor: "bg-light", textColour: "success", bgColour: "secondary-transparent" },
        { avatarRounded: "avatar-rounded", size: "avatar", name: ` <span>Meeting with <span class="text-primary fw-semibold">Irav Ert</span></span>`, text: "45 Minutes", badge: "15-06-2023", avatar: face7, bgColour: "warning-transparent" },
    ],
    VisitorsByCountries = [
        { country: "United States", badge: "32,190", avatar: us, bgColor: "light", textColor: "default ", size: "sm" },
        { country: "Germany", badge: "8,798", avatar: germany, bgColor: "light", textColor: "default ", size: "sm" },
        { country: "Mexico", badge: "16,885", avatar: mexico, bgColor: "light", textColor: "default ", size: "sm" },
        { country: "Uae", badge: "14,885", avatar: uae, bgColor: "light", textColor: "default ", size: "sm" },
        { country: "Argentina", badge: "17,578", avatar: argentina, bgColor: "light", textColor: "default ", size: "sm" },
        { country: "Russia", badge: "10,118", avatar: russia, bgColor: "light", textColor: "default ", size: "sm" },
        { country: "China", badge: "6,578", avatar: china, bgColor: "light", textColor: "default ", size: "sm" },
        { country: "France", badge: "2,345", avatar: french, bgColor: "light", textColor: "default ", size: "sm" },
        { country: "Canada", badge: "1,678", avatar: canada, bgColor: "light", textColor: "default ", size: "sm" },
    ],
    platforms = [
        { name: 'Instagram', followers: '121K', timeAgo: '6 min ago', changePercentage: '1.5', changeDirection: 'down', changeClass: 'danger', icon: 'bi bi-instagram', iconClass: 'text-danger' },
        { name: 'Facebook', followers: '2.1K', timeAgo: '1 hr ago', changePercentage: '1.9', changeDirection: 'down', changeClass: 'warning', icon: 'bi bi-facebook', iconClass: 'text-warning' },
        { name: 'Youtube', followers: '1.1M', timeAgo: '1 day ago', changePercentage: '1.9', changeDirection: 'up', changeClass: 'info', icon: 'bi bi-youtube', iconClass: 'text-info' },
        { name: 'Twitter', followers: '2.1K', timeAgo: '1 week ago', changePercentage: '1.9', changeDirection: 'up', changeClass: 'purple', icon: 'ri-twitter-x-line', iconClass: 'text-purple' }
    ]
