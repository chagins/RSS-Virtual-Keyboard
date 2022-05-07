export default class Key {
  /**
   * Represents a virtual keyboard key
   * @constructor
   * @param {Object} key - the virtual keyboard key
   * @param {String} key.code - code of key {@link Key#code}
   * @param {String} key.key - label of key
   * @param {String} key.size - size of key (standard|medium|wide|full|space)
   * @param {HTMLElement} key.parentContainer - DOM parent element
   */
  constructor({
    code, key, size, parentContainer,
  }) {
    this.code = code;
    this.key = key;
    this.size = size;
    this.parentContainer = parentContainer;
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
    return key;
  }
}
