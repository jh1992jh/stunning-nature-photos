import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ToggleRPC from './ToggleRPC';
import RoundedEffectImageModal from './RoundedEffectImageModal';
import Modal from './Modal';
import NestedModal from './NestedModal';
import NestedRoundedEffectImageModal from './NestedRoundedEffectImageModal';

class RoundedEffectImage extends Component {
  render() {
    const { onAddCurrentHike, hikeInfo } = this.props;
    const { img, animAssing, hike, weather, temperature, terrain } = hikeInfo;

    return (
      <ToggleRPC>
        {({ on, toggle }) => (
          <Fragment>
            <div className={animAssing} onClick={toggle}>
              <div className="roundedEffectImage">
                <div className="outerBorderOpac">
                  <div className="innerBorderOpac">
                    <img src={img} alt="Nature" />
                  </div>
                </div>
              </div>
            </div>
            <Modal on={on} toggle={toggle}>
              <RoundedEffectImageModal
                img={img}
                hike={hike}
                weather={weather}
                temperature={temperature}
                terrain={terrain}
              />
              <ToggleRPC>
                {({ on, toggle }) => (
                  <Fragment>
                    <button onClick={toggle} className="viewHikeInfoBtn">
                      <i className="fas fa-map-marked-alt" /> View Info
                    </button>
                    <NestedModal on={on} toggle={toggle} showCloseBtn={true}>
                      <NestedRoundedEffectImageModal img={img} hike={hike} />
                      <ToggleRPC>
                        {({ on, toggle }) => (
                          <Fragment>
                            <div className="infoBlock centerContent posAbsCustom1">
                              <Link to="/book-a-hike">
                                <button
                                  onClick={() =>
                                    onAddCurrentHike(this.props.hikeInfo)
                                  }
                                  className="hikeBtn"
                                >
                                  <i className="fas fa-map-marked" /> Experience
                                  The Hike
                                </button>
                              </Link>
                            </div>
                          </Fragment>
                        )}
                      </ToggleRPC>
                      <div className="forMobile">
                        <Link to="/book-a-hike">
                          <button
                            onClick={() =>
                              onAddCurrentHike(this.props.hikeInfo)
                            }
                            className="hikeBtn"
                          >
                            <i className="fas fa-map-marked" /> Experience The
                            Hike
                          </button>
                        </Link>
                      </div>
                    </NestedModal>
                  </Fragment>
                )}
              </ToggleRPC>
            </Modal>
          </Fragment>
        )}
      </ToggleRPC>
    );
  }
}

export default RoundedEffectImage;
