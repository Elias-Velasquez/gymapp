<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import Datepicker from 'vue3-datepicker'
import { startOfQuarter } from "date-fns";
import { ref } from 'vue';
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        Datepicker,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Date & Time Pickers",
                list: ['Forms', 'Form Elements', 'Date & Time Pickers']
            },
        }
    },
    setup() {
        const picked = ref(new Date());
        const picked2 = ref(new Date());
        const lowerpicked = new Date(picked2.value);
        const picked3 = ref(new Date());
        const picked4 = ref(new Date());
        const date = ref();
        const date1 = ref();

        const quarter = ref(startOfQuarter(new Date()));
        // Get the day of the month
        const currentDay = picked.value.getDate();

        const time = ref({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        })
        const month = ref({
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        });
        // Calculate the date of the next 5th day
        const picked1 = new Date(picked.value);
        picked1.setDate(currentDay + 5);
        lowerpicked.setDate(currentDay - 5);
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        date.value = [startDate, endDate];
        date1.value = [startDate, endDate];


        const weekPicker = ref();
        const inlinedate = ref(new Date());

        return { lowerpicked, picked, picked1, picked2, picked3, picked4, date, date1, time, month, quarter, weekPicker, inlinedate }
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="Basic Date picker">
                <div class="form-group">
                    <div class="input-group flex-nowrap v3dp__datepicker-custom">
                        <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                        <Datepicker class="form-control" placeholder="Choose date" v-model="picked" />
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="Lower Limit Date">
                <div class="form-group">
                    <div class="input-group flex-nowrap v3dp__datepicker-custom">
                        <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                        <Datepicker class="form-control" placeholder="Choose date" :lowerLimit="picked"
                            v-model="picked2" />
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="Upper Limit picker">
                <div class="form-group">
                    <div class="input-group flex-nowrap v3dp__datepicker-custom">
                        <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                        <Datepicker class="form-control" placeholder="Choose date" :upperLimit="picked1"
                            v-model="picked3" />
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="input Format dates">
                <div class="form-group">
                    <div class="input-group flex-nowrap v3dp__datepicker-custom">
                        <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                        <Datepicker class="form-control" placeholder="Choose date" v-model="picked4"
                            inputFormat="dd-MM-yyyy" />
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="Basic Date and Time picker">
                <div class="form-group">
                    <div class="input-group">
                        <Datepicker1 placeholder="Date Time" class="datepicker-here" autoApply v-model="picked"
                            time-picker-inline>
                            <template #input-icon>
                                <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                            </template>
                        </Datepicker1>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="Range Picker">
                <div class="form-group">
                    <div class="input-group">
                        <Datepicker1 placeholder="Date Time" class="datepicker-here" v-model="date" range>
                            <template #input-icon>
                                <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                            </template>
                        </Datepicker1>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="Time Picker">
                <div class="form-group">
                    <div class="input-group">
                        <Datepicker1 placeholder="Date Time" class="datepicker-here" time-picker v-model="time">
                        </Datepicker1>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="Month Picker">
                <div class="form-group">
                    <div class="input-group">
                        <Datepicker1 placeholder="Date Time" class="datepicker-here" v-model="month" month-picker>
                        </Datepicker1>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Week Picker">
                        <div class="form-group mb-0">
                            <div class="input-group">
                                <Datepicker1 placeholder="Date Time" class="datepicker-here" v-model="weekPicker"
                                    week-picker></Datepicker1>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Quarter Picker">
                        <div class="form-group mb-0">
                            <Datepicker1 v-model="quarter" quarter-picker />
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title=" Multi Calendars">
                        <div class="form-group mb-0">
                            <div class="input-group">
                                <Datepicker1 v-model="date1" range multi-calendars />
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <SimpleCardComponent title="Inline Calendar">
                <div class="form-group overflow-auto">
                    <Datepicker1 class="datepicker-here" inline autoApply v-model="inlinedate"></Datepicker1>
                </div>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-3 -->
</template>

<style scoped></style>
