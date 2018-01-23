import React from 'react';

import Panel from '../../../ui/common/panel';

const FlexInfoBlock = () =>
  <div>
    <Panel>
      <h2>Browser compatibility</h2>
      <p>
        All modern browser, IE10/11&apos;s support are buggy,
        IE &#60;&#61; 9 don&apos;t support flexbox.
      </p>
      <p>Check <a href="https://caniuse.com/#feat=flexbox">Can i use...</a> for more info</p>
    </Panel>

    <Panel>
      <h2>CSS rules for .item`s</h2>
      <p>The only used rule for .item is <strong>flex-shrink: 0;</strong></p>
      <p>Other rules:</p>
      <ul>
        <li><strong>order</strong></li>
        <li><strong>flex-grow</strong></li>
        <li><strong>flex-basis</strong></li>
        <li><strong>align-self</strong></li>
      </ul>
      <p>Most rules work on single item basis,</p>
      <p>
        check
        {' '}
        <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
          A Complete Guide to Flexbox
        </a>
        {' '}
        for more info.
      </p>
    </Panel>
  </div>;

export default FlexInfoBlock;
