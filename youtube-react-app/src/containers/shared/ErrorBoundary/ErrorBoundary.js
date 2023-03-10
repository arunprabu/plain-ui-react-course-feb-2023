// error boundary should be class comp
import React, { Component } from 'react'

class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  // let's catch the error 
  // when there is a runtime error -- this method will be called automatically
  // it receives the error that was thrown as a param 
  // this method must return a value to update state
  static getDerivedStateFromError(error){
    console.log(error);
    return {
      hasError: true
    }
  }

  render() {
    if(this.state.hasError){
      return (
        <div className='alert alert-danger'>
          <h1>Some Error Occurred!</h1>
          <p>Try again later. If the error persists contact the Admin</p>
        </div>
      )
    } else {
      return this.props.children;
    }
    
    
  }
}

export default ErrorBoundary