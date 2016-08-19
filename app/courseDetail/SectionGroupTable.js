import React, {Component} from 'react'
import _ from 'lodash'
import SectionGroupRecord from './SectionGroupRecord'

class SectionGroupTable extends Component {
  static propTypes = {
    groups: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  }

  render() {
    let groups = this.props.groups.map((group) => {
      let key = `${group.day}_${_.snakeCase(group.time)}_${group.building}_${_.snakeCase(group.room)}`
      return (
        <SectionGroupRecord key={key} {...group}/>
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
