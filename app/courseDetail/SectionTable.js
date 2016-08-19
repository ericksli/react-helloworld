import React, {Component} from 'react'
import SectionRecord from './SectionRecord'

class SectionTable extends Component {
  static propTypes = {
    sections: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  }

  render() {
    let sections = this.props.sections.map((section) => {
      return (
        <SectionRecord key={section.crn} section={section}/>
      )
    })
    return (
      <div>
        {sections}
      </div>
    )
  }
}

export default SectionTable
