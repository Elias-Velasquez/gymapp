import face13 from "/images/faces/13.jpg";
import face6 from "/images/faces/6.jpg";
import face5 from "/images/faces/5.jpg";
import face3 from "/images/faces/3.jpg";
import face1 from "/images/faces/1.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face8 from "/images/faces/8.jpg";
import face4 from "/images/faces/4.jpg";

export let
    /* Performance by category chart */
    categorySeries = [{
        name: 'Designing',
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43]
    }, {
        name: 'Development',
        data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
    }, {
        name: 'SEO',
        data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
    }],
    categoryOptions = {
        chart: {
            type: 'bar',
            height: 310,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        colors: ["rgba(var(--primary-rgb), 1)", "rgba(var(--primary-rgb), 0.5)", "rgba(var(--primary-rgb), 0.2)"],
        legend: {
            show: false,
            position: 'top'
        },
        plotOptions: {
            bar: {
                columnWidth: "20%",
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
            opacity: 1
        }
    },
    /* Jobs Summary chart */
    jobsSummaryseries = [1754, 544, 682, 263],
    jobsSummaryOptions = {
        labels: ["Published", "Private", "Closed", "On Hold"],
        chart: {
            height: 250,
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
                    size: '70%',
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
                            show: true,
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
        colors: ["var(--primary-color)", "rgba(var(--primary-rgb), 0.7)", "rgba(var(--primary-rgb),0.4)", "rgba(var(--primary-rgb),0.1)"],
    },


    ApplicantsSummary = [
        { title: "New Applicants", count: "2,981", iconClass: "primary", icon: "ti ti-files fs-18" },
        { title: "Selected Candidates", count: "2,981", iconClass: "secondary", icon: "ti ti-file-check fs-18" },
        { title: "Rejected Candidates", count: "2,981", iconClass: "warning", icon: "ti ti-file-dislike fs-18" }
    ],
    bottonGroup = [
        {
            buttonGroup: [
                { btnClass: "btn btn-primary btn-sm btn-wave waves-effect waves-light", btnLable: "1D" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1W" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "3M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "6M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1Y" },
            ],
            buttonGroup1: [
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1W" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "1M" },
                { btnClass: "btn btn-primary-light btn-sm btn-wave", btnLable: "6M" },
                { btnClass: "btn btn-primary btn-sm btn-wave waves-effect waves-light", btnLable: "1Y" },
            ],
        }
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
    hrmCard = [
        { id: 1, iconBg: "primary", icon: "team-line", name: "Total Employees", count: "22,124", percentage: "+1.03%", percentageColor: "success" },
        { id: 2, iconBg: "secondary", icon: "user-unfollow-line", name: "Employees In Leave", count: "528", percentage: "+0.36%", percentageColor: "success" },
        { id: 3, iconBg: "warning", icon: "service-line", name: "Total Clients", count: "8,289", percentage: "-1.28%", percentageColor: "danger" },
        { id: 4, iconBg: "danger", icon: "contacts-line", name: "New Leads", count: "1,453", percentage: "+4.25%", percentageColor: "success" },
    ],
    Clients = [
        { name: 'Diana Aise', email: 'diana.1116@demo.com', role: 'C.E.O', avatar: face2, status: 'Active', },
        { name: 'Rose Mary', email: 'rose756@demo.com', role: 'C.E.O', avatar: face8, status: 'Active', },
        { name: 'Gretchen Iox', email: 'gretchen.1.25@demo.com', role: 'Manager', avatar: face13, status: 'Active', },
        { name: 'Gray Noal', email: 'gray12gray@demo.com', role: 'Manager', avatar: face11, status: 'Active', },
        { name: 'Isa Bella', email: 'isa158@demo.com', role: 'C.E.O', avatar: face5, status: 'Active', },
    ],
    hrminvoices = [
        { id: 1, invoiceNumber: '#INV111611', name: 'Rena Mark', email: 'renamark123@demo', avatar: face1, date: '14-05-2023', status: 'Paid', statusClass: 'success', amount: "9,523" },
        { id: 2, invoiceNumber: '#INV111611', name: 'Xong Yun', email: 'xongyun2134@gmail.com', avatar: face4, date: '14-05-2023', status: 'Pending', statusClass: 'warning', amount: '8,243' },
        { id: 3, invoiceNumber: '#INV147852', name: 'Kane William', email: 'william154@demo', avatar: face6, date: '16-05-2023', status: 'Overdue', statusClass: 'primary', amount: "5,234" },
        { id: 4, invoiceNumber: '#INV753159', name: 'Stewart Rem', email: 'remstew092@demo', avatar: face12, date: '21-05-2023', status: 'Paid', statusClass: 'success', amount: "7,546" },
        { id: 5, invoiceNumber: '#INV369874', name: 'Elliot Yun', email: 'eiiliot000@demo', avatar: face3, date: '18-05-2023', status: 'Overdue', statusClass: 'primary', amount: "7,541" },
        { id: 6, invoiceNumber: '#INV123456', name: 'Gretchen Xio', email: 'gretchenxio999@demo', avatar: face5, date: '20-05-2023', status: 'Pending', statusClass: 'warning', amount: "2,541" },
    ],
    Category = [
        { height: "310px", type: "bar", chart: { options: categoryOptions, series: categorySeries } }
    ],
    SessionsByDevice = [
        { height: "230px", type: "donut", chart: { options: jobsSummaryOptions, series: jobsSummaryseries } }
    ],
    activities = [
        {
            day: "02",
            textColor: "primary",
            week: "Mon",
            iconClass: 'bi-circle-fill',
            mainText: `<p class="mb-1 text-truncate timeline-widget-content text-wrap">You have an
                            announcement - Ipsum Est Diam Eirmod</p>
                        <p class="mb-0 fs-12 lh-1 text-muted">10:00AM<span
                                class="badge bg-primary-transparent ms-2">Announcement</span></p>`,
        },
        {
            day: "15",
            week: "Tue",
            textColor: "primary",
            iconClass: 'bi-circle-fill',
            mainText: `<p class="mb-1 text-truncate timeline-widget-content text-wrap">National holiday -
                            Vero Jayanti</p>
                        <p class="mb-0 fs-12 lh-1 text-muted"><span
                                class="badge bg-warning-transparent">Holiday</span></p>`,

        },
        {

            day: "23",
            week: "Mon",
            textColor: "primary",
            mainText: `<p class="mb-1 text-truncate timeline-widget-content text-wrap">John pup birthday -
                            Team Member</p>
                        <p class="mb-4 fs-12 lh-1 text-muted">09:00AM<span
                                class="badge bg-success-transparent ms-2">Birthday</span></p>
                        <p class="mb-1 text-truncate timeline-widget-content text-wrap">Amet sed no dolor
                            kasd - Et Dolores Tempor Erat</p>
                        <p class="mb-0 fs-12 lh-1 text-muted">04:00PM<span
                                class="badge bg-primary-transparent ms-2 mb-2">Announcement</span></p>`,

        },
        {
            day: "31",
            week: "Sun",
            textColor: "primary",
            iconClass: 'bi-circle-fill',
            mainText: ` <p class="mb-1 text-truncate timeline-widget-content text-wrap">National Holiday -
                            Dolore Ipsum</p>
                        <p class="mb-0 fs-12 lh-1 text-muted"><span
                                class="badge bg-warning-transparent mb-2">Holiday</span></p>`,

        },
    ]


