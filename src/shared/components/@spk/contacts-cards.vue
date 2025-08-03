<script lang="js">
export default {
    props: {
        customCardClass: {
            type: String,
            default: ''
        },
        cardBodyClass: {
            type: String,
            default: ''
        },
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <div class="contact-overlay"></div>
            <div class="d-flex align-items-top">
                <div class="d-flex flex-fill flex-wrap gap-3">
                    <!-- Conditionally render the img tag -->
                    <div class="avatar avatar-xl avatar-rounded" v-if="card.imageSrc">
                        <img :src="card.imageSrc" alt="Contact Avatar" />
                    </div>
                    <!-- Fallback content if no image is available -->
                    <div class="avatar avatar-xl avatar-rounded bg-primary" v-else>
                        {{ card.content }}
                    </div>
                    <div>
                        <h6 class="mb-1 fw-semibold">{{ card.name }}</h6>
                        <p class="mb-1 text-muted contact-mail text-truncate">{{ card.email }}</p>
                        <p class="fw-semibold fs-11 mb-0 text-primary">{{ card.phone }}</p>
                    </div>
                </div>
                <div>
                    <i :class="`ri-heart-3-${card.heartIcon} fs-16 text-${card.isFavorite}`"></i>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                <button type="button" class="btn btn-sm btn-light contact-hover-btn">View Contact</button>
                <div class="dropdown contact-hover-dropdown">
                    <button class="btn btn-sm btn-icon btn-light btn-wave" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);"><i
                                    class="ri-share-line me-2 align-middle d-inline-block"></i>Share</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i
                                    class="ri-phone-line me-2 align-middle d-inline-block"></i>Call</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i
                                    class="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i
                                    class="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i
                                    class="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);"><i
                                    class="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</a></li>
                    </ul>
                </div>
                <button aria-label="button" class="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                    <i class="ri-heart-3-fill text-danger"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
