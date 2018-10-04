import React from 'react';
import renderer from 'react-test-renderer';

import { STATUSES } from '../constants/constants';
import { SearchErrors } from './SearchErrors.jsx';

it('renders as expected when in the error status', () => {
    const searchErrors = renderer.create(
        <SearchErrors status={STATUSES.ERROR}/>
    ).toJSON();

    expect(searchErrors).toMatchSnapshot();
});

it('does not render when not in the error status', () => {
    const searchErrors = renderer.create(
        <SearchErrors status={STATUSES.INITIAL}/>
    ).toJSON();

    expect(searchErrors).toMatchSnapshot();
});
