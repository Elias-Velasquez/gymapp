<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import showcodeCard from "../../../shared/UI/showcodeCard.vue";
import * as prism from '../../../data/prismCode/forms/formeditor.js';

export default {
    components: {
        PageHeader, showcodeCard
    },
    data() {
        return {
            dataToPass: {
                current: "Quill Editor",
                list: [
                    'Forms', 'Form Editor', 'Quill Editor'
                ]
            },
            prism,
            customToolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["image", "code-block"]
            ],
            content: '<h4><strong>vue3-editor</strong> is a free, open source <a href="https://www.npmjs.com/package/vue3-editor" rel="noopener noreferrer" target="_blank">vue3-editor</a> built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</h4><p><br></p><ol><li>Write text select and edit with multiple options.</li><li>This is quill snow editor.</li><li>Easy to customize and flexible.</li></ol><p><br></p><h4>Vue3 officially supports a standard toolbar theme and a depends on quill.</h4><p><br></p>',
            content1: '<h4><strong>vue3-editor</strong> is a free, open source <a href="https://www.npmjs.com/package/vue3-editor" rel="noopener noreferrer" target="_blank">vue3-editor</a> built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.</h4><p><br></p><ol><li>Write text select and edit with multiple options.</li><li>This is quill snow editor.</li><li>Easy to customize and flexible.</li></ol><p><br></p><h4>Vue3 officially supports a standard toolbar theme and a depends on quill.</h4><p><br></p>'
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard :code="prism.defaultEditor" title="Default Editor">
                <vue-editor v-model="content"></vue-editor>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <showcodeCard :code="prism.customToolbar" title="Custom Toolbar">
                <vue-editor v-model="content1" :editorToolbar="customToolbar"></vue-editor>
            </showcodeCard>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped></style>
