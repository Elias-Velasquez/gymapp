
import face13 from "/images/faces/13.jpg";
import face5 from "/images/faces/5.jpg";
import face10 from "/images/faces/10.jpg";
import face14 from "/images/faces/14.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face8 from "/images/faces/8.jpg";
import face4 from "/images/faces/4.jpg";
import face9 from "/images/faces/9.jpg";
import face1 from "/images/faces/1.jpg";
import face15 from "/images/faces/15.jpg";
import nft2 from "/images/nft-images/2.png";
import nft5 from "/images/nft-images/5.png";
import nft1 from "/images/nft-images/1.png";
import nft6 from "/images/nft-images/6.png";
import nft7 from "/images/nft-images/7.png";
import nft8 from "/images/nft-images/8.png";

export let
    /* Earnings Report Chart */
    earningsReportSeries = [{
        name: "Earnings",
        data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
    }, {
        name: "Students",
        data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
    }],
    earningsReportOptions = {
        chart: {
            height: 340,
            type: "bar",
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1.1, 1.1],
            show: true,
            curve: ['smooth', 'smooth'],
        },
        grid: {
            borderColor: '#f3f3f3',
            strokeDashArray: 3
        },
        xaxis: {
            axisBorder: {
                color: 'rgba(119, 119, 142, 0.05)',
            },
        },
        legend: {
            show: false
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        markers: {
            size: 0
        },
        colors: ["var(--primary-color)", "#e9e9e9"],
        plotOptions: {
            bar: {
                columnWidth: "50%",
                borderRadius: 2,
            }
        },
    },
    /* Payouts Chart */
    payoutsSeries = [{
        name: 'Paid',
        data: [55, 55, 42, 42, 55, 55, 38, 38, 53, 53, 35, 35],
        type: 'line',
    }, {
        name: 'UnPaid',
        data: [35, 35, 46, 46, 35, 35, 48, 48, 33, 33, 38, 38],
        type: "line",
    }],
    payoutsOptions2 = {
        chart: {
            height: 270,
            toolbar: {
                show: false,
            },
            background: 'none',
            fill: "#fff",
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["var(--primary-color)", "rgba(230, 83, 60,0.5)"],
        background: 'transparent',
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            dashArray: [0, 5],
        },
        xaxis: {
            type: 'month',
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: 'top',
            markers: {
                strokeWidth: 0,
                size: 6
            },

        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: false,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90,
            }
        },
        yaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    };

