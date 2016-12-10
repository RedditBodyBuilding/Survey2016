import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'
import lodash from 'lodash'

const config = {
  chart: {
    type: 'column',
    margin: [60, 10, 120, 40]
  },
  title: {
    x: 25
  },
  // subtitle: {
  //   text: 'Fisher\'s Iris Data: Sepal Width',
  //   x: 25
  // },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  tooltip: {},
  plotOptions: {
    series: {
      pointPadding: 0,
      groupPadding: 0,
      borderWidth: 0.5,
      borderColor: 'rgba(255,255,255,0.5)',
      color: 'rgba(0, 154, 253, 0.9)'
    }
  },
  xAxis: {},
  yAxis: {
    title: {
      text: 'y-axis'
    }
  },
  series: [{
    name: 'Responses',
    data: []
  }]
}



export default class ColumnChart extends Component {
  getConfig() {
    const { title, series, categories } = this.props

    return lodash.merge({}, config, {
      title,
      series,
      xAxis: { categories }
    })

    return config
  }

  render() {
    return <ReactHighcharts config={this.getConfig()} />
  }
}
