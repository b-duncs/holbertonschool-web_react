import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import AppContext from './AppContext';
import { connect } from 'react-redux';

const listCourses = [
  { id: '1', name: 'ES6', credit: 60 },
  { id: '2', name: 'Webpack', credit: 20 },
  { id: '3', name: 'React', credit: 40 },
];

export class App extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: AppContext._currentValue.user,
      logout: AppContext._currentValue.logout,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logoutListener = this.logoutListener.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.login = this.login.bind(this);
    this.state.logout = this.state.logout.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('keydown', this.logoutListener);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('keydown', this.logoutListener);
  }

  login(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      }
    });
    this.context.user = {
      email,
      password,
      isLoggedIn: true,
    };
  }

  logoutListener(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.state.logout();
    }
  };

  markNotificationAsRead(id) {
    let ln = this.state.listNotifications
    this.setState({
      listNotifications: ln.filter((note) => note.id !== id),
    });
  };

  render() {
    const style = StyleSheet.create({
      body: {
        padding: '2% 3%',
        height: '480px',
        '@media (max-width: 900px)': {
          display: this.state.displayDrawer ? 'none' : 'block',
        },
      },
      footer: {
        borderTop: '3px #e0354b solid',
        position: 'relative',
        bottom: 0,
        fontStyle: 'italic',
        // width: '100%',
        textAlign: 'center',
      },
    });

    return (
      <AppContext.Provider value={{ user: this.state.user, logout: this.state.logout }}>
        <div className='App'>
          <Notifications
            displayDrawer={this.state.displayDrawer}
            listNotifications={this.state.listNotifications}
            handleHideDrawer={this.handleHideDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          <div className={`App-body ${css(style.body)}`}>
            {this.state.user.isLoggedIn ?
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
              : <BodySectionWithMarginBottom title='Log in to continue'>
                <Login login={this.login} />
              </BodySectionWithMarginBottom>
            }
            <BodySection title='News from the School'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cumque magnam, consectetur soluta autem at facilis voluptatem aliquid dolor, unde perferendis laborum expedita, ad nihil? Adipisci aperiam sapiente quod perferendis.</p>
            </BodySection>
          </div>
          <footer className={css(style.footer)}>
            <Footer />
          </footer>
        </div>
      </AppContext.Provider >
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
  };
};

connect(mapStateToProps)(App);

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};
