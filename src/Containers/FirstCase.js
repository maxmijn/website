import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import { Element } from 'react-scroll'
import firebase from '../firebase.js';

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
    trigger: '9'
  },
  {
    id: '8',
    message: 'No problem at all, have a great day! If you change your mind, check below for more. You can leave a small message with your contact info here.',
    trigger: '14'
  },
  {
    id: '9',
    options: [
      { value: 7, label: 'Age', trigger: '10' },
      { value: 8, label: 'Skills', trigger: '11' },
      { value: 9, label: 'Experience', trigger: '12' }
    ]
  },
  {
    id: '10',
    message: 'Max is 28 years old. Would you like to know more?',
    trigger: '13'
  },
  {
    id: '13',
    options: [
      { value: 7, label: 'Yes', trigger: '7' },
      { value: 8, label: 'No', trigger: '8' }
    ]
  },
  {
    id: '11',
    message: 'Max\' expertise lies within creating smooth user experiences and managing how to get there. Would you like to know more?',
    trigger: '13'
  },
  {
    id: '12',
    message: 'Max\' studied Artifical Intelligence in Amsterdam. After that he worked for a mobility startup and a development agency. He is now founder of BASH. Would you like to know more?',
    trigger: '13'
  },
  {
    id: '14',
    user: true,
    trigger: '15'
  },
  {
    id: '15',
    message: 'Thanks for the message. Max will try to reach out as soon as possible!',
    end: true
  }
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

class FirstCase extends React.Component {
  componentDidMount () {
    this.handleEnd = this.handleEnd.bind(this)
  }

  handleEnd ({ steps, values }) {
    // Removes null and undefined values from the steps
    steps.forEach(step => {
      Object.keys(step).forEach(key => step[key] === undefined ? delete step[key] : '')
    })
    console.log(steps)
    const stepsRef = firebase.database().ref('steps/step');
    stepsRef.push(steps);
  }

  render () {
    return (
      <Element name='firstCase'>
        <div className='SecondPage row'>
          <div className='Left col-sm-6'>
            <h1>Me, Myself and I</h1>
            <p> Would you like to know more about me? Feel free to chat with my bot!</p>
          </div>
          <div className='Chatbot col-sm-6 grid-container'>
            <ThemeProvider theme={theme}>
              <ChatBot handleEnd={this.handleEnd} style={{ borderRadius: 0 }} steps={steps} />
            </ThemeProvider>
          </div>
        </div>
      </Element>
    ) 
  }
}

export default FirstCase
