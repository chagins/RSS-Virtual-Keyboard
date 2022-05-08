import Key from './key';
import keyCodesEn from './keycodes_en';
import keyCodesRu from './keycodes_ru';
import TextArea from './textarea';

export default class Keyboard {
  /**
   * Represents a virtual keyboard
   * @constructor
   * @param {Object} keyboard - the virtual keyboard
   * @param {String} keyboard.id - DOM element.id
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
    this.loadStorageLang();
    if (this.language === 'EN') this.#createKeys(keyCodesEn);
    if (this.language === 'RU') this.#createKeys(keyCodesRu);
    this.keyboard.addEventListener('mousedown', this.keyVirtualDown.bind(this));
    this.keyboard.addEventListener('mouseup', this.keyVirtualUp.bind(this));
    return keyboard;
  }

  loadStorageLang() {
    if (localStorage.getItem('RSS_LANGUAGE')) {
      this.language = localStorage.getItem('RSS_LANGUAGE');
    } else {
      this.language = 'EN';
    }
  }

  saveStorageLang() {
    localStorage.setItem('RSS_LANGUAGE', this.language);
  }

  /**
   * Call a virtual button press from physical button
   * @param {Object} key - the virtual key
   * @param {String} key.code - key code
   * @param {Boolean} key.altKey - ALT key flag
   * @param {Boolean} key.ctrlKey - CTRL key flag
   * @param {Boolean} key.shiftKey - SHIFT key flag
   * @param {Boolean} key.repeat - repeated key flag
   */
  keyDown({
    code, altKey, ctrlKey, shiftKey, repeat, event,
  }) {
    if (!code) return;
    const key = this.keys.get(code);
    if (key) {
      TextArea.atctivateTextArea();
      key.keyDown({
        altKey, ctrlKey, shiftKey, repeat,
      });
      this.keyDownSpecial({ key, event });
    }
  }

  /**
   * Processing special keys down
   * @param {Object} key - the virtual key (Shift, CapsLock and etc)
   */
  keyDownSpecial({ key, event }) {
    switch (key.key) {
      case 'Shift':
        this.switchToUpperCase();
        this.keyboard.classList.add('upper');
        this.switchOnShiftKeys();
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
      case 'Tab':
        if (event) {
          event.preventDefault();
          TextArea.controlInput('Tab');
        }
        break;
      default:
        break;
    }
  }

  switchToUpperCase() {
    this.keys.forEach((value, key) => {
      const btnKey = this.keys.get(key);
      if (btnKey.type === 'text') {
        btnKey.key = btnKey.key.toUpperCase();
      }
    });
  }

  switchOnShiftKeys() {
    this.keys.forEach((value, key) => {
      const btnKey = this.keys.get(key);
      if (btnKey.shiftAnalogue) {
        btnKey.button.innerText = btnKey.shiftAnalogue;
      }
    });
  }

  /**
   * Call a virtual button up from physical button
   * @param {Object} key - the virtual key
   * @param {String} key.code - key code
   * @param {Boolean} key.altKey - ALT key flag
   * @param {Boolean} key.ctrlKey - CTRL key flag
   * @param {Boolean} key.shiftKey - SHIFT key flag
   */
  keyUp({
    code, altKey, ctrlKey, shiftKey,
  }) {
    if (!code) return;
    const key = this.keys.get(code);
    if (key) {
      key.keyUp({
        altKey, ctrlKey, shiftKey,
      });
      this.keyUpSpecial(key);
    }
    // TextArea.atctivateTextArea();
  }

  /**
   * Processing special keys up
   * @param {Object} key - the virtual key (Shift, CapsLock and etc)
   */
  keyUpSpecial(key) {
    switch (key.key) {
      case 'Shift':
        this.switchToLowerCase();
        this.keyboard.classList.remove('upper');
        this.switchOffShiftKeys();
        break;
      case 'Alt':
        if (key.ctrlKey) {
          this.switchLanguage();
        }
        break;
      default:
        break;
    }
  }

  switchLanguage() {
    switch (this.language) {
      case 'EN':
        this.language = 'RU';
        this.#createKeys(keyCodesRu);
        break;
      case 'RU':
        this.language = 'EN';
        this.#createKeys(keyCodesEn);
        break;
      default:
        break;
    }
  }

  switchToLowerCase() {
    this.keys.forEach((value, key) => {
      const btnKey = this.keys.get(key);
      if (btnKey.type === 'text') {
        btnKey.key = btnKey.key.toLowerCase();
      }
    });
  }

  switchOffShiftKeys() {
    this.keys.forEach((value, key) => {
      const btnKey = this.keys.get(key);
      if (btnKey.shiftAnalogue) {
        btnKey.button.innerText = btnKey.key;
      }
    });
  }

  keyVirtualDown(event) {
    const code = event.target.id;
    if (!code) return;
    const key = this.keys.get(code);
    if (key) {
      key.keyDown({});
      switch (key.type) {
        case 'text':
          TextArea.textInput(key.key);
          break;
        case 'control':
          TextArea.controlInput(code);
          this.keyDownSpecial({ key });
          break;
        default:
          break;
      }
    }
  }

  keyVirtualUp(event) {
    const code = event.target.id;
    if (!code) return;
    const key = this.keys.get(code);
    if (key) {
      switch (key.type) {
        case 'lang':
          this.switchLanguage();
          break;
        case key.type:
          key.keyUp({});
          this.keyUpSpecial(key);
          break;
        default:
          break;
      }
    }
  }

  #createKeys(keyCodesLang) {
    const keyCodes = keyCodesLang;
    this.keys.clear();
    this.keyboard.innerHTML = '';
    keyCodes.forEach((item) => {
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
    this.saveStorageLang();
  }
}
