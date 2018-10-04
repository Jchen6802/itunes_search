import moxios from 'moxios';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import * as Actions from './actions';
import * as Constants from '../constants/constants';

const mockStore = configureStore([ReduxThunk]);

beforeEach(() => {
    moxios.install();
});

afterEach(() => {
    moxios.uninstall();
});

it('returns updateSearchTerm as expected', () => {
    expect(Actions.updateSearchTerm('newSearchTerm')).toEqual({
        type: Constants.UPDATE_SEARCH_TERM,
        value: 'newSearchTerm'
    });
});

it('returns setStatus as expected', () => {
    expect(Actions.setStatus('newStatus')).toEqual({
        type: Constants.SET_STATUS,
        value: 'newStatus'
    });
});

it(
    'returns fetched data and updates the status on success as expected',
    async () => {
        const store = mockStore({});
        const searchTerm = 'someSearchTerm';
        const expectedActions = [
            {
                type: Constants.SET_ALBUMS,
                value: [{name:'someAlbum'}]
            },
            {
                type: Constants.SET_STATUS,
                value: Constants.STATUSES.SEARCHED
            }
        ];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    results: [{name:'someAlbum'}]
                }
            });
        });

        return store.dispatch(Actions.fetchData(searchTerm)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    }
);

it(
    'returns sets the error status as expected when fetching data fails',
    async () => {
        const store = mockStore({});
        const searchTerm = 'someSearchTerm';
        const expectedActions = [{
                type: Constants.SET_STATUS,
                value: Constants.STATUSES.ERROR
            }];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({status: 400});
        });

        return store.dispatch(Actions.fetchData(searchTerm)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    }
);
