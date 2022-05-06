import './assets/favicon.ico';
import './styles/style.scss';
import Page from './js/page';

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const page = new Page(container);
const { main } = page.create();
