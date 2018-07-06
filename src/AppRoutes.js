import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import BookHikeForm from './components/BookHikeForm';
import { hikeItems } from './items/hikeItems';

class AppRoutes extends Component {
  constructor(props) {
    super(props);

    this.onAddCurrentHike = this.onAddCurrentHike.bind(this);
    this.onClearCurrentHike = this.onClearCurrentHike.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      hikeInfo: hikeItems,
      currentHike: [],
      name: '',
      email: '',
      toDate: '',
      fromDate: '',
      errors: {}
    };
  }

  onAddCurrentHike(hikeInfo) {
    !this.state.currentHike.includes(hikeInfo) &&
      this.setState({
        currentHike: hikeInfo
      });
  }

  onClearCurrentHike() {
    this.setState({ currentHike: [] });
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const { name, email, toDate, fromDate, errors } = this.state;

    this.setState({
      name: name,
      email: email,
      toDate: toDate,
      fromDate: fromDate
    });
    window.scrollTo(0, 0);

    console.log('Form Submitted');
  }
  render() {
    const { name, email, toDate, fromDate, hikeInfo, currentHike } = this.state;
    return (
      <Router>
        <Fragment>
          <Route
            exact
            path="/"
            render={() => (
              <App
                hikeInfo={hikeInfo}
                onAddCurrentHike={this.onAddCurrentHike}
              />
            )}
          />
          <Route
            exact
            path="/book-a-hike"
            render={() => (
              <BookHikeForm
                name={name}
                email={email}
                toDate={toDate}
                fromDate={fromDate}
                onInputChange={this.onInputChange}
                onFormSubmit={this.onFormSubmit}
                currentHike={currentHike}
                onClearCurrentHike={this.onClearCurrentHike}
              />
            )}
          />
        </Fragment>
      </Router>
    );
  }
}

export default AppRoutes;
