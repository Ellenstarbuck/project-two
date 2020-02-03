import React from 'react'
import DistanceFacts from '../common/DistanceFacts'
import { notify } from 'react-notify-toast'


class AsteroidCard extends React.Component {

  averageSize = () => {
    return ((parseInt(this.props.estimated_diameter.meters.estimated_diameter_min) + parseInt(this.props.estimated_diameter.meters.estimated_diameter_max)) / 2)
  }

  calcDist = () => {
    const myColor = { background: '#FFFFFF', text: '#000000' }
    notify.show(DistanceFacts.comparisonGenerator(this.props.close_approach_data[0].miss_distance.kilometers), 'custom', 4000, myColor)
    // DistanceFacts.comparisonGenerator(this.props.close_approach_data[0].miss_distance.kilometers)
  }

  render() {
    return (
      <div onClick={this.calcDist} className="innerCardContainer dist_head">
        <div className="Header">
          <h2 className="is-size-4 has-text-weight-semibold">{this.props.large ? 'Danger' : 'Safe'}</h2>
          {this.props.large && <p className="is-size-7">- Distance from you -</p>}
          <h4 className="is-size-6 ">{parseInt(this.props.close_approach_data[0].miss_distance.kilometers).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} km</h4>
        </div>
        <div className="rule"></div>
        <div className="contentBox">
          <h3><span className="has-text-weight-semibold">Name:</span> {this.props.name.replace(/[()]/gi, '')}</h3>
          <h4><span className="has-text-weight-semibold">Size:</span> {(this.averageSize())} meters</h4>
          <h4><span className="has-text-weight-semibold">Speed:</span> {parseInt(this.props.close_approach_data[0].relative_velocity.kilometers_per_second)} km/s</h4>
          <h4><span className="has-text-weight-semibold">Time:</span>  {
            this.props.close_approach_data[0].close_approach_date_full ? 
              this.props.close_approach_data[0].close_approach_date_full.split(' ')[1] :
              'NA 😞'}</h4>
        </div>
      </div>
    )
  }

}

// CHANGE TO A FUNCTIONAL COMPONENT




export default AsteroidCard