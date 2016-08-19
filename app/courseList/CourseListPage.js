import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import $ from 'jquery'
import _ from 'lodash'
import SemesterPicker from './SemesterPicker'
import CourseList from './CourseList'


class CourseListPage extends Component {

  constructor(props) {
    super(props)
    let semester = props.route.semesters[props.route.semesters.length - 1];
    if (props.params.semester && _.includes(props.route.semesters, props.params.semester)) {
      semester = props.params.semester
    }
    this.state = {
      // the latest semester
      semester: semester,
      courses: [],
    }
  }

  loadCoursesFromServer() {
    $.ajax({
      url: `https://fir-test-197b2.firebaseapp.com/course-offerings/${this.state.semester}/overview.json`,
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
    this.setState({semester: semester}, function () {
      this.loadCoursesFromServer()
    });
  }

  componentDidMount() {
    this.loadCoursesFromServer()
  }

  render() {
    return (
      <div>
        <SemesterPicker semesters={this.props.route.semesters}
                        semester={this.state.semester}
                        onSemesterChange={e => this.handleSemesterChange(e)}/>
        <CourseList semester={this.state.semester} courses={this.state.courses}/>
      </div>
    );
  }
}

export default CourseListPage
