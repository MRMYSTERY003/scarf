import { onValue,set,  co2, co2_temp } from "./fbase.js";

const ctx = document.getElementById('myChart');


let oldval = [];
let flag = 0;
let f2 = 1;

onValue(co2, (snapshot) => {
    if (f2){
        let val= snapshot.val();
        oldval = val;
        f2 = 0;
    }
    let val= snapshot.val();
    if(flag){
        let last = val[19];
        oldval.shift();
        oldval.push(last);
        console.log(oldval);
        set(co2_temp,oldval);
    }

    flag = 1;
})







  const DATA_COUNT = 20;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
  }
  const datapoints = [ 20, 60, 60, 120,34, 180, 120, 125, 105, 110,234,212,123,12,30,32.3,23,34.3,40,32];
  const data = {
  labels: labels,
  datasets: [
    {
      label: 'Carbon dioxide concentration',
      data: datapoints,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }
  ]};
      
  const chart =  new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Plot of Co2 over time'
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'concentration'
            },
            suggestedMin: -10,
            suggestedMax: 200
          }
        }
      },
  });


  function update_chart(chart, datapoints){
    console.log(datapoints);
    chart.data.datasets[0].data = datapoints;
    chart.update();
  }


  onValue(co2_temp, (snapshot) => {
    let values = snapshot.val();
    update_chart(chart, values);
  })
  
  
  