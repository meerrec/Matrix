console.log('started', this);

let matrix = [];
let cloneLetters = {};

function randomLetter(_charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    const charNumber = Math.random() * _charSet.length ^ 0;
    return String(_charSet.substring(charNumber, charNumber + 1));
}

function generateMatrix(_x = 5, _y = 5) {
    return [...Array(_x)].map(() => [...Array(_y)].map(() =>
        randomLetter()
    ))
}

function hasCloneLetter(_x, _y) {
    const x = _x;
    const y = _y;
    const letter = matrix[x][y];
}