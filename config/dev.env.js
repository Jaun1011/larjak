'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  "externals": {
   "electron": "require('electron')",
   "child_process": "require('child_process')",
   // "fs": "require('fs')",
   // "path": "require('path')"
   // [remainder omitted]
}
})
