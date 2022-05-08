import './assets/favicon.ico';
import './styles/style.scss';
import Page from './js/page';
import Keyboard from './js/keyboard';
import TextArea from './js/textarea';

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const page = new Page(container);
const { main, footer } = page.create();

const textArea = new TextArea({ parentContainer: main });
textArea.create();

const keyboard = new Keyboard({ id: 'keyboard', parentContainer: main });
keyboard.create();

const hintLang = document.createElement('p');
hintLang.id = 'hintlang';
hintLang.innerText = 'Press the CTRL + ALT or 🌐 button for change the language.';
footer.appendChild(hintLang);

const hintEnv = document.createElement('p');
hintEnv.id = 'hintenv';
hintEnv.innerText = 'The keyboard was made on ⊞ Windows 11.';
footer.appendChild(hintEnv);

document.addEventListener('keydown', (e) => {
  keyboard.keyDown({
    code: e.code,
    altKey: e.altKey,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    repeat: e.repeat,
    event: e,
  });
});

document.addEventListener('keyup', (e) => {
  keyboard.keyUp({
    code: e.code, altKey: e.altKey, ctrlKey: e.ctrlKey, shiftKey: e.shiftKey,
  });
});
