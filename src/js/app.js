const grid = document.getElementById('grid')
const search = document.getElementById('search')
const listItems = []

getData()

async function getData() {
	const response = await fetch('https://randomuser.me/api?results=10')

	const { results } = await response.json()

	results.innerHTML = ''

	results.forEach(user => {
		const div = document.createElement('div')
		div.className = 'content__card'

		listItems.push(div)

		div.innerHTML = `
		<picture class="content__img-box">
		   <source media="(max-width: 768px)" srcset="${user.picture.thumbnail}">
		   <source media="(max-width: 1200px)" srcset="${user.picture.medium}">
		   <img src="${user.picture.large}" alt="${user.name.first}" class="content__img-big">
		</picture>
		<div class="content__details">
		   <span class="content__row">First Name: ${user.name.first}</span>
		   <span class="content__row">Last Name: ${user.name.last}</span>
		   <span class="content__row">Position: Manager</span>
		   <span class="content__row">Tasks: 83%</span> 
		   <span class="content__row">Date started: 01.10.2021</span><br>
		   <input type="file" id="file" class="content__upload"> 
		</div>
		`

		grid.appendChild(div)
	});
}



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