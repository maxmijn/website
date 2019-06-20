import React from 'react'
import PathSVG from './PathSVG'
import PolygonSVG from './PolygonSVG'

class Canvas extends React.Component {

  constructor(props) {
    super(props)
    const welcomeText = [
      'Hi,',
      'my name is Max Mijnheer.',
      'Welcome to my website.'
    ]
    this.state = { width: 0, height: 0, welcomeText: welcomeText, color: 'black' }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.canvasRef = React.createRef()
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  handleClick(e) {
    /* var welcomeText = this.state.welcomeText
    const canvas = this.canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.font = '30px Roboto'
    ctx.fillStyle = 'white'
    if (welcomeText.length > 0) {
      ctx.fillText(welcomeText[0], e.clientX, e.clientY)
      welcomeText.shift()
      this.setState({ welcomeText: welcomeText })
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      this.setState({ welcomeText: [
        'Hi',
        'My name is Max Mijnheer',
        'Welcome to my website'
      ] })
    } */
    console.log(e)
  }

  changeColor(e) {
    console.log(e.target.id)
  }

  render() {
    return (
      <svg viewBox="0 0 535 461" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Group 2</title>
        <desc>Created with Sketch.</desc>
        <g id="aa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Artboard" transform="translate(-208.000000, -158.000000)" fill="#EFDBDB">
            <g id="Group-2" transform="translate(208.000000, 158.000000)">
              <PolygonSVG id="Triangle-1" points="175.952772 220.464415 391.932036 221.620081 236.237525 322.138315"></PolygonSVG>
              <PolygonSVG id="Triangle-1" points="283.46439 65.1214057 391.965441 221.612493 176.005427 220.464897"></PolygonSVG>
              <PolygonSVG id="Triangle-1" points="484.319244 75.4203767 534.201969 130.228604 449.688232 130.228604"></PolygonSVG>
              <PolygonSVG id="Triangle-1" points="81.0889439 65.4591757 176.060594 220.484209 0.541034879 66.2636372"></PolygonSVG>
              <PolygonSVG id="Triangle-1" points="333.819556 138.224225 484.365928 75.4014897 391.961603 221.607129"></PolygonSVG>
              <PolygonSVG id="Triangle-1" points="176.005427 220.464897 236.223976 322.123506 126.169387 460.333524"></PolygonSVG>
              <PolygonSVG id="Triangle-1" points="41.0328178 0.0142070083 283.470703 65.114563 176.020747 220.452305"></PolygonSVG>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default Canvas
