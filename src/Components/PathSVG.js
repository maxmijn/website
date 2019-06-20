import React from 'react'

const colors = [
  '#305f72',
  '#f1d1b5',
  '#f18c8e'
]

class PathSVG extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'white'
    }
  }

  componentDidMount () {
    this.changeColor()
  }

  changeColor () {
    var newColor
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)]
    } while (this.state.color === newColor)
    this.setState({ color: newColor })
  }

  render () {
    return (
      <path onClick={() => this.changeColor()} d={this.props.d} transform={this.props.transform} fill={this.state.color} />
    )
  }
}

export default PathSVG
