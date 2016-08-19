import React, {Component} from 'react'
import {Link} from 'react-router'

class CourseRow extends Component {
  static propTypes = {
    semester: React.PropTypes.string.isRequired,
    course: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <tr>
        <td><Link to={`/semester/${this.props.semester}/${this.props.course.code.toLowerCase()}`}>{this.props.course.code}</Link></td>
        <td>{this.props.course.title}</td>
        <td>{this.props.course.credit}</td>
        <td>{this.props.course.levels.join(', ')}</td>
        <td>{this.props.course.enrolled} / {this.props.course.capacity}</td>
      </tr>
    );
  }
}

export default CourseRow
