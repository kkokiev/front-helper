import React from 'react';
import PropTypes from 'prop-types';

import { Notification as NotificationBase } from 'react-notification';
import { connect } from 'react-redux';
import { hideNotification } from '../../modules/notification/notification-actions';

const mapStateToProps = state => ({
  message: state.notificationReducer.text,
  type: state.notificationReducer.type
});

const enhance = connect(
  mapStateToProps,
  { hideNotification }
);

const style = {
  barStyleDefault: {
    backgroundColor: '#000'
  },
  barStyleWarning: {
    backgroundColor: '#d14836'
  },
  barStyleConfirm: {
    backgroundColor: '#cce5ff'
  },
  actionStyle: {
    color: '#000'
  },
  actionBarStyle: {
    fontSize: '2rem',
    left: '50%',
    transform: 'translateX(-50%)'
  }
};

const Notification = ({ message, type, hideNotification }) =>
  <NotificationBase
    isActive={!!message}
    message={message}
    onDismiss={hideNotification}
    dismissAfter={4000}
    barStyle={
      type === 'warning' ? style.barStyleWarning : type === 'confirm' ? style.barStyleConfirm : style.barStyleDefault
    }
    actionStyle={style.actionStyle}
    activeBarStyle={style.actionBarStyle}
  />;

Notification.propTypes = {
  hideNotification: PropTypes.func.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string
};

export default enhance(Notification);
