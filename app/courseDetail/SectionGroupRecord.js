import React, {Component} from 'react'

class SectionGroupRecord extends Component {
  static propTypes = {
    building: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    day: React.PropTypes.string.isRequired,
    instructors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    notes: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    room: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired,
  }

  render() {
    let instructors = this.props.instructors.map((instructor, index) => {
      return (
        <li key={`instructor_${index}`}>{instructor}</li>
      )
    })
    let notes = this.props.notes.map((note, index) => {
      return (
        <li key={`note_${index}`}>{note}</li>
      )
    })
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.day}</td>
        <td>{this.props.time}</td>
        <td>
          <ul className="list-unstyled">{instructors}</ul>
        </td>
        <td>
          <ul className="list-unstyled">{notes}</ul>
        </td>
        <td>{this.props.building}</td>
        <td>{this.props.room}</td>
      </tr>
    )
  }
}

export default SectionGroupRecord
