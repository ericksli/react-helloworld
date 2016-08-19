import React, {Component} from 'react'
import {Link} from 'react-router'

class CourseRow extends Component {
  static propTypes = {
    semester: React.PropTypes.string.isRequired,
    capacity: React.PropTypes.number.isRequired,
    credit: React.PropTypes.number.isRequired,
    enrolled: React.PropTypes.number.isRequired,
    levels: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    title: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <tr>
        <td><Link to={`/semester/${this.props.semester}/${this.props.code.toLowerCase()}`}>{this.props.code}</Link></td>
        <td>{this.props.title}</td>
        <td>{this.props.credit}</td>
        <td>{this.props.levels.join(', ')}</td>
        <td>{this.props.enrolled} / {this.props.capacity}</td>
      </tr>
    );
  }
}

export default CourseRow
