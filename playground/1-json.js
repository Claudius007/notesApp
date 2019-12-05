const fs = require("fs");

const MoMo = {
  name: "Andrew",
  planet: "Earth",
  age: 27
};

const MoMoJSON = JSON.stringify(MoMo);
fs.writeFileSync("1-json.json", MoMoJSON);

var dataBuffer = fs.readFileSync("1-json.json");
var dataJSOn = dataBuffer.toString();
var user = JSON.parse(dataJSOn);

user.name = "Mofehintoluwa";
user.age = 25;

userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var filtered = array.filter(function(value, index, arr) {
  return value > 5;
});

console.log(filtered);
//newdata = JSON.parse(newDataJSON)

//console.log(newdata)
//fs.writeFileSync('1-json.json',MoMoJSON)
