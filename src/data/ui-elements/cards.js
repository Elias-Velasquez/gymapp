import media25 from "/images/media/media-25.jpg";
import media26 from "/images/media/media-26.jpg";
import media27 from "/images/media/media-27.jpg";
import face15 from "/images/faces/15.jpg";
import face3 from "/images/faces/3.jpg";
import face11 from "/images/faces/11.jpg";
import media4 from "/images/media/media-4.jpg";
import media9 from "/images/media/media-9.jpg";
import media15 from "/images/media/media-15.jpg";
import face12 from "/images/faces/12.jpg";
import face1 from "/images/faces/1.jpg";
import face8 from "/images/faces/8.jpg";
import face5 from "/images/faces/5.jpg";
import face13 from "/images/faces/13.jpg";
import face14 from "/images/faces/14.jpg";
import face16 from "/images/faces/16.jpg";
import face2 from "/images/faces/2.jpg";
import face6 from "/images/faces/6.jpg";
import face4 from "/images/faces/4.jpg";
import face10 from "/images/faces/10.jpg";
import face9 from "/images/faces/9.jpg";
import face7 from "/images/faces/7.jpg";
import media43 from "/images/media/media-43.jpg";
import media44 from "/images/media/media-44.jpg";
import media45 from "/images/media/media-45.jpg";
import media46 from "/images/media/media-46.jpg";

export let
    UsingGridMarkups = [
        { title: "Product A", content: "With supporting text below as a natural lead-in to additional content.", btnClass: "primary", btnLable: "Purchase", img: media25 },
        { title: "Product B", content: "With supporting text below as a natural lead-in to additional content.", btnClass: "secondary", btnLable: "Purchase", img: media26 },
        { title: "Product C", content: "With supporting text below as a natural lead-in to additional content.", btnClass: "light", btnLable: "Purchase", img: media27 },
    ],

    TextAlignment = [
        { alignment: "", title: "Where it come from", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.", btnClass: "primary", btnLable: "Go somewhere", img: face15 },
        { alignment: "text-center", title: "Why do we use it?", content: "Many desktop publishing packages and web page editors now use Lorem Ipsum  Ipsum as their default model text.", btnClass: "primary", btnLable: "Go somewhere", img: face3 },
        { alignment: "text-end", title: "What is special?", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.", btnClass: "primary", btnLable: "Go somewhere", img: face11 },
    ],

    Nature = [
        { title: "Mountains", content: "With supporting text below as a natural lead-in.", badgeColor: "primary", badgeText: "New", avarat: media4 },
        { title: "Hills", content: "With supporting text below as a natural lead-in.", badgeColor: "secondary ", badgeText: "Hot", avarat: media9 },
        { title: "Nature", content: "With supporting text below as a natural lead-in.", badgeColor: "light", badgeText: "Offer", avarat: media15 },
    ],

    BackgroundColoredCards = [
        { name: 'Adam Smith', status: 'Finished by today', image: face11, bgColor: 'card-bg-primary', textColor: "fixed-white" },
        { name: 'Elisha Corner', status: 'Completed 24 days back', image: face12, bgColor: 'card-bg-secondary', textColor: "fixed-white" },
        { name: 'Sarah Alina', status: 'Completed today', image: face1, bgColor: 'card-bg-warning', textColor: "fixed-white" },
        { name: 'Monica Karen', status: 'Pending from 4 days', image: face8, bgColor: 'card-bg-info', textColor: "fixed-white" },
        { name: 'Samantha Sid', status: 'In leave for 1 month', image: face5, bgColor: 'card-bg-success', textColor: "fixed-white" },
        { name: 'Sebastien Steyn', status: 'Completed by Tomorrow', image: face14, bgColor: 'card-bg-danger', textColor: "fixed-white" },
        { name: 'Jacob Smith', status: 'Finished by 24, Nov', image: face13, bgColor: 'card-bg-light', textColor: "muted" },
        { name: 'Pope Adam', status: 'Completed on 24, May', image: face16, bgColor: 'card-bg-dark', textColor: "white" },
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
            title: 'Landing Page Design', borderClass: 'border-secondary', iconColor: 'text-secondary',
            badges: [
                { class: 'bg-danger-transparent', text: 'Laravel' },
                { class: 'bg-teal-transparent', text: 'Codeignitor' },
                { class: 'bg-success-transparent', text: 'Php' },
            ],
            avatars: [
                { img: face4 },
                { img: face6 },
            ],
        },
        {
            title: 'Update New Project', borderClass: 'border-warning', iconColor: 'text-warning',
            badges: [
                { class: 'bg-warning-transparent', text: 'Html' },
                { class: 'bg-secondary-transparent', text: 'Bootstrap' },
                { class: 'bg-info-transparent', text: 'React' },
            ],
            avatars: [
                { img: face1 },
                { img: face12 },
                { img: face10 },
                { img: face16 },
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
        {
            title: 'Recent Projects Testing', borderClass: 'border-danger', iconColor: 'text-danger',
            badges: [
                { class: 'bg-primary-transparent', text: 'Ui' },
                { class: 'bg-secondary-transparent', text: 'Angular' },
                { class: 'bg-info-transparent', text: 'Java' },
            ],
            avatars: [
                { img: face15 },
            ],
        },
        {
            title: 'About Us Page redesign', borderClass: 'border-success', iconColor: 'text-success',
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
            title: 'New Employees', borderClass: 'border-light', iconColor: 'text-default',
            badges: [
                { class: 'bg-warning-transparent', text: 'Html' },
                { class: 'bg-info-transparent', text: 'Cake Php' },
                { class: 'bg-success-transparent', text: 'React' },
            ],
            avatars: [
                { img: face5 },
                { img: face6 },
                { img: face7 },
            ],
        },
        {
            title: 'Terminated Employees', borderClass: 'border-dark', iconColor: 'text-dark',
            badges: [
                { class: 'bg-primary-transparent', text: 'Angular' },
            ],
            avatars: [
                { img: face9 },
                { img: face11 },
                { img: face12 },
                { img: face15 },
            ],
        },
    ],

    GridCards = [
        {
            img: media44,
            title: "Morphology of a typical fruit.",
            description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        },
        {
            img: media43,
            title: "Research improves ability & agility !",
            description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        },
        {
            img: media45,
            title: "Most tropical areas are suitable",
            description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        },
        {
            img: media46,
            title: "Are They seasonal fruits ?",
            description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        }
    ]