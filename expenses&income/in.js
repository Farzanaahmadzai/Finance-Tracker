
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


const xValues = ["salary", "bussnes", "sall",];
const yValues = [6000, 4800, 5500,9000];
const barColors = [
     
      "#004445",
      "#6FB98F",
      "#5C821A",
      "green",
      
];

new Chart("myChart", {
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
//   text: "personal finance chart 2023"
}
}
});

