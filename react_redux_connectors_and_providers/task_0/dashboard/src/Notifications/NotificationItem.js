import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.value = this.props.value;
    this.type = this.props.type;
    this.html = this.props.html;
  }

  markAsRead() {
    this.props.markAsRead(this.value);

  }

  render() {

    const style = StyleSheet.create({
      li: {
        color: this.type === 'urgent' ? 'red' : 'blue',
        fontWeight: 'bold',
        '@media (max-width: 900px)': {
          borderBottom: '1px solid black',
          padding: '10px',
          listStyle: 'none',
        },
      },
    });
    if (this.value) {
      return ( <li className={css(style.li)} onClick={this.markAsRead} data-priority={this.type}>{this.value}</li> );
    }
    return ( <li className={css(style.li)} onClick={this.markAsRead} data-priority={this.type} dangerouslySetInnerHTML={this.html} /> );
  }
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
