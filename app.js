console.log('app.js loaded')

//document.body.innerHTML+=' Please input <input id="field1" size=4>'

//field1.onkeyup=function(evt){
//  document.body.innerHTML += "\n You have input " + field1.value
//}

var json_obj = JSON.parse("http://localhost:8500/rest/RestTest/courseService/7659.json");

document.body.innerHTML = json_obj.columns[0].FACID;
alert(json_obj.count);

console.log('hello world')
