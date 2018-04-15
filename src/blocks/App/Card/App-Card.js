import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import ControlButton from 'e:Buttons m:type_actions m:type_heart';

export default decl({
  block: 'App',
  elem: 'Card',
  tag: 'div',
  mods({ size, withoutImage }) {
    return { size, withoutImage };
  },
  content() {
    return [
      <Fragment>
        <Bem elem="Card-Title" tag="div" style={{color: this.props.titleColor}}>
          {this.props.title}
        </Bem>

        <Bem elem="Card-Picture" tag="div">
          <Bem elem="pic" tag="img" srcSet={this.props.srcSet} src={this.props.imgUrl} alt="alt"/>
        </Bem>

        <Bem elem="Card-Description" tag="div">
          <Bem elem="Card-Description-Text" tag="div">
            {this.props.description}
          </Bem>

          <Bem elem="Controls" tag="div">
            <Bem elem="ChannelName" tag="div">
              {this.props.channelName}
            </Bem>

            <ControlButton type="actions"/>
            <ControlButton type="heart"/>
          </Bem>
        </Bem>
      </Fragment>
    ];
  }
});
