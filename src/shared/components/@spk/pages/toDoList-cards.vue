<script lang="js">
export default {
    props: {
        card: Object,
    }
}
</script>

<template>
    <div class="card custom-card" :class="card.color">
        <div class="card-body">
            <div class="d-flex justify-content-between flex-wrap gap-2">
                <div>
                    <p class="fw-semibold mb-3 d-flex align-items-center">
                        <a href="javascript:void(0);">
                            <i :class="`ri-star-s-fill fs-16 op-5 me-1 text-${card.iconColor}`"></i>
                        </a>{{ card.title }}
                    </p>
                    <p class="mb-3">Assigned On : <span class="fs-12 mb-1 text-muted">{{ card.assignedDate }}</span></p>
                    <p class="mb-3">Target Date : <span class="fs-12 mb-1 text-muted">{{ card.targetDate }}</span></p>
                    <p class="mb-0">Assigned To :
                        <span class="avatar-list-stacked ms-1">
                            <span class="avatar avatar-sm avatar-rounded"
                                v-for="(member, index) in card.assignedTo.slice(0, 4)" :key="index">
                                <img :src="member.img" alt="img" class="avatar-img">
                            </span>
                        </span>
                    </p>
                </div>
                <div>
                    <div class="btn-list">
                        <button class="btn btn-sm btn-icon btn-wave btn-primary-light me-2">
                            <i class="ri-edit-line"></i>
                        </button>
                        <button class="btn btn-sm btn-icon btn-wave btn-danger-light me-0">
                            <i class="ri-delete-bin-line"></i>
                        </button>
                    </div>
                    <span :class="`badge bg-${card.priorityColor}-transparent d-block`">{{ card.priority }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
