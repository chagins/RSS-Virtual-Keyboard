import Key from './key';
import keyCodesObjs from './keycodes';

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
    this.container = null;
  }

  /**
   * Creates a virtual keyboard and fills it with keys
   * @return {HTMLElement} DOM element of the keyboard container
   */
  create() {
    const keyboard = document.createElement('div');
    keyboard.id = this.id;
    this.parentContainer.appendChild(keyboard);
    this.container = keyboard;
    this.#createKeys();
    return keyboard;
  }

  /**
   * Call a virtual button press
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
    const key = this.keys.get(code);
    key.keyDown({
      altKey, ctrlKey, shiftKey, repeat,
    });
  }

  /**
   * Call a virtual button up
   * @param {Object} key - the virtual key
   * @param {String} key.code - key code
   * @param {Boolean} key.altKey - ALT key flag
   * @param {Boolean} key.ctrlKey - CTRL key flag
   * @param {Boolean} key.shiftKey - SHIFT key flag
   */
  keyUp({
    code, altKey, ctrlKey, shiftKey,
  }) {
    const key = this.keys.get(code);
    key.keyUp({
      altKey, ctrlKey, shiftKey,
    });
  }

  #createKeys() {
    keyCodesObjs.forEach((item) => {
      const key = new Key({
        code: item.code, key: item.key, size: item.size, parentContainer: this.container,
      });
      key.create();
      this.keys.set(key.code, key);
    });
  }
}
