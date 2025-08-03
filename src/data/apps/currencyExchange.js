import Bitcoin from "/images/crypto-currencies/square-color/Bitcoin.svg";
import Ethereum from "/images/crypto-currencies/square-color/Ethereum.svg";
import Dash from "/images/crypto-currencies/square-color/Dash.svg";
import litecoin from "/images/crypto-currencies/square-color/Litecoin.svg";
import Ripple from "/images/crypto-currencies/square-color/Ripple.svg";
import Golem from "/images/crypto-currencies/square-color/Golem.svg";
import EOS from "/images/crypto-currencies/square-color/EOS.svg";
import Monero from "/images/crypto-currencies/square-color/Monero.svg";


export let

    /* BTC Chart */

    Btcseries = [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
    ],
    BTCOptions = {
        chart: {
            type: "area",
            height: 80,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: "#fff",
                opacity: 0.05,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            enabled: true,
            gradient: {
            },
        },
        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        colors: ["rgba(132, 90, 223,0.5)"],
        tooltip: {
            enabled: false,
        },
    },
    /* ETH Chart */
    ETHseries = [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
    ],
    ETHOptions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: "#fff",
                opacity: 0.05,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },
        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        colors: ["rgba(35, 183, 229,0.5)"],
        tooltip: {
            enabled: false,
        },
    },
    /* Dash Chart */
    Dashseries = [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
    ],
    DashOptions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: "#fff",
                opacity: 0.05,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },
        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        colors: ["rgba(38, 191, 148,0.5)"],
        tooltip: {
            enabled: false,
        },
    },
    /* LTC Chart */
    LTCseries = [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
    ],
    LTCOptions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: "#fff",
                opacity: 0.05,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            ltcArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },
        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        colors: ["rgba(245, 184, 73,0.5)"],
        tooltip: {
            enabled: false,
        },
    },
    /* XRS Chart */
    XRSseries = [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
    ],
    XRSOPtions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: "#fff",
                opacity: 0.05,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            ltcArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        colors: ["rgba(231, 145, 188,0.5)"],
        tooltip: {
            enabled: false,
        },
    },
    /* GLM Chart */
    GLMseries = [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
    ],
    GLMOptions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: "#fff",
                opacity: 0.05,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            ltcArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        colors: ["rgba(137, 32, 173,0.5)"],
        tooltip: {
            enabled: false,
        },
    },
    /* Monero Chart */
    Moneroseries = [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
    ],
    MoneroOptions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: "#fff",
                opacity: 0.05,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            ltcArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        colors: ["rgba(230, 83, 60,0.5)"],
        tooltip: {
            enabled: false,
        },
    },
    /* Eos Chart */
    Eosseries = [
        {
            name: "Value",
            data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
        },
    ],
    EosOptions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 1,
                color: "#fff",
                opacity: 0.05,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 1.5,
            ltcArray: 0,
        },
        fill: {
            gradient: {
                enabled: false,
            },
        },

        yaxis: {
            min: 0,
            show: false,
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
        },
        colors: ["rgba(73, 182, 245,0.5)"],
        tooltip: {
            enabled: false,
        },
    };

export const exchange = [
    { id: 1, name: 'Bitcoin - BTC', percentage: '+0.59%', change: '+0.59',valueColor:'primary', value: '0.00434', price: '$30.29', showBadge: true, img: Bitcoin, chart: { options: BTCOptions, series: Btcseries }, color: "primary", showBadge: true },
    { id: 2, name: 'Etherium - ETH', percentage: '+1.30%', change: '+1.30',valueColor:'secondary', value: '1.2923', price: '$2,283.73', img: Ethereum, chart: { options: ETHOptions, series: ETHseries }, color: "secondary", showBadge: false },
    { id: 3, name: 'Dash - DASH', percentage: '+1.30%', change: '+1.30',valueColor:'success', value: '1.2923', price: '$2,283.73', img: Dash, chart: { options: DashOptions, series: Dashseries }, color: "success", showBadge: false },
    { id: 4, name: 'Litecoin - LTC', percentage: '+1.30%', change: '+1.30',valueColor:'warning', value: '1.2923', price: '$2,283.73', img: litecoin, chart: { options: LTCOptions, series: LTCseries }, color: "warning", showBadge: false },
    { id: 5, name: 'Ripple - XRS', percentage: '+1.30%', change: '+1.30',valueColor:'pink', value: '1.2923', price: '$2,283.73', img: Ripple, chart: { options: XRSOPtions, series: XRSseries }, color: "pink", showBadge: false },
    { id: 6, name: 'Golem - GLM', percentage: '+1.30%', change: '+1.30',valueColor:'purple', value: '1.2923', price: '$2,283.73', img: Golem, chart: { options: GLMOptions, series: GLMseries }, color: "purple", showBadge: false },
    { id: 7, name: 'Monero', percentage: '+1.30%', change: '+1.30',valueColor:'danger', value: '1.2923', price: '$2,283.73', img: Monero, chart: { options: MoneroOptions, series: Moneroseries }, color: "danger", showBadge: false },
    { id: 8, name: 'EOS', percentage: '+1.30%', change: '+1.30',valueColor:'info', value: '1.2923', price: '$2,283.73', img: EOS, chart: { options: EosOptions, series: Eosseries }, color: "info", showBadge: false },
];