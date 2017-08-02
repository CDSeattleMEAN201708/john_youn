function fib() {
  var first = 0;
  var sec = 1;
  function nacci() {
    console.log(sec);
    var temp = first;
    first = sec;
    sec = temp + sec;
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"