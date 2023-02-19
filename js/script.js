const allKeys = document.querySelectorAll('.key');

allKeys.forEach((key, indexKey) => {
  const number = indexKey < 9 ? '0' + (indexKey + 1) : indexKey + 1;
  const pathSound = `./piano-keys/key${number}.mp3`;

  key.addEventListener('click', () => {
    const sound = new Audio(pathSound);
    sound.play();
  });
});
