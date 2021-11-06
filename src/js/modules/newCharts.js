import Chart from "chart.js/auto";

const ctx = document.getElementById('newPie');

function chartIt(data) {
    const chart = new Chart(ctx, data);
}

export default chartIt;