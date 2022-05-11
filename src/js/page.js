export default class Page {
  /**
   * Represents a page of site
   * @constructor
   * @param {HTMLDivElement} container - DOM parent div element
   */
  constructor({ parentContainer }) {
    this.parentContainer = parentContainer;
  }

  /**
   * Creates a standart page with header, title, main and footer
   * @return {{Object}} page's elements object: header, title, main, footer
   */
  create() {
    const header = document.createElement('header');
    header.id = 'header';
    this.parentContainer.appendChild(header);

    const title = document.createElement('h1');
    title.id = 'title';
    title.innerText = 'RSS Virtual Keyboard';
    header.appendChild(title);

    const main = document.createElement('main');
    main.id = 'main';
    this.parentContainer.appendChild(main);

    const footer = document.createElement('footer');
    footer.id = 'footer';
    this.parentContainer.appendChild(footer);

    return {
      header, title, main, footer,
    };
  }
}
