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

function currentLine (katzDeliLine) {
  for (var i= 0; i< katzDeliLine.length; )
}