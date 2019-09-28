var url = require('url')

var obj = url.parse('/pinglun?name=sddfssd&message=sdfsdfadf', true)

console.log(obj)
console.log(obj.query)