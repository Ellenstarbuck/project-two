import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './stylesheets/main.scss'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notifications from 'react-notify-toast'

import Home from './components/Home'
import Fun from './components/Fun'
import ErrorPage from './common/ErrorPage'

const nasaToken = process.env.NASA_ACCESS_TOKEN

class App extends React.Component {

  state = {
    background: ''
  }

  async componentDidMount() {
    try {
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaToken}`)
      if (!res.data.hdurl) {
        this.setState({ background: 'https://apod.nasa.gov/apod/image/2001/IntoTheShadow_apod.jpg' })
      } else {
        this.setState({ background: res.data.hdurl })
      } 
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Notifications />
        <main>
          <section className="img_container hero is-fullheight" style={{ backgroundImage: `url(${this.state.background})` }}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/n/*" component={ErrorPage}/>
              <Route path="/:id" component={Fun}/>
              
            </Switch>
          </section>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)