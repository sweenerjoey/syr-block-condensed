const pos = { x : 0, y : 0 };

const saveCursorPosition = function(x, y) {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--cursor-x', pos.x);
}

document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); })
