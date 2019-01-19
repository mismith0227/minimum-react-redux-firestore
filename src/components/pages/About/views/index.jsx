import React from 'react'
import AppBar from '../../../organisms/AppBar'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  render() {
    return (
      <div>
        <AppBar />

        <h1>about</h1>
      </div>
    )
  }
}

export default About
