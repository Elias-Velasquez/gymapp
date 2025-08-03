export let
    ratingConfigs = [
        {
            colClass: "col-xxl-4 col-xl-6",
            title: "Basic Rater",
            description: "Show Some ❤️ with rating :",
            starOptions: {
                showRating: false,
                starSize: 30
            },
            rating: null,
        },
        {
            colClass: "col-xxl-4 col-xl-6",
            title: "5 star rater with steps",
            description: "Don't forget to rate the product :",
            starOptions: {
                increment: 0.5,
                showRating: false,
                starSize: 30
            },
            rating: null,
        },
        {
            colClass: "col-xxl-4 col-xl-6",
            title: "Custom messages",
            description: "Your rating is much appreciated👍 :",
            starOptions: {
                inline: true,
                showRating: false,
                starSize: 30,
                rating: 5
            },
            rating: 5,
        },
        {
            colClass: "col-xxl-6 col-xl-6",
            title: "Unlimited number of stars readOnly",
            description: "Thanks for rating :",
            starOptions: {
                maxRating: 10,
                showRating: true,
                starSize: 30,
            },
            rating: 6,
        },
        {
            colClass: "col-xxl-6 col-xl-6",
            title: "5 Star rater with custom isBusyText and simulated backend",
            description: "Thanks for rating :",
            starOptions: {
                showRating: false,
                starSize: 30
            },
            rating: null,
        },
        {
            colClass: "col-xxl-4 col-xl-6",
            title: "On hover event",
            description: "Please give your valuable rating :",
            starOptions: {
                textClass: 'live-rating badge bg-success-transparent ms-3',
                starSize: 30
            },
            rating: null,
        },
        {
            colClass: "col-xxl-4 col-xl-6",
            title: "Clear/reset rater",
            description: "Thank You so much for your support :",
            starOptions: {
                showRating: false,
                starSize: 30
            },
            rating: 0,
            resetable: true
        },
    ]