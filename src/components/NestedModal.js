import React, { Component } from 'react';
import Portal from './Portal';

class NestedModal extends Component {
  render() {
    const { children, toggle, on, showCloseBtn } = this.props;
    return (
      <Portal>
        {on && (
          <div className="modalWrapper">
            <div className="nestedModalCard">
              {showCloseBtn === true ? (
                <div className="closeButton">
                  <button onClick={toggle}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              ) : null}
              <div>{children}</div>
            </div>
            <div className="modalBackground" />
          </div>
        )}
      </Portal>
    );
  }
}

export default NestedModal;
