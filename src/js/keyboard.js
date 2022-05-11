import Key from './key';
import keyCodesEn from './keycodes_en';
import keyCodesRu from './keycodes_ru';
import TextArea from './textarea';

/** local storage variable for language settings
 * @constant
 * @type {string}
 * @default
 */
const LANG_LOCAL_VAR = 'RSS_LANGUAGE';

/** default language for keys
 * @constant
 * @type {string}
 * @default
 */
const DEFAULT_LANG = 'EN';

/** keys data arrays for different languages
 * @constant
 * @type {object}
 * @default
 */
const KEY_CODES = {
  EN: keyCodesEn,
  RU: keyCodesRu,
};

/** Class represents a virtual keyboard */
export default class Keyboard {
  /**
   * initialize a virtual keyboard object
   * @constructor
   * @param {Object} keyboard - the virtual keyboard
   * @param {String} keyboard.id - element id
   * @param {HTMLElement} keyboard.parentContainer - DOM parent element
   */
  constructor({ id, parentContainer }) {
    this.id = id;
    this.parentContainer = parentContainer;
    this.keys = new Map();
    this.keyboard = null;
    this.isCapsLockOn = false;
    this.language = null;
  }

  /**
   * Creates a virtual keyboard and fills it with keys
   * @return {HTMLElement} DOM element of the keyboard container
   */
  create() {
    const keyboard = document.createElement('div');
    keyboard.id = this.id;
    this.parentContainer.appendChild(keyboard);
    this.keyboard = keyboard;
    this.loadKeys();
    this.keyboard.addEventListener('mousedown', this.keyVirtualDown.bind(this));
    this.keyboard.addEventListener('mouseup', this.keyVirtualUp.bind(this));
    return keyboard;
  }

  /**
   * Call a virtual button press from physical button
   * @event document#keydown - keyboard keydown event
   */
  keyDown({ event }) {
    if (!event.code) return;
    const key = this.keys.get(event.code);
    if (key) {
      event.preventDefault();
      TextArea.activateTextArea();
      this.keyVirtualDown(event);
    }
  }

  /**
   * Call a virtual button up from physical button
   * @event document#keyup - keyboard keyup event
   */
  keyUp({ event }) {
    if (!event.code) return;
    const key = this.keys.get(event.code);
    if (key) {
      event.preventDefault();
      TextArea.activateTextArea();
      this.keyVirtualUp(event);
    }
  }

  /**
   * Processing control keys down
   * @param {Object} key - the virtual key (Shift, CapsLock and etc)
   */
  keyDownControl({ key /* , event */ }) {
    switch (key.key) {
      case 'Shift':
        if (this.isCapsLockOn) {
          this.switchToLowerCase();
          this.keyboard.classList.remove('upper');
          this.switchOnShiftKeys();
        } else {
          this.switchToUpperCase();
          this.keyboard.classList.add('upper');
          this.switchOnShiftKeys();
        }
        break;
      case 'CapsLock':
        if (this.isCapsLockOn) {
          this.switchToLowerCase();
          this.keyboard.classList.remove('caps', 'upper');
          this.isCapsLockOn = false;
        } else {
          this.switchToUpperCase();
          this.keyboard.classList.add('caps', 'upper');
          this.isCapsLockOn = true;
        }
        break;
      default:
        break;
    }
  }

  /**
   * Processing control keys up
   * @param {Object} key - the virtual key (Shift, CapsLock and etc)
   */
  keyUpControl({ key }) {
    switch (key.key) {
      case 'Shift':
        if (this.isCapsLockOn) {
          this.switchOffShiftKeys();
          this.keyboard.classList.add('upper');
          this.switchToUpperCase();
        } else {
          this.switchToLowerCase();
          this.keyboard.classList.remove('upper');
          this.switchOffShiftKeys();
        }
        break;
      case 'Alt':
        if (key.ctrlKey) {
          this.switchLanguage();
        }
        break;
      default:
        break;
    }
    TextArea.activateTextArea();
  }

