import face13 from "/images/faces/13.jpg";
import face7 from "/images/faces/7.jpg";
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
import logos3 from "/images/company-logos/3.png";
import logos5 from "/images/company-logos/5.png";
import logos10 from "/images/company-logos/10.png";
import logos9 from "/images/company-logos/9.png";
import logos2 from "/images/company-logos/2.png";
import logos8 from "/images/company-logos/8.png";
import logos6 from "/images/company-logos/6.png";
import logos1 from "/images/company-logos/1.png";

export let
    projectListData = [
        {
            logo: logos1, title: 'Design & Developing New Project', CompletedTasks: '18', TotalTasks: '22', bgcolor: "danger", members: [
                { img: face2, name: '' },
                { img: face8, name: '' },
                { img: face9, name: '' },
                { img: face10, name: '' },
                { img: face11, name: '' },
                { img: face12, name: '' },
            ], priority: 'low', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: '', status: '80', assignedDate: '24,May 2023', dueDate: '12,Jul 2023', badgeColor: "success"
        },
        {
            logo: logos2, title: 'Content Management System (CMS) Integration', CompletedTasks: '26', TotalTasks: '28', bgcolor: "warning", members: [
                { img: face12, name: '' },
                { img: face10, name: '' },
                { img: face11, name: '' },
                { img: face12, name: '' },
                { img: face13, name: '' },
            ], priority: 'Medium', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-info-transparent', status: '45', assignedDate: '20,May 2023', dueDate: '10,Jun 2023', badgeColor: "info"
        },
        {
            logo: logos3, title: 'Task Scheduler and Automation', CompletedTasks: '21', TotalTasks: '45', bgcolor: "secondary", members: [
                { img: face5, name: '' },
                { img: face6, name: '' },
                { img: face7, name: '' },
            ], priority: 'low', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore', statusClass: 'text-primary', status: '60', assignedDate: '31,May 2023', dueDate: '10,Jul 2023', badgeColor: "success"
        },
        {
            logo: logos5, title: 'Advanced Search and Filtering', CompletedTasks: '45', TotalTasks: '54', bgcolor: "success", members: [
                { img: face3, name: '' },
                { img: face9, name: '' },
                { img: face12, name: '' },
                { img: face11, name: '' },
                { img: face13, name: '' },
                { img: face14, name: '' },
            ], priority: 'High', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-danger-transparent', status: '89', assignedDate: '02,Jun 2023', dueDate: '15,Jun 2023', badgeColor: "danger"
        },
        {
            logo: logos8, title: 'Data Export and Reporting', CompletedTasks: '14', TotalTasks: '26', bgcolor: "primary", members: [
                { img: face10, name: '' },
                { img: face2, name: '' },
                { img: face1, name: '' },
                { img: face12, name: '' },
            ], priority: 'Medium', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-info-transparent', status: '60', assignedDate: '29,May 2023', dueDate: '08,Jun 2023', badgeColor: "info"
        },
        {
            logo: logos10, title: 'Activity Log and Audit Trail', CompletedTasks: '28', TotalTasks: '64', bgcolor: "success", members: [
                { img: face7, name: '' },
                { img: face13, name: '' },
            ], priority: 'Low', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-success-transparent', status: '45', assignedDate: '04,Jun 2023', dueDate: '15,Jun 2023', badgeColor: "success"
        },
        {
            logo: logos9, title: 'Role-Based Access Control (RBAC) Implementation', CompletedTasks: '86', TotalTasks: '122', bgcolor: "info", members: [
                { img: face2, name: '' },
                { img: face14, name: '' },
                { img: face15, name: '' },
                { img: face11, name: '' },
                { img: face13, name: '' },
            ], priority: 'High', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-danger-transparent', status: '65', assignedDate: '24,Jun 2023', dueDate: '05,Jul 2023', badgeColor: "success"
        },
        {
            logo: logos6, title: 'Customizable Themes and Layouts', CompletedTasks: '20', TotalTasks: '26', bgcolor: "teal", members: [
                { img: face13, name: '' },
                { img: face16, name: '' },
                { img: face8, name: '' },
                { img: face12, name: '' },
                { img: face13, name: '' },
            ], priority: 'Medium', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.', statusClass: 'bg-info-transparent', status: '75', assignedDate: '20,Jun 2023', dueDate: '18,Jul 2023', badgeColor: "info"
        },
    ];