import Bitcoin from "/images/crypto-currencies/square-color/Bitcoin.svg";
import Bytecolin from "/images/crypto-currencies/square-color/Bytecoin.svg";
import Ethereum from "/images/crypto-currencies/square-color/Ethereum.svg";
import Bitcoins from "/images/crypto-currencies/regular/Bitcoin.svg";
import litecoins from "/images/crypto-currencies/regular/litecoin.svg";
import Ethereums from "/images/crypto-currencies/regular/Ethereum.svg";
import Dashs from "/images/crypto-currencies/regular/Dash.svg";
import litecoin from "/images/crypto-currencies/square-color/Litecoin.svg";
import Dash from "/images/crypto-currencies/square-color/Dash.svg";
import Ripple from "/images/crypto-currencies/square-color/Ripple.svg";
import IOTA from "/images/crypto-currencies/square-color/IOTA.svg";
import Golem from "/images/crypto-currencies/square-color/Golem.svg";
import EOS from "/images/crypto-currencies/square-color/EOS.svg";
import Monero from "/images/crypto-currencies/square-color/Monero.svg";

export
    /* Bitcoin Chart */
    let
    spark1series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46
            ],
        },
    ],
    spark1Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
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
        series: [
            {
                name: "Value",
                data: [
                    0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                    61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                    35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24,
                    65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19,
                    46,
                ],
            },
        ],
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
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(230, 83, 60)"],
    }, /* Etherium Chart */
    spark2series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46
            ],
        },
    ],
    spark2Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
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
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    }, /*Golem Chart */
    spark3series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46
            ],
        },
    ],
    spark3Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
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
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },
    /* Dash Chart */
    spark4series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark4Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
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
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },
    /* Litecoin Chart */
    spark5series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark5Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
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
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(230, 83, 60)"],
    },
    /* Ripple Chart */
    spark6series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark6Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
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
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },
    /* Eos Chart */
    spark7series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark7Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
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
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },
    /* Bytecoin Chart */
    spark8series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark8Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
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
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(230, 83, 60)"],
    },
    /* IOTA Chart */
    spark9series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark9Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
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
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(230, 83, 60)"],
    },
    /* Monero Chart */
    spark10series = [
        {
            name: "Value",
            data: [
                0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51,
                35, 41, 35, 27, 93, 53, 61, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
                61, 27, 54, 43, 19, 46, 0, 45, 54, 93, 53, 61, 27, 54, 43, 19,
                46,
            ],
        },
    ],
    spark10Options = {
        chart: {
            type: "line",
            height: 30,
            width: 120,
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.1,
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
        tooltip: {
            enabled: false,
        },
        colors: ["rgb(38, 191, 148)"],
    },

    /* Start:: Main cards charts */
    maincardspark1series = [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    maincardspark1Options = {
        chart: {
            type: 'line',
            height: 40,
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
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#26bf94'],

    },
    maincardspark2series = [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    maincardspark2Options = {
        chart: {
            type: 'line',
            height: 40,
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
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#26bf94'],

    },
    maincardspark3series = [{
        name: 'Value',
        data: [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
    }],
    maincardspark3Options = {
        chart: {
            type: 'line',
            height: 40,
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
            axisBorder: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
        },
        colors: ['#e6533c'],

    };
/* End:: Main cards charts */

export let
    marketcap = [
        {
            id: 1, coinSrc: Bitcoins, name: "Bitcoin - BTC", type: "BTC / USD", count: "$35,876.29", value: "$0.04", vol: "+2.33%", chart: { options: spark3Options, series: spark3series, type: "line", height: "40", width: "120" }, chartId: "btc-chart",
            footerCount: "+280.30(0.96%)", rank: "#1", yearsBadge: true
        },
        {
            id: 2, coinSrc: Ethereums, name: "Etherium - ETH", type: "ETH / USD", count: "$31,244.12", value: "$2.57", vol: "+13.45%", chart: { options: spark2Options, series: spark2series, type: "line", height: "40", width: "120" }, chartId: "eth-chart",
            footerCount: "+2,044.24(1.32%)", rank: "#2",
        },
        {
            id: 3, coinSrc: Dashs, name: "Dash - DASH", type: "DASH / USD", count: "$26,345.000", value: "$12.32", vol: "+112.95%", chart: { options: spark1Options, series: spark1series, type: "line", height: "40", width: "120" }, chartId: "dash-chart",
            footerCount: "+40.17 (1.52%)", rank: "#105"
        },
    ],
    topCurrencies = [
        { name: "Bitcoin", symbol: "BTC", price: "$29,948.80", maxLimit: "50 BTC", volume: "31.2450 BTC", imgSrc: Bitcoins },
        { name: "Litecoin", symbol: "LTC", price: "$9,332.98", maxLimit: "200 LTC", volume: "38.0023 LTC", imgSrc: litecoins },
        { name: "Ethereum", symbol: "ETH", price: "$1,895.96", maxLimit: "100 ETH", volume: "69.2412 BTC", imgSrc: Ethereums }
    ],
    cryptoMarketCap = [
        { id: 1, coinSrc: Bitcoin, coinName: "Bitcoin (BTC)", marketCap: "$582.23B", price: "$29,948.80", change1: "0.483%", change1Icon: "down", color: "danger", change24: "0.239%", change24Icon: "up", change24Color: "success", volume: "$11.79B USD", supply: "19.43M of (21M)", supplyProgress: "88%", supplyProgress2: "12%", chart: { options: spark1Options, series: spark1series } },
        { id: 2, coinSrc: Ethereum, coinName: "Etherium (ETH)", marketCap: "$226.91B", price: "$1,895.96", change1: "0.87%", change1Icon: "down", color: "danger", change24: "0.29%", change24Icon: "down", change24Color: "danger", volume: "$2.83B USD", supply: "120M", chart: { options: spark2Options, series: spark2series } },
        { id: 3, coinSrc: Golem, coinName: "Golem (GLM)", marketCap: "$202.07M", price: "$0.201472", change1: "0.61%", change1Icon: "up", color: "success", change24: "34.96%", change24Icon: "down", change24Color: "danger", volume: "$2,112,645 USD", supply: "1,000M", supplyProgress: "100%", chart: { options: spark3Options, series: spark3series } },
        { id: 4, coinSrc: Dash, coinName: "Dash (DASH)", marketCap: "$365.877M", price: "$32.13", change1: "0.59%", change1Icon: "up", color: "success", change24: "1.24%", change24Icon: "down", change24Color: "success", volume: "$11.46B USD", supply: "11.37M of (18.92M)", supplyProgress: "56%", supplyProgress2: "44%", chart: { options: spark4Options, series: spark4series } },
        { id: 5, coinSrc: litecoin, coinName: "Litecoin (LTC)", marketCap: "$6.80B", price: "$92.98", change1: "0.90%", change1Icon: "up", color: "danger", change24: "2.22%", change24Icon: "down", change24Color: "success", volume: "$3.61M USD", supply: "73.40M", supplyProgress: "100%", chart: { options: spark5Options, series: spark5series } },
        { id: 6, coinSrc: Ripple, coinName: "Ripple (XRP)", marketCap: "$42.48B", price: "$0.83", change1: "0.01%", change1Icon: "up", color: "success", change24: "0.91%", change24Icon: "down", change24Color: "success", volume: "$2.99B USD", supply: "52.54B of (100B)", supplyProgress: "52%", supplyProgress2: "48%", chart: { options: spark6Options, series: spark6series } },
        { id: 7, coinSrc: EOS, coinName: "EOS", marketCap: "$85.2M", price: "$0.765957", change1: "0.61%", change1Icon: "down", color: "danger", change24: "20.65%", change24Icon: "down", change24Color: "danger", volume: "$116.91M USD", supply: "10.1B of (105B)", supplyProgress: "10%", supplyProgress2: "90%", chart: { options: spark7Options, series: spark7series } },
        { id: 8, coinSrc: Bytecolin, coinName: "Bytecoin (BCN)", marketCap: "$6.2M", price: "$0.00039", change1: "25.24%", change1Icon: "up", color: "danger", change24: "27.12%", change24Icon: "down", change24Color: "danger", volume: "$6,184 USD", supply: "184.02B of (184.07B)", supplyProgress: "99%", supplyProgress2: "1%", chart: { options: spark8Options, series: spark8series } },
        { id: 9, coinSrc: IOTA, coinName: "IOTA", marketCap: "$510.429M", price: "$0.184992", change1: "1.08%", change1Icon: "up", color: "danger", change24: "1.41%", change24Icon: "down", change24Color: "danger", volume: "$7.50M USD", supply: "2.78B", supplyProgress: "", chart: { options: spark9Options, series: spark9series } },
        { id: 10, coinSrc: Monero, coinName: "Monero", marketCap: "$3.062B", price: "$165.76", change1: "3.22%", change1Icon: "up", color: "danger", change24: "3.48%", change24Icon: "down", change24Color: "danger", volume: "$105.8M USD", supply: "18.15M", supplyProgress: "", chart: { options: spark10Options, series: spark10series } },
    ];

