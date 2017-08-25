var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var i = katzDeliLine.length;
  katzDeliLine[i] = name;
  return ("Welcome, " + name + ". You are number " + (i+1) + " in line.");
}

function nowServing() {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    currentServing = ("Currently serving " + katzDeliLine[0] + ".");
    katzDeliLine.unshift();
    return currentServing;
  }
}
