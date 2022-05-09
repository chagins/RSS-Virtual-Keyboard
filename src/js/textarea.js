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
    let str = textArea.value;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    str = `${str.slice(0, start)}${symbol}${str.slice(end)}`;
    textArea.value = str;
    textArea.selectionStart = start + 1;
    textArea.selectionEnd = start + 1;
  }

  /**
   * Allows to use control/edit buttons
   * @param {String} symbol - control button code
   */
  static controlInput(symbol) {
    const textArea = TextArea.#textarea;
    let str = textArea.value;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    switch (symbol) {
      case 'Backspace':
        if (end === 0) break;

        if (start === end) {
          str = `${str.slice(0, start - 1)}${str.slice(end)}`;
          textArea.value = str;
          textArea.selectionStart = start - 1;
          textArea.selectionEnd = start - 1;
        } else {
          str = `${str.slice(0, start)}${str.slice(end)}`;
          textArea.value = str;
          textArea.selectionStart = start;
          textArea.selectionEnd = start;
        }
        break;
      case 'Tab':
        str = `${str.slice(0, start)}\t${str.slice(end)}`;
        textArea.value = str;
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1;
        break;
      case 'Enter':
        str = `${str.slice(0, start)}\r\n${str.slice(end)}`;
        textArea.value = str;
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1;
        break;
      case 'Space':
        str = `${str.slice(0, start)} ${str.slice(end)}`;
        textArea.value = str;
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1;
        break;
      case 'Delete':
        if (start === end) {
          str = `${str.slice(0, start)}${str.slice(end + 1)}`;
        } else {
          str = `${str.slice(0, start)}${str.slice(end)}`;
        }
        textArea.value = str;
        textArea.selectionStart = start;
        textArea.selectionEnd = start;
        break;
      default:
        break;
    }
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
