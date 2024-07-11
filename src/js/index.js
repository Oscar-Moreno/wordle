// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const ALL_WORDS = ['ojo', 'silla', 'casa'];
const NUMBER_OF_TRIES = 5;
const gameBoardElement = document.getElementById('game-board');
const userWordFormElement = document.getElementById('user-word-form');

let secretWord;
let currentRow = 0;
const chooseSecretWord = () => {
  const randomNumber = Math.floor(Math.random() * ALL_WORDS.length);
  secretWord = ALL_WORDS[randomNumber];
};

const createGameBoard = () => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < NUMBER_OF_TRIES; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('game-board__row');
    for (let j = 0; j < secretWord.length; j++) {
      const newLetterContainer = document.createElement('span');
      newLetterContainer.classList.add('letter');
      newRow.append(newLetterContainer);
    }
    fragment.append(newRow);
  }
  gameBoardElement.append(fragment);
};
const startGame = () => {
  chooseSecretWord();
  createGameBoard();
};
const printUserWord = userWord => {
  for (let i = 0; i < userWord.length; i++) {
    const letter = userWord[i];
    gameBoardElement.children[0].children[1].textContent = letter;
  }
};
startGame;

userWordFormElement.addEventListener('submit',event =>{
    event.preventDefault()
    const userWord =event.target.word.value
    if(secretWord.length !== userWord.length){
        console.log('La palabra tiene que tener '+secretWord.length+'letras')
        return
    }
    printUserWord(userWord)
    event.target.reset(0)
})
