<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        coverSrcClass: String,
        showDropdown: { type: Boolean, default: false },
        card: Object,
        starIcon: String,
        cardFooterClass: String,
    }
}
</script>

<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="teammember-cover-image">
            <img :src="card.coverImg" :class="coverSrcClass" alt="Cover Image">
            <span class="avatar avatar-xl avatar-rounded">
                <img :src="card.src" alt="Avatar">
            </span>
            <a href="javascript:void(0);" :class="`team-member-star text-${card.color}`">
                <i :class="starIcon"></i>
            </a>
        </div>
        <div class="card-body" :class="cardBodyClass">
            <div
                class="d-flex flex-wrap align-items-center mt-sm-0 mt-5 justify-content-between border-bottom border-block-end-dashed p-3">
                <div class="team-member-details flex-fill">
                    <p class="mb-0 fw-semibold fs-16 text-truncate">
                        <a href="javascript:void(0);">{{ card.name }}</a>
                    </p>
                    <p class="mb-0 fs-12 text-muted text-break">{{ card.email }}</p>
                </div>
                <template v-if="showDropdown">
                    <div class="dropdown">
                        <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="ti ti-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Move To</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Edit</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Remove</a></li>
                        </ul>
                    </div>
                </template>
            </div>
            <div class="team-member-stats d-sm-flex justify-content-evenly">
                <div class="text-center p-3 my-auto">
                    <p class="fw-semibold mb-0">Member Since</p>
                    <span class="text-muted fs-12">{{ card.since }}</span>
                </div>
                <div class="text-center p-3 my-auto">
                    <p class="fw-semibold mb-0">Projects</p>
                    <span class="text-muted fs-12">{{ card.projects }}</span>
                </div>
                <div class="text-center p-3 my-auto">
                    <p class="fw-semibold mb-0">Position</p>
                    <span class="text-muted fs-12">{{ card.position }}</span>
                </div>
            </div>
        </div>
        <div class="card-footer" :class="cardFooterClass">
            <div class="btn-list">
                <button
                    :class="`btn btn-sm btn-icon btn-${details.iconColor}-light btn-wave waves-effect waves-light me-2`"
                    v-for="(details, key) in card.socialMedia" :key="key">
                    <i :class="`ri-${details.icon}-line fw-semibold`"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
