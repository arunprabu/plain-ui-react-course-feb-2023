import React, { Component } from 'react'

class LifeCycleDemo extends Component {
  constructor () {
    // optional to have constructor
    console.log('=========1. Inside constructor() ======== ');
    super();
    // ideal place for your initial component-wide data
    this.state = {
      isLoading: true,
      isError: false,
      featureName: ''
    }
  }

  // lifecycle hook
  componentDidMount () {
    console.log('=========3. Inside componentDidMount() ======== ');
    // this method will be executed ONLY ONCE after initial render()
    // this method will be called when the comp's UI comes into view
    // this is the ideal place for you to send REST API Calls
    // mocking rest api calls using timeout
    setTimeout(() => {
      // upon getting successful res
      this.setState({
        isLoading: false,
        isError: false,
        featureName: 'Understanding LifeCycle Hooks!!!'
      });

      // upon getting error res
      // this.setState({
      //   isLoading: false,
      //   isError: true,
      //   featureName: "",
      // });
    }, 5000);
  }

  shouldComponentUpdate (nextProps, nextState) {
    // when the state is updated -- this will be called
    // is invoked before rendering an already mounted component when new props or state are being received
    // it must return either true or false
    console.log('=========4 Inside shouldComponentUpdate() ======== ');
    // compare the prevState (this.state) and new State (nextState)
    // if changes found, then return true or else return false
    // you can also return true if prevProps (this.props) and nextProps change
    console.log(this.state); // prevState
    console.log(nextState); // nextState
    // for example:
    if (
      this.state.isLoading !== nextState.isLoading ||
      this.state.isError !== nextState.isError ||
      this.state.featureName !== nextState.featureName
    ) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('=========6 Inside componentDidUpdate() ======== ');
    // called immediately after the UPDATE in JSX (after re-rendering)
    // will NEVER be called after initial rendering
    console.log(prevProps); // prevProps contains props before update
    console.log(prevState); // prevState contains state before update
    console.log(this.state); // this is the next state
    console.log(this.props); // this is the next props
    // this is ideal for tiny dom manipulations like style updates
    document.getElementById('myPara').style.color = 'green';
  }

  componentWillUnmount() {
    // Called immediately before a component is destroyed.
    // this method will be called when the comp is going out of the view.
    console.log('7. Inside componentWillUnmount');
    // clean up the data
    // remove timeout, remove interval
  }

  render () {
    // this method will be called immediately after constructor i.e initial rendering
    console.log('=========2 & 5 Inside render() ======== ');

    if (this.state.isLoading) {
      return <div className='spinner-border text-success'></div>
    }

    if (this.state.isError) {
      return <div className='alert alert-danger'>Some Error Occurred! Try again later</div>
    }

    // if no error and no longer loading
    return (
      <>
        <h3>Detailed Explanation on Life Cycle Hooks</h3>
        <p id='myPara'>{this.state.featureName}</p>
      </>
    );
  }
}

export default LifeCycleDemo
