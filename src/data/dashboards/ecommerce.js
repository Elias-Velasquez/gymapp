import face13 from "/images/faces/13.jpg";
import face7 from "/images/faces/7.jpg";
import face6 from "/images/faces/6.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face3 from "/images/faces/3.jpg";
import face10 from "/images/faces/10.jpg";
import face14 from "/images/faces/14.jpg";
import face12 from "/images/faces/12.jpg";
import face2 from "/images/faces/2.jpg";
import face4 from "/images/faces/4.jpg";
import face16 from "/images/faces/16.jpg";
import face9 from "/images/faces/9.jpg";
import png36 from "/images/ecommerce/png/36.png";
import png37 from "/images/ecommerce/png/37.png";
import png38 from "/images/ecommerce/png/38.png";
import png39 from "/images/ecommerce/png/39.png";
import png40 from "/images/ecommerce/png/40.png";
import png1 from "/images/ecommerce/png/1.png";
import png2 from "/images/ecommerce/png/2.png";
import png3 from "/images/ecommerce/png/3.png";
import png4 from "/images/ecommerce/png/4.png";
import png5 from "/images/ecommerce/png/5.png";
import png6 from "/images/ecommerce/png/6.png";
import png7 from "/images/ecommerce/png/7.png";
import png8 from "/images/ecommerce/png/8.png";
import png9 from "/images/ecommerce/png/9.png";
import png10 from "/images/ecommerce/png/10.png";
import png11 from "/images/ecommerce/png/11.png";
import png12 from "/images/ecommerce/png/12.png";
import png13 from "/images/ecommerce/png/13.png";
import png14 from "/images/ecommerce/png/14.png";
import png15 from "/images/ecommerce/png/15.png";
import ecommerce1 from "/images/ecommerce/jpg/1.jpg";
import ecommerce2 from "/images/ecommerce/jpg/2.jpg";
import ecommerce3 from "/images/ecommerce/jpg/3.jpg";
import ecommerce4 from "/images/ecommerce/jpg/4.jpg";
import ecommerce5 from "/images/ecommerce/jpg/5.jpg";
import ecommerce6 from "/images/ecommerce/jpg/6.jpg";
import french from "/images/flags/french_flag.jpg";
import spain from "/images/flags/spain_flag.jpg";
import argentina from "/images/flags/argentina_flag.jpg";
import germany from "/images/flags/germany_flag.jpg";
import uae from "/images/flags/uae_flag.jpg";


