import React, {Component} from 'react'
import DemandTableRow from './DemandTableRow'

class DemandTable extends Component {
  static propTypes = {
    demand: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  }

  render() {
    let rows = this.props.demand.map((demandItem) => {
      return (
        <DemandTableRow key={`${demandItem.programme}_${demandItem.major}_${demandItem.cohort}`}
                        demandItem={demandItem}/>
      )
    })
    return (
      <table className="table">
        <thead>
        <tr>
          <th>Programme</th>
          <th>Major</th>
          <th>Cohort</th>
          <th>Headcount</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    )
  }
}

export default DemandTable
