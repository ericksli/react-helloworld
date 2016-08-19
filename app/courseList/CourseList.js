import React, {Component} from 'react'
import CourseRow from './CourseRow'

class CourseList extends Component {
  static propTypes = {
    semester: React.PropTypes.string.isRequired,
    courses: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  };

  render() {
    let rows = this.props.courses.map((course) => {
      return (
        <CourseRow key={course.code} semester={this.props.semester} course={course}/>
      );
    });
    return (
      <table className="table table-striped">
        <thead>
        <tr>
          <th>Code</th>
          <th>Title</th>
          <th>Credit</th>
          <th>Levels</th>
          <th>Enrolled &amp; Capacity</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    );
  }
}

export default CourseList
