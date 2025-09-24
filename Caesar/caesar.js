function encrypt() {
    let text = document.getElementById('plaintext').value;
    let key = parseInt(document.getElementById('key').value);
    let res = text.split('').map(c => shift(c, key)).join('');
    document.getElementById('result').innerText = res;
}

function decrypt() {
    let text = document.getElementById('plaintext').value;
    let key = parseInt(document.getElementById('key').value);
    let res = text.split('').map(c => shift(c, -key)).join('');
    document.getElementById('result').innerText = res;
}

function shift(c, k) {
    if (c.match(/[a-z]/)) {
        return String.fromCharCode((c.charCodeAt(0) - 97 + k + 26 * 100) % 26 + 97);
    } else if (c.match(/[A-Z]/)) {
        return String.fromCharCode((c.charCodeAt(0) - 65 + k + 26 * 100) % 26 + 65);
    } else return c;
}