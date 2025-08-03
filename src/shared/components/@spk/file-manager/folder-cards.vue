<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        card: {
            type: Object,
            required: true,
        },
        showDropdown: { type: Boolean, default: false },
        title: String
    }
}
</script>

<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <div class="mb-4 folder-svg-container d-flex flex-wrap justify-content-between align-items-top">
                <div v-html="card.icon"></div>
                <template v-if="showDropdown">
                    <div>
                        <div class="dropdown">
                            <button
                                :class="`btn btn-sm btn-icon btn-${card.color1} btn-wave waves-light waves-effect waves-light`"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="ri-more-2-fill"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Delete</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Rename</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Hide Folder</a></li>
                            </ul>
                        </div>
                    </div>
                </template>
            </div>
            <p class="fs-14 fw-semibold mb-1 lh-1">
                <a href="javascript:void(0);">{{ card.name }}</a>
            </p>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div><span class="text-muted fs-12">{{ card.files }}</span></div>
                <div><span class="text-default fw-semibold"> {{ card.size }}</span></div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>