var logArguments = function() {
    console.log(arguments);
};

console.log("All functions can have dynamic arguments");
logArguments("hello", "world");
logArguments("hello", "world", 42, ["huh", "wtf!"], {
    hello: "world"
});

var logThis = function() {
    console.log(this);
};

console.log("All functions can have dynamic contexts / 'this' objects");
logThis();
logThis.apply({
    yo: "baby!"
});