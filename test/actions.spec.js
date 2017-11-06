import 'babel-polyfill';

import { assert } from 'chai';

import app from '../lib/app.js';

import actions from '../lib/actions.js';
import Board from '../lib/board.js';

describe('Attacks', function() {
  describe('valid attack', function() {
    it('should return new words list', function() {
      const board = new Board(['one', 'two', 'bee']);
      board.attack('t');
      assert.deepEqual(board.words, ['one', 'wo', 'bee']);
    });
  });
  describe('invalid attack', function() {
    it('should return same words list', function() {
      const board = new Board(['one', 'two', 'bee']);
      board.attack('c');
      assert.deepEqual(board.words, ['one', 'two', 'bee']);
    });
  });

  describe('valid attack last letter of word', function() {
    it('should return words list without that word', function() {
      const board = new Board(['one', 'two', 'e']);
      board.attack('e');
      assert.deepEqual(board.words, ['one', 'two']);
    });
  });

  describe('invalid attack last letter of word', function() {
    it('should return same words list', function() {
      const board = new Board(['one', 'two', 'e']);
      board.attack('g');
      assert.deepEqual(board.words, ['one', 'two', 'e']);
    });
  });

});

describe('Board', function() {
  describe('Add new valid word', function() {
    it('should pop new word to list', function() {
      const board = new Board(['uno', 'dos']);
      board.addWord();
      assert.deepEqual(board.words, ['uno', 'dos', 'one']);
    });
  });

  describe('Add new valid word', function() {
    it('should pop new word to list', function() {
      const board = new Board(['one', 'two']);
      board.addWord();
      assert.deepEqual(board.words, ['one', 'two', 'four']);
    });
  });

  describe('Add multiple words', function() {
    it('should ', function() {
      const board = new Board(['uno', 'dos', 'tres']);
      board.addWord();
      board.addWord();
      assert.deepEqual(board.words, ['uno', 'dos', 'tres', 'one', 'four']);
    });
  });

  describe('Handle no available words', function() {
    it('should ', function() {
      const board = new Board(['o', 't', 'f', 's', 'e', 'n']);
      board.addWord();
      assert.deepEqual(board.words, ['o', 't', 'f', 's', 'e', 'n']);
    });
  });


});

describe('Game1', function() {
  describe('Simulate a full game #1', function() {
    it('add new word based on modified words list after attacks', function() {
      const board = new Board(['twelve', 'fourteen']);
      board.attack('f');
      assert.deepEqual(board.words, ['twelve', 'ourteen']);
      board.addWord();
      assert.deepEqual(board.words, ['twelve', 'ourteen', 'four']);
    });
  });

  describe('Simulate a full game #2', function() {
    it('attack to current word v1', function() {
      const board = new Board(['twelve', 'four', 'one']);
      board.attack('f');
      board.attack('o');
      assert.deepEqual(board.words, ['twelve', 'ur', 'one']);
    });
    it('attack to current word v2', function() {
      const board = new Board(['twelve', 'one', 'four']);
      board.attack('f');
      board.attack('o');
      assert.deepEqual(board.words, ['twelve', 'one', 'ur']);
    });
    it('attack to current word v21', function() {
      const board = new Board(['twelve', 'one', 'four']);
      board.attack('f');
      board.attack('o');
      board.attack('u');
      board.attack('r');
      assert.deepEqual(board.words, ['twelve', 'one']);
    });
    it('attack to current word v21', function() {
      const board = new Board(['twelve', 'one', 'four']);
      board.attack('f');
      board.attack('o');
      board.attack('u');
      board.attack('r');
      board.attack('o');
      assert.deepEqual(board.words, ['twelve', 'ne']);
    });

  });


});
