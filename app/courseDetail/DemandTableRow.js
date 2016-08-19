import React, {Component} from 'react'

class DemandTableRow extends Component {
  static propTypes = {
    programme: React.PropTypes.string.isRequired,
    major: React.PropTypes.string.isRequired,
    cohort: React.PropTypes.string.isRequired,
    headcount: React.PropTypes.number.isRequired,
  }
  render() {
    return (
      <tr>
        <td>{this.props.programme}</td>
        <td>{this.props.major}</td>
        <td>{this.props.cohort}</td>
        <td>{this.props.headcount}</td>
      </tr>
    )
  }
}

export default DemandTableRow
