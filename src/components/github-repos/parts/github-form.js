import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import {
  fetchGithubUserDataAction
} from '../../../modules/github/github-actions';

const mapDispatchToProps = {
  fetchGithubUserDataAction
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  withState('state', 'setState', { username: 'facebook' }),
  withHandlers({
    onInputChange: ({ setState }) => (e) => {
      const { name, value } = e.target;
      setState(state => ({ ...state, [name]: value }));
    },
    onSubmit: ({ state, fetchGithubUserDataAction }) => (e) => {
      e.preventDefault();
      fetchGithubUserDataAction(state.username);
    }
  })
);

const GithubForm = ({ state: { username }, onInputChange, onSubmit }) =>
  <form onSubmit={onSubmit}>
    <input type="text" name="username" onChange={onInputChange} value={username} />
    <input type="submit" />
  </form>;

GithubForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object
};

export default enhance(GithubForm);
