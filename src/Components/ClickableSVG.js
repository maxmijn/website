import React from 'react'
// import PathSVG from './PathSVG'
import PolygonSVG from './PolygonSVG'

class Canvas extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      widthSVG: 0,
      widht: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  handleScroll (event) {
    let scrollTop = event.pageY
    let percentageDown = 1 - scrollTop / this.state.height
    let widthSVG = (0.5 * this.state.width) * percentageDown + (0.15 * this.state.width)
    if (widthSVG > this.state.width / 6) {
      this.setState({ widthSVG })
    }
  }

  updateWindowDimensions () {
    let width = window.innerWidth
    let height = window.innerHeight
    let scrollTop = window.pageYOffset
    let percentageDown = 1 - scrollTop / height
    this.setState({ widthSVG: (0.5 * width) * percentageDown + (0.15 * width), width, height })
  }

  render () {
    return (
      <svg viewBox='0 0 535 461' version='1.1' xmlns='http://www.w3.org/2000/svg' transform='scale(0.5) scale(-1,1)' className='Bird' style={{ width: this.state.widthSVG }}>
        <title>Group 2</title>
        <desc>Created with Sketch.</desc>
        <g id='aa' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g id='Artboard' transform='translate(-208.000000, -158.000000)' fill='#EFDBDB'>
            <g id='Group-2' transform='translate(208.000000, 158.000000)'>
              <PolygonSVG id='Triangle-1' points='175.952772 220.464415 391.932036 221.620081 236.237525 322.138315' />
              <PolygonSVG id='Triangle-1' points='283.46439 65.1214057 391.965441 221.612493 176.005427 220.464897' />
              <PolygonSVG id='Triangle-1' points='484.319244 75.4203767 534.201969 130.228604 449.688232 130.228604' />
              <PolygonSVG id='Triangle-1' points='81.0889439 65.4591757 176.060594 220.484209 0.541034879 66.2636372' />
              <PolygonSVG id='Triangle-1' points='333.819556 138.224225 484.365928 75.4014897 391.961603 221.607129' />
              <PolygonSVG id='Triangle-1' points='176.005427 220.464897 236.223976 322.123506 126.169387 460.333524' />
              <PolygonSVG id='Triangle-1' points='41.0328178 0.0142070083 283.470703 65.114563 176.020747 220.452305' />
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default Canvas
