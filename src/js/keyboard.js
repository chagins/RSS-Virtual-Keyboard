import Key from './key';
import keyCodesObjs from './keycodes';
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
    this.isCapsLockOn = false;
    this.#createKeys();
    this.keyboard.addEventListener('mousedown', this.keyVirtualDown.bind(this));
    this.keyboard.addEventListener('mouseup', this.keyVirtualUp.bind(this));
    return keyboard;
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
    code, altKey, ctrlKey, shiftKey, repeat,
  }) {
    if (!code) return;
    const key = this.keys.get(code);
    if (key) {
      TextArea.atctivateTextArea();
      key.keyDown({
        altKey, ctrlKey, shiftKey, repeat,
      });
      this.keyDownSpecial(key.key);
    }
  }

  /**
   * Processing special keys down
   * @param {String} key - the virtual key (Shift, CapsLock and etc)
   */
  keyDownSpecial(key) {
    switch (key) {
      case 'Shift':
        this.switchToUpperCase();
        this.keyboard.classList.add('upper');
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

  switchToUpperCase() {
    this.keys.forEach((value, key) => {
      const btnKey = this.keys.get(key);
      if (btnKey.type === 'text') {
        btnKey.key = btnKey.key.toUpperCase();
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
      this.keyUpSpecial(key.key);
    }
  }

  /**
   * Processing special keys up
   * @param {String} key - the virtual key (Shift, CapsLock and etc)
   */
  keyUpSpecial(key) {
    switch (key) {
      case 'Shift':
        this.switchToLowerCase();
        this.keyboard.classList.remove('upper');
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
          this.keyDownSpecial(key.key);
          break;
        default:
          break;
      }
    }
  }

  keyVirtualUp(event) {
    const code = event.target.id;
    if (code) {
      const key = this.keys.get(code);
      if (key) {
        key.keyUp({});
        this.keyUpSpecial(key.key);
      }
    }
  }

  #createKeys() {
    keyCodesObjs.forEach((item) => {
      const key = new Key({
        code: item.code,
        key: item.key,
        size: item.size,
        type: item.type,
        parentContainer: this.keyboard,
      });
      key.create();
      this.keys.set(key.code, key);
    });
  }
}
