import React from 'react'

const colors = [
  '#305f72',
  '#f1d1b5',
  '#f18c8e'
]

class PolygonSVG extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'white'
    }
  }

  componentDidMount () {
    this.changeColor()
    // this.intervalId = setInterval(this.changeColor.bind(this), 10000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalId)
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
      <polygon class='polygon' onClick={() => this.changeColor()} points={this.props.points} fill={this.state.color} />
    )
  }
}

export default PolygonSVG
