const initialState = {
    past: [],
    value: 0,
    future: []
};

function counter(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                past: [...state.past, state.value],
                value: state.value + 1,
                future: []
            };
        case 'DECREMENT':
            return {
                past: [...state.past, state.value],
                value: state.value - 1,
                future: []
            };
        case 'UNDO':
            const newUndoValue = state.past[state.past.length - 1];
            return {
                past: state.past.slice(0, state.past.length - 1),
                value: newUndoValue,
                future: [state.value, ...state.future]
            };
        case 'REDO':
            const newRedoValue = state.future[0];
            return {
                past: [...state.past, state.value],
                value: newRedoValue,
                future: state.future.slice(1)
            };
        default:
            return state;
    }
}

export default counter;