  /**
   * Call a virtual button press from mouse
   * @event document#mousedown - mouse mousedown event
   */
  keyVirtualDown(event) {
    let code = null;
    if (event.type === 'mousedown') {
      code = event.target.id;
    } else if (event.type === 'keydown') {
      code = event.code;
    }
    if (!code) return;
    const key = this.keys.get(code);
    if (key) {
      key.keyDown({
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        repeat: event.repeat,
      });
      switch (key.type) {
        case 'text':
          TextArea.textInput(key.key);
          break;
        case 'control':
          TextArea.controlInput(code);
          this.keyDownControl({ key });
          break;
        default:
          break;
      }
    }
  }

  /**
   * Call a virtual button up from mouse
   * @event document#mouseup - mouse mouseup event
   */
  keyVirtualUp(event) {
    let code = null;
    if (event.type === 'mouseup') {
      code = event.target.id;
    } else if (event.type === 'keyup') {
      code = event.code;
    }
    if (!code) return;
    const key = this.keys.get(code);
    if (key) {
      key.keyUp({
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
      });
      switch (key.type) {
        case 'lang':
          this.switchLanguage();
          break;
        case 'control':
          this.keyUpControl({ key });
          break;
        default:
          break;
      }
    }
    TextArea.activateTextArea();
  }

  /**
   * Switch keyboard keys to upper case
   */
  switchToUpperCase() {
    this.keys.forEach((value, key) => {
      const btnKey = this.keys.get(key);
      if (btnKey.type === 'text') {
        btnKey.key = btnKey.key.toUpperCase();
      }
    });
  }

  /**
   * Switch keyboard keys to lower case
   */
  switchToLowerCase() {
    this.keys.forEach((value, key) => {
      const btnKey = this.keys.get(key);
      if (btnKey.type === 'text') {
        btnKey.key = btnKey.key.toLowerCase();
      }
    });
  }

  /**
   * Show shift analogue keyboard keys
   */
  switchOnShiftKeys() {
    this.keys.forEach((value, key) => {
      const btnKey = this.keys.get(key);
      if (btnKey.shiftAnalogue) {
        btnKey.button.innerText = btnKey.shiftAnalogue;
        // btnKey.backupKey = btnKey.key;
        btnKey.key = btnKey.shiftAnalogue;
      }
    });
  }

  /**
   * Hide shift analogue keyboard keys
   */
  switchOffShiftKeys() {
    this.keys.forEach((value, key) => {
      const btnKey = this.keys.get(key);
      if (btnKey.shiftAnalogue) {
        btnKey.key = btnKey.backupKey;
        btnKey.button.innerText = btnKey.key;
      }
    });
  }

  /**
   * Switch language keys
   */
  switchLanguage() {
    switch (this.language) {
      case 'EN':
        this.language = 'RU';
        break;
      case 'RU':
        this.language = 'EN';
        break;
      default:
        break;
    }
    this.createKeys(KEY_CODES[this.language]);
  }

  /**
   * Load storage settings and run key's creation
   */
  loadKeys() {
    if (localStorage.getItem(LANG_LOCAL_VAR)) {
      this.language = localStorage.getItem(LANG_LOCAL_VAR);
    }

    if (this.language in KEY_CODES) {
      this.createKeys(KEY_CODES[this.language]);
    } else {
      this.language = DEFAULT_LANG;
      this.createKeys(KEY_CODES[this.language]);
    }
  }

  /**
   * Save storage settings
   */
  saveKeys() {
    localStorage.setItem(LANG_LOCAL_VAR, this.language);
  }

  /**
   * Create keyboard keys
   * @param {Array} keyCodesLang - array with keys language data
   */
  createKeys(keyCodesLang) {
    this.keys.clear();
    this.keyboard.innerHTML = '';
    keyCodesLang.forEach((item) => {
      const key = new Key({
        code: item.code,
        key: item.key,
        size: item.size,
        type: item.type,
        shiftAnalogue: item.shiftAnalogue,
        parentContainer: this.keyboard,
      });
      key.create();
      this.keys.set(key.code, key);
    });
    if (this.isCapsLockOn) {
      this.switchToUpperCase();
      this.keyboard.classList.add('caps', 'upper');
      this.isCapsLockOn = true;
    }
    this.saveKeys();
  }
}
