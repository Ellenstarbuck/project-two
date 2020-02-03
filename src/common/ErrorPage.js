import React from 'react'



class ErrorPage extends React.Component {

  
  handleBack = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <>
    <div className="section">
      <div onClick={this.handleBack} className="b_button">
        <p><i className="arrow left"></i></p>
      </div>
    </div>
    <div className="hero-body">
      <div className="errorContainer">
        <h1 className="title has-text-centered">Whoops! No asteroids for you! ☄️</h1>
      </div>
    </div>
    </>
    )
  

  }
  
  
}

export default ErrorPage