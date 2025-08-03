<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";
import media59 from '/images/media/media-59.jpg';

export default {
    components: {
        PageHeader,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Sweet Alerts",
                list: ['Apps', 'Sweet Alerts']
            },
        };
    },
    methods: {
        basicSwal() {
            Swal.fire('Hello Vue world!!!');
        },
        titleSwal() {
            Swal.fire('The Internet?', 'That thing is still around?', 'question');
        },
        footerSwal() {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
        },
        longContaneSwal() {
            Swal.fire({
                imageUrl: 'https://placeholder.pics/svg/300x1500',
                imageHeight: 1500,
                imageAlt: 'A tall image'
            });
        },
        customHTMLSwal() {
            Swal.fire({
                title: '<strong>HTML <u>example</u></strong>',
                icon: 'info',
                html:
                    'You can use <b>bold text</b>, ' +
                    '<a target="_blank" href="//sweetalert2.github.io">links</a> ' +
                    'and other HTML tags',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fe fe-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    '<i class="fe fe-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down'
            });
        },
        multipleButtonsSwal() {
            Swal.fire({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success');
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info');
                }
            });
        },
        customPositionedSwal() {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
        },
        customAlertSwal() {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        },
        alserWithParametersSwal() {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });

            swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error"
                    });
                }
            });
        },
        AlertImageSwal() {
            Swal.fire({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: media59,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
        },
        AutoCloseAlertSwal() {
            let timerInterval: any;
            Swal.fire({
                title: 'Auto close alert!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer()?.querySelector('b');
                    if (b) {
                        timerInterval = setInterval(() => {
                            const getTimerLeft = Swal.getTimerLeft();
                            b.textContent = (getTimerLeft !== undefined ? getTimerLeft : 0).toString();
                        }, 100);
                    }
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result: any) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                }
            });
        },
        ajaxRequestSwal() {
            Swal.fire({
                title: 'Submit your Github username',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Look up',
                showLoaderOnConfirm: true,
                preConfirm: (login: any) => {
                    return fetch(`//api.github.com/users/${login}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(response.statusText);
                            }
                            return response.json();
                        })
                        .catch(error => {
                            Swal.showValidationMessage(`Request failed: ${error}`);
                        });
                },
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result: any) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: `${result.value.login}'s avatar`,
                        imageUrl: result.value.avatar_url
                    });
                }
            });
        },
        bgWithImgSwal() {
            Swal.fire({
                title: "Custom width, padding, color, background.",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/templates/vue/ynex/preview/public/images/media/media-19.jpg)",
                backdrop: `
             rgba(0,0,123,0.4)
             left top
             no-repeat
           `
            });
        }
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-4">
            <SimpleCardComponent title="Basic Alert" cardClassBody="text-center">
                <button class="btn btn-primary" @click="basicSwal" id="basic-alert">Basic Alert</button>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="Title With Text Under" cardClassBody="text-center">
                <button class="btn btn-primary" @click="titleSwal" id="alert-text">Title With Text</button>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title=" With Text,Error Icon & Footer" cardClassBody="text-center">
                <button class="btn btn-primary" @click="footerSwal" id="alert-footer">Alert Footer</button>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-4">
            <SimpleCardComponent title="Alert With Long Window" cardClassBody="text-center">
                <button class="btn btn-primary" @click="longContaneSwal" id="long-window">Long Window Here</button>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="Custom HTML Description" cardClassBody="text-center">
                <button class="btn btn-primary" @click="customHTMLSwal" id="alert-description">Custom HTML
                    Alert</button>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="Alert With Multiple Buttons" cardClassBody="text-center">
                <button class="btn btn-primary" @click="multipleButtonsSwal" id="three-buttons">Multiple
                    Buttons</button>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-4">
            <SimpleCardComponent title="Custom Positioned Dialog Alert" cardClassBody="text-center">
                <button class="btn btn-primary" @click="customPositionedSwal" id="alert-dialog">Alert Dialog</button>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="Confirm Alert" cardClassBody="text-center">
                <button class="btn btn-primary" @click="customAlertSwal" id="alert-confirm">Confirm Alert</button>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="Alert With Parameters" cardClassBody="text-center">
                <button class="btn btn-primary" @click="alserWithParametersSwal" id="alert-parameter">Alert
                    Parameters</button>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-4">
            <SimpleCardComponent title="Alert With Image" cardClassBody="text-center">
                <button class="btn btn-primary" @click="AlertImageSwal" id="alert-image">Image Alert</button>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="Auto Close Alert" cardClassBody="text-center">
                <button class="btn btn-primary" @click="AutoCloseAlertSwal" id="alert-auto-close">Auto Close</button>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="Ajax Request Alert" cardClassBody="text-center">
                <button class="btn btn-primary" @click="ajaxRequestSwal" id="alert-ajax">Ajax Request</button>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-4">
            <SimpleCardComponent title="Alert With Bg Image" cardClassBody="text-center">
                <button class="btn btn-primary" @click="bgWithImgSwal" id="alert-image">Custom alert</button>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-5 -->
</template>

<style scoped></style>
