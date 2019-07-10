import React from 'react'
import { Link } from 'react-scroll'

class Navigation extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      active1: true,
      active2: false,
      active3: false
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
    let scrollTop = document.documentElement.scrollTop
    let height = this.state.height
    if (scrollTop < height / 2) {
      this.setState({ active1: true, active2: false, active3: false })
    } else if (scrollTop > 1.5 * height) {
      this.setState({ active1: false, active2: false, active3: true })
    } else {
      this.setState({ active1: false, active2: true, active3: false })
    }
  }

  updateWindowDimensions () {
    let width = window.innerWidth
    let height = window.innerHeight
    this.setState({ width, height })
  }

  render () {
    return (
      <div style={{ position: 'fixed', top: '50%', right: '2%', zIndex: 999 }}>
        <Link to='landingPage' smooth>
          <div className={this.state.active1 ? 'navCircleActive' : 'navCircle'} />
        </Link>
        <Link to='firstCase' smooth>
          <div className={this.state.active2 ? 'navCircleActive' : 'navCircle'} />
        </Link>
        <Link to='Bio' smooth>
          <div className={this.state.active3 ? 'navCircleActive' : 'navCircle'} />
        </Link>
      </div>
    )
  }
}

export default Navigation
