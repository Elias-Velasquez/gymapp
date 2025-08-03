export let menuData = [
    { path: 'home', type: 'link', title: 'Home', selected: false, active: false, dirchange: false, },
    { path: 'jobs', type: 'link', title: 'Jobs', selected: false, active: false, dirchange: false, },
    {
        path: 'more', type: 'sub', title: 'More', selected: false, active: false, dirchange: false, children: [

            { path: 'statistics', type: 'link', title: 'Statistics', selected: false, active: false, dirchange: false, },
            { path: 'our mission', type: 'link', title: 'Our Mission', selected: false, active: false, dirchange: false, },
            { path: 'features', type: 'link', title: 'Features', selected: false, active: false, dirchange: false, },
            { path: 'testimonials', type: 'link', title: 'Testimonials', selected: false, active: false, dirchange: false, },
            {
                path: 'level-2', type: 'sub', title: 'Level-2', selected: false, active: false, dirchange: false, children: [
                    { path: 'level-2-1', type: 'link', title: 'Level-2-1', selected: false, active: false, dirchange: false, },
                    {
                        path: 'level-2-2', type: 'sub', title: 'Level-2-2', selected: false, active: false, dirchange: false, children: [
                            { path: 'level-2-2-1', type: 'link', title: 'Level-2-2-1', selected: false, active: false, dirchange: false, },
                            { path: 'level-2-2-2', type: 'link', title: 'Level-2-2-2', selected: false, active: false, dirchange: false, },
                        ]
                    },
                ]
            },

        ]
    },
    { path: 'candidate', type: 'link', title: 'Candidates', selected: false, active: false, dirchange: false, },
    { path: 'employers', type: 'link', title: 'For Employers', selected: false, active: false, dirchange: false, },
    { path: 'career-advice', type: 'link', title: 'Career Advice', selected: false, active: false, dirchange: false, },

];