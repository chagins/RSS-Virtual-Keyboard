import './assets/favicon.ico';
import './styles/style.scss';
import Page from './js/page';
import Keyboard from './js/keyboard';

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const page = new Page(container);
const { main } = page.create();

const keyboard = new Keyboard({ id: 'keyboard', container: main });
keyboard.create();
