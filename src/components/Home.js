import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const nasaToken = process.env.NASA_ACCESS_TOKEN


class Home extends React.Component {

  state = {
    form: {
      month: null,
      date: null,
      year: null
    },
    top: null,
    topFive: []
  }

handleChange = () => {
  const form = { ...this.state.form, [event.target.name]: event.target.value }
  this.setState({ form })
}

placeholder = () => {
  console.log('this')
}

render() {
  console.log(this.state)
  return (
    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-centered">
              ASTEROID CATASTEROID
        </h1>
        <h2 className="is-size-6 subtitle has-text-centered">- Enter Dates for Asteroid Collision Stats -</h2>
        <div className="d_form_wrapper has-text-centered">
          <div>
            <form onSubmit={this.placeholder}>
              <div className="d_form">
                <div className="control">
                  <input 
                    className="input"
                    placeholder="DD"
                    type="number" 
                    max="31"
                    required
                    min="1"
                    name="date"
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="control">
                  <input 
                    className="input"
                    placeholder="MM"
                    type="number" 
                    max="12"
                    required
                    min="1"
                    name="month"
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="control">
                  <input 
                    className="input"
                    placeholder="YYYY"
                    type="number" 
                    required
                    max="2020"
                    min="1"
                    name="year"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
            </form>
            <div className="field">
              <Link className="button" to={`${this.state.form.year}-${this.state.form.month}-${this.state.form.date}`}>
                Submit
              </Link>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default Home