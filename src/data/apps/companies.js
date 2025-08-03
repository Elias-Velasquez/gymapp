
import face6 from "/images/faces/6.jpg";
import face15 from "/images/faces/15.jpg";
import face3 from "/images/faces/3.jpg";
import face1 from "/images/faces/1.jpg";
import face14 from "/images/faces/14.jpg";
import face12 from "/images/faces/12.jpg";
import face8 from "/images/faces/8.jpg";
import face4 from "/images/faces/4.jpg";
import face9 from "/images/faces/9.jpg";
import logos4 from "/images/company-logos/4.png";
import logos10 from "/images/company-logos/10.png";
import logos8 from "/images/company-logos/8.png";
import logos1 from "/images/company-logos/1.png";
import logos2 from "/images/company-logos/2.png";
import logos3 from "/images/company-logos/3.png";
import logos5 from "/images/company-logos/5.png";
import logos6 from "/images/company-logos/6.png";
import logos7 from "/images/company-logos/7.png";
import logos9 from "/images/company-logos/9.png";



export let
    crmCompaniesData = [
        {
            id: 1, contactSrc: face4, contactName: "Lisa Convay", leadScore: "258", email: "sprukotechnologies2981@gmail.com",
            phoneNumber: "1678-28993-223", companyLogo: logos1, compenyName: "Spruko Technologies",
            Industry: "Information Technology", tagBadgesText1: "Corporate", tagBadgeColor1: "primary-transparent",
        },

        {
            id: 2, contactSrc: face12, contactName: "Jacob Smith", leadScore: "335", email: "spiceinfotech289@gmail.com",
            phoneNumber: "8122-2342-4453", companyLogo: logos3, compenyName: "Spice Infotech", Industry: "Telecommunications", tagBadgesText1: "Micro Business",
            tagBadgeColor1: "danger-transparent",
        },

        {
            id: 3, contactSrc: face14, contactName: "Jake Sully", leadScore: "685", email: "logitecheco789@gmail.com", phoneNumber: "1902-2001-3023",
            companyLogo: logos4, compenyName: "Logitech ecostics", Industry: "Logistics", tagBadgesText1: "Micro Business", tagBadgeColor1: "success-transparent",
        },

        {
            id: 4, contactSrc: face6, contactName: "Kiara Advain", leadScore: "425", email: "initechinfo290@gmail.com", phoneNumber: "1603-2032-1123",
            companyLogo: logos5, compenyName: "Initech Info", Industry: "Information Technology", tagBadgesText1: "Startup", tagBadgeColor1: "light", tagBadgetextColor: "text-default"
        },

        {
            id: 5, contactSrc: face8, contactName: "Brenda Simpson", leadScore: "516", email: "massivedynamic1993@gmail.com", phoneNumber: "1129-2302-1092",
            companyLogo: logos6, compenyName: "Massive Dynamic", Industry: "Professional Services", tagBadgesText1: "Large Enterprise",
            tagBadgeColor1: "pink-transparent",
        },

        {
            id: 6, contactSrc: face9, contactName: "Json Taylor", leadScore: "127", email: "globexcorp345@gmail.com", phoneNumber: "9923-2344-2003",
            companyLogo: logos7, compenyName: "Globex Corporation", Industry: "Education", tagBadgesText1: "Small Business",
            tagBadgeColor1: "danger-transparent",
        },

        {
            id: 7, contactSrc: face15, contactName: "Dwayne Jhonson", leadScore: "368", email: "acmecorporation78@gmail.com", phoneNumber: "7891-2093-1994",
            companyLogo: logos8, compenyName: "Acme Corporation", Industry: "Telecommunications", tagBadgesText1: "Corporate",
            tagBadgeColor1: "primary-transparent",
        },

        {
            id: 8, contactSrc: face1, contactName: "Emiley Jackson", leadScore: "563", email: "soylentcorp678@gmail.com", phoneNumber: "1899-2993-0923",
            companyLogo: logos9, compenyName: "Soylent Corp", Industry: "Manufacturing", tagBadgesText1: "Medium Size", tagBadgeColor1: "warning-transparent",
        },

        {
            id: 9, contactSrc: face3, contactName: "Jessica Morris", leadScore: "185", email: "umbrellacorp289@gmail.com", phoneNumber: "1768-2332-4934",
            companyLogo: logos10, compenyName: "Umbrella Corporation", Industry: "Healthcare", tagBadgesText1: "Micro Business",
            tagBadgeColor1: "success-transparent",
        },

        {
            id: 10, contactSrc: face9, contactName: "Michael Jeremy", leadScore: "240", email: "hoolitech186@gmail.com", phoneNumber: "4788-7822-4786",
            companyLogo: logos2, compenyName: "Hooli Technologies", Industry: "Information Technology", tagBadgesText1: "Startup",
            tagBadgeColor1: "light", tagBadgetextColor: "text-default"
        },

    ],
    crmContactsData = [
        {
            id: 1, contactSrc: face4, contactName: "Lisa Convay", contactTime: "24, Jul 2023 - 4:45PM", leadScore: "258", email: "lisaconvay2981@gmail.com",
            phoneNumber: "1678-28993-223", companyLogo: logos1, compenyName: "Spruko Technologies", leadSource: "Social Media", tagBadgesText1: "New Lead",
            tagBadgeColor1: "primary-transparent", tagBadgesText2: "Prospect", tagBadgeColor2: "primary-transparent"
        },

        {
            id: 2, contactSrc: face12, contactName: "Jacob Smith", contactTime: "15, Jul 2023 - 11:45AM", leadScore: "335", email: "jacobsmith289@gmail.com",
            phoneNumber: "8122-2342-4453", companyLogo: logos3, compenyName: "Spice Infotech", leadSource: "Direct mail", tagBadgesText1: "Customer",
            tagBadgeColor1: "primary-transparent", tagBadgesText2: "Hot Lead", tagBadgeColor2: "danger-transparent"
        },

        {
            id: 3, contactSrc: face14, contactName: "Jake Sully", contactTime: "10, Aug 2023 - 3:25PM", leadScore: "685", email: "jakesully789@gmail.com",
            phoneNumber: "1902-2001-3023", companyLogo: logos4, compenyName: "Logitech ecostics", leadSource: "Blog Articles", tagBadgesText1: "Partner",
            tagBadgeColor1: "success-transparent",
        },

        {
            id: 4, contactSrc: face6, contactName: "Kiara Advain", contactTime: "18, Aug 2023 - 10:10AM", leadScore: "425", email: "kiaraadvain290@gmail.com",
            phoneNumber: "1603-2032-1123", companyLogo: logos5, compenyName: "Initech Info", leadSource: "Affiliates", tagBadgesText1: "LostCustomer",
            tagBadgeColor1: "light text-default", tagBadgesText2: "Influencer", tagBadgeColor2: "secondary-transparent"
        },

        {
            id: 5, contactSrc: face8, contactName: "Brenda Simpson", contactTime: "19, Jul 2023 - 12:41PM", leadScore: "516", email: "brendasimpson1993@gmail.com",
            phoneNumber: "1129-2302-1092", companyLogo: logos6, compenyName: "Massive Dynamic", leadSource: "Organic search", tagBadgesText1: "Subscriber",
            tagBadgeColor1: "pink-transparent", tagBadgesText2: "Partner", tagBadgeColor2: "success-transparent"
        },

        {
            id: 6, contactSrc: face9, contactName: "Json Taylor", contactTime: "14, Aug 2023 - 5:18PM", leadScore: "127", email: "jsontaylor345@gmail.com",
            phoneNumber: "9923-2344-2003", companyLogo: logos7, compenyName: "Globex Corporation", leadSource: "Social media", tagBadgesText1: "Hot Lead",
            tagBadgeColor1: "danger-transparent", tagBadgesText2: "Referral", tagBadgeColor2: "info-transparent"
        },

        {
            id: 7, contactSrc: face15, contactName: "Dwayne Jhonson", contactTime: "12, Jun 2023 - 11:38AM", leadScore: "368", email: "dwayenejhonson78@gmail.com",
            phoneNumber: "7891-2093-1994", companyLogo: logos8, compenyName: "Acme Corporation", leadSource: "Blog Articles", tagBadgesText1: "Trial User",
            tagBadgeColor1: "warning-transparent", tagBadgesText2: "Cold Lead", tagBadgeColor2: "purple-transparent"
        },

        {
            id: 8, contactSrc: face1, contactName: "Emiley Jackson", contactTime: "19, May 2023 - 1:57PM", leadScore: "563", email: "emileyjackson678@gmail.com",
            phoneNumber: "1899-2993-0923", companyLogo: logos9, compenyName: "Soylent Corp", leadSource: "Organic search", tagBadgesText1: "Influencer",
            tagBadgeColor1: "success-transparent", tagBadgesText2: "Partner", tagBadgeColor2: "info-transparent"
        },

        {
            id: 9, contactSrc: face3, contactName: "Jessica Morris", contactTime: "28, Jul 2023 - 9:31AM", leadScore: "185", email: "jessicamorris289@gmail.com",
            phoneNumber: "1768-2332-4934", companyLogo: logos10, compenyName: "Umbrella Corporation", leadSource: "Affiliates", tagBadgesText1: "New Lead",
            tagBadgeColor1: "primary-transparent", tagBadgesText2: "Lost Customer", tagBadgeColor2: "light text-default"
        },

        {
            id: 10, contactSrc: face9, contactName: "Michael Jeremy", contactTime: "28, Jul 2023 - 9:31AM", leadScore: "240", email: "michaeljeremy186@gmail.com",
            phoneNumber: "4788-7822-4786", companyLogo: logos2, compenyName: "Hooli Technologies", leadSource: "Direct mail", tagBadgesText1: "New Lead",
            tagBadgeColor1: "primary-transparent", tagBadgesText2: "Subscriber", tagBadgeColor2: "pink-transparent"
        },

    ],
    crmLeadData = [
        {
            id: 1, contactSrc: face4, contactName: "Lisa Convay", contactTime: "24, Jul 2023 - 4:45PM", leadStatus: "New", email: "lisaconvay2981@gmail.com",
            phoneNumber: "1678-28993-223", companyLogo: logos1, compenyName: "Spruko Technologies", leadSource: "Social Media", tagBadgesText1: "New Lead",
            tagBadgeColor1: "primary-transparent", tagBadgesText2: "Prospect", tagBadgeColor2: "primary-transparent"
        },

        {
            id: 2, contactSrc: face12, contactName: "Jacob Smith", contactTime: "15, Jul 2023 - 11:45AM", leadStatus: "Follow-up", email: "jacobsmith289@gmail.com",
            phoneNumber: "8122-2342-4453", companyLogo: logos3, compenyName: "Spice Infotech", leadSource: "Direct mail", tagBadgesText1: "Customer",
            tagBadgeColor1: "primary-transparent", tagBadgesText2: "Hot Lead", tagBadgeColor2: "danger-transparent"
        },

        {
            id: 3, contactSrc: face14, contactName: "Jake Sully", contactTime: "10, Aug 2023 - 3:25PM", leadStatus: "Closed", email: "jakesully789@gmail.com",
            phoneNumber: "1902-2001-3023", companyLogo: logos4, compenyName: "Logitech ecostics", leadSource: "Blog Articles", tagBadgesText1: "Partner",
            tagBadgeColor1: "success-transparent",
        },

        {
            id: 4, contactSrc: face6, contactName: "Kiara Advain", contactTime: "18, Aug 2023 - 10:10AM", leadStatus: "Contacted", email: "kiaraadvain290@gmail.com",
            phoneNumber: "1603-2032-1123", companyLogo: logos5, compenyName: "Initech Info", leadSource: "Affiliates", tagBadgesText1: "LostCustomer",
            tagBadgeColor1: "light text-default", tagBadgesText2: "Influencer", tagBadgeColor2: "secondary-transparent"
        },

        {
            id: 5, contactSrc: face8, contactName: "Brenda Simpson", contactTime: "19, Jul 2023 - 12:41PM", leadStatus: "New", email: "brendasimpson1993@gmail.com",
            phoneNumber: "1129-2302-1092", companyLogo: logos6, compenyName: "Massive Dynamic", leadSource: "Organic search", tagBadgesText1: "Subscriber",
            tagBadgeColor1: "pink-transparent", tagBadgesText2: "Partner", tagBadgeColor2: "success-transparent"
        },

        {
            id: 6, contactSrc: face9, contactName: "Json Taylor", contactTime: "14, Aug 2023 - 5:18PM", leadStatus: "Follow-up", email: "jsontaylor345@gmail.com",
            phoneNumber: "9923-2344-2003", companyLogo: logos7, compenyName: "Globex Corporation", leadSource: "Social media", tagBadgesText1: "Hot Lead",
            tagBadgeColor1: "danger-transparent", tagBadgesText2: "Referral", tagBadgeColor2: "info-transparent"
        },

        {
            id: 7, contactSrc: face15, contactName: "Dwayne Jhonson", contactTime: "12, Jun 2023 - 11:38AM", leadStatus: "Closed", email: "dwayenejhonson78@gmail.com",
            phoneNumber: "7891-2093-1994", companyLogo: logos8, compenyName: "Acme Corporation", leadSource: "Blog Articles", tagBadgesText1: "Trial User",
            tagBadgeColor1: "warning-transparent", tagBadgesText2: "Cold Lead", tagBadgeColor2: "purple-transparent"
        },

        {
            id: 8, contactSrc: face1, contactName: "Emiley Jackson", contactTime: "19, May 2023 - 1:57PM", leadStatus: "Disqualified", email: "emileyjackson678@gmail.com",
            phoneNumber: "1899-2993-0923", companyLogo: logos9, compenyName: "Soylent Corp", leadSource: "Organic search", tagBadgesText1: "Influencer",
            tagBadgeColor1: "success-transparent", tagBadgesText2: "Partner", tagBadgeColor2: "info-transparent"
        },

        {
            id: 9, contactSrc: face3, contactName: "Jessica Morris", contactTime: "28, Jul 2023 - 9:31AM", leadStatus: "Qualified", email: "jessicamorris289@gmail.com",
            phoneNumber: "1768-2332-4934", companyLogo: logos10, compenyName: "Umbrella Corporation", leadSource: "Affiliates", tagBadgesText1: "New Lead",
            tagBadgeColor1: "primary-transparent", tagBadgesText2: "Lost Customer", tagBadgeColor2: "light text-default"
        },

        {
            id: 10, contactSrc: face9, contactName: "Michael Jeremy", contactTime: "28, Jul 2023 - 9:31AM", leadStatus: "Contacted", email: "michaeljeremy186@gmail.com",
            phoneNumber: "4788-7822-4786", companyLogo: logos2, compenyName: "Hooli Technologies", leadSource: "Direct mail", tagBadgesText1: "New Lead",
            tagBadgeColor1: "primary-transparent", tagBadgesText2: "Subscriber", tagBadgeColor2: "pink-transparent"
        },

    ];