import React from 'react';

import PageTitle from '../../ui/common/page-title';
import { FullHeightWrap, FullHeightContent } from '../../ui/layout/full-height-layout';
import GithubForm from './parts/github-form';
import GithubReposList from './parts/github-repos-list';

const GithubRepos = () =>
  <FullHeightWrap>
    <PageTitle>
      <GithubForm />
    </PageTitle>

    <FullHeightContent>
      <GithubReposList />
    </FullHeightContent>
  </FullHeightWrap>;

export default GithubRepos;
