const express = require("express");

const app = express();
const port = 3000;

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

// path param
app.get("/:pathparam", handlePathParamRequest);

function handlePathParamRequest(req, res) {
    let pathParam = req.params.pathparam
    let message = "path parameter in the url is :" + pathParam;
    res.send(message);
}