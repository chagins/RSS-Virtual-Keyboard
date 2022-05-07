import Key from './key';

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

  #createKeys() {
    // test code
    for (let i = 1; i < 11; i += 1) {
      const key = new Key({
        code: i, key: i, size: 'standard', parentContainer: this.container,
      });
      key.create();
    }
  }
}
