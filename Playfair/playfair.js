function generateMatrix(key) {
    key = key.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
    let seen = {};
    let letters = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
    let matrix = [];
    let combined = (key + letters);
    for (let c of combined) {
        if (!seen[c]) {
            matrix.push(c);
            seen[c] = true;
        }
    }
    return matrix;
}

function findPos(matrix, letter) {
    let i = matrix.indexOf(letter);
    return [Math.floor(i / 5), i % 5];
}

function prepareText(text) {
    text = text.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
    let res = '';
    for (let i = 0; i < text.length; i++) {
        res += text[i];
        if (i < text.length - 1 && text[i] === text[i + 1]) res += 'X';
    }
    if (res.length % 2 !== 0) res += 'X';
    return res;
}

function encrypt() {
    let text = document.getElementById('plaintext').value;
    let key = document.getElementById('key').value;
    let matrix = generateMatrix(key);
    let pre = prepareText(text);
    let res = '';
    for (let i = 0; i < pre.length; i += 2) {
        let a = pre[i],
            b = pre[i + 1];
        let [r1, c1] = findPos(matrix, a);
        let [r2, c2] = findPos(matrix, b);
        if (r1 === r2) {
            res += matrix[r1 * 5 + (c1 + 1) % 5] + matrix[r2 * 5 + (c2 + 1) % 5];
        } else if (c1 === c2) {
            res += matrix[((r1 + 1) % 5) * 5 + c1] + matrix[((r2 + 1) % 5) * 5 + c2];
        } else {
            res += matrix[r1 * 5 + c2] + matrix[r2 * 5 + c1];
        }
    }
    document.getElementById('result').innerText = res;
}

function decrypt() {
    let text = document.getElementById('plaintext').value.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
    let key = document.getElementById('key').value;
    let matrix = generateMatrix(key);
    let res = '';
    for (let i = 0; i < text.length; i += 2) {
        let a = text[i],
            b = text[i + 1];
        let [r1, c1] = findPos(matrix, a);
        let [r2, c2] = findPos(matrix, b);
        if (r1 === r2) {
            res += matrix[r1 * 5 + (c1 + 4) % 5] + matrix[r2 * 5 + (c2 + 4) % 5];
        } else if (c1 === c2) {
            res += matrix[((r1 + 4) % 5) * 5 + c1] + matrix[((r2 + 4) % 5) * 5 + c2];
        } else {
            res += matrix[r1 * 5 + c2] + matrix[r2 * 5 + c1];
        }
    }
    document.getElementById('result').innerText = res;
}