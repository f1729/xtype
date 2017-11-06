export default class Board {
  constructor(words = []) {
    this.availableWords = ['one', 'two', 'three', 'four', 'five', 'six',
      'seven', 'eight', 'nine', 'ten'
    ];
    this.words = words;
    this.attackingWordIndex = -1;
    this.lastWordAddedIndex = -1;
  }
  attack(letter) {
    const isNewWord = this.attackingWordIndex === -1;
    const newIndex = this.words.findIndex(word => word[0] == letter);
    const wordIndex = isNewWord ? newIndex : this.attackingWordIndex;
    if (wordIndex !== -1) {
      this.attackingWordIndex = wordIndex;
      this.words[wordIndex] = this.words[wordIndex].substr(1);
      if(!!!this.words[wordIndex]) this.attackingWordIndex = -1;
      this.words = this.words.filter(word => word);
    }
  }
  addWord() {
    let isValidWord = false;
    let wordIndex = this.lastWordAddedIndex + 1;
    let candidateWord;
    while (!isValidWord) {
      candidateWord = this.availableWords[wordIndex];
      isValidWord = this.words.findIndex(word => word[0] === candidateWord[0]) === -1;
      wordIndex++;
    }
    this.lastWordAddedIndex = wordIndex;
    this.words.push(candidateWord);
  }
};
