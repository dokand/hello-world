console.log("JavaScript provides functional scoping instead of block scoping");
(function() {
    if (true) {
        var x = 2;
        console.log("Is 'x' available inside the block? " + x);
    }
    x++;
    console.log("Is 'x' available outside the block? " + x);
})();