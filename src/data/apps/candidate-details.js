import face3 from "/images/faces/3.jpg";
import face1 from "/images/faces/1.jpg";
import face21 from "/images/faces/21.jpg";

export let
    candidatesListData1 = [
        {
            image: face1, name: 'Brenda Simpson ', role: 'Software Developer', location: 'Kondapur, Hyderabad', rating: '4.5', review: '(142)',
            ratings: [{ star: "star-fill" }, { star: "star-fill" }, { star: "star-fill" }, { star: "star-fill" }, { star: "star-half" },],
            tooltipIcon: [
                { bgColor: "primary", textColor: "text-fixed-white", icon: "download", tooltipTitle: "Download Resume" },
                { bgColor: "light", textColor: "text-default", icon: "heart", tooltipTitle: "Add to Wishlist" },
                { bgColor: "light", textColor: "text-default", icon: "eye", tooltipTitle: "View Profile" },
            ],
            details: [
                { icon: 'mortarboard', name: 'Graduate' },
                { icon: 'moon-stars', name: 'flexible-shift' },
                { icon: 'clock', name: 'Immediate Joinee' },
                { icon: 'broadcast', name: 'Good at English' },
            ], packageFrom: '$2,300', current: '$2,300 ', expected: '$3,678', languages: [{ languages: 'English' }, { languages: 'Hindi' }, { languages: 'Telugu' }], skills: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'Javascript' }, { name: 'Angular' }],
            bondAccept: '1',
            icon: "hand-thumbs-up ", title: "1 year bond accepted", color: "info", bondTooltip: "1 year bond accepted" ,  icon1: "briefcase", title1: "Exp : 2 Years", color1: "primary",
        },
        {
            image: face3, name: 'Dwayne Stort ', role: 'Web Developer', location: 'Gachibowli, Hyderabad', rating: '3', review: '(35)',
            ratings: [{ star: "star-fill" }, { star: "star-fill" }, { star: "star-fill" }, { star: "star-fill" }, { star: "star-half" },],
            tooltipIcon: [
                { bgColor: "primary", textColor: "text-fixed-white", icon: "download", tooltipTitle: "Download Resume" },
                { bgColor: "light", textColor: "text-default", icon: "heart", tooltipTitle: "Add to Wishlist" },
                { bgColor: "light", textColor: "text-default", icon: "eye", tooltipTitle: "View Profile" },
            ],
            details: [
                { icon: 'bi-mortarboard', name: 'Post Graduate' },
                { icon: 'bi-moon-stars', name: 'flexible-shift' },
                { icon: 'bi-clock', name: 'Within 10 Days' },
                { icon: 'bi-broadcast', name: 'Good at English' },
            ], packageFrom: '$3,600 - $4,700', current: '$3,600 ', expected: '$4,700', languages: [{ languages: 'English' }, { languages: 'Telugu' }], skills: [{ name: 'Javascript' }, { name: 'React' }, { name: 'React Native' }, { name: 'HTML' }],
            bondAccept: '2',  icon: "hand-thumbs-up me-1", title: "2 year bond accepted", color: "info" , bondTooltip: "2 year bond accepted",icon1: "briefcase me-1", title1: "Exp : 4 Years", color1: "primary" 
        },
        {
            image: face21, name: 'Jasmine Kova ', role: 'Python Developer', location: 'Gachibowli, Chennai', rating: '3', review: '(56)',
            ratings: [{ star: "star-fill" }, { star: "star-fill" }, { star: "star-fill" }, { star: "star-fill" }, { star: "star-half" },],
            tooltipIcon: [
                { bgColor: "primary", textColor: "text-fixed-white", icon: "download", tooltipTitle: "Download Resume" },
                { bgColor: "light", textColor: "text-default", icon: "heart", tooltipTitle: "Add to Wishlist" },
                { bgColor: "light", textColor: "text-default", icon: "eye", tooltipTitle: "View Profile" },
            ],
            details: [
                { icon: 'bi-mortarboard', name: 'MBA' },
                { icon: 'bi-moon-stars', name: 'Day-shift' },
                { icon: 'bi-clock', name: 'Within 30 Days' },
                { icon: 'bi-broadcast', name: 'Avg at English' },
            ], packageFrom: '$4,300 - $5,000', current: '$4,300', expected: '$5,000', languages: [{ languages: 'English' }, { languages: 'Telugu' }], skills: [{ name: 'Python' }, { name: 'Java' }, { name: 'React' }, { name: 'Angular' }],
            bondAccept: '0',  icon: "", title: "", color: "" , icon1: "briefcase me-1", title1: "Exp : 5 Years", color1: "primary" 
        },
    ],
    Information = [
        { id: " Full Name", inf: ": Brenda Simpson" },
        { id: " Email", inf: ": brendra@gmail.com" },
        { id: "Date of Birth", inf: ": 13 Jan 2022" },
        { id: "Gender", inf: ": Female" },
        { id: "Age", inf: ": 35 " },
        { id: "Mobile", inf: ": +91 7865343874" },
        { id: "Mother Tongue", inf: ": Telugu " },
        { id: "Marital Status", inf: ": Unmarried" },
        { id: "Blood Group", inf: ": O + ve" },
        { id: "Address", inf: "Akshya Nagar 1st Block, 1st Cross, Rammurthy Nagar, Bangalore - 560016" },
    ]