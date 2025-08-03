
import face15 from "/images/faces/15.jpg";
import face12 from "/images/faces/12.jpg";
import face5 from "/images/faces/5.jpg";
import face1 from "/images/faces/1.jpg";
import face4 from "/images/faces/4.jpg";
import face2 from "/images/faces/2.jpg";
import face10 from "/images/faces/10.jpg";
import face3 from "/images/faces/3.jpg";
import face16 from "/images/faces/16.jpg";
import face7 from "/images/faces/7.jpg";

export let
    statistics = [
        { id: 1, count: "120+", icon: "spreadsheet", name: "Projects" },
        { id: 2, count: "20K+", icon: "user-plus", name: "Clients" },
        { id: 3, count: "$45.8M", icon: "money", name: "Income Earned" },
        { id: 4, count: "854", icon: "user-circle", name: "Employees" },
        { id: 5, count: "5+", icon: "calendar", name: "Years of Experience" },
    ],
    mission = [
        { id: 1, title: "Design Quality", content: "lorem ipsum, dolor sit var ameto condesetrat aiatel varen or damsenlel verman code Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: "badge-check" },
        { id: 2, title: "Documentation", content: "lorem ipsum, dolor sit var ameto condesetrat aiatel varen or damsenlel verman code Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: "file" },
        { id: 3, title: "Customization", content: "lorem ipsum, dolor sit var ameto condesetrat aiatel varen or damsenlel verman code Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: "cog" },
        { id: 4, title: "Regular Updates", content: "lorem ipsum, dolor sit var ameto condesetrat aiatel varen or damsenlel verman code Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: "cloud-upload" },
        { id: 5, title: "24/7 Support", content: "lorem ipsum, dolor sit var ameto condesetrat aiatel varen or damsenlel verman code Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: "support" },
        { id: 6, title: "Pre-Built Theme Styles", content: "lorem ipsum, dolor sit var ameto condesetrat aiatel varen or damsenlel verman code Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: "image" },
        { id: 7, title: "Compatibility", content: "lorem ipsum, dolor sit var ameto condesetrat aiatel varen or damsenlel verman code Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: "compass" },
        { id: 8, title: "Fully Responsive", content: "lorem ipsum, dolor sit var ameto condesetrat aiatel varen or damsenlel verman code Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: "desktop" },
    ],
    ourteam = [
        { id: 1, src: face15, name: "Peter Parker", position: "Director", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
        { id: 2, src: face12, name: "Andrew garfield", position: "Manager", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
        { id: 3, src: face5, name: "Json Taylor", position: "Web Designer", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
        { id: 4, src: face1, name: "Elizabeth Rose", position: "HR", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    ],
    faqs = [
        { id: 1, question: " Where can I subscribe to your newsletter?", expanded: true, answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.` },
        { id: 2, question: "Where can in edit my address?", expanded: false, answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.` },
        { id: 3, question: "What are your opening hours?", expanded: false, answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.` },
        { id: 4, question: "Do I have the right to return an item?", expanded: false, answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.` },
        { id: 5, question: "General Terms & Conditions (GTC)", expanded: false, answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.` },
        { id: 6, question: "Do I need to create an account to make an order?", expanded: false, answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.` },
    ],
    faqItems = [
        {
            question: "General Terms & Conditions (GTC)",
            answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`,
            expanded: false
        },
        {
            question: "Do I need to create an account to make an order?",
            answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`,
            expanded: false
        },
        {
            question: "Where can I subscribe to your newsletter?",
            answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`,
            expanded: false
        },
        {
            question: "Where can I edit my address?",
            answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`,
            expanded: false
        },
        {
            question: "What are your opening hours?",
            answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`,
            expanded: false
        },
        {
            question: "Do I have the right to return an item?",
            answer: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'salso worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`,
            expanded: true
        }
    ],
    testimonials = [
        { id: 1, name: "Json Taylor", position: "CEO OF NORJA", avatar: face15, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: "ri-star-half-fill", date: "12 days ago", },
        { id: 2, name: "Melissa Blue", position: "MANAGER CHO", avatar: face4, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: "ri-star-half-fill", date: "2 months ago", },
        { id: 3, name: "Kiara Advain", position: "CEO OF EMPIRO", avatar: face2, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: "ri-star-line", date: "2 days ago", },
        { id: 4, name: "Jhonson Smith", position: "CHIEF SECRETARY MBIO", avatar: face10, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: "ri-star-half-fill", date: "16 hrs ago", },
        { id: 5, name: "Dwayne Stort", position: "CEO ARMEDILLO", avatar: face12, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: "ri-star-half-fill", date: "16 hrs ago", },
        { id: 6, name: "Jasmine Kova", position: "AGGENT AMIO", avatar: face3, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: "ri-star-half-fill", date: "26 days ago", },
        { id: 7, name: "Dolph MR", position: "CEO MR BRAND", avatar: face16, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: "ri-star-fill", date: "1 month ago", },
        { id: 8, name: "Brenda Simpson", position: "CEO AIBMO", avatar: face5, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: "ri-star-half-fill", date: "1 month ago", },
        { id: 9, name: "Julia Sams", position: "CHIEF SECRETARY BHOL", avatar: face7, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: "ri-star-fill", date: "2 months ago", },
    ]