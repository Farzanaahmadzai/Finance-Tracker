// charts.js



const xValues = [ " Toal income","Total expenses", "Total Balance",];
        const yValues = [6000, 3000, 5500,];
        const barColors = [
             
              "#004445",
              "brown",
              "#5C821A",
              
        ];
    
       new Chart("income-balance-expenseTotalChart", {
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
          // text: "personal finance chart 2023"
        }
      }
    });



    /********************** */
    const transactionChartXValues = ["income", "expenses", "ncome", "expenses", "income"];
const transactionChartYValues = [55, 49, 44, 24, 15];
const transactionChartColors = ["teal", "brown","teal", "brown","teal",];

new Chart("transactionChart", {
  type: "bar",
  data: {
    labels: transactionChartXValues,
    datasets: [{
      backgroundColor: transactionChartColors,
      data: transactionChartYValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Transection"
    }
  }
});

const budgetXValues = ["Total budget", "Expenses", "Balance",];
const budgetYValues = [6000, 4800, 5500,];
const budgetBgColors = [
      
      "#004445",
      "#6FB98F",
      "#5C821A",
      
];

new Chart("BudgetChart", {
type: "doughnut",
data: {
labels: budgetXValues,
datasets: [{
  backgroundColor: budgetBgColors,
  data: budgetYValues
}]
},
options: {
title: {
  display: true,
  text: "Budget tracker chart"
}
}
});