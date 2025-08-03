<script lang="ts">
import PageHeader from "../shared/components/pageheader/pageheader.vue";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import * as iconData from "../data/icon";
import SimpleCardComponent from "../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        SimpleCardComponent
    },
    mounted() {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new bootstrap.Tooltip(tooltipTriggerEl, {
                animation: true,
                trigger: 'hover'
            });
        });
    },
    data() {
        return {
            dataToPass: {
                current: "Icons",
                list: ['Icons', 'Icons']
            },
            iconData: iconData,
            selectedDay: "Mon",
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <div class="row">
        <div class="col-xl-12">
            <SimpleCardComponent title="Bootstrap Icons">
                <p class="mb-1">
                    Simply beautiful open source icons. For more info
                    <a href="https://icons.getbootstrap.com/" target="_blank" class="text-primary">click here</a>.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    <li class="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top"
                        :title="`bi bi-${card.icon}`" v-for="card in iconData.BootstrapIcons" :key="card.id">
                        <i :class="`bi bi-${card.icon}`"></i>
                    </li>
                </ul>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-12">
            <SimpleCardComponent title="Remix Icons">
                <p class="mb-1">Simply beautiful open source icons. For more info
                    <a href="https://remixicon.com/" target="_blank" class="text-primary">click here</a>.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="ri-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    <li class="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top"
                        :title="`ri-${card.icon}`" v-for="card in iconData.RemixIcons" :key="card.id">
                        <i :class="`ri-${card.icon}`"></i>
                    </li>
                </ul>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-12">
            <SimpleCardComponent title="Feather Icons">
                <p class="mb-1">Simply beautiful open source icons. For more info
                    <a href="https://feathericons.com/" target="_blank" class="text-primary">click here</a>.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    <li class="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top"
                        :title="`fe fe-${card.icon}`" v-for="card in iconData.FeatherIcons" :key="card.id">
                        <i :class="`fe fe-${card.icon}`"></i>
                    </li>
                </ul>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-12">
            <SimpleCardComponent title="Tabler Icons">
                <p class="mb-1">Simply beautiful open source icons. For more info
                    <a href="https://tabler-icons.io/" target="_blank" class="text-primary">click here</a>.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="ti ti-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    <li class="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top"
                        :title="`ti ti-${card.icon}`" v-for="card in iconData.TablerIcons" :key="card.id">
                        <i :class="`ti ti-${card.icon}`"></i>
                    </li>
                </ul>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-12">
            <SimpleCardComponent title="Line Awesome Icons">
                <p class="mb-1">Simply beautiful open source icons. For more info
                    <a href="https://icons8.com/line-awesome" target="_blank" class="text-primary">click here</a>.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="las la-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    <li class="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top"
                        :title="`las la-${card.icon}`" v-for="card in iconData.LineAwesomeIcons" :key="card.id">
                        <i :class="`las la-${card.icon}`"></i>
                    </li>
                </ul>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-12">
            <SimpleCardComponent title="Boxicons">
                <p class="mb-1">Simply beautiful open source icons. For more info
                    <a href="https://boxicons.com/" target="_blank" class="text-primary">click here</a>.
                </p>
                <p class="mb-4">
                    <code>&lt;i class="bx bx-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
                <ul class="icons-list list-unstyled">
                    <li class="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top"
                        :title="`bx bx-${card.icon}`" v-for="card in iconData.Boxicons" :key="card.id">
                        <i :class="`bx bx-${card.icon}`"></i>
                    </li>
                </ul>
            </SimpleCardComponent>
        </div>
    </div>
</template>

<style scoped></style>
