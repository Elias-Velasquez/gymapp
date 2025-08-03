<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Helpers",
                list: ['Utilities', 'Helpers']
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12">
            <SimpleCardComponent title="Colors With backgrounds">
                <div class="text-bg-primary p-3">Primary with contrasting color</div>
                <div class="text-bg-secondary p-3">Secondary with contrasting color</div>
                <div class="text-bg-success p-3">Success with contrasting color</div>
                <div class="text-bg-danger p-3">Danger with contrasting color</div>
                <div class="text-bg-warning p-3">Warning with contrasting color</div>
                <div class="text-bg-info p-3">Info with contrasting color</div>
                <div class="text-bg-light p-3 text-default">Light with contrasting color</div>
                <div class="text-bg-dark p-3 text-white">Dark with contrasting color</div>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <SimpleCardComponent title="With Other Components">
                <h6 class="fw-semibold mb-3">Badges:</h6>
                <span class="badge text-bg-primary me-1">Primary</span>
                <span class="badge text-bg-info mb-4">Info</span>
                <h6 class="fw-semibold mb-3">cards:</h6>
                <div class="card text-bg-success mb-3 text-fixed-white" style="max-width: 18rem;">
                    <div class="card-header border-bottom-0">
                        <div class="card-title text-fixed-white">
                            Header
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <p class="card-text text-fixed-white">Some quick example text to build on the card title
                            and
                            make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card text-bg-danger mb-3 text-fixed-white" style="max-width: 18rem;">
                    <div class="card-header border-bottom-0">
                        <div class="card-title text-fixed-white">
                            Header
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <p class="card-text text-fixed-white">Some quick example text to build on the card title
                            and
                            make up the bulk of the card's content.</p>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <SimpleCardComponent title="Card With Stretched Links">
                <img class="bd-placeholder-img card-img-top card-img" src="/images/media/media-4.jpg" alt="...">
                <div class="card-body pb-0">
                    <h5 class="card-title">Card with stretched links</h5>
                    <p class="card-text">
                        <a href="javascript:void(0);" class="stretched-link text-danger"
                            style="position: relative;">Stretched link will not work
                            here,
                            because <code>position: relative</code> is added to the
                            link</a>
                    </p>
                    <p class="card-text bg-light mb-0 p-1 rounded" style="transform: rotate(0);">
                        This <a href="javascript:void(0);" class="text-warning stretched-link">stretched
                            link</a>
                        will only be spread over the <code>p</code>-tag, because a
                        transform is
                        applied to it.
                    </p>
                </div>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xxl-6 col-xl-12">
            <SimpleCardComponent title="Clearfix">
                <div class="bg-light clearfix">
                    <button type="button" class="btn btn-primary float-start m-1">Example Button
                        floated left</button>
                    <button type="button" class="btn btn-primary float-end m-1">Example Button
                        floated
                        right</button>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-6 col-xl-12">
            <SimpleCardComponent title="Colored links">
                <div class="d-flex justify-content-evenly flex-wrap">
                    <a href="javascript:void(0);" class="link-primary fw-semibold fs-15 p-1">Primary</a>
                    <a href="javascript:void(0);" class="link-secondary fw-semibold fs-15 p-1">Secondary</a>
                    <a href="javascript:void(0);" class="link-success fw-semibold fs-15 p-1">Success</a>
                    <a href="javascript:void(0);" class="link-danger fw-semibold fs-15 p-1">Danger</a>
                    <a href="javascript:void(0);" class="link-warning fw-semibold fs-15 p-1">Warning</a>
                    <a href="javascript:void(0);" class="link-info fw-semibold fs-15 p-1">Info</a>
                    <a href="javascript:void(0);" class="link-light fw-semibold fs-15 p-1">Light</a>
                    <a href="javascript:void(0);" class="link-dark fw-semibold fs-15 p-1">Dark</a>
                </div>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <SimpleCardComponent title="Ratio">
                <div class="ratio ratio-16x9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-lDlbQ7DiCI"
                        title="YouTube video player" style="border:0px"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Aspect ratios" cardClassBody="bd-example-ratios">
                        <div class="ratio ratio-1x1 me-1">
                            <div class="d-flex align-items-center justify-content-center ">1x1</div>
                        </div>
                        <div class="ratio ratio-4x3 me-1">
                            <div class="d-flex align-items-center justify-content-center ">4x3</div>
                        </div>
                        <div class="ratio ratio-16x9 me-1">
                            <div class="d-flex align-items-center justify-content-center">16x9</div>
                        </div>
                        <div class="ratio ratio-21x9">
                            <div class="d-flex align-items-center justify-content-center">21x9</div>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Custom ratios"
                        cardClassBody="bd-example-ratios bd-example-ratios-breakpoint">
                        <div class="ratio me-1" style="--bs-aspect-ratio: 50%;">
                            <div class="d-flex align-items-center justify-content-center">2x1</div>
                        </div>
                        <div class="ratio ratio-4x3">
                            <div class="d-flex align-items-center justify-content-center">4x3, then 2x1</div>
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>

        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-6">
            <SimpleCardComponent title="Vertical Stacking">
                <div class="vstack gap-3">
                    <div class="bg-light border p-1 px-2 rounded">First item</div>
                    <div class="bg-light border p-1 px-2 rounded">Second item</div>
                    <div class="bg-light border p-1 px-2 rounded">Third item</div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
            <SimpleCardComponent title="Horizontal Stacking">
                <div class="hstack gap-3 mb-3">
                    <div class="bg-light border p-1 px-2 rounded">First item</div>
                    <div class="bg-light border p-1 px-2 rounded">Second item</div>
                    <div class="bg-light border p-1 px-2 rounded">Third item</div>
                </div>
                <div class="hstack gap-3 mb-3">
                    <div class="bg-light border p-1 px-2 rounded">First item</div>
                    <div class="bg-light border ms-auto p-1 px-2 rounded">Second item</div>
                    <div class="bg-light border p-1 px-2 rounded">Third item</div>
                </div>
                <div class="hstack gap-3">
                    <div class="bg-light border p-1 px-2 rounded">First item</div>
                    <div class="bg-light border ms-auto p-1 px-2 rounded">Second item</div>
                    <div class="vr"></div>
                    <div class="bg-light border p-1 px-2 rounded">Third item</div>
                </div>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-4">
            <SimpleCardComponent title="Vstack For Buttons">
                <div class="vstack gap-2 col-md-5 mx-auto">
                    <button type="button" class="btn btn-primary">Save
                        changes</button>
                    <button type="button" class="btn btn-outline-primary">Cancel</button>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="Inline Form With Hstack">
                <div class="hstack gap-3">
                    <input class="form-control me-auto" type="text" placeholder="Add your item here..."
                        aria-label="Add your item here...">
                    <button type="button" class="btn btn-primary">Submit</button>
                    <div class="vr"></div>
                    <button type="button" class="btn btn-outline-danger">Reset</button>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="Text Truncation">
                <div class="row">
                    <div class="col-2 text-truncate">
                        This text is quite long, and will be truncated once displayed.
                    </div>
                </div>
                <!-- Inline level -->
                <span class="d-inline-block text-truncate" style="max-width: 150px;">
                    This text is quite long, and will be truncated once displayed.
                </span>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-5 -->

    <!-- Start:: row-6 -->
    <div class="row">
        <div class="col-xl-4">
            <SimpleCardComponent title="CUSTOM FOCUS RING">
                <router-link to="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                    Custom focus ring </router-link>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="CSS VARIABLE FOCUS RING">
                <router-link to="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                    Green focus ring </router-link>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="BLURRY OFFSET FOCUS RING" cardClassBody="">
                <router-link to="#!" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
                    Blurry offset focus ring </router-link>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
            <SimpleCardComponent title="FOCUS RING UTILITIES">
                <p><router-link to="#"
                        class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Primary
                        focus</router-link></p>
                <p><router-link to="#"
                        class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Secondary
                        focus</router-link></p>
                <p><router-link to="#"
                        class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Success
                        focus</router-link></p>
                <p><router-link to="#"
                        class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Danger
                        focus</router-link></p>
                <p><router-link to="#"
                        class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Warning
                        focus</router-link></p>
                <p><router-link to="#"
                        class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Info
                        focus</router-link></p>
                <p><router-link to="#"
                        class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Light
                        focus</router-link></p>
                <p><router-link to="#"
                        class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Dark
                        focus</router-link></p>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-3">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Icon Link">
                        <div class="d-flex gap-3 flex-column">
                            <router-link class="icon-link text-decoration-underline link-primary" to="#"> <i
                                    class="bi bi-house"></i> Icon link </router-link>
                            <router-link class="icon-link text-decoration-underline link-secondary" to="#"> Icon link <i
                                    class="bi bi-arrow-right"></i>
                            </router-link>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Icon Link ">
                        <div class="d-flex gap-3 flex-column">
                            <router-link class="icon-link text-decoration-underline icon-link-hover link-success"
                                to="#"> Icon link
                                <i class="bi bi-arrow-right"></i>
                            </router-link>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Scss Utilities">
                        <div class="d-flex gap-3 flex-column">
                            <router-link class="icon-link icon-link-hover link-info text-decoration-underline" to="#">
                                <i class="bi bi-journal"></i> Icon link
                            </router-link>
                            <router-link
                                class="icon-link icon-link-hover link-success text-decoration-underline link-underline-success link-underline-opacity-25"
                                to="#"> Icon link <i class="bi bi-arrow-right"></i>
                            </router-link>
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-6 -->
</template>

<style scoped></style>
