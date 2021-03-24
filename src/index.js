import Title from './components/title'
import Image from './components/image'
import Button from './components/button'
import Warning from './templates/warning.html'
import "./styles/warning.css"
import fraseTxt from './files/frase.txt'
import descricao from './files/descricao.json'

const title = new Title();

title.create("Primeira página");

const image = new Image();

image.insertBobImage();

const button = new Button();

button.create();

//Babel spread (coloca todo o resto que sobra, dentro de um objeto)

const obj = { a: 1, b: 2, c: 3, d: 4}

let {a, b, ...teste} = obj;

console.log(a)
console.log(b)
console.log(teste)

//import de html

const body = document.querySelector('body');
body.innerHTML += Warning;

//import arquivo de texto
const frase = fraseTxt;

console.log(frase)
console.log(frase.toUpperCase())

//import aqruvo json 

const pessoa = descricao

console.log(pessoa)