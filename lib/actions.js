export const makeCreateBoard = store => (words = []) => {
  const words2 = [words[0]];
  return [...store.words, ...words2];
};

export const makeCreatePlayer = store => (words = []) => {
  const response = [...store.words, ...words];
  return response;
};
