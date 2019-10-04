import React, {Component} from 'react'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <div>

      </div>

    )
  }
}
