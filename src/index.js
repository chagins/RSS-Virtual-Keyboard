import './assets/favicon.ico';
import './styles/style.scss';

const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const header = document.createElement('header');
header.className = 'header';
container.appendChild(header);

const title = document.createElement('h1');
title.className = 'title';
title.innerText = 'RSS Virtual Keyboard';
header.appendChild(title);
