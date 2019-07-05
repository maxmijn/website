import React from 'react'
import vmc from '../Images/vmc_white.png'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import { Element } from 'react-scroll'

const steps = [
  {
    id: '1',
    options: [
      { value: 2, label: 'Start', trigger: '2' }
    ]
  },
  {
    id: '2',
    message: 'Hi there! What is your name?',
    trigger: '3'
  },
  {
    id: '3',
    user: true,
    trigger: '4'
  },
  {
    id: '4',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '5'
  },
  {
    id: '5',
    message: 'Would you like to know more about Max?',
    trigger: '6'
  },
  {
    id: '6',
    options: [
      { value: 7, label: 'Yes', trigger: '7' },
      { value: 8, label: 'No', trigger: '8' }
    ]
  },
  {
    id: '7',
    message: 'Great! I have some things I could show you about Max. Please select one.',
    end: true
  },
  {
    id: '8',
    message: 'No problem at all, have a great day!',
    end: true
  },
  {
    id: '9',
    options: [
      { value: 7, label: 'Yes', trigger: '7' },
      { value: 8, label: 'No', trigger: '8' }
    ]
  },
]

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Roboto',
  headerBgColor: '#f18c8e',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#f18c8e',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
}

function FirstCase () {
  return (
    <Element name='firstCase'>
      <div className='SecondPage row'>
        <div className='Left col-sm-6'>
          <h1>Me, Myself and I</h1>
          <p> Would you like to know more about me? Feel free to chat with my bot!</p>
        </div>
        <div className='Chatbot col-sm-6 grid-container'>
          <ThemeProvider theme={theme}>
            <ChatBot style={{ borderRadius: 0 }} steps={steps} />
          </ThemeProvider>
        </div>
        {/* <div style={{justifyContent: 'space-between'}} className='Right col-sm-6'>
          <img src={vmc} class='VMC-Logo' />
          <div>
            <a href="https://apps.apple.com/us/app/vmc-go/id1434419887?mt=8"><img style={{flex: 1}} class='Ios-app' src='https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2018-09-24&kind=iossoftware&bubble=ios_apps'/></a>
            <a href='https://play.google.com/store/apps/details?id=com.vmc.travel&hl=en_US&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img style={{flex: 1}} class='Android-app' alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
          </div>
        </div> */}
      </div>
    </Element>
  )
}

export default FirstCase
