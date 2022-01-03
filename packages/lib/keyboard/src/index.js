export default class Keyboard {
  constructor(obj) {
    if (typeof obj !== 'object') {
      console.error('aKeyboard: The obj parameter needs to be an object <In "new aKeyboard()">');
      return;
    }
    
    this.obj = obj;

    const el = document.querySelector(obj.el);

    let keyboardStyle = '';
    if (typeof obj.style === 'object') {
      for (let i in obj.style) {
        keyboardStyle += i + ': ' + obj.style[i] + ';';
      }
    }

    let html = '<div class="akeyboard-keyboard' + (obj.fixedBottomCenter ? ' akeyboard-keyboard-fixedBottomCenter' : '') + '" style="' + keyboardStyle + '">';

    // init keys
    let numberKeys = [];
    for (let i = 1; i < 10; i++) {
      numberKeys.push(i.toString());
    }
    numberKeys.push('0');

    const keys = obj.keys || [
      ['`'].concat(numberKeys).concat([
        '-', '=', 'Delete'
      ]),
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
      ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
      ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
      ['Ctrl','Alt','Space','Alt','Ctrl']
    ];
    const classKey = [
      ['192','49','50','51','52','53','54','55','56','57','48','189','187','8'],
      ['9', '81', '87', '69', '82', '84', '89', '85', '73', '79', '80', '219', '221', '220'],
      ['20', '65', '83', '68', '70', '71', '72', '74', '75', '76', '186', '220', '13'],
      ['16', '90', '88', '67', '86', '66', '78', '77', '188', '190', '191', '16'],
      ['17','18','32','18','17']
    ]

    let thisKeys
    const shiftKeysList = [],
      capsKeysList = [];
    for (let i = 0; i < keys.length; i++) {
      shiftKeysList.push([]);
      capsKeysList.push([]);
      thisKeys = keys[i];
      for (let a = 0; a < thisKeys.length; a++) {
        if (thisKeys[a].length === 1) {
          capsKeysList[i].push(thisKeys[a].toUpperCase());
          switch (thisKeys[a]) {
            case '`':
              shiftKeysList[i].push('~');
              continue;
            case '1':
              shiftKeysList[i].push('!');
              continue;
            case '2':
              shiftKeysList[i].push('@');
              continue;
            case '3':
              shiftKeysList[i].push('#');
              continue;
            case '4':
              shiftKeysList[i].push('$');
              continue;
            case '5':
              shiftKeysList[i].push('%');
              continue;
            case '6':
              shiftKeysList[i].push('^');
              continue;
            case '7':
              shiftKeysList[i].push('&');
              continue;
            case '8':
              shiftKeysList[i].push('*');
              continue;
            case '9':
              shiftKeysList[i].push('(');
              continue;
            case '0':
              shiftKeysList[i].push(')');
              continue;
            case '-':
              shiftKeysList[i].push('_');
              continue;
            case '=':
              shiftKeysList[i].push('+');
              continue;
            case '[':
              shiftKeysList[i].push('{');
              continue;
            case ']':
              shiftKeysList[i].push('}');
              continue;
            case '\\':
              shiftKeysList[i].push('|');
              continue;
            case ';':
              shiftKeysList[i].push(':');
              continue;
            case '\'':
              shiftKeysList[i].push('"');
              continue;
            case ',':
              shiftKeysList[i].push('<');
              continue;
            case '.':
              shiftKeysList[i].push('>');
              continue;
            case '/':
              shiftKeysList[i].push('?');
              continue;
          }
          shiftKeysList[i].push(thisKeys[a].toUpperCase());
          continue;
        }
        shiftKeysList[i].push(thisKeys[a]);
        capsKeysList[i].push(thisKeys[a]);
      }
    }

    for (let i = 0; i < keys.length; i++) {
      thisKeys = keys[i];
      html += '<div class="akeyboard-keyboard-innerKeys">';
      for (let a = 0; a < thisKeys.length; a++) {
        html += `<div class="akeyboard-keyboard-keys akeyboard-keyboard-keys-${classKey[i][a]} ">${thisKeys[a]}</div>`;
      }
      html += '</div>';
    }

    html += '</div>';
    const changeKeys = (keysArg)=>{
      let thisEl;
      const keysInnerEl = document.querySelectorAll(obj.el + ' .akeyboard-keyboard-innerKeys');
          for (let i = 0; i < keysInnerEl.length; i++) {
            thisEl = keysInnerEl[i];
            for (let a = 0; a < thisEl.childNodes.length; a++) {
              thisEl.childNodes[a].innerHTML = keysArg[i][a];
            }
          }
    }
    el.innerHTML = html;
      // bind the shift and caps key
      const elKeysEl = document.querySelectorAll(obj.el + ' .akeyboard-keyboard-keys-16');
      elKeysEl.forEach(el => {
        el.onclick = function () {
          if (!this.isShift) {
            const caps = document.querySelector(obj.el + ' .akeyboard-keyboard-keys-20');
            if (caps && caps.isCaps) {
              return;
            }

            // shift
            el.isShift = true;
            el.innerHTML = 'SHIFT';
            this.classList.add('keyboard-keyboard-keys-focus');
            changeKeys(shiftKeysList)
            return;
          }
          el.isShift = false;
          el.innerHTML = 'Shift';
          this.classList.remove('keyboard-keyboard-keys-focus');
          changeKeys(keys)
        };
      });
    let isCaps=false
      const elCapsEl = document.querySelectorAll(obj.el + ' .akeyboard-keyboard-keys-20');
      elCapsEl.forEach(el => {
        el.onclick = function () {
          if (!isCaps) {
            const shift = document.querySelector(obj.el + ' .akeyboard-keyboard-keys-16');
            if (shift && shift.isShift) {
              return;
            }
            this.classList.add('keyboard-keyboard-keys-focus');
            changeKeys(capsKeysList)
          }else{
            this.classList.remove('keyboard-keyboard-keys-focus');
            changeKeys(keys)
          }
  
            isCaps = !isCaps;
        };
      });
    const addColor = (key)=>{
      const dom = document.querySelector(`.akeyboard-keyboard-keys-${key}`)
      if(!dom.style.background)dom.style.background = '#1e9fff'
    }
    const removeColor = (key)=>{
      const dom = document.querySelector(`.akeyboard-keyboard-keys-${key}`)
      if(dom.style.background)dom.style.background = ''
    }
    
    this.keydown =(e)=>{
      let keyCode = e.keyCode
      if(keyCode == '20')  { //Caps
        if(isCaps) {
          changeKeys(keys)
          removeColor(keyCode)
        }
        else {
          changeKeys(capsKeysList)
          addColor(keyCode)
        }
        isCaps = !isCaps
      }else{
        if(keyCode == '16')  changeKeys(shiftKeysList)
        addColor(keyCode)
      }
      
    }
    this.keyup =(e)=>{
      let keyCode = e.keyCode
      if(keyCode == '20') return //Caps
      if(keyCode == '16') changeKeys(keys)//Shift
      removeColor(keyCode)
    }
    document.addEventListener('keydown',this.keydown)
    document.addEventListener('keyup',this.keyup)
  }

  inputOn (inputEle, type, fn, customClick) {
    if (typeof inputEle !== 'string') {
      console.error('aKeyboard: The inputEle parameter needs to be a string <In "aKeyboard.inputOn()">');
      return;
    }

    if (typeof type !== 'string') {
      console.error('aKeyboard: The type parameter needs to be a string <In "aKeyboard.inputOn()">');
      return;
    }

    const inputEl = document.querySelector(inputEle),
      elKeysEl = document.querySelectorAll(this.obj.el + ' .akeyboard-keyboard-keys');

    for (let i = 0; i < elKeysEl.length; i++) {
      if (['Shift', 'Caps', 'Ctrl','Alt'].includes(elKeysEl[i].innerHTML)) {
        continue;
      }

      if (elKeysEl[i].innerHTML === 'Delete') {
        elKeysEl[i].onclick = function () {
          inputEl[type] = inputEl[type].substr(0, inputEl[type].length - 1);
          fn('Delete', inputEl[type]);
        };
        continue;
      }

      if (elKeysEl[i].innerHTML === 'Tab') {
        elKeysEl[i].onclick = function () {
          inputEl[type] += '  ';
          fn('Tab', inputEl[type]);
        };
        continue;
      }

      if (elKeysEl[i].innerHTML === 'Enter') {
        elKeysEl[i].onclick = function () {
          inputEl[type] += '\n';
          fn('Enter', inputEl[type]);
        };
        continue;
      }

      if (elKeysEl[i].innerHTML === 'Space') {
        elKeysEl[i].onclick = function () {
          inputEl[type] += ' ';
          fn('Space', inputEl[type]);
        };
        continue;
      }

      if (customClick && typeof customClick === 'object' && Object.keys(customClick).length > 0 && customClick[elKeysEl[i].innerHTML]) {
        elKeysEl[i].onclick = customClick[elKeysEl[i].innerHTML];
      } else {
        elKeysEl[i].onclick = function () {
          inputEl[type] += this.innerText;
          fn(this.innerText, inputEl[type]);
        };
      }
    }
  }

  onclick (btn, fn) {
    if (typeof btn !== 'string') {
      console.error('aKeyboard: The btn parameter needs to be a string <In "aKeyboard.onclick()">');
      return;
    }

    if (typeof fn !== 'function') {
      console.error('aKeyboard: The fn parameter needs to be a function <In "aKeyboard.onclick()">');
      return;
    }

    let elKeysEl = document.querySelector(this.obj.el + ' .akeyboard-keyboard-keys-' + btn);
    if (elKeysEl) elKeysEl.onclick = fn;
    else console.error('Can not find key: ' + btn);
  }
}

