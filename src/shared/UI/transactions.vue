<script lang="ts">
interface Transaction {
    arrowTextColor: string;
    statusBadgeColor: string;
    statusBadgeText: string;
    receiver: string;
    amountColor: string;
    amount: string;
    date: string;
    coinName: string;
    coinSrc: string;
    transactionHash: string;
    senderName: string;
    sendersrc: any;
    arrowDirection: string;
}

export default {
    props: {
        transactionsData: {
            type: Array as () => Transaction[],
            required: true
        }
    },
    data() {
        return {
            searchTerm: ''  // Initialize searchTerm
        };
    },
    computed: {
        filteredTransactions() {
            return this.transactionsData.filter(transaction => {
                const searchLower = this.searchTerm.toLowerCase();
                return (
                    transaction.senderName.toLowerCase().includes(searchLower) ||
                    transaction.receiver.toLowerCase().includes(searchLower) ||
                    transaction.transactionHash.toLowerCase().includes(searchLower) ||
                    transaction.coinName.toLowerCase().includes(searchLower) ||
                    transaction.date.toLowerCase().includes(searchLower) ||
                    transaction.amount.toLowerCase().includes(searchLower)
                );
            });
        }
    },
    methods: {
        deleteTransaction(index: number) {
            this.transactionsData.splice(index, 1);
        }
    }
}
</script>

<template>

</template>

<style scoped></style>
