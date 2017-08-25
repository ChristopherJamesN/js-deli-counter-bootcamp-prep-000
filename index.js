var katzDeliLine = [];

function takeANumber(deliLine, name) {
  var i = deliLine.length;
  deliLine[i] = name;
  return ("Welcome, " + name + ". You are number " + (i+1) + " in line.");
}

function nowServing() {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    currentServing = ("Currently serving " + deliLine[0] + ".");
    deliLine.unshift();
    return currentServing;
  }
}
