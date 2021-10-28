const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
sum(0,1,2);
sum(1,2,3,4);
sum(5);
sum();