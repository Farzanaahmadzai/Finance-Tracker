
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




const xValues = ["food", "rent", "home","transportation"];
        const yValues = [6000, 4800, 5500,888];
        const barColors = [
              // "#e8c3b9",
              // "#00aba9",
              // "#b91d47",
              "#004445",
              "#6FB98F",
              "#5C821A",
              "teal",
              
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
          text: "personal finance chart 2023"
        }
      }
    });