import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export const Close = () => {
  return console.log('Close button has been clicked')
}

function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem
          type="default"
          value="New course available"
        />
        <NotificationItem
          type="urgent"
          value="New resume available"
        />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
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
  );
}

export default Notifications
