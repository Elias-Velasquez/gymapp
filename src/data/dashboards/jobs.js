import face15 from "/images/faces/15.jpg";
import face11 from "/images/faces/11.jpg";
import face8 from "/images/faces/8.jpg";
import face4 from "/images/faces/4.jpg";
import face16 from "/images/faces/16.jpg";
import face21 from "/images/faces/21.jpg";
import logos4 from "/images/company-logos/4.png";
import logos10 from "/images/company-logos/10.png";
import logos8 from "/images/company-logos/8.png";
import logos1 from "/images/company-logos/1.png";
import french from "/images/flags/french_flag.jpg";
import argentina from "/images/flags/argentina_flag.jpg";
import germany from "/images/flags/germany_flag.jpg";
import us from "/images/flags/us_flag.jpg";
import uae from "/images/flags/uae_flag.jpg";

export let
    /* Subscription Overview Chart */
    subscriptionOverviewSeries = [{
        name: "Basic",
        data: [75, 78, 38, 39, 38, 73, 73, 53, 53, 16, 16, 53]
    },
    {
        name: "Pro",
        data: [35, 35, 62, 63, 13, 13, 60, 60, 41, 41, 82, 82]
    }
    ],
    subscriptionOverviewOptions = {
        chart: {
            toolbar: {
                show: false
            },
            height: 285,
            type: 'line',
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.15
            },
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [2, 2],
            curve: ['smooth', 'smooth'],
            lineCap: 'butt',
            dashArray: [0, 0]
        },
        title: {
            text: undefined,
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'center',
            fontWeight: 600,
            fontSize: '11px',
            tooltipHoverFormatter: function (val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            },
            labels: {
                colors: '#74767c',
            },
            markers: {
                width: 7,
                size: 4,
                height: 7,
                strokeWidth: 0,
                radius: 12,
                offsetX: 0,
                offsetY: 0
            },
        },
        markers: {
            discrete: [{
                seriesIndex: 0,
                dataPointIndex: 5,
                fillColor: '#305cfc',
                strokeColor: '#fff',
                size: 4,
                shape: "circle"
            },
            {
                seriesIndex: 0,
                dataPointIndex: 11,
                fillColor: '#305cfc',
                strokeColor: '#fff',
                size: 4,
                shape: "circle"
            },
            {
                seriesIndex: 1,
                dataPointIndex: 10,
                fillColor: '#23b7e5',
                strokeColor: '#fff',
                size: 4,
                shape: "circle"
            }, {
                seriesIndex: 1,
                dataPointIndex: 4,
                fillColor: '#23b7e5',
                strokeColor: '#fff',
                size: 4,
                shape: "circle"
            }],
            hover: {
                sizeOffset: 6
            }
        },
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                },
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        xaxis: {
            type: 'day',
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                '10 Jan', '11 Jan', '12 Jan'
            ],
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
                rotate: -90,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val;
                        }
                    }
                }
            ]
        },
        colors: ["var(--primary-color)", "#23b7e5"],
    },
    /* Candidates Chart */
    candidatesSeries = [1754, 1234],
    candidatesOptions = {
        labels: ["Female", "Male"],
        chart: {
            height: 230,
            type: 'donut'
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
                            show: true,
                            showAlways: true,
                            label: 'Total',
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#',
                        }

                    }
                }
            }
        },
        colors: ["var(--primary-color)", "#23b7e5"],

    };

