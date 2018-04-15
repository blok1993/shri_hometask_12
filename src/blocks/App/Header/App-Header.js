import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Logo';
import logoPng from '../Logo/App-Logo.png';

export default decl({
  block: 'Layout',
  elem: 'Header',
  tag: 'div',
  content() {
    return (
      <Fragment>
        <Bem elem="Logo" tag="img" src={logoPng} alt="logo"/>
      </Fragment>
    );
  }
});
