import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Header from 'e:Header';
import LayoutImplicit from 'e:LayoutImplicit';

export default decl({
  block: 'App',
  content() {
    return (
      <Fragment>
        <Bem elem="Layout">
          <Header/>
          <LayoutImplicit/>
        </Bem>
      </Fragment>
    );
  }
});
