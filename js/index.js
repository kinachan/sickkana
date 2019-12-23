let inputField;
let result;

const renderHtml = (text) => {
  result.innerText = text;
};

const onKeyup = (ev) => {
  lastKeyCode = 0;
}

const onKeyDown = (ev) => {
  if (ev.keyCode !== 13) return;
  ev.preventDefault();
  const text = kanaChange(inputField.value);
  renderHtml(text);
};

const kanaChange = text => {
  return text.replace(/[\u3041-\u3096]/g, function(match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

const onLoad = () => {
  inputField = document.getElementById('Input');
  result = document.getElementById('Result');

  inputField.addEventListener('keydown', onKeyDown);
}

onLoad();