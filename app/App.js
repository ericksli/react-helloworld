import React, {Component} from 'react'
import {Router, Route, IndexLink, IndexRoute, browserHistory} from 'react-router'
import CourseListPage from "./courseList/CourseListPage";
import CourseDetailPage from "./courseDetail/CourseDetailPage"

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={CourseListPage} semesters={semesterList}/>
          <Route path="semester/:semester" component={CourseListPage} semesters={semesterList}/>
          <Route path="semester/:semester/:courseCode" component={CourseDetailPage}/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    )
  }
}

const semesterList = [
  '1112a', '1112b', '1112s',
  '1213a', '1213b', '1213s',
  '1314a', '1314b', '1314s',
  '1415a', '1415b', '1415s',
  '1516a', '1516b', '1516s',
];

const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
  </div>
)
const Container = (props) => (
  <div className="container">
    <Nav/>
    <hr/>
    {props.children}
  </div>
)
const NotFound = () => <h1>404.. This page is not found!</h1>

export default App
