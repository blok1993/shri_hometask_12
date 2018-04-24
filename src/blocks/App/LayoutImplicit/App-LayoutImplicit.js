import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';
import zenData from '../../../data';

import Card from 'e:Card m:size_s m:size_m m:size_l';

export default decl({
  block: 'Layout',
  elem: 'Implicit',
  content() {
    return (
      <Fragment>
          {
            zenData.map((element, idx) => {
              let srcSet = '';
              let initialSrc = '';

              if(element.image) {
                //Формируем элемент img и его атрибут srcset
                let imgUrl = element.image;

                const [imgUrlPart1, imgUrlPart2] = imgUrl.split('.');
                srcSet = imgUrl + " 320w, " + imgUrlPart1 + "@2x." + imgUrlPart2 + " 480w, " + imgUrlPart1 + "@3x." + imgUrlPart2 + " 768w";
                initialSrc = imgUrlPart1 + "@3x." + imgUrlPart2;
              }

              return <Card
                  key={idx}
                  size={element.size}
                  withoutImage={!element.image}
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
