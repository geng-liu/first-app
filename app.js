console.log('app.js loaded')

//document.body.innerHTML+=' Please input <input id="field1" size=4>'

//field1.onkeyup=function(evt){
//  document.body.innerHTML += "\n You have input " + field1.value
//}
var url = "http://localhost:8500/rest/RestTest/courseService/7659.json";

http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
                return response;
        });
    });
    
/*$.getJSON(url, function (json) {

  document.body.innerHTML = json.columns[0].FACID;
  alert(json.count);
    
})*/
//var json_obj = JSON.parse("");



console.log('hello world')
