import './assets/favicon.ico';
import './styles/style.scss';
import Page from './js/page';
import Keyboard from './js/keyboard';
import TextArea from './js/textarea';

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

const page = new Page({ parentContainer: container });
const { main, footer } = page.create();

const textArea = new TextArea({ id: 'textarea', parentContainer: main });
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

const hintDiscord = document.createElement('p');
hintDiscord.id = 'hintDiscord';
hintDiscord.innerHTML = 'Please,'
  + '👉<a href="https://discordapp.com/users/878959404060405801">DISCORD</a> '
  + 'me if you find any errors.';
footer.appendChild(hintDiscord);

document.addEventListener('keydown', (e) => {
  keyboard.keyDown({ event: e });
});

document.addEventListener('keyup', (e) => {
  keyboard.keyUp({ event: e });
});
