document.write('The current is app.js')
var fs = require('fs')

var contents = fs.readFileSync('./package.json', 'utf8')
//alert(contents)

let myNotification = new Notification('貼心小提醒', {
  body: '記得帶上鑰匙關上門，天氣冷多加一件外套!'
})

myNotification.onclick = () => {
  console.log('Notification clicked')
}
