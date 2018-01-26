import React from 'react';

import PageTitle from '../../ui/common/page-title';
import { FullHeightWrap, FullHeightContent } from '../../ui/layout/full-height-layout';
import GithubForm from './parts/github-form';

const GithubRepos = () =>
  <FullHeightWrap>
    <PageTitle>
      <GithubForm />
    </PageTitle>

    <FullHeightContent>
      Some list
    </FullHeightContent>
  </FullHeightWrap>;

export default GithubRepos;
