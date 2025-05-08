function receivesAFunction(cb) {
  return cb();
}

receivesAFunction(function () {
  return "Baby don't hurt me.";
});
