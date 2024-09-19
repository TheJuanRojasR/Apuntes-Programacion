'use strict'

function* iterable ( array ) {
    for (let value of array) {
        yield value;
    }
}