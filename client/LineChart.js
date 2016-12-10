import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'
import merge from 'lodash/object/merge'

const config = {
  chart: {
    type: 'spline'
  },
  plotOptions: {
    series: {
      connectNulls: true
    }
  },
  xAxis: {
    title: {
      text: 'Date'
    },
    categories: []
  },
  yAxis: {
    plotLines: [{
      value: 0,
      width: 1,
      color: '#FF0000'
    }]
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
  },
  series: []
}

export default class LineChart extends Component {
  getConfig() {
    const { series, categories} = this.props

    return merge({}, config, {
      xAxis: { categories },
      series
    })
  }

  render() {
    return (
      <div>
        <ReactHighcharts config={this.getConfig()} />
      </div>
    )
  }
}