export let
    acquisitions = [
        { id: 1, color: "primary", progressValue: "52", progressBar: "52%" },
        { id: 2, color: "secondary", progressValue: "12", progressBar: "12%" },
        { id: 3, color: "success", progressValue: "16", progressBar: "16%" },
        { id: 4, color: "warning", progressValue: "12", progressBar: "12%" },
        { id: 5, color: "danger", progressValue: "8", progressBar: "8%" },
    ],
    acquisitionsBadge = [
        { id: 1, color: "primary", badgeText: "1,982", title: "Total Applications" },
        { id: 2, color: "secondary", badgeText: "214", title: "Recruited" },
        { id: 3, color: "success", badgeText: "262", title: "Short Listed" },
        { id: 4, color: "warning", badgeText: "395", title: "Rejected" },
        { id: 5, color: "danger", badgeText: "79", title: "Blocked" },
    ],
    Candidates = [
        { gender: 'Male', count: '1,234', percentageChange: '0.23%', textColor: "success" },
        { gender: 'Female', count: '1,754', percentageChange: '0.11%', textColor: "danger" }
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
    jobs = [
        { id: 1, iconBg: "primary", icon: `<svg class="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> <path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path> </svg>`, count: "256", dir: "down", color: "danger", percentage: "-1.05%", text: "TOTAL EMPLOYERS" },
        { id: 2, iconBg: "secondary", icon: `<svg class="svg-white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> <rect fill="none" height="24" width="24"></rect> <g> <path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"></path> </g> </svg>`, count: "4,026", dir: "up", color: "success", percentage: "+0.40%", text: "TOTAL CANDIDATES" },
        { id: 3, iconBg: "warning", icon: `<svg class="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> <path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"></path> </svg>`, count: "48", dir: "up", color: "success", percentage: "+0.82%", text: "TOTAL LOCATIONS" },
        { id: 4, iconBg: "success", icon: `<svg class="svg-white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> <g> <rect fill="none" height="24" width="24"></rect> </g> <g> <g> <path d="M9,14c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S7.35,14,9,14z M9,10c0.54,0,1,0.46,1,1s-0.46,1-1,1s-1-0.46-1-1 S8.46,10,9,10z"></path> <path d="M22,3H2C0.9,3,0,3.9,0,5v14c0,1.1,0.9,2,2,2h20c1.1,0,1.99-0.9,1.99-2L24,5C24,3.9,23.1,3,22,3z M4.54,19 c1.1-1.22,2.69-2,4.46-2s3.36,0.78,4.46,2H4.54z M22,19h-6.08c-1.38-2.39-3.96-4-6.92-4s-5.54,1.61-6.92,4H2V5h20V19z"></path> <polygon points="15.78,11.15 17.25,10.3 17.25,12 18.75,12 18.75,10.3 20.22,11.15 20.97,9.85 19.5,9 20.97,8.15 20.22,6.85 18.75,7.7 18.75,6 17.25,6 17.25,7.7 15.78,6.85 15.03,8.15 16.5,9 15.03,9.85"></polygon> </g> </g> </svg>`, count: "1,116", dir: "up", color: "success", percentage: "+0.21%", text: "TOTAL RECRUITERS" },
        { id: 5, iconBg: "pink", icon: `<svg class="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> <path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path> </svg>`, count: "1,468", dir: "down", color: "danger", percentage: "-0.153%", text: "TOTAL SUBSCRIPTIONS" },
        { id: 6, iconBg: "teal", icon: `<svg class="svg-white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> <g> <rect fill="none" height="24" width="24"></rect> <g> <path d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z"></path> </g> <path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z"></path> </g> </svg>`, count: "34%", dir: "up", color: "success", percentage: "+0.165%", text: "RESSUME UPLOAD RATIO" },
    ],
    recentJobs = [
        { name: "Ui Developer", size: "avatar avatar-md", text: "Achies - 12 hrs ago", balance: "Full Time", initials: "AC", bgColor: "bg-primary-transparent", downTextClass: "badge bg-success-transparent", downText: "Fresher", colors: "success", avatarRounded: "avatar-rounded", textColors: "muted", liClass: "list-group-item border-top-0 border-start-0 border-end-0" },
        { name: "AWS Engineer", size: "avatar avatar-md", text: "Siachles - 2 hrs ago", balance: "Part Time", initials: "SI", bgColor: "bg-secondary-transparent", downTextClass: "badge bg-info-transparent", downText: "+1 yrs - Experience", colors: "info", avatarRounded: "avatar-rounded", textColors: "muted", liClass: "list-group-item border-start-0 border-end-0" },
        { name: "React Developer", size: "avatar avatar-md", text: "LifeSpace - 6 hrs ago", balance: "Freelancer", initials: "LS", bgColor: "bg-success", downTextClass: "badge bg-success-transparent", downText: "Fresher", colors: "success", avatarRounded: "avatar-rounded", textColors: "muted", liClass: "list-group-item border-start-0 border-end-0" },
        { name: "Angular Developer", size: "avatar avatar-md", text: "MegaSoft - 14 hrs ago", balance: "Full Time", initials: "MS", bgColor: "bg-warning-transparent", downTextClass: "badge bg-info-transparent", downText: "+2 yrs - Experience", colors: "info", avatarRounded: "avatar-rounded", textColors: "muted", liClass: "list-group-item border-start-0 border-end-0" },
        { name: "UI Tester", size: "avatar avatar-md", text: "Joggle - 2 days ago", balance: "Full Time", initials: "J", bgColor: "bg-danger-transparent", downTextClass: "badge bg-info-transparent", downText: "+3 yrs - Experience", colors: "info", avatarRounded: "avatar-rounded", textColors: "muted", liClass: "list-group-item border-start-0 border-end-0" },
        { name: "Php - Laravel Develope", size: "avatar avatar-md", text: "Nirlog - 2 days ago", balance: "Part Time", initials: "NL", bgColor: "bg-info-transparent", downTextClass: "badge bg-success-transparent", downText: "Fresher", colors: "success", avatarRounded: "avatar-rounded", textColors: "muted", liClass: "list-group-item border-start-0 border-end-0 border-bottom-0" },
    ],
    registrations = [
        { id: 1, name: "Hr@Spruko", email: "hr.spruko@gmail.com", vacancies: "07", badgeColor: "info", badgeText: "Aws Engineer", avatar: face4 },
        { id: 2, name: "Hr@Nicero", email: "nicero.help@gmail.com", vacancies: "16", badgeColor: "warning", badgeText: "React Developer", avatar: face21 },
        { id: 3, name: "JosephSmith", email: "josephsmith@gmail.com", vacancies: "32", badgeColor: "primary", badgeText: "UI Developer", avatar: face15 },
    ],
    Subscriptions = [
        { title: '1,117', amount: 'Total Subscriptions', },
        { title: '742', amount: 'Basic Subscriptions', },
        { title: '259', amount: 'Pro Subscriptions', },
    ],
    recentEmployers = [
        { name: 'Mayor Kelly', department: 'Manufacture', position: 'Team Lead', positionClass: 'bg-primary-transparent', email: 'mayorkelly@gmail.com', location: 'Germany', duration: 'Sep 15 - Oct 12, 2023', avatar: face4, checked: false, },
        { name: 'Andrew Garfield', department: 'Development', position: 'Director', positionClass: 'bg-secondary-transparent', email: 'andrewgarfield@gmail.com', location: 'Canada', duration: 'Apr 10 - Dec 12, 2023', avatar: face15, checked: true, },
        { name: 'Simon Cowel', department: 'Service', position: 'Manager', positionClass: 'bg-success-transparent', email: 'simoncowel234@gmail.com', location: 'Europe', duration: 'Sep 15 - Oct 12, 2023', avatar: face11, checked: false, },
        { name: 'Mirinda Hers', department: 'Marketing', position: 'Employee', positionClass: 'bg-danger-transparent', email: 'mirindahers@gmail.com', location: 'USA', duration: 'Apr 10 - Dec 12, 2023', avatar: face8, checked: true, },
        { name: 'Andrew Garfield', department: 'Development', position: 'Director', positionClass: 'bg-warning-transparent', email: 'andrewgarfield@gmail.com', location: 'London', duration: 'Jun 10 - Dec 12, 2022', avatar: face16, checked: true, },
    ],
    registersByCountry = [
        { name: 'U.S.A', date: '21, Dec 2022', count: 782, flag: us, },
        { name: 'France', date: '29, April 2023', count: 53, flag: french, },
        { name: 'U.A.E', date: '30, Nov 2023', count: 15, flag: uae, },
        { name: 'Germany', date: '18, Mar 2023', count: 19, flag: germany, },
        { name: 'Argentina', date: '25, Apr 2023', count: 92, flag: argentina, },
    ],
    topCompanies = [
        { name: 'Obligation Pvt.Ltd', type: 'Remote/Onsite', color: "bg-primary-transparent", plan: 'Basic', employees: "547", dateJoined: '24, Nov 2021', logo: logos4, },
        { name: 'Voluptatem Pvt.Ltd', type: 'Remote/Onsite', color: "bg-secondary-transparent", plan: 'Pro', employees: "223", dateJoined: '13, Jan 2020', logo: logos10, },
        { name: 'BloomTech.Inc', type: 'Remote/Onsite', color: "bg-primary-transparent", plan: 'Basic', employees: "189", dateJoined: '06, Sep 2020', logo: logos8, },
        { name: 'Beatae Industries', type: 'Remote/Onsite', color: "bg-primary-transparent", plan: 'Basic', employees: "106", dateJoined: '19, Mar 2020', logo: logos1, },
    ],
    subscriptions = [
        { height: "280px", type: "line", chart: { options: subscriptionOverviewOptions, series: subscriptionOverviewSeries } }
    ],
    candidates = [
        { height: "225px", type: "donut", chart: { options: candidatesOptions, series: candidatesSeries } }
    ];