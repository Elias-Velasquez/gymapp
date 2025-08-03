import face13 from "/images/faces/13.jpg";
import face7 from "/images/faces/7.jpg";
import face6 from "/images/faces/6.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face3 from "/images/faces/3.jpg";
import face1 from "/images/faces/1.jpg";
import face10 from "/images/faces/10.jpg";
import face14 from "/images/faces/14.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face8 from "/images/faces/8.jpg";
import face4 from "/images/faces/4.jpg";
import face16 from "/images/faces/16.jpg";
import face9 from "/images/faces/9.jpg";

export let
    overviewSeries = [
        {
            name: "Sales",
            data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
        },
        {
            name: "OPEX Ratio",
            data: [74, 72, 87, 116, 88, 85, 100, 73, 53, 84, 107, 64],
        },
        {
            name: "General & Admin",
            data: [84, 82, 97, 126, 98, 95, 110, 83, 63, 94, 117, 74],
        },
        {
            name: "Marketing",
            data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53],
        },
    ], overviewOptions = {
        chart: {
            stacked: true,
            type: "bar",
            height: 325,
        },
        grid: {
            borderColor: "#f5f4f4",
            strokeDashArray: 5,
            yaxis: {
                lines: {
                    show: true, // Ensure y-axis grids are shown
                },
            },
        },
        colors: [
            "var(--primary-color)",
            "rgba(var(--primary-rgb), 0.6)",
            "rgba(var(--primary-rgb), 0.3)",
            "#ebeff5",
        ],
        plotOptions: {
            bar: {
                colors: {
                    ranges: [
                        {
                            from: -100,
                            to: -46,
                            color: "#ebeff5",
                        },
                        {
                            from: -45,
                            to: 0,
                            color: "#ebeff5",
                        },
                    ],
                },
                columnWidth: "20%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "top",
            markers: {
                size: 7,
                shape: "square",
                strokeWidth: 0,
            },

        },
        yaxis: {
            title: {
                text: "Growth",
                style: {
                    color: "#adb5be",
                    fontSize: "14px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    cssClass: "apexcharts-yaxis-label",
                },
            },
            axisBorder: {
                show: true,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: "solid",
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                },
            },
        },
        xaxis: {
            type: "month",
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "sep",
                "oct",
                "nov",
                "dec",
            ],
            axisBorder: {
                show: false,
                color: "rgba(119, 119, 142, 0.05)",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: false,
                borderType: "solid",
                color: "rgba(119, 119, 142, 0.05)",
                width: 6,
                offsetX: 0,
                offsetY: 0,
            },
            labels: {
                rotate: -90,
            },
        },
    },
    /* sale value chart */
    saleValueseries = [60],
    saleValueOptions = {
        chart: {
            height: 229,
            type: "radialBar",
        },

        colors: ["var(--primary-color)"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#fff",
                },
                track: {
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 2,
                        opacity: 0.15,
                    },
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#4b9bfa",
                        fontSize: "16px",
                        show: false,
                    },
                    value: {
                        color: "#4b9bfa",
                        fontSize: "30px",
                        show: true,
                    },
                },
            },
        },
        stroke: {
            lineCap: "round",
        },
        labels: ["Cart"],
    };

