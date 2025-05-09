function receivesAFunction(cb) {
  return cb();
}

receivesAFunction(function () {
  return "What is love?";
});

function returnsANamedFunction() {
  function noMore() {
    return "Baby don't hurt me.";
  }
  return noMore;
}

function returnsAnAnonymousFunction() {
  return () => {};
}
