import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';

export const Close = () => {
  return console.log('Close button has been clicked')
}

function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      <button style={{
        border: 0,
        background: 'white',
        position: 'absolute',
        right: '25px',
        top: '25px',
      }}
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
      >
        <img src={close} height="15px" width="15" alt="close icon" />
      </button>
    </div>
  )
}

export default Notifications
