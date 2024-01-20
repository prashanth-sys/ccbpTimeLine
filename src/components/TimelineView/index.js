// Write your code here
import {Component} from 'react'

import {Chrono} from 'react-chrono'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="bg-container">
        <h1 className="main-heading">MY JOURNEY OF</h1>
        <h1 className="heading">CCBP 4.0</h1>
        <Chrono mode="VERTICAL" timelineItemsList={timelineItemsList}>
          <h1>Hii</h1>
        </Chrono>
      </div>
    )
  }
}
export default TimelineView
