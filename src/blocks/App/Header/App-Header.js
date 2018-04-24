import React from 'react';
import { decl, Bem } from 'bem-react-core';

import logoPng from '../Logo/App-Logo.png';

export default decl({
  block: 'Layout',
  elem: 'Header',
  content() {
    return <Bem elem="Logo" tag="img" src={logoPng} alt="logo"/>;
  }
});
