import React, {Component} from 'react'
import $ from 'jquery'
import SectionTable from './SectionTable'
import DemandTable from './DemandTable'

class CourseDetailPage extends Component {
  courseDetailRequest = null

  constructor(props) {
    super(props)
    this.state = {
      course: null,
      error: false,
    }
  }

  loadCourseDetailFromServer() {
    this.courseDetailRequest = $.ajax({
      url: `https://fir-test-197b2.firebaseapp.com/course-offerings/${this.props.params.semester}/courses/${this.props.params.courseCode}.json`,
      dataType: 'json',
      success: (data) => {
        this.setState({course: data, error: false})
      },
      error: (xhr, status, err) => {
        console.error("cannot load course detail", status, err.toString())
        this.setState({course: null, error: true})
      }
    })
  }

  componentDidMount() {
    this.loadCourseDetailFromServer()
  }

  componentWillUnmount() {
    if (this.courseDetailRequest != null) {
      this.courseDetailRequest.abort();
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="alert alert-danger" role="alert">
          Cannot load course detail. This may due to the course detail page is not available in AIMS.
        </div>
      )
    } else if (this.state.course == null) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div>
          <h1>
            {this.state.course.code}&nbsp;
            <small className="text-muted">{this.state.course.title}</small>
          </h1>

          <dl className="row">
            <dt className="col-sm-3">Academic Unit</dt>
            <dd className="col-sm-9">{this.state.course.academicUnit}</dd>
            <dt className="col-sm-3">Exclusive Courses</dt>
            <dd className="col-sm-9">{this.state.course.exclusiveCourses}</dd>
            <dt className="col-sm-3">Prerequisites</dt>
            <dd className="col-sm-9">{this.state.course.prerequisites}</dd>
          </dl>

          <h2>Sections</h2>
          <SectionTable sections={this.state.course.sections}/>

          <h2>Demand</h2>
          <DemandTable demand={this.state.course.demand}/>
        </div>
      )
    }
  }
}

export default CourseDetailPage
