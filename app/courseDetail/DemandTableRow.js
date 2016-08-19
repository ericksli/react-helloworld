import React, {Component} from 'react'

class DemandTableRow extends Component {
  static propTypes = {
    demandItem: React.PropTypes.object.isRequired,
  }
  render() {
    return (
      <tr>
        <td>{this.props.demandItem.programme}</td>
        <td>{this.props.demandItem.major}</td>
        <td>{this.props.demandItem.cohort}</td>
        <td>{this.props.demandItem.headcount}</td>
      </tr>
    )
  }
}

export default DemandTableRow
