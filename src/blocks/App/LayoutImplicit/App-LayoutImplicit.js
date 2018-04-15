import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';
import zenData from '../../../data';

import Card from 'e:Card m:size_s m:size_m m:size_l';

export default decl({
  block: 'Layout',
  elem: 'Implicit',
  tag: 'div',
  content() {
    return (
      <Fragment>
          {
            zenData.map((element) => {
              let srcSet = '';
              let initialSrc = '';
              let withoutImage = false;

              if(element.image) {
                //Формируем элемент img и его атрибут srcset
                let imgUrl = element.image;

                let imgUrlPart1 = imgUrl.split('.')[0];
                let imgUrlPart2 = imgUrl.split('.')[1];
                srcSet = imgUrl + " 320w, " + imgUrlPart1 + "@2x." + imgUrlPart2 + " 480w, " + imgUrlPart1 + "@3x." + imgUrlPart2 + " 768w";
                initialSrc = imgUrlPart1 + "@3x." + imgUrlPart2;
              } else {
                withoutImage = true;
              }

              return <Card
                  size={element.size}
                  withoutImage={withoutImage}
                  title={element.title}
                  titleColor={element.titleColor}
                  imgUrl={initialSrc}
                  srcSet={srcSet}
                  description={element.description}
                  channelName={element.channelName}
              />;
            })
          }
      </Fragment>
    );
  }
});
