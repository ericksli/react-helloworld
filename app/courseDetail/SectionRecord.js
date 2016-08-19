import React, {Component} from 'react'
import SectionGroupTable from './SectionGroupTable'

class SectionRecord extends Component {
  static propTypes = {
    section: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">CRN: {this.props.section.crn}</div>
        <dl className="row">
          <dt className="col-sm-3">Campus</dt>
          <dd className="col-sm-9">{this.props.section.campus}</dd>
          <dt className="col-sm-3">Credit</dt>
          <dd className="col-sm-9">{this.props.section.credit}</dd>
          <dt className="col-sm-3">Capacity</dt>
          <dd className="col-sm-9">{this.props.section.capacity}</dd>
          <dt className="col-sm-3">Enrolled</dt>
          <dd className="col-sm-9">{this.props.section.enrolled}</dd>
        </dl>
        <SectionGroupTable groups={this.props.section.groups}/>
      </div>
    )
  }
}

export default SectionRecord
