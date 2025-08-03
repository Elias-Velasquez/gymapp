import us from "/images/flags/us_flag.jpg";
import mexico from "/images/flags/mexico_flag.jpg";
import russia from "/images/flags/russia_flag.jpg";
import china from "/images/flags/china_flag.jpg";
import canada from "/images/flags/canada_flag.jpg";
import germany from "/images/flags/germany_flag.jpg";
import uae from "/images/flags/uae_flag.jpg";
import argentina from "/images/flags/argentina_flag.jpg";
import french from "/images/flags/french_flag.jpg";

export let
    /* Total Users Chart */
    totalUsersSeries = [{
        name: 'Value',
        data: [0, 21, 54, 38, 56, 24, 65]
    }],
    totalUsersOptions = {
        chart: {
            type: 'line',
            height: 90,
            width: 120,
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
            curve: 'straight',
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
        colors: ['#23b7e5'],

    },

    /* Bounce rate Chart */
    bouncerateSeries = [{
        name: 'Value',
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48]
    }],
    bouncerateOptions = {
        chart: {
            type: 'line',
            height: 45,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: '#fff',
                opacity: 0.05
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2,
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
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ["var(--primary01)"],
        tooltip: {
            enabled: false,
        }
    },
    /* Sessions By Device Chart */
    SessionsSeries = [1754, 1234, 878, 270],
    SessionsOptions = {
        labels: ["Mobile", "Tablet", "Desktop", "Others"],
        chart: {
            height: 257,
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
        colors: ["var(--primary-color)", "rgba(35, 183, 229, 1)", "rgba(38, 191, 148, 1)", "rgba(245, 184, 73, 1)",],
    },
    /* Audience report Chart */
    AudienceSeries = [
        {
            name: 'Views',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
        },
        {
            name: 'Followers',
            type: 'line',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
        },
    ],
    AudienceOptions = {
        chart: {
            toolbar: {
                show: false
            },
            type: 'line',
            height: 250,
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1, 1.1],
            curve: ['straight', 'smooth'],
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
            axisBorder: {
                color: '#e9e9e9',
            },
        },
        plotOptions: {
            bar: {
                columnWidth: "20%",
                borderRadius: 2
            }
        },
        colors: ["var(--primary-color)", '#23b7e5'],
    },
    /* Country Sessions vs Bounce Rate Chart */
    CountrySeries = [
        {
            name: 'Session',
            data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23],
            type: 'line',
        },
        {
            name: 'Bounce Rate',
            data: [20, 23, 26, 22, 20, 26, 28, 26, 22, 27, 25, 26],
            type: 'bar',
        },
    ],
    CountryOptions = {
        chart: {
            height: 308,
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false,
            show: true,
        },
        grid: {
            borderColor: '#f1f1f1',
            strokeDashArray: 3
        },
        legend: {
            show: true,
            position: 'top',
            markers: {
                size: 6,
                strokeWidth: 0
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: "40%",
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        colors: ["var(--primary-color)", "#ededed"],
        stroke: {
            curve: ['smooth', 'stepline'],
            width: [2, 0],
            columnWidth: '10%'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                color: '#e9e9e9',
            },
        }
    },
    /* Session Duration By New Users Chart */
    newUsersSeries = [{
        name: 'New Users',
        data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120],
    }, {
        name: 'Sessions',
        data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 136]
    }, {
        name: 'Avg Session Duration',
        data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98]
    }],
    newUsersOptions = {
        chart: {
            height: 387,
            type: 'line',
            toolbar: {
                show: false,
            },
            background: 'none',
            fill: "#fff",
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["var(--primary-color)", "#23b7e5", "#f5b849"],
        background: 'transparent',
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 3
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: 'top',
            markers: {
                size: 6,
                strokeWidth: 0
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    },
    /* Impressions Chart */
    impressionsSeries = [48],
    impressionsOptions = {
        chart: {
            height: 120,
            width: 100,
            type: "radialBar",
        },

        colors: ["#23b7e5"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "50%",
                    background: "#fff"
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#4b9bfa",
                        fontSize: "10px",
                        show: false
                    },
                    value: {
                        offsetY: 5,
                        color: "#4b9bfa",
                        fontSize: "12px",
                        show: true,
                        fontWeight: 800
                    }
                }
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Followers"]
    },
    /* Clicks Chart */
    clicksSeries = [65],
    clicksOptions = {
        chart: {
            height: 120,
            width: 100,
            type: "radialBar",
        },

        colors: ["#f7b731"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "50%",
                    background: "#fff"
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        color: "#4b9bfa",
                        fontSize: "10px",
                        show: false
                    },
                    value: {
                        offsetY: 5,
                        color: "#4b9bfa",
                        fontSize: "12px",
                        show: true,
                        fontWeight: 800
                    }
                }
            }
        },

        stroke: {
            lineCap: "round"
        },
        labels: ["Views"]
    },
    Candidates2 = [
        {
            candidates: [
                { gender: 'Male', count: '1,234', },
                { gender: 'Female', count: '1,754', },
                { gender: 'Male', count: '1,234', },
                { gender: 'Male', count: '1,234', },
            ],
            dropdown: [{ name: "Action" }, { name: "Another action" }, { name: "Something else here" },]
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
    myLeadSources = [
        { device: 'Mobile', percentage: "68.3%" },
        { device: 'Tablet', percentage: "17.68%" },
        { device: 'Desktop', percentage: "10.5%" },
        { device: 'Others', percentage: "5.16%" }
    ],
    simpleCount = [
        { name: "Impressions", count: "9,903", width: "100px", height: "120px", type: "radialBar", chart: { options: impressionsOptions, series: impressionsSeries }, cahartId: "analytics-followers" },
        { name: "Clicks", count: "16,789", width: "100px", height: "120px", type: "radialBar", chart: { options: clicksOptions, series: clicksSeries }, cahartId: "analytics-views" },
    ],
    VisitorsByCountries = [
        { country: "United States", cardClass: "analytics-country-img", badge: "32,190", avatar: us, bgColour: "light", textColor: "default ", size: "avatar avatar-sm", avatarRounded: "avatar-rounded" },
        { country: "Germany", cardClass: "analytics-country-img", badge: "8,798", avatar: germany, bgColour: "light", textColor: "default ", size: "avatar avatar-sm", avatarRounded: "avatar-rounded" },
        { country: "Mexico", cardClass: "analytics-country-img", badge: "16,885", avatar: mexico, bgColour: "light", textColor: "default ", size: "avatar avatar-sm", avatarRounded: "avatar-rounded" },
        { country: "Uae", cardClass: "analytics-country-img", badge: "14,885", avatar: uae, bgColour: "light", textColor: "default ", size: "avatar avatar-sm", avatarRounded: "avatar-rounded" },
        { country: "Argentina", cardClass: "analytics-country-img", badge: "17,578", avatar: argentina, bgColour: "light", textColor: "default ", size: "avatar avatar-sm", avatarRounded: "avatar-rounded" },
        { country: "Russia", cardClass: "analytics-country-img", badge: "10,118", avatar: russia, bgColour: "light", textColor: "default ", size: "avatar avatar-sm", avatarRounded: "avatar-rounded" },
        { country: "China", cardClass: "analytics-country-img", badge: "6,578", avatar: china, bgColour: "light", textColor: "default ", size: "avatar avatar-sm", avatarRounded: "avatar-rounded" },
        { country: "France", cardClass: "analytics-country-img", badge: "2,345", avatar: french, bgColour: "light", textColor: "default ", size: "avatar avatar-sm", avatarRounded: "avatar-rounded" },
        { country: "Canada", cardClass: "analytics-country-img", badge: "1,678", avatar: canada, bgColour: "light", textColor: "default ", size: "avatar avatar-sm", avatarRounded: "avatar-rounded" },
    ],
    Traffic = [
        { name: 'Google', visits: '23,379', progress: '78%', iconClass: 'ri-google-fill fs-18 text-primary', trendIconClass: 'ri-arrow-up-s-fill text-success', },
        { name: 'Safari', visits: '78,973', progress: '32%', iconClass: 'ri-safari-line fs-18 text-secondary', trendIconClass: 'ri-arrow-up-s-fill text-success', },
        { name: 'Opera', visits: '12,457', progress: '21%', iconClass: 'ri-opera-fill fs-18 text-success', trendIconClass: 'ri-arrow-down-s-fill text-danger', },
        { name: 'Edge', visits: '8,570', progress: '25%', iconClass: 'ri-edge-fill fs-18 text-info', trendIconClass: 'ri-arrow-up-s-fill text-success', },
        { name: 'Firefox', visits: '6,135', progress: '35%', iconClass: 'ri-firefox-fill fs-18 text-warning', trendIconClass: 'ri-arrow-down-s-fill text-danger', },
        { name: 'Ubuntu', visits: '4,789', progress: '12%', iconClass: 'ri-ubuntu-fill fs-18 text-danger', trendIconClass: 'ri-arrow-up-s-fill text-success', },
    ],
    Visitors = [
        { id: 1, bgColor: 'primary', name: 'Organic Search', visits: "782", percentage: '32.09%', timeSpent: '0 hrs : 0 mins : 32 secs', conversions: 278, averageTime: '2.9', avatarClass: 'bg-primary-transparent avatar-rounded', iconClass: 'ri-search-2-line fs-15 fw-semibiold text-primary', badgeClass: 'bg-primary-transparent', },
        { id: 2, bgColor: 'secondary', name: 'Direct', visits: "882", percentage: '39.38%', timeSpent: '0 hrs : 2 mins : 45 secs', conversions: 782, averageTime: '1.5', avatarClass: 'bg-secondary-transparent avatar-rounded', iconClass: 'ri-globe-line fs-15 fw-semibiold text-secondary', badgeClass: 'bg-secondary-transparent', },
        { id: 3, bgColor: 'success', name: 'Referral', visits: "322", percentage: '22.67%', timeSpent: '0 hrs : 38 mins : 28 secs', conversions: 622, averageTime: '3.2', avatarClass: 'bg-success-transparent avatar-rounded', iconClass: 'ri-share-forward-line fs-15 fw-semibiold text-success', badgeClass: 'bg-success-transparent', },
        { id: 4, bgColor: 'info', name: 'Social', visits: "389", percentage: '25.11%', timeSpent: '0 hrs : 12 mins : 89 secs', conversions: 142, averageTime: '1.4', avatarClass: 'bg-info-transparent avatar-rounded', iconClass: 'ri-reactjs-line fs-15 fw-semibiold text-info', badgeClass: 'bg-info-transparent', },
        { id: 5, bgColor: 'warning', name: 'Email', visits: "378", percentage: '23.79%', timeSpent: '0 hrs : 14 mins : 27 secs', conversions: 178, averageTime: '1.6', avatarClass: 'bg-warning-transparent avatar-rounded', iconClass: 'ri-mail-line fs-15 fw-semibiold text-warning', badgeClass: 'bg-warning-transparent', },
        { id: 6, bgColor: 'danger', name: 'Paid Search', visits: "488", percentage: '28.77%', timeSpent: '0 hrs : 16 mins : 28 secs', conversions: 578, averageTime: '2.5', avatarClass: 'bg-danger-transparent avatar-rounded', iconClass: 'ri-bank-card-line fs-15 fw-semibiold text-danger', badgeClass: 'bg-danger-transparent', },
    ],
    AudienceReport = [
        { height: "250px", type: "line", chart: { options: AudienceOptions, series: AudienceSeries } }
    ],
    BounceRate = [
        { height: "308px", type: "line", chart: { options: CountryOptions, series: CountrySeries } }
    ],
    ByNewUsers = [
        { height: "395px", type: "line", chart: { options: newUsersOptions, series: newUsersSeries } }
    ],
    SessionsByDevice = [
        { height: "230px", type: "donut", chart: { options: SessionsOptions, series: SessionsSeries } }
    ];