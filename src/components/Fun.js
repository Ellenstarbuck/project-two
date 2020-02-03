import React from 'react'
import axios from 'axios'
// import { Router} from 'react-router-dom'
import AsteroidCard from './AsteroidCard'

const nasaToken = process.env.NASA_ACCESS_TOKEN

class Fun extends React.Component {

  state = {
    url: this.props.match.params.id,
    top: null,
    topFive: [],
    asteroidCount: 0
  }

  async componentDidMount() {
    try {
      const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.url}&end_date=${this.state.url}&api_key=${nasaToken}`)
      this.setState({ asteroidCount: res.data.element_count })
      this.setState({ top: this.sortData(res.data.near_earth_objects)[0] })
      this.setState({ topFive: this.sortData(res.data.near_earth_objects).splice(1,5) })
    } catch (err) {
      this.props.history.push('/n/notfound')
    }
  }

  sortData = (data) => {
    const selectedDate = `${this.state.url}`
    const newData = data[selectedDate].sort((a,b) => {
      return (
        parseInt(a.close_approach_data[0].miss_distance.kilometers) - parseInt(b.close_approach_data[0].miss_distance.kilometers)
      )
    })
    newData.length = 6
    return newData
  }

  handleBack = () => {
    this.props.history.push('/')
  }


  render() {
    return (
      <>
      {!this.state.top ? 
        <div className="spinner" >
          <div className="outer-circle" ></div>
          <div className="inner-circle" ></div>
        </div> :
    <>
      <div className="a_counter">
        <div className="counter_inner">
        Asteroid Counter: {this.state.asteroidCount}
        </div>
      </div>
    <div onClick={this.handleBack} className="b_button">
      <p><i className="arrow left"></i></p>
    </div>
    <section>
      <div className="big_boi">
        {this.state.top ? <AsteroidCard {...this.state.top} large={true}/> : ''}
      </div>
    </section>
     <section className="section">
       <div className="cardContainer">   
         {this.state.topFive.map(five => <AsteroidCard key={five.id} {...five} />)}
       </div>
     </section>
     </>
      }
    </>
    )
  }
}

export default Fun