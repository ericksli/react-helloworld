import React, {Component} from 'react'
import SectionGroupRecord from './SectionGroupRecord'

class SectionGroupTable extends Component {
  static propTypes = {
    groups: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  }

  render() {
    let groups = this.props.groups.map((group) => {
      return (
        <SectionGroupRecord key={`${group.day}_${group.time}_${group.building}_${group.room}`}
                            group={group}/>
      )
    })
    return (
      <table className="table table-bordered table-sm">
        <thead className="thead-inverse">
        <tr>
          <th>Date</th>
          <th>Day</th>
          <th>Time</th>
          <th>Instructors</th>
          <th>Notes</th>
          <th>Building</th>
          <th>Room</th>
        </tr>
        </thead>
        <tbody>
        {groups}
        </tbody>
      </table>
    )
  }
}

export default SectionGroupTable
