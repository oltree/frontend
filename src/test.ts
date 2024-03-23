export const someFn = (arg: number): string => {
  console.log('hello world');

  return `hello world ${arg}`;
};

document.body.innerHTML = someFn(5);
