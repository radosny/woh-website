import React, {PropTypes} from 'react';
import {Calendar} from 'react-calendar';
import moment from 'moment-timezone';

import './holidayCalendar.css';

const HolidayCalendar = ({startDate, endDate, currentDate}) => {
return (
    <Calendar
          startDate={startDate}
          endDate={endDate}
          weekNumbers={true}
          size={12}
          mods={
            [
              {
                date: currentDate,
                classNames: ['current'],
                component: ['day']
              }
            ]
          }
        />
)};

HolidayCalendar.propTypes = {
    startDate: PropTypes.instanceOf(moment),
    endDate: PropTypes.instanceOf(moment),
    currentDate: PropTypes.instanceOf(moment)
};

export default HolidayCalendar;
