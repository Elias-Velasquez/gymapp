export let
    alerts1 = [
        {
            type: 'primary',
            title: 'Information?',
            message: 'This alert is created to just show the related information.',
            iconPath: `<svg class="custom-alert-icon svg-primary" xmlns="http://www.w3.org/2000/svg"
                            height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>`,
            buttons: [
                { text: 'Decline', class: 'btn-outline-danger' },
                { text: 'Accept', class: 'btn-primary' }
            ]
        },
        {
            type: 'secondary',
            title: 'Confirmed',
            message: 'This alert is created to just show the confirmation message.',
            iconPath: ` <svg class="custom-alert-icon svg-secondary" xmlns="http://www.w3.org/2000/svg"
                            height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>`,
            buttons: [
                { text: 'Close', class: 'btn-secondary' }
            ]
        },
        {
            type: 'warning',
            title: 'Warning',
            message: 'This alert is created to just show the warning message.',
            iconPath: `<svg class="custom-alert-icon svg-warning" xmlns="http://www.w3.org/2000/svg"
                            height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                        </svg>`,
            buttons: [
                { text: 'Back', class: 'btn-outline-secondary' },
                { text: 'Continue', class: 'btn-warning' }
            ]
        },
        {
            type: 'danger',
            title: 'Danger',
            message: 'This alert is created to just show the danger message.',
            iconPath: `<svg class="custom-alert-icon svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                            viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
                        </svg>`,
            buttons: [
                { text: 'Delete', class: 'btn-danger' }
            ]
        }
    ],
    InformationAlert = [
        {
            type: 'primary',
            title: 'Information Alert',
            message: 'Information alert to show to information.',
            iconPath: `<svg class="flex-shrink-0 svg-primary" xmlns="http://www.w3.org/2000/svg"
                            height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>`,
            buttons: {
                cancel: { text: 'cancel' },
                open: { text: 'open' }
            }
        },
        {
            type: 'secondary',
            title: 'Success Alert',
            message: 'Success alert to show to success message.',
            iconPath: ` <svg class="flex-shrink-0 svg-secondary" xmlns="http://www.w3.org/2000/svg"
                            height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>`,
            buttons: {
                cancel: { text: 'cancel' },
                open: { text: 'open' }
            }
        },
        {
            type: 'warning',
            title: 'Warning Alert',
            message: 'Warning alert to show warning message.',
            iconPath: `<svg class="flex-shrink-0 svg-warning" xmlns="http://www.w3.org/2000/svg"
                                enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"
                                fill="#000000">
                                <g>
                                    <rect fill="none" height="24" width="24" />
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                            <polygon points="13,16 11,16 11,18 13,18" />
                                            <polygon points="13,10 11,10 11,15 13,15" />
                                        </g>
                                    </g>
                                </g>
                        </svg>`,
            buttons: {
                cancel: { text: 'cancel' },
                open: { text: 'open' }
            }
        },
        {
            type: 'danger',
            title: 'Danger Alert',
            message: 'Danger alert to show the danger message.',
            iconPath: ` <svg class="flex-shrink-0 svg-danger" xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"
                            fill="#000000">
                            <g>
                                <rect fill="none" height="24" width="24" />
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                        <rect height="6" width="2" x="11" y="7" />
                                        <rect height="2" width="2" x="11" y="15" />
                                    </g>
                                </g>
                            </g>
                        </svg>`,
            buttons: {
                cancel: { text: 'cancel' },
                open: { text: 'open' }
            }
        }
    ],
    InformationAlerts = [
        {
            type: "primary",
            title: "Information Alert",
            message: "Information alert to show to information",
            iconPath: `<svg class="flex-shrink-0 svg-light" xmlns="http://www.w3.org/2000/svg"
                            height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>`,
            cancelText: "cancel",
            actionText: "open"
        },
        {
            type: "secondary",
            title: "Success Alert",
            message: "Success alert to show to success message",
            iconPath: ` <svg class="flex-shrink-0 svg-light" xmlns="http://www.w3.org/2000/svg"
                            height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                            <path
                                d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>`,
            cancelText: "close",
            actionText: ""
        },
        {
            type: "warning",
            title: "Warning Alert",
            message: "Warning alert to show to warning message",
            iconPath: `<svg class="flex-shrink-0 svg-light" xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"
            fill="#000000">
            <g>
                <rect fill="none" height="24" width="24" />
            </g>
            <g>
                <g>
                    <g>
                        <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                        <polygon points="13,16 11,16 11,18 13,18" />
                        <polygon points="13,10 11,10 11,15 13,15" />
                    </g>
                </g>
            </g>
        </svg>`,
            cancelText: "skip",
            actionText: "open"
        },
        {
            type: "danger",
            title: "Danger Alert",
            message: "Danger alert to show to danger message",
            iconPath: ` <svg class="flex-shrink-0 svg-light" xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"
                            fill="#000000">
                            <g>
                                <rect fill="none" height="24" width="24" />
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                        <rect height="6" width="2" x="11" y="7" />
                                        <rect height="2" width="2" x="11" y="15" />
                                    </g>
                                </g>
                            </g>
                        </svg>`,
            cancelText: "close",
            actionText: "continue"
        }
    ]