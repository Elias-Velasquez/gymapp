export let menuData = [
    {
        headTitle: 'DASHBOARD',
        roles: ['ROLE_ADMIN'],
    },
    {
        type: 'sub',
        title: 'Paneles',
        icon: 'bx bx-home',
        badgeColor: 'bg-warning-transparent',
        selected: false,
        active: false,
        dirchange: false,
        roles: ['ROLE_ADMIN'],
        children: [

            {
                path: '/dashboard/analytics',
                type: 'link',
                title: 'Estadísticas',
                selected: false,
                active: false,
                dirchange: false,
                roles: ['ROLE_ADMIN']
            },

            {
                path: '/dashboard/personal',
                type: 'link',
                title: 'Personal',
                selected: false,
                active: false,
                dirchange: false,
                roles: ['ROLE_ADMIN']
            },
        ]
    },
    {
        headTitle: 'GESTIÓN DE CLIENTES',
    },
    {
        type: 'sub',
        title: 'Mis acciones',
        icon: 'bx bx-user',
        badgeColor: 'bg-secondary-transparent',
        selected: false,
        active: false,
        dirchange: false,
        roles: ['ROLE_ADMIN', 'ROLE_USER'],
        children: [
            {
                path: '/pages/users',
                type: 'link',
                title: 'Clientes',
                selected: false,
                active: false,
                dirchange: false,
                roles: ['ROLE_ADMIN']
            },
            // {
            //     path: '/pages/about-us',
            //     type: 'link',
            //     title: 'Sobre Nosotros',
            //     selected: false,
            //     active: false,
            //     dirchange: false,
            //      roles: ['ROLE_ADMIN']
            // },

            // {
            //     path: '/pages/contact-us',
            //     type: 'link',
            //     title: 'Contactanos',
            //     selected: false,
            //     active: false,
            //     dirchange: false,
            //      roles: ['ROLE_ADMIN']
            // },

            // {
            //     path: '/pages/faqs',
            //     type: 'link',
            //     title: 'Preguntas Frecuentes',
            //     selected: false,
            //     active: false,
            //     dirchange: false,
            //      roles: ['ROLE_ADMIN']
            // },

            // {
            //     path: '/pages/landing',
            //     type: 'link',
            //     title: 'Landing',
            //     selected: false,
            //     active: false,
            //     dirchange: false,
            //      roles: ['ROLE_ADMIN']
            // },

            {
                path: '/pages/profile',
                type: 'link',
                title: 'Perfil',
                selected: false,
                active: false,
                dirchange: false,
                 roles: ['ROLE_ADMIN', 'ROLE_USER']
            },

            // {
            //     path: '/pages/team',
            //     type: 'link',
            //     title: 'Staff',
            //     selected: false,
            //     active: false,
            //     dirchange: false,
            //      roles: ['ROLE_ADMIN']
            // },
            // {
            //     path: '/pages/terms-conditions',
            //     type: 'link',
            //     title: 'Terminos y Condiciones',
            //     selected: false,
            //     active: false,
            //     dirchange: false,
            //      roles: ['ROLE_ADMIN']
            // },

        ]
    },

    // {
    //     type: 'sub',
    //     title: 'Authentication',
    //     icon: 'bx bx-fingerprint',
    //     selected: false,
    //     active: false,
    //     dirchange: false,
    //     children: [
    //         {
    //             path: '/authentication/coming-soon',
    //             type: 'link',
    //             title: 'Coming Soon',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             type: 'sub',
    //             title: 'Create Password',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //             children: [
    //                 {
    //                     path: '/authentication/create-password/basic',
    //                     type: 'link',
    //                     title: 'Basic',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //                 {
    //                     path: '/authentication/create-password/cover',
    //                     type: 'link',
    //                     title: 'Cover',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //             ]
    //         },
    //         {
    //             type: 'sub',
    //             title: 'Lock Screen',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //             children: [
    //                 {
    //                     path: '/authentication/lock-screen/basic',
    //                     type: 'link',
    //                     title: 'Basic',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //                 {
    //                     path: '/authentication/lock-screen/cover',
    //                     type: 'link',
    //                     title: 'Cover',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //             ]
    //         },
    //         {
    //             type: 'sub',
    //             title: 'Reset Password',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //             children: [
    //                 {
    //                     path: '/authentication/reset-password/basic',
    //                     type: 'link',
    //                     title: 'Basic',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //                 {
    //                     path: '/authentication/reset-password/cover',
    //                     type: 'link',
    //                     title: 'Cover',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //             ]
    //         },
    //         {
    //             type: 'sub',
    //             title: 'Sign Up',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //             children: [
    //                 {
    //                     path: '/authentication/sign-up/basic',
    //                     type: 'link',
    //                     title: 'Basic',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //                 {
    //                     path: '/authentication/sign-up/cover',
    //                     type: 'link',
    //                     title: 'Cover',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //             ]
    //         },
    //         {
    //             type: 'sub',
    //             title: 'Sign In',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //             children: [
    //                 {
    //                     path: '/authentication/sign-in/basic',
    //                     type: 'link',
    //                     title: 'Basic',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //                 {
    //                     path: '/authentication/sign-in/cover',
    //                     type: 'link',
    //                     title: 'Cover',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //             ]
    //         },
    //         {
    //             type: 'sub',
    //             title: 'Two Step Verification',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //             children: [
    //                 {
    //                     path: '/authentication/two-step-verification/basic',
    //                     type: 'link',
    //                     title: 'Basic',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //                 {
    //                     path: '/authentication/two-step-verification/cover',
    //                     type: 'link',
    //                     title: 'Cover',
    //                     selected: false,
    //                     active: false,
    //                     dirchange: false,
    //                 },
    //             ]
    //         },
    //         {
    //             path: '/authentication/under-maintenance',
    //             type: 'link',
    //             title: 'Under Maintenance',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //     ]
    // },
    // {
    //     headTitle: 'GENERAL'
    // },
    // {
    //     type: 'sub',
    //     title: 'Ui Elements',
    //     icon: 'bx bx-box',
    //     selected: false,
    //     active: false,
    //     dirchange: false,
    //     children: [
    //         {
    //             path: '/ui-elements/alerts',
    //             type: 'link',
    //             title: 'Alerts',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/badges',
    //             type: 'link',
    //             title: 'Badge',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/breadcrumb',
    //             type: 'link',
    //             title: 'Breadcrumb',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/buttons',
    //             type: 'link',
    //             title: 'Buttons',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/button-group',
    //             type: 'link',
    //             title: 'Button Group',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/cards',
    //             type: 'link',
    //             title: 'Cards',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/dropdowns',
    //             type: 'link',
    //             title: 'Dropdowns',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/images-figures',
    //             type: 'link',
    //             title: 'Images & Figures',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/links-interactions',
    //             type: 'link',
    //             title: 'Links & Interactions',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/list-group',
    //             type: 'link',
    //             title: 'List Group',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/navs-tabs',
    //             type: 'link',
    //             title: 'Navs & Tabs',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/object-fit',
    //             type: 'link',
    //             title: 'Object Fit',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/pagination',
    //             type: 'link',
    //             title: 'Pagination',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/popovers',
    //             type: 'link',
    //             title: 'Popovers',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/progress',
    //             type: 'link',
    //             title: 'Progress',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/spinners',
    //             type: 'link',
    //             title: 'Spinners',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/toasts',
    //             type: 'link',
    //             title: 'Toasts',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/tooltips',
    //             type: 'link',
    //             title: 'Tooltips',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/ui-elements/typography',
    //             type: 'link',
    //             title: 'Typography',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //     ]
    // },
    // {
    //     type: 'sub',
    //     title: 'Utilities',
    //     icon: 'bx bx-medal',
    //     selected: false,
    //     active: false,
    //     dirchange: false,
    //     children: [
    //         {
    //             path: '/utilities/avatars',
    //             type: 'link',
    //             title: 'Avatars',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/utilities/borders',
    //             type: 'link',
    //             title: 'Borders',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/utilities/breakpoints',
    //             type: 'link',
    //             title: 'Breakpoints',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/utilities/colors',
    //             type: 'link',
    //             title: 'Colors',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/utilities/columns',
    //             type: 'link',
    //             title: 'Columns',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/utilities/flex',
    //             type: 'link',
    //             title: 'Flex',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/utilities/gutter',
    //             type: 'link',
    //             title: 'Gutters',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/utilities/helpers',
    //             type: 'link',
    //             title: 'Helpers',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/utilities/position',
    //             type: 'link',
    //             title: 'Position',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         },
    //         {
    //             path: '/utilities/additional-content',
    //             type: 'link',
    //             title: 'Additional Content',
    //             selected: false,
    //             active: false,
    //             dirchange: false,
    //         }
    //     ]
    // },
]