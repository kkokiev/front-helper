import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import Container from '../../../ui/layout/container';

const mapStateToProps = state => ({
  githubUser: state.githubReducer.githubUser,
  githubRepos: state.githubReducer.githubUserRepos
});

const mapDispatchToProps = {
};

const enhance = compose(
  connect(mapStateToProps, null)
);

const GithubReposList = ({ githubUser, githubRepos }) =>
  <Container>
    <div>
      {githubUser.name}
    </div>
    {githubRepos.map(repo =>
      <li key={repo.id}>{repo.name}</li>
    )}
  </Container>;

GithubReposList.propTypes = {
  githubRepos: PropTypes.array.isRequired,
  githubUser: PropTypes.object.isRequired
};

export default enhance(GithubReposList);