export let
    Activities = [
        {
            avatarClass: 'danger',
            iconClass: 'bi bi-circle-fill fs-8',
            mainText: ` <p class="mb-0"><span class="fw-semibold">#Anita</span> <span class="ms-2 fs-12">Lorem ipsum dolor, sit amet consectetur adipisicing .</span></p>`,
            timeing: '4:45PM'
        },
        {
            avatarClass: 'success',
            iconClass: 'bi bi-circle-fill fs-8',
            mainText: `<p class="mb-0"><span class="me-2 fs-12">New Product reveived.</span><span class="fw-semibold">#FX-321</span> </p>`,
            timeing: '28 mins ago.'
        },
        {
            avatarClass: 'danger',
            iconClass: 'bi bi-circle-fill fs-8',
            mainText: `<p class="mb-0"> <span class="fw-semibold text-primary">#Zlatan</span> <span class="ms-2 fs-12">shared a page. <a href="https://themeforest.net/user/spruko/portfolio" target="_blank"class="text-success underlined fs-11">https://themeforest.net/user/spruko/portfolio</a></span></p>`,
            timeing: '37 mins ago.'
        },
        {
            avatarClass: 'success',
            iconClass: 'bi bi-circle-fill fs-8',
            mainText: `<p class="mb-0"><span class="fw-semibold text-primary">#Hussain</span> <span
                                            class="ms-2 fs-12">shared a file. </span></p>
                                    <small class="text-muted mt-0 mb-0 fs-10">1 day ago.</small>
                                    <p class="p-1 border border-dotted wp-50 br-5 mb-0">
                                        <a href="javascript:void(0);">
                                            <span class="badge bg-success text-fixed-white me-2">PPT</span> <span
                                                class="fs-11">Project_discussion</span>
                                        </a>
                                    </p>`,
            timeing: ''
        },
        {
            avatarClass: 'danger',
            iconClass: 'bi bi-circle-fill fs-8',
            mainText: `<p class="mb-0">
                                        <span class="fw-semibold">#Emiley</span>
                                        <span class="ms-2 fs-12">Lorem ipsum dolor, sit amet  adipisicing ipsum
                                            dolor...</span>
                                        <span class="fw-semibold ms-2">More</span>
                                    </p>`,
            time: '14 Mar 2022.'
        },
    ],
    Candidates = [
        {
            candidates: [
                { gender: 'Male', count: '1,234', percentageChange: 0.23 },
                { gender: 'Female', count: '1,754', percentageChange: -0.11 }
            ],
            dropdown: [{ name: "Action" }, { name: "Another action" }, { name: "Something else here" },]
        }
    ],
    categories = [
        { id: 1, name: "Clothing", amount: "$123.45M" },
        { id: 2, name: "Electronics", amount: "$765.89K" },
        { id: 3, name: "Grocery", amount: "$289.00M" },
        { id: 4, name: "Mobiles", amount: "$662.97K" },
        { id: 5, name: "Kitchen Appliances", amount: "$1.2B" },
        { id: 6, name: "Automobiles", amount: "$109.23K" }
    ],
    Customers = [
        { name: "Samantha Melon", size: "avatar avatar-md", text: "User ID: #1234", balance: "11.43am", avatar: face2, textColor: "text-muted", textColors: "success", liClass: "list-group-item border-0" },
        { name: "Allie Grater", size: "avatar avatar-md", text: "User ID: #3432", balance: "12.35pm", avatar: face1, textColor: "text-muted", textColors: "success", liClass: "list-group-item border-0" },
        { name: "Gabe Lackmen", size: "avatar avatar-md", text: "User ID: #2312", balance: "Yeserday", avatar: face5, textColor: "text-muted", textColors: "success", liClass: "list-group-item border-0 " },
        { name: "Manuel Labor", size: "avatar avatar-md", text: "User ID: #4231", balance: "24 Mar 2022", avatar: face7, textColor: "text-muted", textColors: "success", liClass: "list-group-item border-0 " },
        { name: "Hercules Bing", size: "avatar avatar-md", text: "User ID: #1754", balance: "18 Mar 2022", avatar: face9, textColor: "text-muted", textColors: "success", liClass: "list-group-item border-0 " },
        { name: "Manuel Labor", size: "avatar avatar-md", text: "User ID: #1345", balance: "15 Mar 2022", avatar: face11, textColor: "text-muted", textColors: "success", liClass: "list-group-item border-0" },
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
    invoices = [
        { id: 'A12-005', amount: "1,938", status: 'Processing', statusClass: 'bg-info', date: 'Nov 24, 2022' },
        { id: 'A12-006', amount: "1,098", status: 'Sent', statusClass: 'bg-success', date: 'Nov 28, 2022' },
        { id: 'A12-007', amount: "3,672", status: 'Pending', statusClass: 'bg-warning', date: 'Dec 20, 2022' },
        { id: 'A12-008', amount: "4,362", status: 'Processing', statusClass: 'bg-info', date: 'Dec 16, 2022' },
        { id: 'A12-009', amount: "2,389", status: 'Sent', statusClass: 'bg-success', date: 'Dec 10, 2022' },
        { id: 'A12-002', amount: "4,390", status: 'Sent', statusClass: 'bg-success', date: 'Nov 30, 2022' }
    ],
    recentTransaction = [
        { name: "Shopping", liClass: "list-group-item border-0 mb-0", size: "md", text: "card", balance: "-$256.99 ", bgColor: "bg-primary tansaction-icon", downText: "Mar 12,2022", textColor: "text-danger", textColors: "muted", colors: "muted", svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-white" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"></path></g></svg>`, cardClass: 'd-flex align-items-start' },
        { name: "Stock Market", liClass: "list-group-item border-0 mb-0", size: "md", text: "Transfer", balance: "+$18,567.00 ", bgColor: "bg-info tansaction-icon", downText: "Mar 10,2022", textColor: "text-success", textColors: "muted", colors: "muted", svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-white" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M19,20H5V9h14V20z M20,7H4V4h16V7z"></path><rect height="2" width="6" x="9" y="12"></rect></g></g></svg>`, cardClass: 'd-flex align-items-start' },
        { name: "Grocery", liClass: "list-group-item border-0 mb-0", size: "md", text: "card", balance: "-$256.99 ", bgColor: "bg-warning tansaction-icon", downText: "Apr 23,2022", textColor: "text-danger", textColors: "muted", colors: "muted", svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-white" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z"></path></svg>`, cardClass: 'd-flex align-items-start' },
        { name: "Business", liClass: "list-group-item border-0 mb-0", size: "md", text: "Transfer", balance: "+$256.99 ", bgColor: "bg-danger tansaction-icon", downText: "May 4,2022", textColor: "text-success", textColors: "muted", colors: "muted", svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-white" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g></g><g><path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z"></path></g></g></svg>`, cardClass: 'd-flex align-items-start' },
        { name: "Books", liClass: "list-group-item border-0 mb-0", size: "md", text: "card", balance: "-$256.99 ", bgColor: "bg-success tansaction-icon", downText: "May 18,2022", textColor: "text-danger", textColors: "muted", colors: "muted", svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-white" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z"></path></svg>`, cardClass: 'd-flex align-items-start' },
        { name: "Sports", liClass: "list-group-item border-0 mb-0", size: "md", text: "card", balance: "-$256.99 ", bgColor: "bg-pink tansaction-icon", downText: "Apr 30,2022", textColor: "text-danger", textColors: "muted", colors: "muted", svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-white" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M21.58,16.09l-1.09-7.66C20.21,6.46,18.52,5,16.53,5H7.47C5.48,5,3.79,6.46,3.51,8.43l-1.09,7.66 C2.2,17.63,3.39,19,4.94,19h0c0.68,0,1.32-0.27,1.8-0.75L9,16h6l2.25,2.25c0.48,0.48,1.13,0.75,1.8,0.75h0 C20.61,19,21.8,17.63,21.58,16.09z M19.48,16.81C19.4,16.9,19.27,17,19.06,17c-0.15,0-0.29-0.06-0.39-0.16L15.83,14H8.17 l-2.84,2.84C5.23,16.94,5.09,17,4.94,17c-0.21,0-0.34-0.1-0.42-0.19c-0.08-0.09-0.16-0.23-0.13-0.44l1.09-7.66 C5.63,7.74,6.48,7,7.47,7h9.06c0.99,0,1.84,0.74,1.98,1.72l1.09,7.66C19.63,16.58,19.55,16.72,19.48,16.81z"></path><polygon points="9,8 8,8 8,10 6,10 6,11 8,11 8,13 9,13 9,11 11,11 11,10 9,10"></polygon><circle cx="17" cy="12" r="1"></circle><circle cx="15" cy="9" r="1"></circle></g></g></svg>`, cardClass: 'd-flex align-items-start' },
    ],
    sales = [
        { id: 1, name: "Sales Statistics", count: "153", month: "THIS MONTH", stats: "Show full stats", statsColor: "primary", dir: "up", badgeText: "42%", badgeColor: "success", icon: `<svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" opacity=".3"></path><path d="M0,0h24v24H0V0z" fill="none"></path><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"></path><rect height="2" width="6" x="9" y="7"></rect><rect height="2" width="2" x="16" y="7"></rect><rect height="2" width="6" x="9" y="10"></rect><rect height="2" width="2" x="16" y="10"></rect></g></svg>` },
        { id: 2, name: "Total Revenue", count: "$4,32,474", month: "THIS MONTH", stats: "Show full stats", statsColor: "primary", dir: "down", badgeText: "12%", badgeColor: "danger", icon: `<svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path d="M12,6c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7S15.87,6,12,6z M13,14h-2V8h2V14z" opacity=".3"></path><rect height="2" width="6" x="9" y="1"></rect><path d="M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M12,20c-3.87,0-7-3.13-7-7s3.13-7,7-7s7,3.13,7,7S15.87,20,12,20z"></path><rect height="6" width="2" x="11" y="8"></rect></g></g></svg>` },
        { id: 3, name: "Page Views", count: "27,146", month: "THIS MONTH", stats: "Show full stats", statsColor: "primary", dir: "up", badgeText: "27%", badgeColor: "success", icon: `<svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z" opacity=".3"></path><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path></svg>` },
        { id: 4, name: "Profit By Sale", count: "$563", month: "THIS MONTH", stats: "Show full stats", statsColor: "primary", dir: "up", badgeText: "32.5%", badgeColor: "success", icon: `<svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z" opacity=".3"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path></svg>` },
    ],
    saleValue = [
        { gender: 'Sale Items', count: '567', percentageChange: "0.9%", arrow: 'up', Color: 'success', profit: 'Increased' },
        { gender: 'Sale Revenue', count: '$11,197', percentageChange: "0.15%", arrow: 'down', Color: 'success', profit: 'Profit' }
    ],
    transactions = [
        { name: "Order Picking", amount: "3876", sign: "+", isPositive: true, percentage: "3", timeAgo: "5 days ago" },
        { name: "Storage", amount: "2178", sign: "-", isPositive: false, percentage: "16", timeAgo: "2 days ago" },
        { name: "Shipping", amount: "1367", sign: "+", isPositive: true, percentage: "6", timeAgo: "1 day ago" },
        { name: "Receiving", amount: "678", sign: "-", isPositive: false, percentage: "25", timeAgo: "10 days ago" },
        { name: "Review", amount: "578", sign: "+", isPositive: true, percentage: "55", timeAgo: "11 days ago" },
        { name: "Profit", amount: "27215", sign: "+", isPositive: true, percentage: "32", timeAgo: "11 days ago" }
    ],
    visitorsByCountries = [
        { iconClass: "primary", country: "Usa", count: "3,201" },
        { iconClass: "secondary", country: "India", count: "2,345" },
        { iconClass: "danger", country: "Vatican City", count: "106" },
        { iconClass: "info", country: "Canada", count: "2,857" },
        { iconClass: "orange", country: "Mauritius", count: "169" },
        { iconClass: "warning", country: "Singapore", count: "1,950" },
        { iconClass: "success", country: "Palau", count: "224" },
        { iconClass: "pink", country: "Maldives", count: "147" },
        { iconClass: "dark", country: "São Tomé and Príncipe", count: "182" },
    ],
    completedTasks = [
        { id: 1, description: 'New landing page UI update', date: '24 Nov 2022', badgeColor: 'success', badgeText: '4 hrs ago', avatars: [face5, face9], checked: false, },
        { id: 2, description: 'Job portal dashboard redesign', date: '30 Nov 2022', badgeColor: 'success', badgeText: 'Today', avatars: [face11, face12, face13], checked: false, },
        { id: 3, description: 'New template layout update', date: '11 Dec 2022', badgeColor: 'success', badgeText: 'Yesterday', avatars: [face14], checked: false, },
        { id: 4, description: 'All dashboard licenses page update', date: '6 Dec 2022', badgeColor: 'success', badgeText: 'Yesterday', avatars: [face1, face2], checked: false, },
        { id: 5, description: 'Update color theme of ynex template', date: '8 Dec 2022', badgeColor: 'success', badgeText: 'Yesterday', avatars: [face5, face3, face11, face12], checked: false, },
        { id: 6, description: 'New pages list noted', date: '21 Dec 2022', badgeColor: 'success', badgeText: 'Today', avatars: [face1], checked: false, },
    ],
    Orders = [
        { id: 1537890, customer: 'Simon Cowall', quantity: "1", price: "4320.29", status: 'Shipped', statusClass: 'success-transparent', date: '25, Nov 2022', avatar: face15, checked: false, },
        { id: 1539078, customer: 'Meisha Kerr', quantity: "1", price: "6745.99", status: 'Cancelled', statusClass: 'danger-transparent', date: '29, Nov 2022', avatar: face4, checked: false, },
        { id: 1539832, customer: 'Jessica', quantity: "2", price: "1176.89", status: 'Under Process', statusClass: 'info-transparent', date: '04, Dec 2022', avatar: face5, checked: false, },
        { id: 1539832, customer: 'Amanda B', quantity: "1", price: "1899.99", status: 'Shipped', statusClass: 'success-transparent', date: '10, Dec 2022', avatar: face6, checked: false, },
        { id: 1538267, customer: 'Jason Stathman', quantity: "1", price: "1867.29", status: 'Pending', statusClass: 'warning-transparent', date: '18, Dec 2022', avatar: face11, checked: false, },
        { id: 1537890, customer: 'Khabib Hussain', quantity: "1", price: "2439.99", status: 'Success', statusClass: 'success-transparent', date: '24, Dec 2022', avatar: face13, checked: false, },
    ],
    taskList = [
        { id: 1, description: 'Design task page for new template', time: '12.43pm', badgeColor: 'primary', badgeText: 'Today', avatars: [face2, face8, face2], checked: false, },
        { id: 2, description: 'Solve UI issues in new template', time: '11.25am', badgeColor: 'secondary', badgeText: 'Tomorrow', avatars: [face6, face9], checked: true, },
        { id: 3, description: 'Prepare pre requisites', time: '9.56am', badgeColor: 'primary', badgeText: 'Today', avatars: [face3, face5, face10, face15], checked: false, },
        { id: 4, description: 'Change total styles of that dashboard', time: '8.15am', badgeColor: 'primary', badgeText: 'Today', avatars: [face11], checked: false, },
        { id: 5, description: 'Update color theme', time: '4.20pm', badgeColor: 'secondary', badgeText: 'Tomorrow', avatars: [face13, face16, face8], checked: false, },
        { id: 6, description: 'New dashboard design update', time: '8.29am', badgeColor: 'primary', badgeText: 'Today', avatars: [face10, face5], checked: false, },
    ],
    recentTransactions = [
        { height: "321px", type: "bar", chart: { options: overviewOptions, series: overviewSeries } }
    ],
    SaleValue = [
        { height: "238px", type: "radialBar", chart: { options: saleValueOptions, series: saleValueseries } }
    ];
