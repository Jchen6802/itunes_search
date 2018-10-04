import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header.jsx';

it('will render as expected', () => {
    const header = renderer.create(
        <Header />
    ).toJSON();

    expect(header).toMatchSnapshot();
});
