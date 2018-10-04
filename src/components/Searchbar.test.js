import React from 'react';
import renderer from 'react-test-renderer';

import { Searchbar } from './Searchbar.jsx';
import { STATUSES } from '../constants/constants';

let props;
beforeEach(() => {
    props = {
        fetchData: jest.fn(),
        setStatus: jest.fn(),
        searchTerm: 'someSearchTerm',
        updateSearchTerm: jest.fn(),
    };
});

it('will render as expected', () => {
    const searchbar = renderer.create(
        <Searchbar {...props} />
    ).toJSON();

    expect(searchbar).toMatchSnapshot();
});

it('will update the search term on input change', () => {
    const mockEvent = {
        target: {
            value: 'newSearchTerm'
        }
    };
    const searchbar = renderer.create(
        <Searchbar {...props} />
    ).root;

    searchbar.findByType('input').props.onChange(mockEvent);

    expect(props.updateSearchTerm.mock.calls).toEqual([['newSearchTerm']]);
});

it('will search when the search button is clicked', () => {
    const searchbar = renderer.create(
        <Searchbar {...props} />
    ).root;

    searchbar.findByType('button').props.onClick();

    expect(props.setStatus.mock.calls).toEqual([[STATUSES.SEARCHING]]);
    expect(props.fetchData.mock.calls).toEqual([['someSearchTerm']]);
});

it('will search when the user presses enter in the input', () => {
    const mockEvent = {key: 'Enter'};
    const searchbar = renderer.create(
        <Searchbar {...props} />
    ).root;

    searchbar.findByType('input').props.onKeyDown(mockEvent);

    expect(props.setStatus.mock.calls).toEqual([[STATUSES.SEARCHING]]);
    expect(props.fetchData.mock.calls).toEqual([['someSearchTerm']]);
});

it("won't search when the user presses any other in the input", () => {
    const mockEvent = {key: 'A'};
    const searchbar = renderer.create(
        <Searchbar {...props} />
    ).root;

    searchbar.findByType('input').props.onKeyDown(mockEvent);

    expect(props.setStatus).not.toBeCalled();
    expect(props.fetchData).not.toBeCalled();
});
