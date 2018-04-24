import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Control m:type_actions m:type_heart';

export default decl({
  block: 'App',
  elem: 'Card',
  mods({ size, withoutImage }) {
    return { size, withoutImage };
  },
  content() {
    return (
      <Fragment>
        <Bem elem="Card-Title" style={{color: this.props.titleColor}}>
          {this.props.title}
        </Bem>

        <Bem elem="Card-Picture">
          <Bem elem="pic" tag="img" srcSet={this.props.srcSet} src={this.props.imgUrl} alt="alt"/>
        </Bem>

        <Bem elem="Card-Description">
          <Bem elem="Card-Description-Text">
            {this.props.description}
          </Bem>

          <Bem elem="Controls">
            <Bem elem="ChannelName">
              {this.props.channelName}
            </Bem>

            <Bem elem="Control" mods={{type: 'actions'}}/>
            <Bem elem="Control" mods={{type: 'heart'}}/>
          </Bem>
        </Bem>
      </Fragment>
    );
  }
});
