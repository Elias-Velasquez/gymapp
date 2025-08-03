import Ethereum from "/images/crypto-currencies/square-color/Ethereum.svg";
import face13 from "/images/faces/13.jpg";
import face7 from "/images/faces/7.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face3 from "/images/faces/3.jpg";
import face10 from "/images/faces/10.jpg";
import face14 from "/images/faces/14.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face4 from "/images/faces/4.jpg";
import nft2 from "/images/nft-images/2.png";
import nft3 from "/images/nft-images/3.png";
import nft5 from "/images/nft-images/5.png";
import nft4 from "/images/nft-images/4.png";
import nft10 from "/images/nft-images/10.png";
import nft1 from "/images/nft-images/1.png";
import nft12 from "/images/nft-images/12.png";
import nft16 from "/images/nft-images/16.png";
import nft15 from "/images/nft-images/15.png";
import nft6 from "/images/nft-images/6.png";
import nft7 from "/images/nft-images/7.png";
import nft8 from "/images/nft-images/8.png";
import nft9 from "/images/nft-images/9.png";
import nft11 from "/images/nft-images/11.png";
import nft13 from "/images/nft-images/12.png";
import nft14 from "/images/nft-images/14.png";
import nft17 from "/images/nft-images/17.png";

export let
    // for your balance card
    balanceCardSeries = [{
        name: 'Value',
        data: [20, 14, 19, 10, 25, 20, 22, 9, 12]
    }],
    balanceCardOptions = {
        chart: {
            type: 'line',
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 2.5,
            dashArray: 0,
        },
        fill: {
            gradient: {
                enabled: false
            }
        },
        yaxis: {
            min: 0,
            show: false,
            axisBorder: {
                show: false
            },
        },
        xaxis: {
            show: false,
            axisBorder: {
                show: false
            },
        },
        colors: ["var(--primary-color)"],

    },

    // for NFTs Statistics
    NFTsStatisticsSeries = [{
        name: "Price",
        data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
    }, {
        name: "Volume",
        data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
    }],
    NFTsStatisticsOptions = {
        chart: {
            height: 336,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: true
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 5,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.1
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            offsetX: -15,
            fontWeight: "bold",

            markers: {
                strokeWidth: 0,
                size: 5
            },

        },
        stroke: {
            curve: 'smooth',
            width: '3',
            dashArray: [0, 5],
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["var(--primary-color)", "rgba(var(--primary-rgb), 0.3)"],
        yaxis: {
            title: {
                text: 'Statistics',
                style: {
                    color: '#adb5be',
                    fontSize: '14px',
                    fontFamily: 'poppins, sans-serif',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
                rotate: -90
            }
        }
    };

export let
    Auctions = [
        { id: 1, image: nft2, likes: '1.32k', creatorImage: face10, creatorName: 'Bloom NFT', creatorUsername: '@bloom116', auctionTime: '04hrs : 24m : 38s', title: 'Color Abstract - NFT', highestBid: '0.19ETH', coinImage: Ethereum },
        { id: 2, image: nft3, likes: '1.26k', creatorImage: face5, creatorName: 'Ergos NFT', creatorUsername: '@ergos900', auctionTime: '04hrs : 24m : 38s', title: 'Fluid Abstract - NFT', highestBid: '0.35ETH', coinImage: Ethereum },
        { id: 3, image: nft5, likes: '2.45k', creatorImage: face7, creatorName: 'Caros NFT', creatorUsername: '@caros002', auctionTime: '04hrs : 24m : 38s', title: 'Space Fluid - NFT', highestBid: '0.13ETH', coinImage: Ethereum },
        { id: 4, image: nft4, likes: '1.57k', creatorImage: face11, creatorName: 'Daron NFT', creatorUsername: '@daron789', auctionTime: '04hrs : 24m : 38s', title: 'Fluid Abstract - NFT', highestBid: '0.75ETH', coinImage: Ethereum }
    ],
    nft = [
        { id: 1, iconBg: "primary", icon: `<svg class="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"></path></svg>`, count: "596", dir: "up", color: "success", percentage: "0.25%", text: "Total Assets", month: " This month" },
        { id: 2, iconBg: "secondary", icon: `<svg class="svg-white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none"></path><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"></path><rect height="2" width="6" x="9" y="7"></rect><rect height="2" width="2" x="16" y="7"></rect><rect height="2" width="6" x="9" y="10"></rect><rect height="2" width="2" x="16" y="10"></rect></g></svg>`, count: "$1,298", dir: "up", color: "success", percentage: "0.74%", text: "Total Value", month: " This month" },
        { id: 3, iconBg: "success", icon: `<svg class="svg-white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><g><path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z"></path><circle cx="6.5" cy="6.5" r="1.5"></circle></g></g></svg>`, count: "821", dir: "up", color: "success", percentage: "1.52%", text: "Total Sales", month: " This month" },
        { id: 4, iconBg: "warning", icon: `<svg class="svg-white" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39 c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96 c0,2.27,2.25,2.91,3.35,3.31c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75 c0.63,2.19,2.28,2.78,3.02,2.96V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z"></path></g></svg>`, count: "$7,63,129.09", dir: "down", color: "danger", percentage: "0.124%", text: "Total Revenue", month: " This month" },
    ],
    nftCollections = [
        { rank: "#1", price: "1.0979ETH", images: [{ src: nft6 }, { src: nft7 }, { src: nft8 }, { src: nft9 }], avatar: face15, username: "Simon Cowell", handle: "@simon", coinSrc: Ethereum, dropdown: [{ name: "Action" }, { name: "Another action" }, { name: "Something else here" },], },
        { rank: "#2", price: "1.0466ETH", images: [{ src: nft11 }, { src: nft12 }, { src: nft13 }, { src: nft14 }], avatar: face5, username: "Melissa Smith", handle: "@melissa", coinSrc: Ethereum, dropdown: [{ name: "Action" }, { name: "Another action" }, { name: "Something else here" },], },
        { rank: "#3", price: "1.0355ETH", images: [{ src: nft10 }, { src: nft15 }, { src: nft17 }, { src: nft16 }], avatar: face10, username: "Json Talor", handle: "@taylor", coinSrc: Ethereum, dropdown: [{ name: "Action" }, { name: "Another action" }, { name: "Something else here" },], }
    ],
    nftItems = [
        { name: 'Kakasha Si', username: '@sensei011', price: '1.75', percentageChange: "0.45", avatar: nft10, currencyLogo: Ethereum, textColor: "success", dir: "up" },
        { name: 'Oorichimaru lo', username: '@ooro001', price: '1.15', percentageChange: "0.24", avatar: nft1, currencyLogo: Ethereum, textColor: "success", dir: "up" },
        { name: 'SakuraYM', username: '@sakura903', price: '1.58', percentageChange: "0.07", avatar: nft12, currencyLogo: Ethereum, textColor: "danger", dir: "down" },
        { name: 'Sasuke Uchiha', username: '@sasuke777', price: '1.19', percentageChange: "1.34", avatar: nft4, currencyLogo: Ethereum, textColor: "success", dir: "up" },
        { name: 'Naruto Uzumaki', username: '@naruto111', price: '2.45', percentageChange: "1.70", avatar: nft15, currencyLogo: Ethereum, textColor: "success", dir: "up" },
        { name: 'Kazimo Aruke', username: '@kazimo900', price: '1.95', percentageChange: "1.21", avatar: nft16, currencyLogo: Ethereum, textColor: "danger", dir: "down" },
        { name: 'Nagiro Ohinavo', username: '@nagiro096', price: '1.12', percentageChange: "0.99", avatar: nft6, currencyLogo: Ethereum, textColor: "success", dir: "up" },
    ],
    statistics2 = [
        { label: "Symbol", value: "ETH", class: "" },
        { label: "Price Benchmark", value: "-0.39%", class: "" },
        { label: "Price (USD)", value: "$1,212.67", class: "success" },
        { label: "Change (24H)", value: "-0.14%", class: "danger" },
        { label: "Market Cap", value: "$148.20B", class: "" }
    ],
    topCollectors = [
        { name: 'Alicia Smith', avatar: face5, progress: 75, value: '$9,223.46', eth: '0.214ETH', },
        { name: 'Alex Carey', avatar: face15, progress: 60, value: '$17,239.09', eth: '1.890ETH', },
        { name: 'Emiley Jack', avatar: face4, progress: 35, value: '$5,902.83', eth: '1.903ETH', },
        { name: 'Jessica', avatar: face3, progress: 70, value: '$3,993.09', eth: '0.689ETH', },
        { name: 'Json Taylor', avatar: face11, progress: 90, value: '$12,124.34', eth: '2.577ETH', },
        { name: 'Kiara May', avatar: face2, progress: 62, value: '$2,534.56', eth: '0.737ETH', },
        { name: 'Agire Khan', avatar: face14, progress: 85, value: '$15,236.00', eth: '6.345ETH', },
    ],
    topCreators = [
        { name: 'Amanda Nanes', username: 'amandananes@', totalSold: 18, saleValue: '$1,982', avatar: face4, color: "btn-primary", following: "Follow", },
        { name: 'Charles Achilles', username: '@charlesachilles', totalSold: 126, saleValue: '$16,982', avatar: face15, color: "btn-primary-light", following: "Unfollow", },
        { name: 'Julia Camo', username: '@juliacamo', totalSold: 42, saleValue: '$3,432', avatar: face5, color: "btn-primary", following: "Follow", },
        { name: 'Json Taylor', username: '@jsontaylor', totalSold: 63, saleValue: '$9,236', avatar: face12, color: "btn-primary", following: "Follow", },
        { name: 'Elisha Sean', username: 'elishasean', totalSold: 59, saleValue: '$7,783', avatar: face3, color: "btn-primary", following: "Follow", },
        { name: 'Joseph Smith', username: '@josephsmith', totalSold: 137, saleValue: '$13,562', avatar: face13, color: "btn-primary-light", following: "Unfollow", },
    ],
    Trending = [
        { name: 'Starter Sense NFT', creator: '@irukasensei229', rank: '#1', price: '2.56ETH', change1h: "15.2", dir: "up ", color: "success", change24h: "3.1", dir1: "up ", color1: "success", floorPrice: '2.31ETH', volume: '12.4K', image: nft1, },
        { name: 'Lorem Kekkei', creator: '@clansound209', rank: '#2', price: '1.25ETH', change1h: "3.7", dir: "up ", color: "success", change24h: "0.5", dir1: "down ", color1: "danger", floorPrice: '0.25ETH', volume: '10.1K', image: nft2, },
        { name: 'NFT Uchiha', creator: '@sasukeuhi990', rank: '#3', price: '2,092ETH', change1h: "23.1", dir: "down ", color: "danger", change24h: "9.12", dir1: "up ", color1: "success", floorPrice: '2,000ETH', volume: '52.7K', image: nft10, },
        { name: 'Lorem Ipsum Uch', creator: '@kakashi092', rank: '#4', price: '36.25ETH', change1h: "5.2", dir: "down ", color: "danger", change24h: "4.1", dir1: "down ", color1: "danger", floorPrice: '30.12ETH', volume: '31.4K', image: nft12, },
        { name: 'Ivan Shomer Har', creator: '@narutouze025', rank: '#5', price: '12.52ETH', change1h: " 7.0", dir: "up ", color: "success", change24h: "12.5", dir1: "up ", color1: "success", floorPrice: '12.50ETH', volume: '121.5K', image: nft15, },
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
    nftStatistics = [
        { height: "350px", type: "line", chart: { options: NFTsStatisticsOptions, series: NFTsStatisticsSeries } }
    ]