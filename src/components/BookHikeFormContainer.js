import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';
import ToggleRPC from './ToggleRPC';
import NestedModal from './NestedModal';

const BookHikeFormContainer = ({
  onClearCurrentHike,
  onInputChange,
  onFormSubmit,
  onOpenModalScroll,
  name,
  email,
  toDate,
  fromDate
}) => {
  return (
    <div className="bookHikeFormContainer">
      <div className="goBackContainer">
        <Link to="/">
          <button onClick={onClearCurrentHike}>
            <i className="fas fa-arrow-circle-left" />Go Back
          </button>
        </Link>
      </div>
      <form onSubmit={onFormSubmit}>
        <FormInput
          name="name"
          value={name}
          type="text"
          placeholder="Name"
          label="Tell Us Your Name *"
          showLabel={true}
          onInputChange={onInputChange}
        />
        <FormInput
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          label="Enter Your Email *"
          showLabel={true}
          onInputChange={onInputChange}
        />
        <FormInput
          name="fromDate"
          value={fromDate}
          type="date"
          onInputChange={onInputChange}
          label="Start Date Of Your Hike *"
          showLabel={true}
        />
        <FormInput
          name="toDate"
          value={toDate}
          onInputChange={onInputChange}
          type="date"
          label="The End Date Of Your Hike *"
          showLabel={true}
        />

        <ToggleRPC>
          {({ on, toggle }) => (
            <Fragment>
              <button
                onClick={toggle}
                disabled={
                  name === '' ||
                  email === '' ||
                  toDate === '' ||
                  fromDate === ''
                    ? true
                    : false
                }
              >
                <i className="fas fa-map-marked-alt" />Book The Hike
              </button>
              <NestedModal on={on} toggle={toggle} showCloseBtn={false}>
                <div className="bookedContainer">
                  <h1>Congratulations {name}, your Hike is now Booked!</h1>
                  <h3>From: {fromDate === '' ? null : fromDate.toString()}</h3>
                  <h3>To: {toDate === '' ? null : toDate.toString()}</h3>
                  <div className="bookedInfoContainer">
                    <h4>Get ready for your hike!</h4>
                    <div className="successAnimContainer">
                      <div className="successAnimCircle">
                        <i className="fas fa-check" />
                      </div>
                    </div>
                    <Link to="/">
                      <button onClick={onClearCurrentHike}>
                        <i className="fas fa-arrow-circle-left" />Go Back
                      </button>
                    </Link>
                  </div>
                </div>
              </NestedModal>
            </Fragment>
          )}
        </ToggleRPC>
      </form>
    </div>
  );
};

export default BookHikeFormContainer;
