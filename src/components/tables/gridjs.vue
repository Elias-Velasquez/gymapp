<script>
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import GridComponent from "../../data/gridjs-data/gridjs-basic.vue";
import pagination from "../../data/gridjs-data/gridjs-pagination .vue";
import Short from "../../data/gridjs-data/gridjs-short.vue";
import Loading from "../../data/gridjs-data/gridjs-loading.vue";
import Grid from "../../data/gridjs-data/gridjs-resizable.vue";

export default {
    components: {
        PageHeader,
        GridComponent,
        pagination,
        Short,
        Loading,
        Grid
    },
    data() {
        return {
            dataToPass: {
                current: "Grid Js",
                list: ['Tables', 'Grid Js']
            },
            columns: ['Date', 'Name', 'Email', 'ID', 'Price', 'Quantity', 'Total'],
            rows: [
                { date: "24-10-2022 12:47", name: "john", email: "john123@gmail.com", id: "#12012", price: "$1799", quantity: "1", total: "$1799" },
                { date: "12-09-2022 04:24", name: "mark", email: "markzenner23@gmail.com", id: "#12013", price: "$2479", quantity: "2", total: "$4958" },
                { date: "18-11-2022 18:43", name: "eoin", email: "eoin1992@gmail.com", id: "#12014", price: "$769", quantity: "1", total: "$769" },
                { date: "10-09-2022 10:35", name: "sarahcdd", email: "sarahcdd129@gmail.com", id: "#12015", price: "$1299", quantity: "3", total: "$3997" },
                { date: "27-10-2022 09:55", name: "afshin", email: "afshin@example.com", id: "#12016", price: "$1449", quantity: "1", total: "$1449" }
            ],
            searchQuery: '',
            filteredData: [],
        };
    },
    created() {
        this.filteredData = this.rows; // Initialize filteredData with all rows
    },
    methods: {
        filterData() {
            const query = this.searchQuery.toLowerCase();
            this.filteredData = this.rows.filter(row =>
                Object.values(row).some(cell => cell.toLowerCase().includes(query))
            );
        },
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Basic Table</div>
                </div>
                <div class="card-body">
                    <GridComponent :data="rows" :columns="columns" />
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Table With Pagination</div>
                </div>
                <div class="card-body">
                    <pagination :data="rows" :columns="columns" :pagination="{ limit: 4 }" />
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Table With Search</div>
                </div>
                <div class="card-body">
                    <div>
                        <input type="text" v-model="searchQuery" placeholder="Search..." @input="filterData" />
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Id</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in filteredData" :key="index">
                                    <td>{{ row.name }}</td>
                                    <td>{{ row.email }}</td>
                                    <td>{{ row.date }}</td>
                                    <td>{{ row.id }}</td>
                                    <td>{{ row.price }}</td>
                                    <td>{{ row.quantity }}</td>
                                    <td>{{ row.total }}</td>
                                </tr>
                                <tr v-if="filteredData.length === 0">
                                    <td colspan="7">No results found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Table Sorting</div>
                </div>
                <div class="card-body">
                    <Short />
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Table Loading</div>
                </div>
                <div class="card-body">
                    <Loading />
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Resizable Table</div>
                </div>
                <div class="card-body">
                    <Grid :columns="columns" :data="rows" :resizable="true" :sort="true" />
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

input {
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
}
</style>
