import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#546E7A', '#E91E63'],
      
        legend: {
            show: true,
            fontSize: '17px',
            formatter: function(seriesName, opts) {
                return opts.w.globals.labels[opts.seriesIndex]
            },
            position: 'top',
          },
          labels: ['online', 'store']
     
          
      },
      series: [39, 61],
    
  
    
     
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series}  type="donut" width="300" />
      </div>
    );
  }
}

export default Donut;