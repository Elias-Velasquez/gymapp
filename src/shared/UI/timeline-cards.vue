<script lang="js">
export default {
    props: { timelineTimeClass: String, dayClass: String, day: String, time: String, timeClass: String, timelineBody: String, dflexClass: String, avatarClass: String, imgSrc: String, nameClass: String, name: String, content: String, contentClass: String, dateClass: String, date: String,}
}
</script>
<template>
    <div :class="['timeline-time', timelineTimeClass]">
        <span :class="dayClass">{{ day }}</span>
        <span :class="timeClass">{{ time }}</span>
    </div>
    <div class="timeline-icon">
        <a href="javascript:void(0);"></a>
    </div>
    <div :class="['timeline-body', timelineBody]">
        <div :class="dflexClass">
            <div :class="avatarClass">
                <img alt="avatar" :src="imgSrc">
            </div>
            <div class="flex-fill">
                <div class="d-flex align-items-center">
                    <div class="mt-sm-0 mt-2">
                        <p :class="nameClass">{{ name }}</p>
                        <p :class="contentClass" v-html="content"></p>
                    </div>
                    <div class="ms-auto">
                        <span :class="dateClass">
                            {{ date }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>