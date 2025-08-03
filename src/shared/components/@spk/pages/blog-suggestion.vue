<script lang="js">
export default {
    props: {
        post: {
            type: Object,
            default: () => ({})
        },
        showIcon: { type: Boolean, default: false }
    }
}
</script>

<template>
    <div class="d-flex gap-3 flex-wrap align-items-center">
        <span :class="`avatar avatar-${post.size}`">
            <img :src="post.img" class="img-fluid" alt="...">
        </span>
        <div class="flex-fill">
            <a href="javascript:void(0);" class="fs-14 fw-semibold mb-0">{{ post.title }}</a>
            <p class="mb-1 popular-blog-content text-truncate">
                {{ post.description }}
            </p>
            <span class="text-muted fs-11" v-if="post.created_at">{{ post.created_at }}</span>
        </div>
        <div v-if="showIcon">
            <button class="btn btn-icon btn-light btn-sm rtl-rotate"><i class="ri-arrow-right-s-line"></i></button>
        </div>
    </div>
</template>

<style scoped></style>
