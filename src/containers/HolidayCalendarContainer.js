import React from 'react';
import {connect} from 'react-redux';

import {getCurrentDate, getEndDate, getStartDate} from '../store/helpers';

import HolidayCalendar from '../components/HolidayCalendar/HolidayCalendar';

const mapStateToProps = state => ({
    startDate: getStartDate(state),
    endDate: getEndDate(state),
    currentDate: getCurrentDate(state)
});
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HolidayCalendar);
