function takeANumber (katzDeli, name) {
 console.log (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
 return katzDeli.push(`${name}`);
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`; }
   else {
  return "There is nobody waiting to be served!";}
}

function currentLine (line) {
 if (line.length === 0) {
   return "The line is currently empty";}
 else { 
  var array = []
  for (var i= 0; i< line.length; i++){
    
  return ("The line is currently: ${line} ")
  }
}
}