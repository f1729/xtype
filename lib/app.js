import {
  makeCreateBoard
} from './actions.js';

import store from './store';

const createBoard = makeCreateBoard(store);

const board = createBoard(['a', 'b']);



console.log({store});

