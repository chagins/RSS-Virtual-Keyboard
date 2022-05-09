export default class Key {
  /**
   * Represents a virtual keyboard key
   * @constructor
   * @param {Object} key - the virtual keyboard key
   * @param {String} key.code - code of key {@link Key#code}
   * @param {String} key.key - label of key
   * @param {String} key.size - size of key (standard|medium|wide|full|space)
   * @param {String} key.type - type of key (text|control)
   * @param {String} key.shiftAnalogue - key shift analogue (text|control)
   * @param {HTMLElement} key.parentContainer - DOM parent element
   */
  constructor({
    code, key, size, type, shiftAnalogue, parentContainer,
  }) {
    this.code = code;
    this.key = key;
    this.size = size;
    this.type = type;
    this.shiftAnalogue = shiftAnalogue;
    this.parentContainer = parentContainer;
    this.button = null;
  }

  /**
   * Creates a virtual key and places it in the container
   * @return {HTMLElement} DOM element of the key
   */
  create() {
    const key = document.createElement('button');
    key.id = this.code;
    key.classList.add('key', `${this.size}`);
    key.innerText = this.key;
    this.parentContainer.appendChild(key);
    this.button = key;
    return key;
  }

  /**
   * Call a virtual button press
   * @param {Object} key - the virtual key
   * @param {Boolean} key.altKey - ALT key flag
   * @param {Boolean} key.ctrlKey - CTRL key flag
   * @param {Boolean} key.shiftKey - SHIFT key flag
   * @param {Boolean} key.repeat - repeated key flag
   */
  keyDown({
    altKey, ctrlKey, shiftKey, repeat,
  }) {
    this.button.classList.add('active');
    this.altKey = altKey;
    this.ctrlKey = ctrlKey;
    this.shiftKey = shiftKey;
    this.repeat = repeat;
  }

  /**
   * Call a virtual button up
   * @param {Object} key - the virtual key
   * @param {Boolean} key.altKey - ALT key flag
   * @param {Boolean} key.ctrlKey - CTRL key flag
   * @param {Boolean} key.shiftKey - SHIFT key flag
   */
  keyUp({
    altKey, ctrlKey, shiftKey,
  }) {
    this.button.classList.remove('active');
    this.altKey = altKey;
    this.ctrlKey = ctrlKey;
    this.shiftKey = shiftKey;
  }
}
