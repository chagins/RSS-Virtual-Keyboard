import './assets/favicon.ico';
import './styles/style.scss';
import Page from './js/page';
import Keyboard from './js/keyboard';
import TextArea from './js/textarea';

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const page = new Page(container);
const { main } = page.create();

const textArea = new TextArea({ parentContainer: main });
textArea.create();

const keyboard = new Keyboard({ id: 'keyboard', parentContainer: main });
keyboard.create();

document.addEventListener('keydown', (e) => {
  keyboard.keyDown({
    code: e.code, altKey: e.altKey, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, repeat: e.repeat,
  });
});

document.addEventListener('keyup', (e) => {
  keyboard.keyUp({
    code: e.code, altKey: e.altKey, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey,
  });
});
