import React from 'react';
import {Select} from 'rebass';

const CountrySelect = ({countries=[], handleCountryChange}) => (
    <Select
        label='countries'
        name='countrySelect'
        options={countries}
        onChange={handleCountryChange}
    />
)

export default CountrySelect;
