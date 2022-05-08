// import keyCodesObjs from './keycodes';

export default class TextArea {
  static #textarea = null;

  static #self = null;

  /**
   * Represents a textarea
   * @constructor
   * @param {Object} textarea - the textarea element
   * @param {HTMLElement} textarea.parentContainer - DOM parent element
   */
  constructor({ parentContainer }) {
    this.parentContainer = parentContainer;
    TextArea.#self = this;
  }

  /**
   * Creates a text field with the ability to enter text
   * @return {HTMLElement} DOM element of the textarea
   */
  create() {
    TextArea.#textarea = document.createElement('textarea');
    TextArea.#textarea.id = 'textarea';
    TextArea.#textarea.autofocus = true;
    this.parentContainer.appendChild(TextArea.#textarea);
    return TextArea.#textarea;
  }

  /**
   * Allows to enter text
   * @param {String} symbol - new letter for input
   */
  static textInput(symbol) {
    const textArea = TextArea.#textarea;
    textArea.value += symbol;
  }

  /**
   * Allows to use control/edit buttons
   * @param {String} symbol - control string
   */
  static controlInput(symbol) {
    const textArea = TextArea.#textarea;
    let str = textArea.value;
    switch (symbol) {
      case 'Backspace':
        if (str.length > 0) {
          str = str.slice(0, str.length - 1);
        }
        break;
      case 'Tab':
        str += '\t';
        break;
      case 'Enter':
        str += '\r\n';
        break;
      default:
        break;
    }
    textArea.value = str;
  }

  static getTextArea() {
    return TextArea.#textarea;
  }

  static getSelf() {
    return TextArea.#self;
  }

  static atctivateTextArea() {
    TextArea.#textarea.focus();
  }
}
