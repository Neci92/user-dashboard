	/////////////////Chart pie ///////////////////////
    let myChartPie = document.getElementById('myChartPie').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';
    
    let massPopChartPie = new Chart(myChartPie, {
      type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Brad', 'Mary', 'John', 'Lilly'],
        datasets:[{
          label:'Population',
          data:[
            25,
            16,
            15,
            13
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Successful Tasks',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:0,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });

    /////////////////Chart bar ///////////////////////
let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';

let massPopChart = new Chart(myChart, {
  type:'bar',
  data:{
    labels:['Brad', 'Mary', 'John', 'Lilly'],
    datasets:[{
      label:'Users',
      data:[
        25,
        16,
        15,
        13
      ],
      backgroundColor:[
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth: 2,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Successful Tasks',
      fontSize:25
    },
    legend:{
      display:true,
      position:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

