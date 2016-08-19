import React, {Component} from 'react'

class SemesterPicker extends Component {
  static propTypes = {
    semesters: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    semester: React.PropTypes.string.isRequired,
    onSemesterChange: React.PropTypes.func.isRequired,
  };

  handleSemesterChanged(e) {
    this.props.onSemesterChange(e.target.value);
  }

  render() {
    return (
      <div>
        Semester:
        <select className="form-control"
                onChange={e => this.handleSemesterChanged(e)}
                value={this.props.semester}>
          {this.props.semesters.map(semester => (
            <option key={semester} value={semester}>{semester}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default SemesterPicker
