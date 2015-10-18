var forEach = function(list, action) {
    for (var i = 0; i < list.length; i++) {
        action(list[i]);
    }
};

var logItem = function(item) {
    console.log(item);
};

var listOfThings = ["soap", "candle", "deer", "wine", "bread"];
var anotherListOfThings = ["grapes", "apples", "beer", "pizza"];

forEach(listOfThings, logItem);
forEach(anotherListOfThings, logItem);
forEach(anotherListOfThings, function(item) {
    console.log(item + "'s length is " + item.length);
});