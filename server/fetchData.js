
var sendObj = {
    method: "GET"
}
fetch("https://api.thecatapi.com/v1/images/search?limit=10",sendObj).then(processResult);


function processResult(result){
    result.json().then(logResponse)
}

function logResponse(response) {
    console.log(response);
}