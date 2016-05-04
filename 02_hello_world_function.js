function helloWorld () {
  console.log('hello world!');
}

function messenger (printMessageFunction) {
  console.log('delivering message');
  printMessageFunction();
}

helloWorld();

messenger(helloWorld);

setTimeout(helloWorld, 1000);

console.log('waiting for async hello world');
