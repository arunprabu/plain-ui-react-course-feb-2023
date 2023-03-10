import React from 'react'

const AboutUsPage = (props) => {
  console.log(props);
  console.log(props.test);
  return (
    <div>AboutUsPage {props.test()}</div>
  )
}

export default AboutUsPage