
import ecommerce1 from '/images/ecommerce/jpg/1.jpg';
import ecommerce3 from '/images/ecommerce/jpg/3.jpg';
import ecommerce4 from '/images/ecommerce/jpg/4.jpg';
import ecommerce5 from '/images/ecommerce/jpg/5.jpg';
import ecommerce6 from '/images/ecommerce/jpg/6.jpg';

export let
    notificationList = [
        { id: 1, icon: 'ti ti-gift', iconBg: 'bg-primary-transparent', title: 'Your Order Has Been Shipped', description: 'Order No: 123456 Has Shipped To Your Delivery Address' },
        { id: 2, icon: 'ti ti-discount-2', iconBg: 'bg-secondary-transparent', title: 'Discount Available', description: 'Discount Available On Selected Products' },
        { id: 3, icon: 'ti ti-user-check', iconBg: 'bg-pink-transparent', title: 'Account Has Been Verified', description: 'Your Account Has Been Verified Sucessfully' },
        { id: 4, icon: 'ti ti-circle-check', iconBg: 'bg-warning-transparent', title: 'Order Placed <span class="text-warning">ID: #1116773</span>', description: 'Order Placed Successfully' },
        { id: 5, icon: 'ti ti-clock', iconBg: 'bg-success-transparent', title: 'Order Delayed <span class="text-success">ID: 7731116</span>', description: 'Order Delayed Unfortunately' },
    ],
    cartList = [
        {
            id: 1, img: ecommerce1, title: 'SomeThing Phone', categoryList: [
                { value: 'Metallic Blue', valueBgColor: '' },
                { value: '6gb Ram', valueBgColor: '' },
            ], price: '1,299.00'
        },
        {
            id: 2, img: ecommerce3, title: 'Stop Watch', categoryList: [
                { value: 'Analog', valueBgColor: '' },
                { value: 'Free shipping', valueBgColor: 'bg-pink-transparent' },
            ], price: '179.29'
        },
        {
            id: 3, img: ecommerce5, title: 'Photo Frame', categoryList: [
                { value: 'Decorative', valueBgColor: '' }
            ], price: '29.00'
        },
        {
            id: 4, img: ecommerce4, title: 'Kikon Camera', categoryList: [
                { value: 'Black', valueBgColor: '' },
                { value: '50MM', valueBgColor: '' },
            ], price: '4,999.00'
        },
        {
            id: 5, img: ecommerce6, title: 'Canvas Shoes', categoryList: [
                { value: 'Gray', valueBgColor: '' },
                { value: 'Sports', valueBgColor: '' },
            ], price: '129.00'
        },
    ],
    header = [
        { id: 1, icon: "user", name: "People" },
        { id: 2, icon: "file-text", name: "Pages" },
        { id: 3, icon: "align-left", name: "Articles" },
        { id: 4, icon: "server", name: "Tags" },
    ]