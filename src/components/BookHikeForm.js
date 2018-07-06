import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BookHikeFormInfoContainer from './BookHikeInfoContainer';
import BookHikeFormContainer from './BookHikeFormContainer';

class BookHikeForm extends Component {
  componentDidMount() {
    if (this.props.currentHike.length === 0) {
      this.props.history.push('/');
    }
  }
  render() {
    const {
      onClearCurrentHike,
      onInputChange,
      onFormSubmit,
      name,
      email,
      toDate,
      fromDate
    } = this.props;
    const { img, hike, weather, temperature, terrain } = this.props.currentHike;
    return (
      <div className="bookHikeForm">
        <BookHikeFormInfoContainer
          img={img}
          hike={hike}
          weather={weather}
          temperature={temperature}
          terrain={terrain}
        />
        <BookHikeFormContainer
          onClearCurrentHike={onClearCurrentHike}
          onInputChange={onInputChange}
          onFormSubmit={onFormSubmit}
          name={name}
          email={email}
          toDate={toDate}
          fromDate={fromDate}
        />
      </div>
    );
  }
}

export default withRouter(BookHikeForm);
