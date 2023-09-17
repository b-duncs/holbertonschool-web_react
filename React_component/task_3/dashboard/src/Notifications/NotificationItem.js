import React from 'react';
import PropTypes from 'prop-types';


const NotificationItem = ({ type, html, value, markAsRead }) => {
  if (value) {
    return ( <li onClick={markAsRead} data-priority={type}>{value}</li> );
  }
  return ( <li onClick={markAsRead} data-priority={type} dangerouslySetInnerHTML={html} /> );
}


NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {},
};

export default NotificationItem;
