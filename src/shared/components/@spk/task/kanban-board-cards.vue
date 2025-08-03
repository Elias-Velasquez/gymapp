<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        kanbanHeadClass: String,
        card: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <div :class="['card custom-card', customCardClass]">
        <div :class="['card-body', cardBodyClass]">
            <div :class="kanbanHeadClass">
                <div class="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                    <div>
                        <i :class="card.icon"></i>{{ card.creat }}
                    </div>
                    <div :class="card.iconTextClass" v-html="card.daysLeft"></div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <div class="task-badges">
                        <span v-for="card, index in card.badge" :key="index" :class="card.badgeClass">{{ card.badgeText
                            }}</span>
                    </div>
                    <div class="dropdown">
                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <ul :class="['dropdown-menu dropdown-menu-end']">
                            <li v-for="(card, index) in card.dropdown" :key="index">
                                <a class="dropdown-item" href="javascript:void(0);">
                                    <i :class="card.iconClass"></i>{{ card.dropdownText }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="kanban-content mt-2">
                    <template v-if="card.showImg">
                        <div class="task-image mt-2">
                            <img :src="card.imgSrc" class="img-fluid rounded kanban-image bg-light" alt="">
                        </div>
                    </template>
                    <h6 class="fw-semibold mb-0 mt-2">{{ card.title }}</h6>
                    <div class="kanban-task-description">{{ card.content }}</div>
                </div>
            </div>
            <div class="p-3 border-top border-block-start-dashed">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <a href="javascript:void(0);" v-for="(card, index) in card.comments" :key="index"
                            :class="card.commentTextColor">
                            <span :class="card.spanClass"> <i :class="card.iconClass"></i> </span>
                            <span :class="card.countClass">{{ card.count }}</span>
                        </a>
                    </div>
                    <div class="avatar-list-stacked">
                        <span v-for="(card, index) in card.avatars" :key="index" class="avatar avatar-sm avatar-rounded">
                            <img :src="card.img" alt="img">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>