import React from 'react';
// import PropTypes from 'prop-types';

import flexWrapData from '../../helpers/flexbox-data';
import Page from '../../ui/common/page-styled';
import { FlexHeader, FlexBody, FlexInputSide, FlexOutputSide } from './flexbox-styled';
import FlexboxBtnPanel from './parts/flexbox-btn-panel';

const Flexbox = () =>
  <Page>
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
        <button>Get css</button>
        <h2>Preview</h2>
        <div>
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
        </div>
      </FlexOutputSide>
    </FlexBody>
  </Page>;

export default Flexbox;
