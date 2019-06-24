import React from 'react'
import vmc from '../Images/vmc_white.png'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'

const steps = [
  {
    id: '1',
    message: 'OMG ERIK',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    end: true,
  },
]

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#f18c8e',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#f18c8e',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function FirstCase () {
  return (
    <div className='SecondPage row'>
      <div className='Left col-sm-6'>
        <h1>Me, Myself and I</h1>
        <p> Would you like to know more about me? Feel free to chat with my bot!</p>
        <a href='//https://vmc.ai'>VMC.ai website</a>
      </div>
      <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ width: '50%', height: 600, backgroundColor: '#f1d1b5', transform: 'translateX(40%)'}} >
        </div>
        <div style={{ width: '50%', height: 600, backgroundColor: '#305f72', transform: 'translateX(-50%)translateY(10%)'}} >
          <ThemeProvider theme={theme}>
            <ChatBot style={{borderRadius: 0, width: '100%', height: '100%'}} steps={steps} />
          </ThemeProvider>
        </div>
      </div>
      {/* <div style={{justifyContent: 'space-between'}} className='Right col-sm-6'>
        <img src={vmc} class='VMC-Logo' />
        <div>
          <a href="https://apps.apple.com/us/app/vmc-go/id1434419887?mt=8"><img style={{flex: 1}} class='Ios-app' src='https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2018-09-24&kind=iossoftware&bubble=ios_apps'/></a>
          <a href='https://play.google.com/store/apps/details?id=com.vmc.travel&hl=en_US&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{flex: 1}} class='Android-app' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
        </div>
      </div> */}
    </div>
  )
}

export default FirstCase
