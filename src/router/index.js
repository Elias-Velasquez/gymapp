import { createRouter, createWebHistory } from "vue-router";
import MainDashboard from "../shared/layouts/maindashboard.vue";
import Errorpagesinfo from "../shared/layouts/errorpagesinfo.vue";
import Landingpage from "../shared/layouts/landingpage.vue";

const routes = [
  {
    path: '/',
    component: MainDashboard,
    children:
      [
        {
          path: '',
          redirect: 'dashboard/crm',
        },
        //Dashboard
        {
          path: `dashboard`,
          name: 'Dashboard',
          children: [
            {
              path: 'crm',
              name: "CRM",
              component: () => import("../components/dashboard/crm.vue"),
            },
            {
              path: 'ecommerce',
              name: "Ecommerce",
              component: () => import("../components/dashboard/ecommerce.vue"),
            },
            {
              path: 'crypto',
              name: "Crypto",
              component: () => import("../components/dashboard/crypto.vue"),
            },
            {
              path: 'jobs',
              name: "Jobs",
              component: () => import("../components/dashboard/jobs.vue"),
            },
            {
              path: 'nft',
              name: "NFT",
              component: () => import("../components/dashboard/nft.vue"),
            },
            {
              path: 'sales',
              name: "Sales",
              component: () => import("../components/dashboard/sales.vue"),
            },
            {
              path: 'analytics',
              name: "Analytics",
              component: () => import("../components/dashboard/analytics.vue"),
            },
            {
              path: 'projects',
              name: "Projects",
              component: () => import("../components/dashboard/projects.vue"),
            },
            {
              path: 'hrm',
              name: "HRM",
              component: () => import("../components/dashboard/hrm.vue"),
            },
            {
              path: 'stocks',
              name: "Stocks",
              component: () => import("../components/dashboard/stocks.vue"),
            },
            {
              path: 'courses',
              name: "Courses",
              component: () => import("../components/dashboard/courses.vue"),
            },
            {
              path: 'personal',
              name: "Personal",
              component: () => import("../components/dashboard/personal.vue"),
            },
          ],
        },
        //Pages
        {
          path: `pages`,
          name: 'Pages',
          children: [
            {
              path: 'about-us',
              name: "About Us",
              component: () => import("../components/pages/about-us.vue"),
            },
            {
              path: "blog",
              name: "Blog",
              children: [
                {
                  path: "blog",
                  component: () =>
                    import("../components/pages/blog/blog.vue"),
                },
                {
                  path: "blog-details",
                  component: () =>
                    import("../components/pages/blog/blog-details.vue"),
                },
                {
                  path: "create-blog",
                  component: () =>
                    import("../components/pages/blog/create-blog.vue"),
                },
              ],
            },
            {
              path: 'chat',
              name: "Chat",
              component: () => import("../components/pages/chat.vue"),
            },
            {
              path: 'contacts',
              name: "Contacts",
              component: () => import("../components/pages/contacts.vue"),
            },
            {
              path: 'contact-us',
              name: "Contact Us",
              component: () => import("../components/pages/contact-us.vue"),
            },
            {
              path: "ecommerce",
              name: "Ecommerce2",
              children: [
                {
                  path: "add-products",
                  component: () =>
                    import("../components/pages/ecommerce/add-products.vue"),
                },
                {
                  path: "cart",
                  component: () =>
                    import("../components/pages/ecommerce/cart.vue"),
                },
                {
                  path: "checkout",
                  component: () =>
                    import("../components/pages/ecommerce/checkout.vue"),
                },
                {
                  path: "edit-products",
                  component: () =>
                    import("../components/pages/ecommerce/edit-products.vue"),
                },
                {
                  path: "order-details",
                  component: () =>
                    import("../components/pages/ecommerce/order-details.vue"),
                },
                {
                  path: "orders",
                  component: () =>
                    import("../components/pages/ecommerce/orders.vue"),
                },
                {
                  path: "products",
                  component: () =>
                    import("../components/pages/ecommerce/products.vue"),
                },
                {
                  path: "product-details",
                  component: () =>
                    import("../components/pages/ecommerce/product-details.vue"),
                },
                {
                  path: "products-list",
                  component: () =>
                    import("../components/pages/ecommerce/products-list.vue"),
                },
                {
                  path: "wishlist",
                  component: () =>
                    import("../components/pages/ecommerce/wishlist.vue"),
                },
              ],
            },
            {
              path: "email",
              name: "Email",
              children: [
                {
                  path: "mail-app",
                  component: () =>
                    import("../components/pages/email/mail-app.vue"),
                },
                {
                  path: "mail-settings",
                  component: () =>
                    import("../components/pages/email/mail-settings.vue"),
                },
              ]
            },
            {
              path: 'empty',
              name: "Empty",
              component: () => import("../components/pages/empty.vue"),
            },
            {
              path: 'faqs',
              name: "Faqs",
              component: () => import("../components/pages/faqs.vue"),
            },
            {
              path: "file-manager",
              name: "File Manager",
              children: [
                {
                  path: "file-manager",
                  component: () =>
                    import("../components/pages/file-manager/file-manager.vue"),
                },
              ]
            },
            {
              path: "invoice",
              name: "Invoice",
              children: [
                {
                  path: "create-invoice",
                  component: () =>
                    import("../components/pages/invoice/create-invoice.vue"),
                },
                {
                  path: "invoice-details",
                  component: () =>
                    import("../components/pages/invoice/invoice-details.vue"),
                },
                {
                  path: "invoice-list",
                  component: () =>
                    import("../components/pages/invoice/invoice-list.vue"),
                },
              ]
            },
            {
              path: 'notifications',
              name: "Notifications",
              component: () => import("../components/pages/notifications.vue"),
            },
            {
              path: 'pricing',
              name: "Pricing",
              component: () => import("../components/pages/pricing.vue"),
            },
            {
              path: 'profile',
              name: "Profile",
              component: () => import("../components/pages/profile.vue"),
            },
            {
              path: 'reviews',
              name: "Reviews",
              component: () => import("../components/pages/reviews.vue"),
            },
            {
              path: 'team',
              name: "Team",
              component: () => import("../components/pages/team.vue"),
            },
            {
              path: 'terms-conditions',
              name: "Terms And Conditions",
              component: () => import("../components/pages/terms-conditions.vue"),
            },
            {
              path: 'timeline',
              name: "Timeline",
              component: () => import("../components/pages/timeline.vue"),
            },
            {
              path: 'to-do-list',
              name: "To-Do-List",
              component: () => import("../components/pages/to-do-list.vue"),
            },
          ]
        },
        //Task
        {
          path: `task`,
          name: 'Task',
          children: [
            {
              path: 'kanban-board',
              name: "Kanban Board",
              component: () => import("../components/task/kanban-board.vue"),
            },
            {
              path: 'list-view',
              name: "List View",
              component: () => import("../components/task/list-view.vue"),
            },
            {
              path: 'task-details',
              name: "Task Details",
              component: () => import("../components/task/task-details.vue"),
            },
          ]
        },
        //Ui Elements
        {
          path: `ui-elements`,
          name: 'Ui Elements',
          children: [
            {
              path: 'alerts',
              name: "Alerts",
              component: () => import("../components/ui-elements/alerts.vue"),
            },
            {
              path: 'badges',
              name: "Badges",
              component: () => import("../components/ui-elements/badges.vue"),
            },
            {
              path: 'breadcrumb',
              name: "Breadcrumb",
              component: () => import("../components/ui-elements/breadcrumb.vue"),
            },
            {
              path: 'buttons',
              name: "Buttons",
              component: () => import("../components/ui-elements/buttons.vue"),
            },
            {
              path: 'button-group',
              name: "Button Group",
              component: () => import("../components/ui-elements/button-group.vue"),
            },
            {
              path: 'cards',
              name: "Cards",
              component: () => import("../components/ui-elements/cards.vue"),
            },
            {
              path: 'dropdowns',
              name: "Dropdowns",
              component: () => import("../components/ui-elements/dropdowns.vue"),
            },
            {
              path: 'images-figures',
              name: "Images & Figures",
              component: () => import("../components/ui-elements/images-figures.vue"),
            },
            {
              path: 'links-interactions',
              name: "Links & Interactions",
              component: () => import("../components/ui-elements/links-interactions.vue"),
            },
            {
              path: 'list-group',
              name: "List Group",
              component: () => import("../components/ui-elements/list-group.vue"),
            },
            {
              path: 'navs-tabs',
              name: "Navs Tabs",
              component: () => import("../components/ui-elements/navs-tabs.vue"),
            },
            {
              path: 'object-fit',
              name: "Object Fit",
              component: () => import("../components/ui-elements/object-fit.vue"),
            },
            {
              path: 'pagination',
              name: "Pagination",
              component: () => import("../components/ui-elements/pagination.vue"),
            },
            {
              path: 'popovers',
              name: "Popovers",
              component: () => import("../components/ui-elements/popovers.vue"),
            },
            {
              path: 'progress',
              name: "Progress",
              component: () => import("../components/ui-elements/progress.vue"),
            },
            {
              path: 'spinners',
              name: "Spinners",
              component: () => import("../components/ui-elements/spinners.vue"),
            },
            {
              path: 'toasts',
              name: "Toasts",
              component: () => import("../components/ui-elements/toasts.vue"),
            },
            {
              path: 'tooltips',
              name: "Tooltips",
              component: () => import("../components/ui-elements/tooltips.vue"),
            },
            {
              path: 'typography',
              name: "Typography",
              component: () => import("../components/ui-elements/typography.vue"),
            },
          ]
        },
        //Utilities
        {
          path: `utilities`,
          name: 'Utilities',
          children: [
            {
              path: 'avatars',
              name: "Avatars",
              component: () => import("../components/utilities/avatars.vue"),
            },
            {
              path: 'borders',
              name: "Borders",
              component: () => import("../components/utilities/borders.vue"),
            },
            {
              path: 'breakpoints',
              name: "Breakpoints",
              component: () => import("../components/utilities/breakpoints.vue"),
            },
            {
              path: 'colors',
              name: "Colors",
              component: () => import("../components/utilities/colors.vue"),
            },
            {
              path: 'columns',
              name: "Columns",
              component: () => import("../components/utilities/columns.vue"),
            },
            {
              path: 'flex',
              name: "Flex",
              component: () => import("../components/utilities/flex.vue"),
            },
            {
              path: 'gutter',
              name: "Gutter",
              component: () => import("../components/utilities/gutter.vue"),
            },
            {
              path: 'helpers',
              name: "Helpers",
              component: () => import("../components/utilities/helpers.vue"),
            },
            {
              path: 'position',
              name: "Position",
              component: () => import("../components/utilities/position.vue"),
            },
            {
              path: 'additional-content',
              name: "Additional Content",
              component: () => import("../components/utilities/additional-content.vue"),
            },
          ]
        },
        // Forms
        {
          path: `forms`,
          name: 'Forms',
          children: [
            {
              path: "form-elements",
              name: "Form Elements",
              children: [
                {
                  path: "inputs",
                  component: () =>
                    import("../components/forms/form-elements/inputs.vue"),
                },
                {
                  path: "checks-radios",
                  component: () =>
                    import("../components/forms/form-elements/checks-radios.vue"),
                },
                {
                  path: "input-group",
                  component: () =>
                    import("../components/forms/form-elements/input-group.vue"),
                },
                {
                  path: "form-select",
                  component: () =>
                    import("../components/forms/form-elements/form-select.vue"),
                },
                {
                  path: "range-slider",
                  component: () =>
                    import("../components/forms/form-elements/range-slider.vue"),
                },
                {
                  path: "input-masks",
                  component: () =>
                    import("../components/forms/form-elements/input-masks.vue"),
                },
                {
                  path: "file-uploads",
                  component: () =>
                    import("../components/forms/form-elements/file-uploads.vue"),
                },
                {
                  path: "date-time-picker",
                  component: () =>
                    import("../components/forms/form-elements/date-time-picker.vue"),
                },
                {
                  path: "color-picker",
                  component: () =>
                    import("../components/forms/form-elements/color-picker.vue"),
                },
              ],
            },
            {
              path: 'floating-labels',
              name: "Floating Labels",
              component: () => import("../components/forms/floating-labels.vue"),
            },
            {
              path: 'form-layouts',
              name: "Form Layouts",
              component: () => import("../components/forms/form-layouts.vue"),
            },
            {
              path: "form-editor",
              name: "Form Editor",
              children: [
                {
                  path: "vue3-editor",
                  component: () =>
                    import("../components/forms/form-editor/vue3-editor.vue"),
                },
              ]
            },
            {
              path: 'validation',
              name: "Validation",
              component: () => import("../components/forms/validation.vue"),
            },
          ]
        },
        // Advance Ui
        {
          path: `advanced-ui`,
          name: 'Advanced Ui',
          children: [
            {
              path: 'accordion-collapse',
              name: "Accordion Collapse",
              component: () => import("../components/advanced-ui/accordion-collapse.vue"),
            },
            {
              path: 'carousel',
              name: "Carousel",
              component: () => import("../components/advanced-ui/carousel.vue"),
            },
            {
              path: 'draggable-cards',
              name: "Draggable Cards",
              component: () => import("../components/advanced-ui/draggable-cards.vue"),
            },
            {
              path: 'modals-closes',
              name: "Modals Closes",
              component: () => import("../components/advanced-ui/modals-closes.vue"),
            },
            {
              path: 'navbar',
              name: "Navbar",
              component: () => import("../components/advanced-ui/navbar.vue"),
            },
            {
              path: 'offcanvas',
              name: "Offcanvas",
              component: () => import("../components/advanced-ui/offcanvas.vue"),
            },
            {
              path: 'placeholders',
              name: "Placeholders",
              component: () => import("../components/advanced-ui/placeholders.vue"),
            },
            {
              path: 'ratings',
              name: "Ratings",
              component: () => import("../components/advanced-ui/ratings.vue"),
            },
            {
              path: 'swiper-js',
              name: "Swiper-js",
              component: () => import("../components/advanced-ui/swiper-js.vue"),
            },
          ]
        },
        //widgets
        {
          path: 'widgets',
          name: 'Widgets',
          component: () => import("../components/widgets.vue"),
        },
        // Apps
        {
          path: `apps`,
          name: 'Apps',
          children: [
            {
              path: 'full-calendar',
              name: "Full Calendar",
              component: () => import("../components/apps/full-calendar.vue"),
            },
            {
              path: 'gallery',
              name: "Gallery",
              component: () => import("../components/apps/gallery.vue"),
            },
            {
              path: 'sweet-alerts',
              name: "sweet-alerts",
              component: () => import("../components/apps/sweet-alerts.vue"),
            },
            {
              path: "projects",
              name: "Projects2",
              children: [
                {
                  path: "projects-list",
                  component: () =>
                    import("../components/apps/projects/projects-list.vue"),
                },
                {
                  path: "project-overview",
                  component: () =>
                    import("../components/apps/projects/project-overview.vue"),
                },
                {
                  path: "create-project",
                  component: () =>
                    import("../components/apps/projects/create-project.vue"),
                },
              ]
            },
            {
              path: "jobs",
              name: "Jobs2",
              children: [
                {
                  path: "job-details",
                  component: () =>
                    import("../components/apps/jobs/job-details.vue"),
                },
                {
                  path: "search-company",
                  component: () =>
                    import("../components/apps/jobs/search-company.vue"),
                },
                {
                  path: "search-jobs",
                  component: () =>
                    import("../components/apps/jobs/search-jobs.vue"),
                },
                {
                  path: "job-post",
                  component: () =>
                    import("../components/apps/jobs/job-post.vue"),
                },
                {
                  path: "job-list",
                  component: () =>
                    import("../components/apps/jobs/job-list.vue"),
                },
                {
                  path: "search-candidate",
                  component: () =>
                    import("../components/apps/jobs/search-candidate.vue"),
                },
                {
                  path: "candidate-details",
                  component: () =>
                    import("../components/apps/jobs/candidate-details.vue"),
                },
              ]
            },
            {
              path: "nft",
              name: "NFT2",
              children: [
                {
                  path: "market-place",
                  component: () =>
                    import("../components/apps/nft/market-place.vue"),
                },
                {
                  path: "nft-details",
                  component: () =>
                    import("../components/apps/nft/nft-details.vue"),
                },
                {
                  path: "create-nft",
                  component: () =>
                    import("../components/apps/nft/create-nft.vue"),
                },
                {
                  path: "wallet-integration",
                  component: () =>
                    import("../components/apps/nft/wallet-integration.vue"),
                },
                {
                  path: "live-Auction",
                  component: () =>
                    import("../components/apps/nft/live-auction.vue"),
                },
              ]
            },
            {
              path: "crm",
              name: "CRM2",
              children: [
                {
                  path: "contacts",
                  component: () =>
                    import("../components/apps/crm/contacts.vue"),
                },
                {
                  path: "companies",
                  component: () =>
                    import("../components/apps/crm/companies.vue"),
                },
                {
                  path: "deals",
                  component: () =>
                    import("../components/apps/crm/deals.vue"),
                },
                {
                  path: "leads",
                  component: () =>
                    import("../components/apps/crm/leads.vue"),
                },
              ]
            },
            {
              path: "crypto",
              name: "Crypto2",
              children: [
                {
                  path: "transactions",
                  component: () =>
                    import("../components/apps/crypto/transactions.vue"),
                },
                {
                  path: "currency-exchange",
                  component: () =>
                    import("../components/apps/crypto/currency-exchange.vue"),
                },
                {
                  path: "buy-sell",
                  component: () =>
                    import("../components/apps/crypto/buy-sell.vue"),
                },
                {
                  path: "marketcap",
                  component: () =>
                    import("../components/apps/crypto/marketcap.vue"),
                },
                {
                  path: "wallet",
                  component: () =>
                    import("../components/apps/crypto/wallet.vue"),
                },
              ]
            },
          ]
        },
        //tables
        {
          path: `tables`,
          name: 'Tables',
          children: [
            {
              path: 'tables',
              name: "Table",
              component: () => import("../components/tables/tables.vue"),
            },
            {
              path: 'vuetifyjs',
              name: "Vuetify",
              component: () => import("../components/tables/vuetifyjs.vue"),
            },
            {
              path: 'data-tables',
              name: "Data-Tables",
              component: () => import("../components/tables/datatable/datatable.vue"),
            },
          ]
        },
        //charts
        {
          path: `charts`,
          name: 'Charts',
          children: [
            {
              path: "apex-charts",
              name: "Apex Charts",
              children: [
                {
                  path: "line",
                  component: () =>
                    import("../components/charts/apex-charts/line.vue"),
                },
                {
                  path: "area",
                  component: () =>
                    import("../components/charts/apex-charts/area.vue"),
                },
                {
                  path: "column",
                  component: () =>
                    import("../components/charts/apex-charts/column.vue"),
                },
                {
                  path: "bar",
                  component: () =>
                    import("../components/charts/apex-charts/bar.vue"),
                },
                {
                  path: "mixed",
                  component: () =>
                    import("../components/charts/apex-charts/mixed.vue"),
                },
                {
                  path: "rangearea",
                  component: () =>
                    import("../components/charts/apex-charts/rangearea.vue"),
                },
                {
                  path: "candlestick",
                  component: () =>
                    import("../components/charts/apex-charts/candlestick.vue"),
                },
                {
                  path: "boxplot",
                  component: () =>
                    import("../components/charts/apex-charts/boxplot.vue"),
                },
                {
                  path: "bubble",
                  component: () =>
                    import("../components/charts/apex-charts/bubble.vue"),
                },
                {
                  path: "scatter",
                  component: () =>
                    import("../components/charts/apex-charts/scatter.vue"),
                },
                {
                  path: "heatmap",
                  component: () =>
                    import("../components/charts/apex-charts/heatmap.vue"),
                },
                {
                  path: "treemap",
                  component: () =>
                    import("../components/charts/apex-charts/treemap.vue"),
                },
                {
                  path: "pie",
                  component: () =>
                    import("../components/charts/apex-charts/pie.vue"),
                },
                {
                  path: "radialbar",
                  component: () =>
                    import("../components/charts/apex-charts/radialbar.vue"),
                },
                {
                  path: "radar",
                  component: () =>
                    import("../components/charts/apex-charts/radar.vue"),
                },
                {
                  path: "polararea",
                  component: () =>
                    import("../components/charts/apex-charts/polararea.vue"),
                },
              ]
            },
            {
              path: 'chartjs',
              name: "ChartJs",
              component: () => import("../components/charts/chartjs.vue"),
            },
            {
              path: 'echarts',
              name: "Echarts",
              component: () => import("../components/charts/echarts.vue"),
            },
          ]
        },
        //maps
        {
          path: `maps`,
          name: 'Maps',
          children: [
            {
              path: 'google',
              name: "Google",
              component: () => import("../components/maps/google.vue"),
            },
            {
              path: 'leaflet',
              name: "Leaflet",
              component: () => import("../components/maps/leaflet.vue"),
            },
            {
              path: 'jsvector',
              name: "Jsvector",
              component: () => import("../components/maps/jsvector.vue"),
            },
          ]
        },
        //icons
        {
          path: 'icons',
          name: 'Icons',
          component: () => import("../components/icons.vue"),
        },
      ],
  },

  {
    path: `/pages`,
    component: Landingpage,
    children: [
      {
        path: "landing",
        name: "landingpage",
        component: () => import("../components/pages/landing.vue"),
      },
    ],
  },
  {
    path: `/pages`,
    component: Landingpage,
    children: [
      {
        path: 'jobs-landing',
        name: "Jobs Landing",
        component: () => import("../components/pages/jobs-landing.vue"),
      },
    ],
  },

  // Authentication
  {
    path: `/authentication`,
    component: Errorpagesinfo,
    children: [
      {
        path: "coming-soon",
        component: () => import("../components/authentication/coming-soon.vue"),
      },
      {
        path: "create-password",
        name: "Create Password",
        children: [
          {
            path: "basic",
            component: () =>
              import("../components/authentication/create-password/basic.vue"),
          },
          {
            path: "cover",
            component: () =>
              import("../components/authentication/create-password/cover.vue"),
          },
        ]
      },
      {
        path: "lock-screen",
        name: "Lock Screen",
        children: [
          {
            path: "basic",
            component: () =>
              import("../components/authentication/lock-screen/basic.vue"),
          },
          {
            path: "cover",
            component: () =>
              import("../components/authentication/lock-screen/cover.vue"),
          },
        ]
      },
      {
        path: "reset-password",
        name: "Reset Password",
        children: [
          {
            path: "basic",
            component: () =>
              import("../components/authentication/reset-password/basic.vue"),
          },
          {
            path: "cover",
            component: () =>
              import("../components/authentication/reset-password/cover.vue"),
          },
        ]
      },
      {
        path: "sign-up",
        name: "Sign Up",
        children: [
          {
            path: "basic",
            component: () =>
              import("../components/authentication/sign-up/basic.vue"),
          },
          {
            path: "cover",
            component: () =>
              import("../components/authentication/sign-up/cover.vue"),
          },
        ]
      },
      {
        path: "sign-in",
        name: "Sign in",
        children: [
          {
            path: "basic",
            component: () =>
              import("../components/authentication/sign-in/basic.vue"),
          },
          {
            path: "cover",
            component: () =>
              import("../components/authentication/sign-in/cover.vue"),
          },
        ]
      },
      {
        path: "two-step-verification",
        name: "Two Step Verification",
        children: [
          {
            path: "basic",
            component: () =>
              import("../components/authentication/two-step-verification/basic.vue"),
          },
          {
            path: "cover",
            component: () =>
              import("../components/authentication/two-step-verification/cover.vue"),
          },
        ]
      },
      {
        path: "under-maintenance",
        component: () => import("../components/authentication/under-maintenance.vue"),
      },
    ],
  },

  // earrorpage
  {
    path: `/error`,
    component: Errorpagesinfo,
    children: [
      {
        path: "error401",
        component: () => import("../components/error/error401.vue"),
      },
      {
        path: "error404",
        component: () => import("../components/error/error404.vue"),
      },
      {
        path: "error500",
        component: () => import("../components/error/error500.vue"),
      },
    ]
  }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

