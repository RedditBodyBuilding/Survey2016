import React, { Component, PropTypes } from 'react'
import ColumnChart from './ColumnChart'
import precomputed from './precomputed'
import { Base64 } from 'js-base64'

const categories = data => Object.keys(data).map(m => m ? Base64.decode(m) : 'No Response')
const responses = data => Object.keys(data).map(k => data[k])

const chartConfig = (data, name) => {
  const series = [{
    name: 'Responses',
    data: responses(data)
  }]

  const title = {
    text: Base64.decode(name)
  }

  return {
    title,
    categories: categories(data),
    series
  }
}

export default class Root extends Component {
  renderCharts() {
    const { chartData } = this.props

    return Object.keys(chartData).map(key => {
      const value = chartData[key]
      const config = chartConfig(value, key)

      return <ColumnChart key={key} {...config} />
    })
  }

  render() {
    const { store, history } = this.props
    return (
      <div>
        <h1>/r/Bodybuilding Survey</h1>
        {this.renderCharts()}
      </div>
    )
  }
}

Root.propTypes = {
  chartData: PropTypes.object.isRequired
}
Root.defaultProps = {
  chartData: precomputed
}
