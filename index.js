function takeANumber (katzDeli, name) {
 console.log (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
 return katzDeli.push(`${name}`);
}

function nowServing (katzDeliLine) {
  if (katzDeliLine > 0) {
  console.log (Now serving)
  }
  else{
    return("There is nobody waiting to be served!")
  }
}