export default class TextArea {
  static #textarea = null;

  static self = null;

  /**
   * Represents a text area
   * @constructor
   * @param {Object} textarea - the textarea element
   * @param {String} textarea.id - element id
   * @param {HTMLElement} textarea.parentContainer - DOM parent element
   */
  constructor({ id, parentContainer }) {
    this.id = id;
    this.parentContainer = parentContainer;
    TextArea.self = this;
  }

  /**
   * Creates a text field with the ability to enter text
   * @return {HTMLElement} DOM element of the textarea
   */
  create() {
    TextArea.#textarea = document.createElement('textarea');
    TextArea.#textarea.id = this.id;
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
      case 'ArrowLeft':
        textArea.selectionStart = start - 1;
        textArea.selectionEnd = start - 1;
        break;
      case 'ArrowRight':
        if (str.length === start && start === end) {
          textArea.selectionStart = 0;
          textArea.selectionEnd = textArea.selectionStart;
        } else {
          textArea.selectionStart = start + 1;
          textArea.selectionEnd = start + 1;
        }
        break;
      case 'ArrowUp':
        (() => {
          const linesCount = (str.slice(0, start).match(/\n/g) || []).length + 1;
          if (linesCount < 2) {
            TextArea.controlInput('ArrowLeft');
            return;
          }
          const brakeCurrent = str.slice(0, start).lastIndexOf('\n');
          const diffCurrent = start - brakeCurrent - 1;
          const brakePrev = str.slice(0, brakeCurrent).lastIndexOf('\n');
          const diffPrev = brakeCurrent - brakePrev - 1;
          if (diffPrev < diffCurrent) {
            textArea.selectionStart = brakeCurrent;
            textArea.selectionEnd = textArea.selectionStart;
          } else {
            textArea.selectionStart = brakePrev + diffCurrent + 1;
            textArea.selectionEnd = textArea.selectionStart;
          }
        })();
        break;
      case 'ArrowDown':
        (() => {
          const linesCount = (str.slice(start).match(/\n/g) || []).length + 1;
          if (linesCount < 2) {
            TextArea.controlInput('ArrowRight');
            return;
          }
          const brakeCurrent = str.slice(0, start).lastIndexOf('\n');
          const diffCurrent = start - brakeCurrent - 1;
          const brakeNext = str.indexOf('\n', start);
          let brakeEnd = str.indexOf('\n', brakeNext + 1);
          if (brakeEnd === -1) brakeEnd = str.length;
          const diffNext = brakeEnd - brakeNext - 1;
          if (diffNext < diffCurrent) {
            textArea.selectionStart = brakeEnd;
            textArea.selectionEnd = textArea.selectionStart;
          } else {
            textArea.selectionStart = brakeNext + diffCurrent + 1;
            textArea.selectionEnd = textArea.selectionStart;
          }
        })();
        break;
      default:
        break;
    }
  }

  static getTextArea() {
    return TextArea.#textarea;
  }

  static getSelf() {
    return TextArea.self;
  }

  static activateTextArea() {
    TextArea.#textarea.focus();
  }
}
