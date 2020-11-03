const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
let people = { people : [{ name : "Jerry"}] }

app.get("/people", function(req,res){
  res.json(people);
  res.end();
});
app.post("/people", function(req,res){
  if(req.body && req.body.name)
  {
    people.people.push({ name : req.body.name })
  }

  res.json(people);
  res.end();
  
})
app.listen(3000);
