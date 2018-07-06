import React, { Fragment } from 'react';

const RoundedEffectImageModal = ({
  img,
  hike,
  weather,
  temperature,
  terrain
}) => {
  return (
    <Fragment>
      <div
        className="modalBackgroundTwo"
        style={{
          background: `url('${img}')`
        }}
      >
        <ul className="hikeInfo">
          <li>
            <i className="fas fa-walking" /> {hike}
          </li>
          <li>
            <i className="fas fa-cloud" /> {weather}
          </li>
          <li>
            <i className="fas fa-thermometer-empty" /> {temperature}
          </li>
          <li>
            <i className="fas fa-map-marked" /> {terrain}
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default RoundedEffectImageModal;
