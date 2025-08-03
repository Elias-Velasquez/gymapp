import { computed, ref } from "vue";

export const data = ref([0, 10, 5, 2, 20, 30, 45]);

export const linedata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgb(132, 90, 223)',
            borderColor: 'rgb(132, 90, 223)',
            data: data.value,
            borderWidth: 2,
            fill: false,
        }
    ],
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(142, 156, 173,0.1)',
                },
            },
            x: {
                grid: {
                    color: 'rgba(142, 156, 173,0.1)',
                },
            }
        }
    }
};

export const bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ['rgba(132, 90, 223, 0.2)', 'rgba(35, 183, 229, 0.2)', 'rgba(245, 184, 73, 0.2)', 'rgba(73, 182, 245, 0.2)', 'rgba(230, 83, 60, 0.2)', 'rgba(38, 191, 148, 0.2)', 'rgba(35, 35, 35, 0.2)'],
            borderColor: ['rgb(132, 90, 223)', 'rgb(35, 183, 229)', 'rgb(245, 184, 73)', 'rgb(73, 182, 245)', 'rgb(230, 83, 60)', 'rgb(38, 191, 148)', 'rgb(35, 35, 35)'],
            borderWidth: 1
        },
    ],
};
export const singledata = {
    labels: ['Blue', 'secondary ', 'Yellow'],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(132, 90, 223)',
            'rgb(35, 183, 229)',
            'rgb(245, 184, 73)',
        ],
        hoverOffset: 4
    }]
};
export const singledata2 = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
            'rgb(132, 90, 223)',
            'rgb(75, 192, 192)',
            'rgb(245, 184, 73)',
            'rgb(201, 203, 207)',
            'rgb(35, 183, 229)'
        ]
    }]
};
export const radialdata = computed(() => ({
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(132, 90, 223, 0.2)',
            borderColor: 'rgb(132, 90, 223)',
            pointBackgroundColor: 'rgb(132, 90, 223)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(132, 90, 223)'
        },
        {
            label: 'My Second Dataset',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(35, 183, 229, 0.2)',
            borderColor: 'rgb(35, 183, 229)',
            pointBackgroundColor: 'rgb(35, 183, 229)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(35, 183, 229)'
        }
    ]
}));
export const Bubbledata = computed(() => ({
    datasets: [{
        label: 'First Dataset',
        data: [
            { x: 20, y: 30, r: 15 },
            { x: 40, y: 10, r: 10 },
        ],
        backgroundColor: 'rgb(132, 90, 223)',
    }]
}));
export const scatterdata = computed(() => ({
    datasets: [{
        label: 'Scatter Dataset',
        data: [
            { x: -10, y: 0 },
            { x: 0, y: 10 },
            { x: 10, y: 5 },
            { x: 0.5, y: 5.5 }
        ],
        backgroundColor: 'rgb(132, 90, 223)',
    }]
}));