var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
    fs.readFile('number.txt', function (err, fileContents) {
        myNumber = parseInt(fileContents)
        myNumber++
        console.log('inside readFile callback, done!')
        callback()
    })
}

function logMyNumber() {
    console.log(myNumber)
    console.log(this.name)
}

addOne(function() {
    console.log('uh-oh')
    console.log(this.name)
})

addOne(logMyNumber)