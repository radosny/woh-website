import React, {Component} from 'react';
import HolidayCalendarContainer from '../../containers/HolidayCalendarContainer';
import CountrySelectContainer from '../../containers/CountrySelectContainer';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <CountrySelectContainer/>
        <HolidayCalendarContainer/>
      </div>
    );
  }
}

export default App;
