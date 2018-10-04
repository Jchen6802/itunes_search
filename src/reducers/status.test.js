import { status } from './status';
import * as Constants from '../constants/constants';

it('will always have an initial state', () => {
    const action = {};
    expect(status(undefined, action)).toEqual(Constants.INITIAL_STATE.status);
});

it('can set the provided status', () => {
    const state = 'oldStatus';
    const action = {
        type: Constants.SET_STATUS,
        value: 'newStatus'
    };
    expect(status(state, action)).toEqual('newStatus');
});
