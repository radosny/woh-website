export const ACTIONS = {
    'INITIALIZE': 'INITIALIZE',
    'SET_COUNTRIES': 'SET_COUNTRIES',
    'SET_ACTIVE_COUNTRY': 'SET_ACTIVE_COUNTRY'
};

export const initialize = () => ({
    type: ACTIONS.INITIALIZE
});

export const setCountries = (countries) => ({
    type: ACTIONS.SET_COUNTRIES,
    data: countries
});

export const setActiveCountry = (countryId) => ({
    type: ACTIONS.SET_ACTIVE_COUNTRY,
    data: countryId
});
