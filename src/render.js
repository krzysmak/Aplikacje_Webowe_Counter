let valueEl;

function init(store) {
    valueEl = document.getElementById('value');

    document.getElementById('increment').addEventListener('click', function() {
        store.dispatch({ type: 'INCREMENT' });
    });

    document.getElementById('decrement').addEventListener('click', function() {
        store.dispatch({ type: 'DECREMENT' });
    });

    document
        .getElementById('incrementIfOdd')
        .addEventListener('click', function() {
            if (store.getState() % 2 !== 0) {
                store.dispatch({ type: 'INCREMENT' });
            }
        });

    document
        .getElementById('incrementAsync')
        .addEventListener('click', function() {
            setTimeout(function() {
                store.dispatch({ type: 'INCREMENT' });
            }, 1000);
        });
}

function render(store) {
    if (valueEl === undefined) {
        return;
    }

    valueEl.innerHTML = store.getState().toString();
}

export { init, render };
