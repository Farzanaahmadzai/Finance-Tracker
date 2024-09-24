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



// on Scroll animation code of every section 
let sections =document.querySelectorAll('section');
window.onscroll=()=>{
  sections.forEach(sec=>{
    let top =window.scrollY;
    let offset=sec.offsetTop - 150;
    let height= sec.offsetHeight;
    if(top>offset && top <offset+height){
      sec.classList.add('show-animate');
    }
    // if want to use repating animationon scroll, use this
    else{
      sec.classList.remove('show-animate')
    }
  })
}





//  loading anomation 
window.addEventListener("load",() => {
  const loader=document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend",()=>{
        document.body.removeChild("loader");
    })
})

// window.addEventListener("load,"()=>{
//   const loader=document.querySelector(".loader");


//   loader.classList.add("loader-hidden");

//   loader.addEventListener("transitionend",()=>{
//     document.body.removeChild("loader");
//   })
// })

// chart balance dashboard
const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "white",
      borderColor: "teal",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});


/*******************************Saving goals ************************ */
function calculateSavings() {
  // Get form input values
  var startingBalance = parseFloat(document.getElementById('startingBalance').value);
  var interestRate = parseFloat(document.getElementById('interestRate').value);
  var regularSavings = parseFloat(document.getElementById('regularSavings').value);
  var savingsFrequency = document.getElementById('savingsFrequency').value;
  var years = parseInt(document.getElementById('years').value);

  // Calculate total savings
  var totalSavings = startingBalance;

  // Convert interest rate to monthly if necessary
  if (savingsFrequency !== 'monthly') {
      interestRate /= 12;
  }

  var numberOfDeposits = 0;

  // Calculate total savings based on the frequency
  switch (savingsFrequency) {
      case 'monthly':
          numberOfDeposits = years * 12;
          for (var i = 0; i < numberOfDeposits; i++) {
              totalSavings += regularSavings;
              totalSavings *= (1 + interestRate / 100);
          }
          break;
      case 'daily':
          numberOfDeposits = years * 365;
          for (var i = 0; i < numberOfDeposits; i++) {
              totalSavings += regularSavings;
              totalSavings *= (1 + interestRate / 100 / 365);
          }
          break;
      case 'yearly':
          numberOfDeposits = years;
          for (var i = 0; i < numberOfDeposits; i++) {
              totalSavings += regularSavings;
              totalSavings *= (1 + interestRate / 100);
          }
          break;
      default:
          break;
  }

  // Display result
  let resultDiv = document.querySelector('.result');
  let formDiv = document.getElementById('calculatorForm');
  formDiv.style.display = 'none'; 
  resultDiv.style.display = '';
  document.getElementById('result').innerHTML = `Your total savings in ${years} year is $${totalSavings.toFixed(2)}`;
}