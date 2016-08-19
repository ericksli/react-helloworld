import React, {Component} from 'react'

class SectionGroupRecord extends Component {
  static propTypes = {
    group: React.PropTypes.object.isRequired,
  }

  render() {
    let instructors = this.props.group.instructors.map((instructor, index) => {
      return (
        <li key={`instructor_${index}`}>{instructor}</li>
      )
    })
    let notes = this.props.group.notes.map((note, index) => {
      return (
        <li key={`note_${index}`}>{note}</li>
      )
    })
    return (
      <tr>
        <td>{this.props.group.date}</td>
        <td>{this.props.group.day}</td>
        <td>{this.props.group.time}</td>
        <td>
          <ul className="list-unstyled">{instructors}</ul>
        </td>
        <td>
          <ul className="list-unstyled">{notes}</ul>
        </td>
        <td>{this.props.group.building}</td>
        <td>{this.props.group.room}</td>
      </tr>
    )
  }
}

export default SectionGroupRecord
