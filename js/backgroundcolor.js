var r = document.querySelector(':root');
var def = getComputedStyle(r).getPropertyValue('--background-color');
function backgroundcolor(x){
    if (isColor(x)){
        r.style.setProperty('--background-color', x);
    } else {
        alert('Invalid color');
    }
    document.getElementById('colorinput').value = '';
}

const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}