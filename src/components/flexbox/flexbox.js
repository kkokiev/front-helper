import React from 'react';

import flexWrapData from '../../helpers/flexbox-data';
import { FlexHeader, FlexBody, FlexInputSide, FlexOutputSide } from './flexbox-styled';
import FlexOutput from './parts/flex-output';
import FlexboxBtnPanel from './parts/flexbox-btn-panel';

const Flexbox = () =>
  <div>
    <FlexHeader>
      <h1>Flexbox css generator</h1>
    </FlexHeader>
    <FlexBody>
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
    </FlexBody>
  </div>;

export default Flexbox;
