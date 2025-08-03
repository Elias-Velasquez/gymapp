import face13 from "/images/faces/13.jpg";
import face6 from "/images/faces/6.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face3 from "/images/faces/3.jpg";
import face1 from "/images/faces/1.jpg";
import face10 from "/images/faces/10.jpg";
import face14 from "/images/faces/14.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face8 from "/images/faces/8.jpg";
import face16 from "/images/faces/16.jpg";
import face9 from "/images/faces/9.jpg";
import face21 from "/images/faces/21.jpg";
import face17 from "/images/faces/17.jpg";


export let
    dealData = [
        { id: 1, title: 'Leads Discovered', leads: "24 Leads", price: '$25,238', titleClass: 'lead-discovered', color: 'primary', leadClass: "lead-discovered" },
        { id: 2, title: 'Qualified Leads', leads: "17 Leads", price: '$32,453', titleClass: 'lead-qualified', color: 'warning', leadClass: "lead-qualified" },
        { id: 3, title: 'Contact Initiated', leads: "5 Leads", price: '$13,756', titleClass: 'contact-initiated', color: 'success', leadClass: "contact-initiated" },
        { id: 4, title: 'Needs Identified', leads: "43 Leads", price: '$47,093', titleClass: 'need-identified', color: 'info', leadClass: "need-identified" },
        { id: 5, title: 'Negotiation', leads: "15 Leads", price: '$26,146', titleClass: 'negotiation', color: 'danger', leadClass: "negotiation" },
        { id: 6, title: 'Deal Finalized', leads: "127 Leads", price: '$174,679', titleClass: 'deal-finalized', color: 'secondary', leadClass: "deal-finalized" },
    ],
    dealDraggable = [
        { id: 1, title: 'Service Upgrade', amount: '$5000', company: 'Spruko Technologies', date: '24, Jun 2023 - 12:45PM', avatar: face12 },
        { id: 2, title: 'Product Demo', amount: '$50,000', company: 'Acme Corporation LTD', date: '18, Apr 2023 - 11:22AM', avatar: face5 },
        { id: 3, title: 'Website Redesign', amount: '$20,000', company: 'Embark Technologies', date: '12, Jul 2023 - 10:15AM', avatar: face15 },
        { id: 4, title: 'Consulting Services', amount: '$10,000', company: 'Adam Johnson', date: '29, Jul 2023 - 4:45PM', avatar: face6 },
    ],

    dealDraggable1 = [
        { id: 1, title: 'Event Sponsorship', amount: '$10,000', company: 'Initech Info', date: '21, May 2023 - 10:25AM', avatar: face11 },
        { id: 2, title: 'Sales Training', amount: '$6,000', company: 'Soylent Corp', date: '10, May 2023 - 9:20AM', avatar: face11 },
        { id: 3, title: 'Content Creation', amount: '$3,000', company: 'Hooli Technologies', date: '25, Aug 2023 - 3:38PM', avatar: face14 }
    ],

    dealDraggable2 = [
        { id: 1, title: 'E-commerce Integration', amount: '$12,000', company: 'Spice Infotech', date: '15, Sep 2023 - 8:32PM', avatar: face3 },
        { id: 2, title: 'Ad Campaign', amount: '$5,500', company: 'Umbrella Corp', date: '17, Jun 2023 - 10:54AM', avatar: face16 }
    ],

    dealDraggable3 = [
        { id: 1, title: 'Webinar Series', amount: '$9,500', company: 'Massive Dynamic', date: '16, May 2023 - 11:22AM', avatar: face10 },
        { id: 2, title: 'SEO Audit', amount: '$3,000', company: 'Logitech ecostics', date: '27, Apr 2023 - 5:15PM', avatar: face13 },
        { id: 3, title: 'Loyalty Program', amount: '$12,000', company: 'Globex Corp', date: '26, Jul 2023 - 5:28AM', avatar: face8 },
        { id: 4, title: 'CRM Integration', amount: '$10,000', company: 'CrystalClear Consulting', date: '14, May 2023 - 11:29PM', avatar: face9 }
    ],

    dealDraggable4 = [
        { id: 1, title: 'Media Analytics', amount: '$9,000', company: 'GlobalConnect', date: '18, Mar 2023 - 2:32PM', avatar: face16, },
        { id: 2, title: 'Lead Nurturing Strategy', amount: '$4,000', company: 'AlphaTech Solutions', date: '16, Jul 2023 - 7:53AM', avatar: face21, },
        { id: 3, title: 'Website Maintenance', amount: '$7,500', company: 'RedRock Industries', date: '30, Jul 2023 - 6:30AM', avatar: face9, },
        { id: 4, title: 'Newsletter Campaign', amount: '$2,500', company: 'CoreTech Solutions', date: '12, May 2023 - 10:22AM', avatar: face2, },
        { id: 5, title: 'Graphic Design', amount: '$5,000', company: 'TechPro Services', date: '10, Jul 2023 - 10:15PM', avatar: face17, }
    ],

    dealDraggable5 = [
        { id: 1, title: 'CRM Training', amount: '$4,200', company: 'BlueSky Industries', date: '15, May 2023 - 8:20AM', avatar: face1 },
        { id: 2, title: 'Market Research', amount: '$10,500', company: 'BrightStar Solutions', date: '28, Jun 2023 - 9:27PM', avatar: face10 }
    ];