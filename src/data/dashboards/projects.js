import face13 from "/images/faces/13.jpg";
import face7 from "/images/faces/7.jpg";
import face6 from "/images/faces/6.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face3 from "/images/faces/3.jpg";
import face1 from "/images/faces/1.jpg";
import face10 from "/images/faces/10.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face8 from "/images/faces/8.jpg";
import face4 from "/images/faces/4.jpg";
import face16 from "/images/faces/16.jpg";
import face9 from "/images/faces/9.jpg";
import face14 from "/images/faces/14.jpg";

export let
    /* Project Analysis Chart */
    projectAnalysisSeries = [{
        name: 'Projects',
        type: 'column',
        data: [1.8, 2.5, 2.5, 1.5, 2.5, 2.8, 3.8]
    }, {
        name: 'Tasks',
        type: 'column',
        data: [1.1, 2.2, 3.1, 4, 4.1, 4.9, 6.5]
    }, {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 35, 44, 43, 50],
    },
    ],
    projectAnalysisOptions = {
        chart: {
            toolbar: {
                show: false
            },
            height: 300,
            type: 'line',
            stacked: false,
            fontFamily: 'Poppins, Arial, sans-serif',
        },
        grid: {
            borderColor: '#f5f4f4',
            strokeDashArray: 3
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: undefined,
        },
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        yaxis: [
            {
                show: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                    color: '#4eb6d0'
                },
                labels: {
                    style: {
                        colors: '#4eb6d0',
                    }
                },
                title: {
                    text: undefined,
                },
                tooltip: {
                    enabled: true
                }
            },
            {
                seriesName: 'Projects',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: '#00E396',
                    }
                },
                title: {
                    text: undefined,
                },
            },
            {
                seriesName: 'Revenue',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    show: false,
                },
                title: {
                    text: undefined,
                }
            },
        ],
        tooltip: {
            enabled: true,
        },
        legend: {
            show: true,
            position: 'top',
            offsetX: 40,
            fontSize: '13px',
            fontWeight: 'normal',
            labels: {
                colors: '#acb1b1',
            },
            markers: {
                width: 10,
                height: 10,
                size: 5,
                strokeWidth: 0
            },
        },
        stroke: {
            width: [0, 0, 1.5],
            curve: 'straight',
            dashArray: [0, 0, 0],
        },
        plotOptions: {
            bar: {
                columnWidth: "35%",
                borderRadius: 3
            }
        },
        colors: ["var(--primary-color)", "#ededed", "#23b7e5"]
    },
    /* for user1 */
    user1Series = [{
        name: 'Value',
        data: [54, 38, 56, 24, 65]
    }],
    user1Options = {
        chart: {
            type: 'line',
            height: 20,
            width: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
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
            gradient: {
                enabled: false
            }
        },
        yaxis: {
            min: 0,
            show: false
        },
        xaxis: {
            show: false,
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#09ad95'],

    },

    /* for user2 */
    user2Series = [{
        name: 'Value',
        data: [24, 54, 15, 42, 16]
    }],
    user2Options = {
        chart: {
            type: 'line',
            height: 20,
            width: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
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
            gradient: {
                enabled: false
            }
        },
        yaxis: {
            min: 0,
            show: false
        },
        xaxis: {
            show: false,
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#fb6b27'],

    },
    /* for user3 */
    user3Series = [{
        name: 'Value',
        data: [15, 42, 16, 44, 24]
    }],
    user3Options = {
        chart: {
            type: 'line',
            height: 20,
            width: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
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
            gradient: {
                enabled: false
            }
        },
        yaxis: {
            min: 0,
            show: false
        },
        xaxis: {
            show: false,
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#1170e4'],

    },

    /* for user4 */
    user4Series = [{
        name: 'Value',
        data: [54, 38, 56, 24, 65]
    }],
    user4Options = {
        chart: {
            type: 'line',
            height: 20,
            width: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
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
            gradient: {
                enabled: false
            }
        },
        yaxis: {
            min: 0,
            show: false
        },
        xaxis: {
            show: false,
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#e82646'],

    },

    /* for user5 */
    user5Series = [{
        name: 'Value',
        data: [15, 42, 16, 44, 24]
    }],
    user5Options = {
        chart: {
            type: 'line',
            height: 20,
            width: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
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
            gradient: {
                enabled: false
            }
        },
        yaxis: {
            min: 0,
            show: false
        },
        xaxis: {
            show: false,
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#f7b731'],

    };


export let
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
    MainTasks = [
        { name: "Melissa Smith", chartId: "user1", text: "Ui Developer", size: "avatar avatar-sm", textColors: "muted", avatar: face2, width: "80px", height: "20px", type: "line", chart: { options: user1Options, series: user1Series }, liClass: "mb-3" },
        { name: "Jason Momoa", chartId: "user2", text: "React Developer", size: "avatar avatar-sm", textColors: "muted", avatar: face12, width: "80px", height: "20px", type: "line", chart: { options: user2Options, series: user2Series }, liClass: "mb-3" },
        { name: "Kamala Hars", chartId: "user3", text: "Testing", size: "avatar avatar-sm", textColors: "muted", avatar: face1, width: "80px", height: "20px", type: "line", chart: { options: user3Options, series: user3Series }, liClass: "mb-3" },
        { name: "Diego Sanch", chartId: "user4", text: "Angular Developer", size: "avatar avatar-sm", textColors: "muted", avatar: face15, width: "80px", height: "20px", type: "line", chart: { options: user4Options, series: user4Series }, liClass: "mb-3" },
        { name: "Jake Sully", chartId: "user5", text: "Web Designer", size: "avatar avatar-sm", textColors: "muted", avatar: face10, width: "80px", height: "20px", type: "line", chart: { options: user5Options, series: user5Series }, liClass: "mb-0" },
    ],
    projects = [
        { id: 1, iconBg: "primary", icon: "file-check", count: "109", dir: "up", color: "success", percentage: "1.5% ", text: "Completed Projects", month: "this month" },
        { id: 2, iconBg: "secondary", icon: "briefcase", count: "18", dir: "down", color: "danger", percentage: "0.23% ", text: "Overdue Projects", month: "this month" },
        { id: 3, iconBg: "success", icon: "album", count: "389", dir: "up", color: "success", percentage: "0.67%", text: "Total Projects", month: "this month" },
        { id: 4, iconBg: "warning", icon: "chart-pie-2", count: "227", dir: "up", color: "success", percentage: "0.53%", text: "Pending Projects", month: "this month" },
    ],
    RecentTransactions = [
        { name: "Simon Cowall", textFw: "fw-semibold fs-16", size: "avatar avatar-md", textColors: "muted", avatarRounded: "avatar-rounded", text: "Feb 28,2023 - 12:54PM", balance: "$21,442", initials: "S", bgColor: "bg-primary-transparent", liClass: "mb-3" },
        { name: "Melissa Blue", textFw: "fw-semibold fs-16", size: "avatar avatar-md", textColors: "muted", avatarRounded: "avatar-rounded", text: "Mar 28,2023 - 10:14AM", balance: "$8,789", initials: "M", bgColor: "bg-secondary-transparent", liClass: "mb-2.5" },
        { name: "Gabriel Shin", textFw: "fw-semibold fs-16", size: "avatar avatar-md", textColors: "muted", avatarRounded: "avatar-rounded", text: "Mar 16,2023 - 05:27PM", balance: "$13,677", initials: "G", bgColor: "bg-success-transparent", liClass: "mb-4" },
        { name: "Yohasimi Nakiyaro", textFw: "fw-semibold fs-16", size: "avatar avatar-md", textColors: "muted", avatarRounded: "avatar-rounded", text: "Mar 19,2023 - 04:45PM", balance: "$3,543", initials: "Y", bgColor: "bg-warning-transparent", liClass: "mb-4" },
        { name: "Brenda Lynn", textFw: "fw-semibold fs-16", size: "avatar avatar-md", textColors: "muted", avatarRounded: "avatar-rounded", text: "Mar 10,2023 - 05:25PM", balance: "$7,890", initials: "B", bgColor: "bg-info-transparent", liClass: "mb-0" },
    ],
    projectsSummary = [
        { id: 1, name: 'Home Page', assignees: [{ img: face2 }, { img: face8 }, { img: face2 },], extraAssignees: 2, status: 'In Progress', statusClass: 'bg-primary-transparent', progress: 0, lastUpdated: '14-04-2023', task: "110/180" },
        { id: 2, name: 'Landing Design', assignees: [{ img: face5 }, { img: face6 }, { img: face9 }, { img: face15 },], extraAssignees: 0, status: 'In Progress', statusClass: 'bg-primary-transparent', progress: 95, lastUpdated: '20-04-2023', task: "95/100" },
        { id: 3, name: 'New Template Design', assignees: [{ img: face1 }, { img: face3 }, { img: face4 },], extraAssignees: 0, status: 'Pending', statusClass: 'bg-warning-transparent', progress: 0, lastUpdated: '29-05-2023', task: "90/100" },
        { id: 4, name: 'HR Management Template Design', assignees: [{ img: face10 }, { img: face11 }, { img: face4 },], extraAssignees: 5, status: 'In Progress', statusClass: 'bg-primary-transparent', progress: 35, lastUpdated: '18-04-2023', task: "26/71" },
        { id: 5, name: 'Designing New Template', assignees: [{ img: face2 }, { img: face9 }, { img: face16 },], extraAssignees: 3, status: 'Completed', statusClass: 'bg-success-transparent', progress: 100, lastUpdated: '11-04-2023', task: "26/71" },
        { id: 6, name: 'Documentation Project', assignees: [{ img: face4 }, { img: face7 }, { img: face12 }, { img: face13 }, { img: face15 },], extraAssignees: 0, status: 'In Progress', statusClass: 'bg-primary-transparent', progress: 50, lastUpdated: '18-04-2023', task: "45/90" },
    ],
    ProjectAnalysis = [
        { height: "304px", type: "line", chart: { options: projectAnalysisOptions, series: projectAnalysisSeries } }
    ],
    tasks = [
        {
            name: 'Designing a landing page',
            completed: false,
            avatars: [
                face2,
                face8,
                face2
            ],
            status: 'In progress',
            avatarclass: 'avatar-list-stacked',
            statusClass: 'bg-primary-transparent',
        },
        {
            name: 'Testing of new project ui',
            completed: true,
            avatars: [
                face10,
                face15
            ],
            status: 'Completed',
            avatarclass: 'avatar-list-stacked',
            statusClass: 'bg-success-transparent',
        },
        {
            name: 'Fixing bugs in registration page',
            completed: false,
            avatars: [
                face11,
                face4,
                face8
            ],
            status: 'Pending',
            avatarclass: 'avatar-list-stacked',
            statusClass: 'bg-warning-transparent',
        },
        {
            name: 'Designing new dashboard',
            completed: true,
            avatars: [
                face10,
                face11
            ],
            status: 'In progress',
            avatarclass: 'avatar-list-stacked',
            statusClass: 'bg-primary-transparent',
        }
    ],
    ColoredBorderCards = [
        {
            title: 'Home Page Design', borderClass: 'border-primary', iconColor: 'text-primary',
            badges: [
                { class: 'bg-primary-transparent', text: 'Framework' },
                { class: 'bg-secondary-transparent', text: 'Angular' },
                { class: 'bg-info-transparent', text: 'Php' },
            ],
            avatars: [
                { img: face2 },
                { img: face8 },
                { img: face2 },
            ],
        },
        {
            title: 'About Us Page redesign', borderClass: 'border-warning', iconColor: 'text-warning',
            badges: [
                { class: 'bg-danger-transparent', text: 'Html' },
                { class: 'bg-warning-transparent', text: 'Symphony' },
                { class: 'bg-success-transparent', text: 'Php' },
            ],
            avatars: [
                { img: face6 },
                { img: face9 },
            ],
        },
        {
            title: 'Landing Page Design', borderClass: 'border-success', iconColor: 'text-success',
            badges: [
                { class: 'bg-danger-transparent', text: 'Laravel' },
                { class: 'bg-teal-transparent', text: 'Codeignitor' },
                { class: 'bg-success-transparent', text: 'Php' },
            ],
            avatars: [
                { img: face6 },
                { img: face9 },
            ],
        },
        {
            title: 'New Project Discussion', borderClass: 'border-info', iconColor: 'text-info',
            badges: [
                { class: 'bg-info-transparent', text: 'React' },
                { class: 'bg-primary-transparent', text: 'Typescript' },
            ],
            avatars: [
                { img: face3 },
                { img: face14 },
                { img: face11 },
            ],
        },
    ];