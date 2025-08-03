<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        avtarClass: String,
        imgSrc: String,
    }
}
</script>
<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <a href="javascript:void(0);">
                <div class="d-flex align-items-top mt-0 flex-wrap">
                    <div class="lh-1">
                        <span :class="avtarClass">
                            <img alt="avatar" :src="imgSrc">
                        </span>
                    </div>
                    <div class="flex-fill">
                        <div class="d-flex align-items-center">
                            <div class="mt-sm-0 mt-2">
                                <p :class="nameClass">{{ name }}</p>
                                <p :class="contentClass">{{ content }}
                                    <span class="badge bg-primary-transparent fw-semibold mx-1">
                                        files
                                    </span>
                                    and
                                    <span class="badge bg-primary-transparent fw-semibold mx-1">
                                        folders
                                    </span>
                                    were included
                                </p>
                                <span class="mb-0 d-block text-muted fs-12">12 mins ago</span>
                            </div>
                            <div class="ms-auto">
                                <span class="float-end badge bg-light text-muted">
                                    24,Oct 2022
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<style scoped></style>