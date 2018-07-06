import React, { Component } from 'react';
import RoundedEffectImage from './RoundedEffectImage';

class ImageContainer extends Component {
  render() {
    const { hikeInfo, onAddCurrentHike } = this.props;

    const contentOutput = hikeInfo.map((hikeInfo, i) => (
      <RoundedEffectImage
        key={i}
        hikeInfo={hikeInfo}
        onAddCurrentHike={onAddCurrentHike}
      />
    ));
    return <div className="imageContainer">{contentOutput}</div>;
  }
}

export default ImageContainer;
