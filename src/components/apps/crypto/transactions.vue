<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import { stackedTransactionChartOptions, stackedTransactionSeries } from '../../../data/apps/transaction';
import face7 from "/images/faces/7.jpg";
import face6 from "/images/faces/6.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face10 from "/images/faces/10.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face4 from "/images/faces/4.jpg";
import face16 from "/images/faces/16.jpg";
import Bitcoin from "/images/crypto-currencies/regular/Bitcoin.svg";
import Ethereum from "/images/crypto-currencies/regular/Ethereum.svg";
import Dash from "/images/crypto-currencies/regular/Dash.svg";
import Euro from "/images/crypto-currencies/regular/Euro.svg";
import litecoin from "/images/crypto-currencies/regular/litecoin.svg";
import Ripple from "/images/crypto-currencies/regular/Ripple.svg";
import Golem from "/images/crypto-currencies/regular/Golem.svg";
import Monero from "/images/crypto-currencies/regular/monero.svg";
import Zcash from "/images/crypto-currencies/regular/Zcash.svg";
import Decred from "/images/crypto-currencies/regular/Decred.svg";
import CountUp from 'vue-countup-v3';
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        CountUp,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Transactions",
                list: [
                    'Apps', 'Crypto', 'Transactions'
                ]
            },
            stackedTransactionSeries: stackedTransactionSeries,
            stackedTransactionChartOptions: stackedTransactionChartOptions,
            transactionsData: [
                { id: 1, arrowTextColor: "success", arrowDirection: "up", sendersrc: face10, senderName: "Json Taylor", transactionHash: "1242232401", coinSrc: Bitcoin, coinName: "Bitcoin", date: "24,Jul 2023 - 4:23PM", amount: "+0.041", amountColor: "success", receiver: "Texas Steel", statusBadgeText: "Success", statusBadgeColor: "success" },
                { id: 2, arrowTextColor: "danger", arrowDirection: "down", sendersrc: face5, senderName: "Samantha Taylor", transactionHash: "1242232402", coinSrc: Dash, coinName: "Dashcoin", date: "20,Jul 2023 - 12:47PM", amount: "-0.284", amountColor: "danger", receiver: "	Stuart Little", statusBadgeText: "Pending", statusBadgeColor: "warning" },
                { id: 3, arrowTextColor: "success", arrowDirection: "up", sendersrc: face12, senderName: "Brian Jhonson", transactionHash: "1242232403", coinSrc: Euro, coinName: "Euro", date: "14,Aug 2023 - 10:25AM", amount: "+0.943", amountColor: "success", receiver: "Melissa Smith", statusBadgeText: "Success", statusBadgeColor: "success" },
                { id: 4, arrowTextColor: "success", arrowDirection: "up", sendersrc: face15, senderName: "Liam Anderson", transactionHash: "1242232404", coinSrc: Ethereum, coinName: "Etherium", date: "10,Jul 2023 - 4:14PM", amount: "+0.582", amountColor: "success", receiver: "Alexander Clark", statusBadgeText: "Failed", statusBadgeColor: "danger" },
                { id: 5, arrowTextColor: "success", arrowDirection: "up", sendersrc: face4, senderName: "Isabella Brown", transactionHash: "1242232405", coinSrc: Golem, coinName: "Golem", date: "19,Aug 2023 - 11:35AM	", amount: "+0.290", amountColor: "success", receiver: "Elijah Davis", statusBadgeText: "Success", statusBadgeColor: "success" },
                { id: 6, arrowTextColor: "danger", arrowDirection: "down", sendersrc: face7, senderName: "Sophia Lee", transactionHash: "1242232406", coinSrc: litecoin, coinName: "Litecoin", date: "12,Jun 2023 - 2:45PM", amount: "-0.147", amountColor: "danger", receiver: "Harper Taylor	", statusBadgeText: "Success", statusBadgeColor: "success" },
                { id: 7, arrowTextColor: "success", arrowDirection: "up", sendersrc: face6, senderName: "Evelyn Clark", transactionHash: "1242232407", coinSrc: Ripple, coinName: "Ripple", date: "27,Jul 2023 - 10:18AM", amount: "+1.05", amountColor: "success", receiver: "William Brown", statusBadgeText: "Success", statusBadgeColor: "success" },
                { id: 8, arrowTextColor: "success", arrowDirection: "up", sendersrc: face11, senderName: "Liam Anderson", transactionHash: "1242232408", coinSrc: Monero, coinName: "Monero", date: "16,Aug 2023 - 9:25PM	", amount: "+0.625", amountColor: "success", receiver: "Amelia Davis", statusBadgeText: "Inprogress", statusBadgeColor: "info" },
                { id: 9, arrowTextColor: "danger", arrowDirection: "down", sendersrc: face2, senderName: "Harper Taylor", transactionHash: "1242232409", coinSrc: Zcash, coinName: "Zcash", date: "24,Jul 2023 - 12:47PM", amount: "-0.293", amountColor: "danger", receiver: "Benjamin Martinez	", statusBadgeText: "Inprogress", statusBadgeColor: "info" },
                { id: 10, arrowTextColor: "success", arrowDirection: "up", sendersrc: face16, senderName: "Lucas Taylor", transactionHash: "1242232410", coinSrc: Decred, coinName: "Decred", date: "24,Jul 2023 - 12:47PM", amount: "+0.893", amountColor: "success", receiver: "Mia Wilson", statusBadgeText: "Success", statusBadgeColor: "success" },
            ],

        };
    },
    methods: {
        deleteTransaction(index: number) {
            this.transactionsData.splice(index, 1);
        }
    },
};
</script>
<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-9">
            <SimpleCardComponent title="Transaction History" cardHeaderClass="justify-content-between"
                :showCardFooter="true">
                <template v-slot:showheader>
                    <div class="d-flex flex-wrap gap-2">
                        <div>
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label="Search">
                        </div>
                        <div class="dropdown">
                            <a href="#" class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">This Month</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">This Year</a></li>
                            </ul>
                        </div>
                        <div>
                            <button class="btn btn-secondary btn-sm btn-wave">View All</button>
                        </div>
                    </div>
                </template>
                <TableComponent :headers="['', 'Sender', 'Transaction Hash', 'Coin', 'Date', 'Amount', 'Receiver', 'Status', 'Actions']"
                    :rows="transactionsData" tableClass="table text-nowrap table-bordered" v-slot:cell="{ row }">
                    <td>
                        <span class="avatar avatar-sm avatar-rounded bg-light">
                            <i
                                :class="`ti ti-arrow-narrow-${row.arrowDirection} text-${row.arrowTextColor} fw-semibold fs-16`"></i>
                        </span>
                    </td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                            <span class="avatar avatar-xs avatar-rounded">
                                <img :src="(row.sendersrc)" alt="Sender Image">
                            </span>
                            <div class="fw-semibold">{{ row.senderName }}</div>
                        </div>
                    </td>
                    <td>
                        <span>#{{ row.transactionHash }}</span>
                    </td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                            <span class="avatar avatar-xs avatar-rounded">
                                <img :src="(row.coinSrc)" alt="Coin Image">
                            </span>
                            <div class="fw-semibold">{{ row.coinName }}</div>
                        </div>
                    </td>
                    <td>
                        <span>{{ row.date }}</span>
                    </td>
                    <td>
                        <span :class="`text-${row.amountColor}`">{{ row.amount }}</span>
                    </td>
                    <td>
                        <span>{{ row.receiver }}</span>
                    </td>
                    <td>
                        <span :class="`badge bg-${row.statusBadgeColor}-transparent`">{{ row.statusBadgeText }}</span>
                    </td>
                    <td>
                        <button class="btn btn-primary-light btn-icon btn-sm me-2" data-bs-toggle="tooltip"
                            data-bs-placement="top" data-bs-title="download">
                            <i class="ri-download-2-line"></i>
                        </button>
                        <button class="btn btn-danger-light btn-icon ms-1 btn-sm task-delete-btn"
                            data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete"
                            @click="deleteTransaction(index)">
                            <i class="ri-delete-bin-5-line"></i>
                        </button>
                    </td>
                </TableComponent>
                <template v-slot:cardFooter>
                    <nav aria-label="Page navigation">
                        <ul class="pagination mb-0 float-end">
                            <li class="page-item disabled">
                                <a class="page-link" href="#">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active" aria-current="page">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </template>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-body p-0">
                    <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-top flex-wrap gap-2">
                        <div class="svg-icon-background bg-primary-transparent me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                                class="svg-primary">
                                <path
                                    d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">New Transactions
                                <span class="badge bg-primary fw-semibold float-end">
                                    12,345
                                </span>
                            </h6>
                            <div class="pb-0 mt-0">
                                <div>
                                    <h4 class="fs-18 fw-semibold mb-2 ">
                                        <span class="text-muted float-end fs-11 fw-normal d-flex">Last Year</span>
                                        <count-up :end-val="43" class="" />
                                    </h4>
                                    <p class="text-muted fs-11 mb-0 lh-1">
                                        <span class="text-success me-1 fw-semibold">
                                            <i class="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                        </span>
                                        <span>this month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-top flex-wrap gap-2">
                        <div class="svg-icon-background bg-success-transparent me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svg-success">
                                <path
                                    d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">Completed Transactions
                                <span class="badge bg-success fw-semibold float-end">
                                    4,176
                                </span>
                            </h6>
                            <div>
                                <h4 class="fs-18 fw-semibold mb-2">
                                    <span class="text-muted float-end fs-11 fw-normal">Last Year</span>
                                    <count-up :end-val="320" />
                                </h4>
                                <p class="text-muted fs-11 mb-0 lh-1">
                                    <span class="text-danger me-1 fw-semibold">
                                        <i class="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                    </span>
                                    <span>this month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-top p-4 border-bottom border-block-end-dashed flex-wrap gap-2">
                        <div class="svg-icon-background bg-warning-transparent me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                                viewBox="0 0 24 24" class="svg-warning">
                                <path
                                    d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">Pending Transactions
                                <span class="badge bg-warning fw-semibold float-end">
                                    7,064
                                </span>
                            </h6>
                            <div>
                                <h4 class="fs-18 fw-semibold mb-2">
                                    <span class="text-muted float-end fs-11 fw-normal">Last Year</span>
                                    <count-up :end-val="81" />
                                </h4>
                                <p class="text-muted fs-11 mb-0 lh-1">
                                    <span class="text-success me-1 fw-semibold">
                                        <i class="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                    </span>
                                    <span>this month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-top p-4 border-bottom border-block-end-dashed flex-wrap gap-2">
                        <div class="svg-icon-background bg-secondary-transparent me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                                viewBox="0 0 24 24" class="svg-secondary">
                                <path
                                    d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                            </svg>
                        </div>
                        <div class="flex-fill">
                            <h6 class="mb-2 fs-12">Inprogress Transactions
                                <span class="badge bg-secondary fw-semibold float-end">
                                    1,105
                                </span>
                            </h6>
                            <div>
                                <h4 class="fs-18 fw-semibold mb-2">
                                    <span class="text-muted float-end fs-11 fw-normal">Last Year</span>
                                    <count-up :end-val="33" />
                                </h4>
                                <p class="text-muted fs-11 mb-0 lh-1">
                                    <span class="text-success me-1 fw-semibFold">
                                        <i class="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                    </span>
                                    <span>this month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 pb-2">
                        <p class="fs-15 fw-semibold">Transactions Statistics <span class="text-muted fw-normal">(Last 6
                                months) :</span></p>
                        <apexchart height="210" type="bar" :options="stackedTransactionChartOptions"
                            :series="stackedTransactionSeries">
                        </apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
