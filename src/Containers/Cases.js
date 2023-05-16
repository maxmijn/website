import React from 'react'
import { Element } from 'react-scroll'

function Cases () {
  return (
    <Element name='Bio'>
      <div style={{ minHeight: '100vh', backgroundColor: '#f0b7a4', width: '100%', display: 'flex' }}>
        <div className='grid-container2'>
          <div style={{ backgroundColor: '#f1d1b5', gridColumnStart: '1', gridColumnEnd: '3', gridRowStart: '1', gridRowEnd: '3' }} />
          <div style={{ backgroundColor: '#305f72', gridColumnStart: '2', gridColumnEnd: '4', gridRowStart: '2', gridRowEnd: '4' }}>
            <div className='container-fluid' style={{ padding: '5vw', minHeight: '100%' }}>
              <div className='row'>
                <div className='col-sm-6' style={{display: 'flex', flexDirection: 'column'}}>
                  <h2>More about me</h2>
                  <p style={{marginTop: 40,}}>
                    I am a software engineer and founder from Amsterdam, the Netherlands. I grew up with a passion for new technology and innovation. After graduating a BSc in Artificial Intelligence at the University of Amsterdam I worked for different startups, ranging from a blockchain disruptor to a flower auction platform. I joined <a href="https://bash.social">BASH</a> in 2020 as a co-founder and have been passionately working on it since.
                  </p>
                </div>
                <div className='col-sm-6' style={{textAlign: 'right'}}>
                  <h2 style={{marginBottom: 40}}>Skills</h2>
                  <div>
                    <p className='font-weight-bold' style={{ marginBottom: 0 }}>
                      Programming languages
                    </p>
                    <p className='font-italic'>
                      Swift, Javascript, Python, HTML, CSS3
                    </p>
                  </div>
                  <div>
                    <p className='font-weight-bold' style={{ marginBottom: 0 }}>
                      Frameworks
                    </p>
                    <p className='font-italic'>
                      SwiftUI, React, React-Native
                    </p>
                  </div>
                  <div>
                    <p className='font-weight-bold' style={{ marginBottom: 0 }}>
                      Tools
                    </p>
                    <p className='font-italic'>
                      Git, Google Cloud, Wordpress
                    </p>
                  </div>
                  <div>
                    <p className='font-weight-bold' style={{ marginBottom: 0 }}>
                      Concepts
                    </p>
                    <p className='font-italic'>
                      Product Management, Mobile Applications, Blockchain, Web
                    </p>
                  </div>
                  <div>
                    <p className='font-weight-bold' style={{ marginBottom: 0 }}>
                      Languages
                    </p>
                    <p className='font-italic'>
                      Dutch (native), English (fluent)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Cases
