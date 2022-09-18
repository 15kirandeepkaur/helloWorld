/*********************************************************************************
 *  WEB322 – Assignment1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Kirandeep Kaur,- Student ID: 153834213 Date: 18 Sept,2022
 *
 *  Online (Cyclic) URL: https://odd-tan-octopus-ring.cyclic.app/
 *
 ********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
  res.send("Kirandeep Kaur - 153834213");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
