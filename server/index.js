const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;


function middleware1(req, res, next) {
    console.log("inside the middleware" + req.headers.counter);
    next();
}
app.use(middleware1);

// this enables to get body into the req variable
app.use(bodyParser.json());

// root request
app.get("/", handleRootRequest);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function handleRootRequest(req, res) {
  res.send("Hello World!!!");
}

// query param
app.get("/queryParam", handleQueryParamRequest);

function handleQueryParamRequest(req, res) {
    let queryParam1 = req.query.queryparam1;
    let queryParam2 = req.query.queryparam2;
    let message = "query param 1: " + queryParam1 + " query param 2: " + queryParam2;
    res.send(message);
}

// headers
// Note: If this method is defined after path param method then request is not landing here
// so specific methods has to be defined before the generic methods.
app.get("/headerscntm", handleHeadersInRequest);
function handleHeadersInRequest(req, res) {
    console.log(req.headers);
    // the logic is to get all the keys of the object and the call length on it
    // TOEXPLORE: how JS mapped header into objects not array.
    // because of object only we are able to key any header key via expression req.headers.<header_value>
    let headersCount = Object.keys(req.headers).length;
    let message = "total numbers of header received in the headers are :" + headersCount;
    res.send(message);
}

// path param
app.get("/:pathparam", handlePathParamRequest);

function handlePathParamRequest(req, res) {
    let pathParam = req.params.pathparam
    let message = "path parameter in the url is :" + pathParam;
    res.send(message);
}

// post method get request body
app.post("/postrequest", handlePostRequest);
function handlePostRequest(req, res) {
    let body = req.body;
    console.log(body)
    res.send("accepted");
}


