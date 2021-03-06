let valueEl;

function init(store) {
    valueEl = document.getElementById('value');

    document.getElementById('increment').addEventListener('click', function () {
        store.dispatch({ type: 'INCREMENT' });
    });

    document.getElementById('decrement').addEventListener('click', function () {
        store.dispatch({ type: 'DECREMENT' });
    });

    document.getElementById('undo').addEventListener('click', function () {
        if (store.getState().past.length > 0) store.dispatch({ type: 'UNDO' });
    });

    document.getElementById('redo').addEventListener('click', function () {
        if (store.getState().future.length > 0)
            store.dispatch({ type: 'REDO' });
    });

    document
        .getElementById('incrementIfOdd')
        .addEventListener('click', function () {
            if (store.getState().value % 2 !== 0) {
                store.dispatch({ type: 'INCREMENT' });
            }
        });

    document
        .getElementById('incrementAsync')
        .addEventListener('click', function () {
            setTimeout(function () {
                store.dispatch({ type: 'INCREMENT' });
            }, 1000);
        });

    document
        .getElementById('incrementIfOddAsync')
        .addEventListener('click', function () {
            store.dispatch({ type: 'INCREMENT' });
        });

    document
        .getElementById('incrementIfOddAsync')
        .addEventListener('click', function () {
            setTimeout(function () {
                if (store.getState().value % 2 !== 0) {
                    store.dispatch({ type: 'DECREMENT' });
                }
            }, 1000);
        });
}

function render(store) {
    if (valueEl === undefined) {
        return;
    }

    valueEl.innerHTML = store.getState().value.toString();

    if (valueEl.innerHTML % 2 === 0) {
        document
            .getElementById('incrementIfOdd')
            .setAttribute('disabled', true);
    } else {
        document.getElementById('incrementIfOdd').removeAttribute('disabled');
    }

    if (store.getState().past.length === 0) {
        document.getElementById('undo').setAttribute('disabled', true);
    } else {
        document.getElementById('undo').removeAttribute('disabled');
    }

    if (store.getState().future.length === 0) {
        document.getElementById('redo').setAttribute('disabled', true);
    } else {
        document.getElementById('redo').removeAttribute('disabled');
    }
}

export { init, render };
