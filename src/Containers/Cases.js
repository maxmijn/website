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
                <div className='col-sm-6' style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                  <h2>More about me</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className='col-sm-6' style={{textAlign: 'right'}}>
                  <h2 style={{marginBottom: 50}}>Skills</h2>
                  <div>
                    <p className='font-weight-bold' style={{ marginBottom: 0 }}>
                      Programming languages
                    </p>
                    <p className='font-italic'>
                      Javascript, Python, HTML, CSS3
                    </p>
                  </div>
                  <div>
                    <p className='font-weight-bold' style={{ marginBottom: 0 }}>
                      Frameworks
                    </p>
                    <p className='font-italic'>
                      React, React-Native
                    </p>
                  </div>
                  <div>
                    <p className='font-weight-bold' style={{ marginBottom: 0 }}>
                      Tools
                    </p>
                    <p className='font-italic'>
                      Git, Gitlab, Google Cloud, Wordpress
                    </p>
                  </div>
                  <div>
                    <p className='font-weight-bold' style={{ marginBottom: 0 }}>
                      Concepts
                    </p>
                    <p className='font-italic'>
                      Mobile Applications, Blockchain, Web, System Administrator
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