export let
    ecommerceseries = [{
        name: 'Total Orders',
        data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34],
    }],
    ecommerceOptions1 = {
        chart: {
            type: 'bar',
            height: 200
        },
        grid: {
            borderColor: '#f2f6f7',
        },
        colors: ["rgba(var(--primary-rgb), 0.3)", "rgba(var(--primary-rgb), 0.3)", "rgba(var(--primary-rgb), 0.3)", "rgba(var(--primary-rgb), 0.3)", "var(--primary-color)", "rgba(var(--primary-rgb), 0.3)", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed", "#e4e7ed"],
        plotOptions: {
            bar: {
                columnWidth: '25%',
                distributed: true,
                borderRadius: 7,
            }
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        yaxis: {
            title: {
                style: {
                    color: '#adb5be',
                    fontSize: '12px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 500,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                }
            }
        },
        xaxis: {
            type: 'month',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'oct', 'nov', 'dec'],
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
    },
    countries = [
        { name: "France", flag: french, trending: "up", value: "5,932", color: "success", liClass: "mb-3" },
        { name: "Spain", flag: spain, trending: "down", value: "5,383", color: "danger", liClass: "mb-3" },
        { name: "Argentina", flag: argentina, trending: "up", value: "4,825", color: "success", liClass: "mb-3" },
        { name: "UAE", flag: uae, trending: "up", value: "4,527", color: "success", liClass: "mb-3" },
        { name: "Germany", flag: germany, trending: "down", value: "4,501", color: "danger", liClass: "mb-0" }
    ],
    Earning = [
        { title: 'First Half', amount: '$51.94k', percentage: '+0.9%', isPositive: true, },
        { title: 'Top Gross', amount: '$18.32k', percentage: '+0.39%', isPositive: true, },
        { title: 'Second Half', amount: '$38k', percentage: '-0.15%', isPositive: false, },
    ],
    ecommerce = [
        { id: 1, bgColor: "primary", increase: "Increase", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-white primary" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"></rect><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"></path></g></svg>`, name: "Total Sales", count: "14,732", percentage: "+4.2%", color: "success" },
        { id: 2, bgColor: "secondary", increase: "Increase", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-white secondary" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none"></path><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"></path><rect height="2" width="6" x="9" y="7"></rect><rect height="2" width="2" x="16" y="7"></rect><rect height="2" width="6" x="9" y="10"></rect><rect height="2" width="2" x="16" y="10"></rect></g></svg>`, name: "Total Expenses", count: "$28,346.00", percentage: "+12.0%", color: "success" },
        { id: 3, bgColor: "success", increase: "Decreased", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-white success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>`, name: "Total Visitors", count: "1,29,368", percentage: "-7.6%", color: "danger" },
        { id: 4, bgColor: "warning", increase: "Increase", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="svg-white warning" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>`, name: "Total Orders", count: "35,367", percentage: "+2.5%", color: "success" },
    ],
    recentOrders = [
        { name: "Smart Phone", textFw: "fw-semibold", text: "Mobiles", balance: "$199.99", avatar: ecommerce1, textColor: "text-success", liClass: "mb-3", size: "avatar avatar-md", textColors: "muted" },
        { name: "White Headphones", textFw: "fw-semibold", text: "Music", balance: "$79.49", avatar: ecommerce2, textColor: "text-success", liClass: "mb-3", size: "avatar avatar-md", textColors: "muted" },
        { name: "Stop Watch", textFw: "fw-semibold", text: "Electronics", balance: "$49.29", avatar: ecommerce3, textColor: "text-success", liClass: "mb-3", size: "avatar avatar-md", textColors: "muted" },
        { name: "Kikon Camera", textFw: "fw-semibold", text: "Electronics", balance: "$1,699.00", avatar: ecommerce4, textColor: "text-success", liClass: "mb-2", size: "avatar avatar-md", textColors: "muted" },
        { name: "Photo Frame", textFw: "fw-semibold", text: "Furniture", balance: "$29.99", avatar: ecommerce5, textColor: "text-success", liClass: "mb-2", size: "avatar avatar-md", textColors: "muted" },
        { name: "Canvas Shoes", textFw: "fw-semibold", text: "Footwear", balance: "$89.99", avatar: ecommerce6, textColor: "text-success", liClass: "mb-0", size: "avatar avatar-md", textColors: "muted" },
    ],
    topCustomers = [
        { name: "Emma Wilson", text: "15 Purchases", balance: "$1,835", avatar: face4, icon: "bi-patch-check-fill", textColors: "muted", liClass: "mb-1", size: "avatar avatar-rounded" },
        { name: "Robert Lewis", text: "18 Purchases", balance: "$2,415", avatar: face15, icon: "bi-patch-check-fill", textColors: "muted", liClass: "mb-2", size: "avatar avatar-rounded" },
        { name: "Angelina Hose", text: "21 Purchases", balance: "$2,341", avatar: face5, icon: "bi-patch-check-fill", textColors: "muted", liClass: "mb-3", size: "avatar avatar-rounded" },
        { name: "Samantha Sam", text: "24 Purchases", balance: "2,624", avatar: face2, icon: "bi-patch-check-fill", textColors: "muted", liClass: "mb-0", size: "avatar avatar-rounded" },
    ],
    activeOrders = [
        { customerImage: face4, customerName: 'Amanda Nanes', price: '$229.99', deliveryDate: '24 May 2022', productImage: png1, },
        { customerImage: face10, customerName: 'Peter Parkour', price: '$135.29', deliveryDate: '18 May 2022', productImage: png2, },
        { customerImage: face12, customerName: 'Jackie Chen', price: '$1,299.99', deliveryDate: '29 May 2022', productImage: png3, },
        { customerImage: face5, customerName: 'Ryan Gercia', price: '$249.29', deliveryDate: '05 Jun 2022', productImage: png4, },
        { customerImage: face14, customerName: 'Hugh Jackma', price: '$499.99', deliveryDate: '15 May 2022', productImage: png5, },
    ],
    cancelled = [
        { customerName: "Hailey Bobber", price: 199.99, cancelledDate: "09 Dec 2022", productImage: png11, customerImage: face6, },
        { customerName: "Anthony Mansion", price: 179.99, cancelledDate: "28 Dec 2022", productImage: png12, customerImage: face14, },
        { customerName: "Simon Carter", price: 149.99, cancelledDate: "30 Dec 2022", productImage: png13, customerImage: face16, },
        { customerName: "Sofia Sekh", price: 1439.99, cancelledDate: "03 Dec 2022", productImage: png14, customerImage: face3, },
        { customerName: "Kimura Kai", price: 1092.99, cancelledDate: "02 Dec 2022", productImage: png15, customerImage: face9, }
    ],
    completed = [
        { customerImage: face2, customerName: 'Lisa Rebecca', price: '$1,199.99', deliveryDate: '24 Dec 2022', productImage: png6, },
        { customerImage: face13, customerName: 'Matt Martin', price: '$799.99', deliveryDate: '18 Nov 2022', productImage: png7, },
        { customerImage: face7, customerName: 'Mitchell Osama', price: '$279.00', deliveryDate: '29 Dec 2022', productImage: png8, },
        { customerImage: face12, customerName: 'Cornor Mcgood', price: '$79.99', deliveryDate: '05 Dec 2022', productImage: png9, },
        { customerImage: face15, customerName: 'Kishan Patel', price: '$1,449.29', deliveryDate: '20 Nov 2022', productImage: png10, },
    ],
    productsOverview = [
        { image: png36, name: 'Niker College Bag', sku: '#1734-9743', price: '$199.99', stockStatus: 'Available', quantity: '3,903', totalValue: '$67,899.24', color: "bg-success-transparent" },
        { image: png37, name: 'Dslr Camera (50mm f/1.9 HRM Lens)', sku: '#1234-4567', price: '$1,299.99', stockStatus: 'Available', quantity: '12,435', totalValue: '$324,781.92', color: "bg-success-transparent" },
        { image: png38, name: 'Outdoor Bomber Jacket', sku: '#1902-9883', price: '$99.99', stockStatus: 'Not Available', quantity: '5,143', totalValue: '$76,102.76', color: "bg-danger-transparent" },
        { image: png39, name: 'Light Blue Teddy', sku: '#8745-1232', price: '$79.00', stockStatus: 'Limited Deal', quantity: '7,183', totalValue: '$78,211.83', color: "bg-warning-transparent" },
        { image: png40, name: 'Orange Smart Watch (24mm)', sku: '#1962-9033', price: '$199.99', stockStatus: 'In Offer', quantity: '10,287', totalValue: '$232,982.99', color: "bg-primary-transparent" },
    ],
    topSelling = [
        { image: png36, name: 'Ethnic School bag for children (24L)', category: 'Bags', stockStatus: 'In Stock', quantity: '5,093', color: "success" },
        { image: png38, name: 'Leather jacket for men (S,M,L,XL)', category: 'Clothing', stockStatus: 'In Stock', quantity: '6,890', color: "success" },
        { image: png39, name: 'Childrens Teddy toy of high quality', category: 'Toys', stockStatus: 'Out Of Stock', quantity: '5,423', color: "danger" },
        { image: png40, name: 'Orange smart watch with square dial (24mm)', category: 'Fashion', stockStatus: 'Out Of Stock', quantity: '10,234', color: "danger" },
    ],
    Earnings1 = [
        { height: "250px", type: "bar", chart: { options: ecommerceOptions1, series: ecommerceseries } }
    ]