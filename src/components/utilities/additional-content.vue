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
                current: "Additional Content",
                list: ['Utilities', 'Additional Content']
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-4">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Display Inline:">
                        <div class="d-inline p-2 bg-primary text-fixed-white rounded m-1">d-inline</div>
                        <div class="d-inline p-2 bg-primary-transparent text-primary rounded m-1">d-inline</div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="D-block">
                        <span class="d-block p-2 bg-secondary-transparent mb-1 rounded">d-block</span>
                        <span class="d-block p-2 bg-primary-transparent mb-1 rounded">d-block</span>
                        <span class="d-block p-2 bg-success-transparent mb-1 rounded">d-block</span>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Float">
                        <div class="float-start p-2 bg-primary rounded text-fixed-white mb-2">Float start</div><br>
                        <div class="float-end p-2 bg-primary rounded text-fixed-white">Float end</div><br>
                        <div class="float-none p-2 bg-primary rounded text-fixed-white mt-4">Don't float</div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Float Responsive">
                        <div class="float-sm-start p-1 bg-light">Float sm
                        </div>
                        <br>
                        <div class="float-md-end p-1 bg-light">Float md
                        </div>
                        <br>
                        <div class="float-lg-start p-1 bg-light">Float lg
                        </div>
                        <br>
                        <div class="float-xl-end p-1 bg-light">Float xl
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Text selection">
                        <p class="user-select-all">This paragraph will be entirely selected when clicked
                            by
                            the user.
                        </p>
                        <p class="user-select-auto">This paragraph has default select behavior.</p>
                        <p class="user-select-none mb-0">This paragraph will not be selectable when clicked
                            by
                            the user.
                        </p>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Pointer events">
                        <p><a href="javascript:void(0);" class="pe-none" tabindex="-1" aria-disabled="true"><code
                                    class="text-primary fw-semibold">This link</code></a>
                            can
                            not be clicked.
                        </p>
                        <p><a href="javascript:void(0);" class="pe-auto"><code
                                    class="text-primary fw-semibold">This link</code></a> can be clicked (this is
                            default
                            behavior).
                        </p>
                        <p class="pe-none mb-0"><a href="javascript:void(0);" tabindex="-1" aria-disabled="true"><code
                                    class="text-primary fw-semibold">This link</code></a>
                            can
                            not be clicked because the <code class="text-primary fw-semibold">pointer-events</code>
                            property is inherited
                            from its parent. However, <a href="javascript:void(0);" class="pe-auto text-primary">this
                                link</a> has a
                            <code>pe-auto</code> class and can be clicked.
                        </p>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Gap">
                        <div class="d-grid gap-3">
                            <div class="p-2 bg-light border">Grid item 1</div>
                            <div class="p-2 bg-light border">Grid item 2</div>
                            <div class="p-2 bg-light border">Grid item 3</div>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Overflow" cardClassBody="d-md-flex">
                        <div class="overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-light"
                            style="max-width: 260px; max-height: 100px;">
                            This is an example of using <code>.overflow-auto</code> on an element with
                            set width and height dimensions. By design, this content will vertically
                            scroll.
                        </div>
                        <div class="overflow-hidden p-3 mb-3 mb-md-0 me-md-3 bg-light"
                            style="max-width: 260px; max-height: 100px;">
                            This is an example of using <code>.overflow-hidden</code> on an element with
                            set width and height dimensions.
                        </div>
                        <div class="overflow-visible p-3 mb-3 mb-md-0 me-md-3 bg-light"
                            style="max-width: 260px; max-height: 100px;">
                            This is an example of using <code>.overflow-visible</code> on an element
                            with set width and height dimensions.
                        </div>
                        <div class="overflow-scroll p-3 bg-light" style="max-width: 260px; max-height: 100px;">
                            This is an example of using <code>.overflow-scroll</code> on an element with
                            set width and height dimensions.
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <SimpleCardComponent title="Examples">
                <div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
                <div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
                <div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
                <div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Vertical alignment With table cells">
                        <table style="height: 100px;">
                            <tbody>
                                <tr>
                                    <td class="align-baseline">baseline</td>
                                    <td class="align-top">top</td>
                                    <td class="align-middle">middle</td>
                                    <td class="align-bottom">bottom</td>
                                    <td class="align-text-top">text-top</td>
                                    <td class="align-text-bottom">text-bottom</td>
                                </tr>
                            </tbody>
                        </table>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Vertical alignment With inline elements">
                        <span class="align-baseline me-1">baseline</span>
                        <span class="align-top me-1">top</span>
                        <span class="align-middle me-1">middle</span>
                        <span class="align-bottom me-1">bottom</span>
                        <span class="align-text-top me-1">text-top</span>
                        <span class="align-text-bottom">text-bottom</span>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Opacity" cardClassBody="d-sm-flex">
                        <div class="opacity-100 p-3 m-2 bg-primary text-fixed-white fw-bold rounded">100%</div>
                        <div class="opacity-75 p-3 m-2 bg-primary text-fixed-white fw-bold rounded">75%</div>
                        <div class="opacity-50 p-3 m-2 bg-primary text-fixed-white fw-bold rounded">50%</div>
                        <div class="opacity-25 p-3 m-2 bg-primary text-fixed-white fw-bold rounded">25%</div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Horizontal centering">
                        <div class="mx-auto"
                            style="width: 200px; padding: 10px; border-radius: 4px; background-color: rgba(86,61,124,.15);">
                            Centered element
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
            <SimpleCardComponent title="Relative to the parent">
                <div class="mb-5">
                    <div class="w-25 p-3 bg-light">Width 25%</div>
                    <div class="w-50 p-3 bg-light">Width 50%</div>
                    <div class="w-75 p-3 bg-light">Width 75%</div>
                    <div class="w-100 p-3 bg-light">Width 100%</div>
                    <div class="w-auto p-3 bg-light">Width auto</div>
                </div>
                <div style="height: 100px; background-color: rgba(255,0,0,0.1);" class="d-flex">
                    <div class="h-25 d-inline-block"
                        style="width: 120px; background-color: rgba(0,0,255,.1);padding-inline:8px;">H 25%
                    </div>
                    <div class="h-50 d-inline-block"
                        style="width: 120px; background-color: rgba(0,0,255,.1);padding:8px;">H 50%
                    </div>
                    <div class="h-75 d-inline-block"
                        style="width: 120px; background-color: rgba(0,0,255,.1);padding:8px;">H 75%
                    </div>
                    <div class="h-100 d-inline-block"
                        style="width: 120px; background-color: rgba(0,0,255,.1);padding:8px;">H 100%
                    </div>
                    <div class="h-auto d-inline-block"
                        style="width: 120px; background-color: rgba(0,0,255,.1);padding:8px;">H auto
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
            <SimpleCardComponent
                :title="`You can also use <span class='text-danger'> max-width: 100%;</span> and <span class='text-danger'>max-height: 100%;</span> utilities as needed.`">
                <img class="bd-placeholder-img mw-100 card-img" src="/images/media/media-7.jpg" alt="...">
                <div style="height: 100px; background-color: rgba(255,0,0,.1);" class="mt-3">
                    <div class="mh-100"
                        style="width: 100px; height: 200px; background-color: rgba(0,0,255,.1); padding:10px;">
                        Max-height 100%
                    </div>
                </div>
            </SimpleCardComponent>

        </div>
    </div>
    <!-- End:: row-4 -->
</template>

<style scoped></style>
