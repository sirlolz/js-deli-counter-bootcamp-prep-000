function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${katzDeliLine.slice(-1)}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine,){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  var array = []
  for (var i = 0; i<katzDeliLine.length; i++){
    array.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently:${array.toString()}`
}