function modInverse(a, m) {
    a = ((a % m) + m) % m;
    for (let x = 1; x < m; x++)
        if ((a * x) % m === 1) return x;
    return null;
}

function encrypt() {
    let text = document.getElementById('plaintext').value.toUpperCase();
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let res = text.split('').map(c => {
        if (c.match(/[A-Z]/)) {
            let x = c.charCodeAt(0) - 65;
            return String.fromCharCode(((a * x + b) % 26) + 65);
        } else return c;
    }).join('');
    document.getElementById('result').innerText = res;
}

function decrypt() {
    let text = document.getElementById('plaintext').value.toUpperCase();
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let invA = modInverse(a, 26);
    if (invA === null) { alert("a không nghịch đảo mod 26"); return; }
    let res = text.split('').map(c => {
        if (c.match(/[A-Z]/)) {
            let y = c.charCodeAt(0) - 65;
            return String.fromCharCode(((invA * (y - b + 26 * 100)) % 26) + 65);
        } else return c;
    }).join('');
    document.getElementById('result').innerText = res;
}