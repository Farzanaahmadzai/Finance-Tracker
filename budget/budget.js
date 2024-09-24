// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}


const xValues = ["Total budget", "Expenses", "Balance",];
const yValues = [6000, 4800, 5500,];
const barColors = [
      
      "#004445",
      "#6FB98F",
      "#5C821A",
      
];

new Chart("BudgetChart", {
type: "doughnut",
data: {
labels: xValues,
datasets: [{
  backgroundColor: barColors,
  data: yValues
}]
},
options: {
title: {
  display: true,
  text: "personal finance chart 2023"
}
}
});