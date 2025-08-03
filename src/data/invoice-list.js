
import faces11 from '/images/faces/11.jpg';
import faces7 from '/images/faces/7.jpg';
import faces12 from '/images/faces/12.jpg';
import faces15 from '/images/faces/15.jpg';
import faces4 from '/images/faces/4.jpg';
import faces9 from '/images/faces/9.jpg';
import faces13 from '/images/faces/13.jpg';
import faces8 from '/images/faces/8.jpg';

export let
    invoiceStatusSeries = [{
        name: 'Total',
        data: [76, 85, 101, 98, 87, 105]
    }, {
        name: 'Paid',
        data: [35, 41, 36, 26, 45, 48]
    }, {
        name: 'Pending',
        data: [44, 55, 57, 56, 61, 58]
    }, {
        name: 'Overdue',
        data: [13, 27, 31, 29, 35, 25]
    }],
    invoiceStatusOptions = {
        chart: {
            type: 'bar',
            height: 210,
            stacked: true
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
                endingShape: 'rounded',
            },
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            markers: {
                strokeWidth: 0,
            },

        },
        colors: ["#4b9bfa", "#28d193", "#ffbe14", "#f3f6f8"],
        stroke: {
            show: true,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            title: {
                style: {
                    color: "#8c9097",
                }
            },
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    },
    manageInvoices = [
        { id: 1, name: 'Json Taylor', email: 'jsontaylor2416@gmail.com', avatar: faces11, invoiceId: '#SPK12032901', date: '25,Nov 2022', amount: '$212.45', status: 'Paid', statusClass: 'bg-success-transparent', dueDate: '25,Dec 2022' },
        { id: 2, name: 'Suzika Stallone', email: 'suzikastallone3214@gmail.com', avatar: faces7, invoiceId: '#SPK12032912', date: '13,Nov 2022', amount: '$512.99', status: 'Pending', statusClass: 'bg-warning-transparent', dueDate: '	13,Dec 2022' },
        { id: 3, name: 'Roman Killon', email: 'romankillon143@gmail.com', avatar: faces15, invoiceId: '#SPK12032945', date: '30,Nov 2022', amount: '$2,199.49', status: 'Overdue', dueDate: '30,Dec 2022', statusClass: 'bg-danger-transparent' },
        { id: 4, name: 'Charlie Davieson', email: 'charliedavieson@gmail.com', avatar: faces12, invoiceId: '#SPK12032922', date: '18,Nov 2022', amount: '$1,569.99', status: 'Paid', dueDate: '18,Dec 2022', statusClass: 'bg-success-transparent' },
        { id: 5, name: 'Selena Deoyl', email: 'selenadeoyl114@gmail.com', avatar: faces4, invoiceId: '#SPK12032932', date: '18,Nov 2022', amount: '$4,873.99', status: 'Due By 1 Day', dueDate: '18,Dec 2022', statusClass: 'bg-primary-transparent' },
        { id: 6, name: 'Kiara Advensh', email: 'kiaraadvensh87@gmail.com', avatar: faces7, invoiceId: '#SPK12032978', date: '02,Nov 2022', amount: '$1,923.99', status: 'Paid', dueDate: '18,Dec 2022', statusClass: 'bg-success-transparent' },
        { id: 7, name: 'Joseph Samurai', email: 'josephsamurai@gmail.com', avatar: faces9, invoiceId: '#SPK12032919', date: '15,Nov 2022', amount: '$1,623.99', status: 'Paid', dueDate: '15,Dec 2022', statusClass: 'bg-success-transparent' },
        { id: 8, name: 'Kevin Powell', email: 'kevinpowell@gmail.com', avatar: faces13, invoiceId: '#SPK12032931', date: '21,Nov 2022', amount: '$3,423.99', status: 'Pending', dueDate: '15,Dec 2022', statusClass: 'bg-warning-transparent' },
        { id: 9, name: 'Darla Jung', email: 'darlajung555@gmail.com', avatar: faces8, invoiceId: '#SPK12032958', date: '15,Oct 2022', amount: '$2,982.99', status: 'Paid', dueDate: '15,Nov 2022', statusClass: 'bg-success-transparent' },
    ],
    invoices = [
        {
            title: 'Total Invoices Amount',
            amount: '193.87',
            badge: '12,345',
            badgeClass: 'bg-primary',
            percentage: '3.25%',
            percentageClass: 'success',
            timePeriod: 'this month',
            arrowIconClass: 'ri-arrow-up-s-line',
            bgClass: 'bg-primary-transparent',
            svgClass: 'svg-primary',
            viewBox: '0 0 24 24',
            svgPath: 'M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z'
        },
        {
            title: 'Total Paid Invoices',
            amount: '68',
            badge: '4,176',
            badgeClass: 'bg-success',
            percentage: '1.16%',
            percentageClass: 'danger',
            timePeriod: 'this month',
            arrowIconClass: 'ri-arrow-down-s-line',
            bgClass: 'bg-success-transparent',
            svgClass: 'svg-success',
            viewBox: '0 0 24 24',
            svgPath: 'M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z'
        },
        {
            title: 'Pending Invoices',
            amount: '81',
            badge: '7,064',
            badgeClass: 'bg-warning',
            percentage: '0.25%',
            percentageClass: 'success',
            timePeriod: 'this month',
            arrowIconClass: 'ri-arrow-up-s-line',
            bgClass: 'bg-warning-transparent',
            svgClass: 'svg-warning',
            viewBox: '0 0 24 24',
            svgPath: 'M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z'
        },
        {
            title: 'Overdue Invoices',
            amount: '33',
            badge: '1,105',
            badgeClass: 'bg-light text-default',
            percentage: '0.46%',
            percentageClass: 'success',
            timePeriod: 'this month',
            arrowIconClass: 'ri-arrow-up-s-line',
            bgClass: 'bg-light',
            svgClass: 'svg-dark',
            viewBox: '0 0 24 24',
            svgPath: 'M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z'
        }
    ];
