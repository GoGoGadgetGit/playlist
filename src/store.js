import { createStore } from 'redux';

function reducer(state, action) {
    if (action.type === 'ADD') {
        return {
        };
    }

    return state;
}

export const store = createStore(reducer, {
    artist: "",
    song: "",
    notes: "",
    fave: false
});