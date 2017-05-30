import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getCountries} from '../store/helpers';
import {setActiveCountry} from '../store/actions';

import CountrySelect from '../components/CountrySelect/CountrySelect';


const mapStateToProps = state => ({
    countries: getCountries(state),
});
const mapDispatchToProps = {
    handleCountryChange: (ev) => setActiveCountry(ev.target.value)
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelect);
