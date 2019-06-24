(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{250:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"generator-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generator-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Generator API")]),e._v(" "),s("h2",{attrs:{id:"resolve"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolve","aria-hidden":"true"}},[e._v("#")]),e._v(" resolve")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{string} _path")]),e._v(" - relative path from project root")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{string}")]),e._v("- the resolved absolute path")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nResolve a path for the current project")])])]),e._v(" "),s("h2",{attrs:{id:"hasplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasplugin","aria-hidden":"true"}},[e._v("#")]),e._v(" hasPlugin")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{string} id")]),e._v(" - plugin id, can omit the (@vue/|vue-|@scope/vue)-cli-plugin- prefix")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{boolean}")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nCheck if the project has a plugin with given id")])])]),e._v(" "),s("h2",{attrs:{id:"addconfigtransform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addconfigtransform","aria-hidden":"true"}},[e._v("#")]),e._v(" addConfigTransform")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{string} key")]),e._v(" - config key in package.json")]),e._v(" "),s("li",[s("code",[e._v("{object} options")]),e._v(" - options")]),e._v(" "),s("li",[s("code",[e._v("{object} options.file")]),e._v(" - file descriptor. Used to search for existing file. Each key is a file type (possible values: ['js', 'json', 'yaml', 'lines']). The value is a list of filenames.\nExample:")])]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.eslintrc.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.eslintrc.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.eslintrc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("By default, the first filename will be used to create the config file.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{boolean}")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nConfigure how config files are extracted.")])])]),e._v(" "),s("h2",{attrs:{id:"extendpackage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extendpackage","aria-hidden":"true"}},[e._v("#")]),e._v(" extendPackage")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{object | () => object} fields")]),e._v(" - fields to merge")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nExtend the "),s("code",[e._v("package.json")]),e._v(" of the project. Nested fields are deep-merged unless "),s("code",[e._v("{ merge: false }")]),e._v(" is passed. Also resolves dependency conflicts between plugins. Tool configuration fields may be extracted into standalone files before files are written to disk.")])])]),e._v(" "),s("h2",{attrs:{id:"render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render","aria-hidden":"true"}},[e._v("#")]),e._v(" render")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{string | object | FileMiddleware} source")]),e._v(" - can be one of\n"),s("ul",[s("li",[e._v("relative path to a directory;")]),e._v(" "),s("li",[e._v("object hash of "),s("code",[e._v("{ sourceTemplate: targetFile }")]),e._v(" mappings;")]),e._v(" "),s("li",[e._v("a custom file middleware function")])])]),e._v(" "),s("li",[s("code",[e._v("{object} [additionalData]")]),e._v(" - additional data available to templates")]),e._v(" "),s("li",[s("code",[e._v("{object} [ejsOptions]")]),e._v(" - options for ejs")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nRender template files into the virtual files tree object.")])])]),e._v(" "),s("h2",{attrs:{id:"postprocessfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postprocessfiles","aria-hidden":"true"}},[e._v("#")]),e._v(" postProcessFiles")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{FileMiddleware} cb")]),e._v(" - file middleware")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nPush a file middleware that will be applied after all normal file middlewares have been applied.")])])]),e._v(" "),s("h2",{attrs:{id:"oncreatecomplete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oncreatecomplete","aria-hidden":"true"}},[e._v("#")]),e._v(" onCreateComplete")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{function} cb")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nPush a callback to be called when the files have been written to disk.")])])]),e._v(" "),s("h2",{attrs:{id:"exitlog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exitlog","aria-hidden":"true"}},[e._v("#")]),e._v(" exitLog")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{} msg")]),e._v(" - string or value to print after the generation is completed;")]),e._v(" "),s("li",[s("code",[e._v("{('log'|'info'|'done'|'warn'|'error')} [type='log']")]),e._v(" - type of the message.")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nAdd a message to be printed when the generator exits (after any other standard messages).")])])]),e._v(" "),s("h2",{attrs:{id:"genjsconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#genjsconfig","aria-hidden":"true"}},[e._v("#")]),e._v(" genJSConfig")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{any} value")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nConvenience method for generating a JS config file from JSON")])])]),e._v(" "),s("h2",{attrs:{id:"makejsonlyvalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#makejsonlyvalue","aria-hidden":"true"}},[e._v("#")]),e._v(" makeJSOnlyValue")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{any} str")]),e._v(" - JS expression as a string")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nTurns a string expression into executable JS for .js config files")])])]),e._v(" "),s("h2",{attrs:{id:"injectimports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#injectimports","aria-hidden":"true"}},[e._v("#")]),e._v(" injectImports")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{string} file")]),e._v(" - target file to add imports")]),e._v(" "),s("li",[s("code",[e._v("{string | [string]} imports")]),e._v(" - imports string/array")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nAdd import statements to a file.")])])]),e._v(" "),s("h2",{attrs:{id:"injectrootoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#injectrootoptions","aria-hidden":"true"}},[e._v("#")]),e._v(" injectRootOptions")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{string} file")]),e._v(" - target file to add options")]),e._v(" "),s("li",[s("code",[e._v("{string | [string]} options")]),e._v(" - options string/array")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nAdd options to the root Vue instance (detected by "),s("code",[e._v("new Vue")]),e._v(").")])])]),e._v(" "),s("h2",{attrs:{id:"entryfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entryfile","aria-hidden":"true"}},[e._v("#")]),e._v(" entryFile")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Returns")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{('src/main.ts'|'src/main.js')}")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nGet the entry file taking into account typescript.")])])]),e._v(" "),s("h2",{attrs:{id:"invoking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invoking","aria-hidden":"true"}},[e._v("#")]),e._v(" invoking")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Returns")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{boolean}")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage")]),e._v(":\nChecks if the plugin is being invoked.")])])])])},[],!1,null,null,null);t.default=r.exports}}]);