var fs = require('fs-extra')
fs.ensureDir(process.env.HOME +'/.vscode/extensions/Angular-1.5-ES6-Snippets-for-VS-Code', function (err) {

  fs.copy('./', process.env.HOME+'/.vscode/extensions/Angular-1.5-ES6-Snippets-for-VS-Code', function (errr) {
    if (errr) {
      console.log(errr)
    } else {
      console.log('ok')
    }
  })
})
