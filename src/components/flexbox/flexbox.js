import React from 'react';

import flexWrapData from '../../helpers/flexbox-data';
import { FlexInputSide, FlexOutputSide } from './flexbox-styled';
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
        {` `}
        <a
          href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          target="_blank"
          rel="noopener noreferrer"
        >
          "A Complete Guide to Flexbox"
        </a>
      </p>
    </PageTitle>

    <FlexPageBody>
      <FlexInputSide>
        {flexWrapData.map((item, i) =>
          <FlexboxBtnPanel
            key={item.title + i}
            title={item.title}
            subtitle={item.subtitle}
            info={item.info}
            buttons={item.buttons}
          />
        )}
      </FlexInputSide>

      <FlexOutputSide>
        <FlexOutput />
      </FlexOutputSide>
    </FlexPageBody>
  </div>;

export default Flexbox;
