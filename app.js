console.log('app.js loaded')

document.body.innerHTML+=' Please input <input id="field1" size=4>'

field1.onkeyup=function(evt){
  document.body.innerHTML += "\n You have input " + field1.value
}
console.log('hello world')