export let
    course = [
        { id: 1, color: "primary", icon: "wallet", count: "$98,312", name: "YTD Earnings", percentageIcon: "up", percentageColor: "success", percentage: "+2.02%" },
        { id: 2, color: "secondary", icon: "users", count: "35,393", name: "Total Students", percentageIcon: "down", percentageColor: "danger", percentage: "-0.24%" },
        { id: 3, color: "warning", icon: "id", count: "573", name: "Total Instructors", percentageIcon: "down", percentageColor: "danger", percentage: "-1.32%" },
        { id: 4, color: "danger", icon: "gift", count: "2,389", name: "Total Courses", percentageIcon: "up", percentageColor: "success", percentage: "+0.89%" },
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
    statistics = [
        {
            data: [
                { label: "Symbol", value: "BTC", class: "" },
                { label: "Price Benchmark", value: "128.00%", class: "" },
                { label: "Price (USD)", value: "$4,253.49", class: "text-success fe-semibold" },
                { label: "Change (24H)", value: "-0.24%", class: "text-danger fw-semibold" },
                { label: "Market Cap", value: "$179.12B", class: "" }
            ],
            buttonGroup: [
                { btnClass: "btn btn-primary btn-sm btn-wave waves-effect waves-light", btnLable: "1D" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1W" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "3M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "6M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1Y" },
            ],
            buttonGroup2: [
                { btnClass: "btn btn-primary btn-sm btn-wave waves-effect waves-light", btnLable: "1M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "6M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1Y" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "All" },
            ],
            buttonGroup3: [
                { btnClass: "btn btn-primary btn-sm btn-wave waves-effect waves-light", btnLable: "1M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "6M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1Y" },
            ],
        }
    ],
    TopInstructors = [
        { name: "John Henry", avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "M.Tech", balance: "321 Classes", avatar: face1, downTextClass: "text-muted", downText: "Digital Marketing", textColor: "text-primary", size: "avatar avatar-md" },
        { name: "Mortal Yun", avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "P.H.D", balance: "25 Classes", avatar: face5, downTextClass: "text-muted", downText: "Stocks & Trading", textColor: "text-primary", size: "avatar avatar-md", liClass: "mb-4" },
        { name: "Trex Con", avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "MBBS", balance: "39 Classes", avatar: face8, downTextClass: "text-muted", downText: "Science", textColor: "text-primary", size: "avatar avatar-md" },
        { name: "Saiu Sarah", avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "P.H.D", balance: "11 Classes", avatar: face12, downTextClass: "text-muted", downText: "Science", textColor: "text-primary", size: "avatar avatar-md" },
        { name: "Ion Hau", avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "M.Tech", balance: "124 Classes", avatar: face15, downTextClass: "text-muted", downText: "Web Development", textColor: "text-primary", size: "avatar avatar-md" },
    ],
    myCourses = [
        { course: "UI/UX Designing", progress: 60, duration: "3 Months", status: "Full Time", name: "Sarah Taylor", avatar: face2, color: "primary" },
        { course: "Project Management", progress: 100, duration: "45 Days", status: "Completed", name: "Jason Smith", avatar: face11, color: "success" },
        { course: "Python", progress: 38, duration: "90 Days", status: "Part Time", name: "Alex Perira", avatar: face14, color: "warning" },
        { course: "Digital Marketing", progress: 75, duration: "24 Days", status: "Week End", name: "Kamala Singh", avatar: face8, color: "info" },
        { course: "Full Stack Development", progress: 55, duration: "6 Months", status: "Full Time", name: "Jessica Leon", avatar: face4, color: "primary" },
        { course: "Stocks & Trading", progress: 29, duration: "1 Month", status: "Stopped", name: "Israel Khan", avatar: face12, color: "danger" }
    ],
    courses = [
        { id: 1, name: 'Ray Optics & Optical Fibre Master Class', category: 'Science', students: 20, date: '29-05-2023', instructor: 'Shin Opran', revenue: "25", image: nft1 },
        { id: 2, name: 'Master Linear Alzebra Medium Level', category: 'Mathematics', students: 90, date: '11-06-2023', instructor: 'Arya Neo', revenue: "773", image: nft2 },
        { id: 3, name: 'Learn How To Trade And Invest For-Absolute Beginners', category: 'Stocks & Trading', students: 161, date: '10-06-2023', instructor: 'Sia Niu', revenue: "51", image: nft8 },
        { id: 4, name: 'Digital Marketing Course from Scratch', category: 'Marketing', students: 115, date: '21-06-2023', instructor: 'Stuart George', revenue: "1,189", image: nft7 },
        { id: 5, name: 'Data Structures & Algorithms For Beginners', category: 'Programming', students: 30, date: '15-06-2023', instructor: 'Boran Ray', revenue: "3,368", image: nft5 },
        { id: 6, name: 'Css Zero to Hero Master Class', category: 'UI/UX', students: 51, date: '22-06-2023', instructor: 'Burak Oin', revenue: "252", image: nft6 }
    ],
    newStudents = [
        { name: "Richard Dom", email: "richarddom1116@demo.com", items: 9, orders: 1, avatar: face13 },
        { name: "Alicia Keys", email: "aliciakeys89@gmail.com", items: 1, orders: 0, avatar: face5 },
        { name: "Robert Brook", email: "robertbrook95@gmail.com", items: 15, orders: 0, avatar: face10 },
        { name: "Alex Boi", email: "alexboi555@gmail.com", items: 16, orders: 3, avatar: face9 }
    ],
    TopCategories = [
        { id: 1, color: "primary", title: "UI/UX Design", courses: "1000+ Courses", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="category-svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>` },
        { id: 2, color: "secondary ", title: "Digital Marketing", courses: "90+ Courses", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="category-svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g opacity=".3"><path d="M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5 l-0.82-1.91c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M19.99,4.01c0,0-3.55-0.69-8.23,3.99 c-1.32,1.32-2.4,3.38-2.73,4.04l2.93,2.93c0.65-0.32,2.71-1.4,4.04-2.73C20.68,7.56,19.99,4.01,19.99,4.01z M15,11 c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C17,10.1,16.1,11,15,11z"></path></g><g><path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z"></path></g></g></svg>` },
        { id: 3, color: "warning", title: "Web Development", courses: "250+ Courses", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="category-svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="swatchbook"><path opacity="0.2" d="M9 22H5a3.003 3.003 0 0 1-3-3V5a3.003 3.003 0 0 1 3-3h4a3.003 3.003 0 0 1 3 3v14a3.003 3.003 0 0 1-3 3z"></path><path opacity="0.4" d="m20.293 6.535-2.828-2.828a3.004 3.004 0 0 0-4.243 0l-1.229 1.228c0 .022.007.043.007.065v14c0 .027-.007.052-.008.08l8.301-8.302a3.004 3.004 0 0 0 0-4.243z"></path><circle cx="7" cy="17" r="1" opacity="1"></circle><path opacity="1" d="m19.065 12.007-7.073 7.072c0-.027.008-.052.008-.079a3.003 3.003 0 0 1-3 3h10a3.003 3.003 0 0 0 3-3v-4a3 3 0 0 0-2.935-2.993z"></path></svg>` },
        { id: 4, color: "success", title: "Stocks & Trading", courses: "100+ Courses", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="category-svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><rect fill="none" height="24" width="24"></rect><g opacity=".3"><path d="M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path></g><g><path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path></g></svg>` },
    ],
    EarningsReport = [
        { height: "340px", type: "bar", chart: { options: earningsReportOptions, series: earningsReportSeries } }
    ],
    payouts = [
        { height: "270px", type: "line", chart: { options: payoutsOptions2, series: payoutsSeries } }
    ]