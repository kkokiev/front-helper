import React from 'react';

import flexWrapData from '../../helpers/flexbox-data';
import { Col40, Col60 } from '../../ui/common/col';
import FlexOutput from './parts/flex-output';
import FlexboxBtnPanel from './parts/flexbox-btn-panel';
import PageTitle from '../../ui/common/page-title';
import FlexPageBody from '../../ui/common/flex-page-body';

const Flexbox = () =>
  <div>
    <PageTitle>
      <h1>Flexbox css generator</h1>
      <p>
        Inspired by
        {' '}
        <a
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Complete Guide to Flexbox
        </a>
      </p>
    </PageTitle>

    <FlexPageBody>
      <Col40>
        {flexWrapData.map((item, i) =>
          <FlexboxBtnPanel
            key={item.title + i}
            title={item.title}
            subtitle={item.subtitle}
            info={item.info}
            buttons={item.buttons}
          />
        )}
      </Col40>

      <Col60>
        <FlexOutput />
      </Col60>
    </FlexPageBody>
  </div>;

export default Flexbox;
