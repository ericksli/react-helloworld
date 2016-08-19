import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import $ from 'jquery'
import _ from 'lodash'
import SemesterPicker from './SemesterPicker'
import CourseList from './CourseList'


class CourseListPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.loadCoursesFromServer();
  }

  componentDidMount() {
    this.loadCoursesFromServer()
  }

  getSemester() {
    const props = this.props;
    let semester = props.route.semesters[props.route.semesters.length - 1];
    if (props.params.semester && _.includes(props.route.semesters, props.params.semester)) {
      semester = props.params.semester
    }
    return semester;
  }

  loadCoursesFromServer() {
    $.ajax({
      url: `https://fir-test-197b2.firebaseapp.com/course-offerings/${this.getSemester()}/overview.json`,
      dataType: 'json',
      success: (data) => {
        this.setState({courses: data})
      },
      error: (xhr, status, err) => {
        console.error("cannot load courses", status, err.toString())
      }
    })
  }

  handleSemesterChange(semester) {
    browserHistory.push(`/semester/${semester}`)
  }

  render() {
    return (
      <div>
        <SemesterPicker semesters={this.props.route.semesters}
                        semester={this.getSemester()}
                        onSemesterChange={e => this.handleSemesterChange(e)}/>
        <CourseList semester={this.getSemester()} courses={this.state.courses}/>
      </div>
    );
  }
}

export default CourseListPage
