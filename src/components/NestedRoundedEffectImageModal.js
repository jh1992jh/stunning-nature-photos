import React from 'react';

const NestedRoundedEffectImageModal = ({ img, hike }) => {
  return (
    <div className="nestedHikeInfo">
      <div className="infoBlock">
        <img src={img} alt="Hike" />
      </div>
      <div className="infoBlock">
        <i className="fas fa-walking" />{' '}
        <p>
          The hike is {hike} long. You and your group better be prepaired for
          this journey. Are you and your group ready for this challange? If so
          jump on and experience a unforgettable journey!
        </p>
      </div>
      <div className="infoBlock">
        <i className="fas fa-cloud" /> The weather, on this hike sets appart the
        ones you are ready for the journey and those who are not. The conditions
        of the journey might make it challenging but we are sure that with the
        help of your group members and our guides you can make it.
      </div>
    </div>
  );
};

export default NestedRoundedEffectImageModal;
