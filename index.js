var place = 0
function takeANumber(katzDeliLine){
  place++
  katzDeliLine.push(` ${place}`)
  return `Welcome, You are number ${place}`
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  var array = []
  for (var i = 0; i<katzDeliLine.length; i++){
    array.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently:${array.toString()}`
}
