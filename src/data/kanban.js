import face13 from "/images/faces/13.jpg";
import face7 from "/images/faces/7.jpg";
import face6 from "/images/faces/6.jpg";
import face5 from "/images/faces/5.jpg";
import face3 from "/images/faces/3.jpg";
import face1 from "/images/faces/1.jpg";
import face10 from "/images/faces/10.jpg";
import face14 from "/images/faces/14.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face8 from "/images/faces/8.jpg";
import face4 from "/images/faces/4.jpg";
import face9 from "/images/faces/9.jpg";
import media36 from "/images/media/media-36.jpg";
import media41 from "/images/media/media-41.jpg";
import media43 from "/images/media/media-43.jpg";
import svg86 from "/images/media/media-86.svg";

export const KanbanBoard = [
    {
        icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 28 May", daysLeft: "2 days left",
        badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 11" }, { badgeClass: "ms-1 badge bg-primary-transparent", badgeText: "UI/UX" }],
        dropdown: [
            { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
            { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
            { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
        ],
        title: "New Dashboard design.", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit, Nulla soluta consectetur sit amet elit dolor sit amet.",
        comments: [
            { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "12", countClass: "fw-semibold fs-12" },
            { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "02", countClass: "fw-semibold fs-12" },
        ],
        avatars: [{ img: face11 }, { img: face12 }, { img: face7 }, { img: face8 },]
    },
    {
        icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 30 May", daysLeft: "2 days left",
        badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 05" }, { badgeClass: "ms-1 badge bg-secondary-transparent", badgeText: "Marketing" }, { badgeClass: "ms-1 badge bg-warning-transparent", badgeText: "Finance" }],
        dropdown: [
            { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
            { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
            { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
        ],
        title: "Marketing next projects.", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta ",
        comments: [
            { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "40", countClass: "fw-semibold fs-12" },
            { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "08", countClass: "fw-semibold fs-12" },
        ],
        avatars: [{ img: face13 }, { img: face6 }]
    },
    {
        icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 02 Jun", daysLeft: "1 days left",
        badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 08" }, { badgeClass: "ms-1 badge bg-success-transparent", badgeText: "Designing" }],
        dropdown: [
            { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
            { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
            { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
        ],
        title: "Design multi usage landing.", content: "",
        comments: [
            { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "15", countClass: "fw-semibold fs-12" },
            { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "28", countClass: "fw-semibold fs-12" },
        ],
        avatars: [{ img: face2 }, { img: face5 }, { img: face8 }, { img: face10 },],
        showImg: true, imgSrc: media36
    },
],
    KanbanBoard1 = [
        {
            icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 01 Jun", daysLeft: "10 days left",
            badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 07" }, { badgeClass: "ms-1 badge bg-pink-transparent", badgeText: "Admin" }, { badgeClass: "ms-1 badge bg-light text-default", badgeText: "Authentication" }],
            dropdown: [
                { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
                { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
                { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
            ],
            title: "Adding Authentication Pages.", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta ",
            comments: [
                { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "06", countClass: "fw-semibold fs-12" },
                { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "02", countClass: "fw-semibold fs-12" },
            ],
            avatars: [{ img: face9 }, { img: face8 }, { img: face14 },]
        },
        {
            icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 05 Jun", daysLeft: "14 days left",
            badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 15" }, { badgeClass: "ms-1 badge bg-success-transparent", badgeText: "Planning" }],
            dropdown: [
                { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
                { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
                { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
            ],
            title: "New Project Discussion.", content: "",
            comments: [
                { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "17", countClass: "fw-semibold fs-12" },
                { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "06", countClass: "fw-semibold fs-12" },
            ],
            avatars: [{ img: face2 }, { img: face8 }, { img: face5 }, { img: face10 },],
            showImg: true, imgSrc: media41
        },
    ],
    KanbanBoard2 = [
        {
            icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 02 Jun", daysLeft: "5 days left",
            badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 13" },
            { badgeClass: "ms-1 badge bg-primary-transparent", badgeText: "UI Design" },
            { badgeClass: "ms-1 badge bg-danger-transparent", badgeText: "Development" }],
            dropdown: [
                { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
                { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
                { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
            ],
            title: "Create Calendar & Mail pages.", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta ",
            comments: [
                { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "05", countClass: "fw-semibold fs-12" },
                { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "13", countClass: "fw-semibold fs-12" },
            ],
            avatars: [{ img: face13 }, { img: face6 },]
        },
        {
            icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 02 Jun", daysLeft: "12 days left",
            badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 09" }, { badgeClass: "ms-1 badge bg-teal-transparent", badgeText: "Product" },],
            dropdown: [
                { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
                { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
                { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
            ],
            title: "Project design Figma,Sketch.", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta  ",
            comments: [
                { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "02", countClass: "fw-semibold fs-12" },
                { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "0", countClass: "fw-semibold fs-12" },
            ],
            avatars: [{ img: face12 }]
        },
    ],
    KanbanBoard3 = [
        {
            icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 05 Jun", daysLeft: "14 days left",
            badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 15" }, { badgeClass: "ms-1 badge bg-purple-transparent", badgeText: "Review" }],
            dropdown: [
                { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
                { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
                { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
            ],
            title: "Design Architecture strategy.", content: "",
            comments: [
                { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "09", countClass: "fw-semibold fs-12" },
                { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "35", countClass: "fw-semibold fs-12" },
            ],
            avatars: [{ img: face3 }, { img: face5 }, { img: face7 }],
            showImg: true, imgSrc: media43
        },
    ],
    KanbanBoard4 = [
        {
            icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 12 Jun", daysLeft: `<i class="ri-check-fill me-1 align-middle d-inline-block"></i> Done`, iconTextClass: "text-success",
            badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 04" }, { badgeClass: "ms-1 badge bg-success-transparent", badgeText: "UI/UX" }],
            dropdown: [
                { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
                { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
                { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
            ],
            title: "Sash project update.", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit, Nulla soluta consectetur sit amet elit dolor sit amet.",
            comments: [
                { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "18", countClass: "fw-semibold fs-12" },
                { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "03", countClass: "fw-semibold fs-12" },
            ],
            avatars: [{ img: face6 }, { img: face13 }]
        },
        {
            icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 10 Jun", daysLeft: `<i class="ri-check-fill me-1 align-middle d-inline-block"></i> Done`, iconTextClass: "text-success",
            badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 10" }, { badgeClass: "ms-1 badge bg-info-transparent", badgeText: "Development" }],
            dropdown: [
                { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
                { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
                { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
            ],
            title: "React JS new version update.", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta ",
            comments: [
                { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "22", countClass: "fw-semibold fs-12" },
                { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "12", countClass: "fw-semibold fs-12" },
            ],
            avatars: [{ img: face10 }, { img: face11 }, { img: face1 }]
        },
        {
            icon: "ri-time-line me-1 align-middle d-inline-block", creat: "Created - 07 Jun", daysLeft: `<i class="ri-check-fill me-1 align-middle d-inline-block"></i> Done`, iconTextClass: "text-success",
            badge: [{ badgeClass: "badge bg-light text-default", badgeText: "#SPK - 16" }, { badgeClass: "ms-1 badge bg-primary-transparent", badgeText: "Discussion" }],
            dropdown: [
                { iconClass: "ri-eye-line me-1 align-middle d-inline-block", dropdownText: "View", },
                { iconClass: "ri-delete-bin-line me-1 align-middle d-inline-block", dropdownText: "Delete", },
                { iconClass: "ri-edit-line me-1 align-middle d-inline-block", dropdownText: "Edit", }
            ],
            title: "Project discussion with client.", content: "",
            comments: [
                { commentTextColor: "me-2 text-primary", spanClass: "me-1", iconClass: "ri-thumb-up-fill align-middle fw-normal", count: "11", countClass: "fw-semibold fs-12" },
                { commentTextColor: "text-muted", spanClass: "me-1", iconClass: "ri-message-2-line align-middle fw-normal", count: "05", countClass: "fw-semibold fs-12" },
            ],
            avatars: [{ img: face4 }],
            showImg: true, imgSrc: svg86
        },
    ];
