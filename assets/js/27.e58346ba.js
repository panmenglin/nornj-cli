(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{242:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cli-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-service","aria-hidden":"true"}},[e._v("#")]),e._v(" CLI Service")]),e._v(" "),a("h2",{attrs:{id:"using-the-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-binary","aria-hidden":"true"}},[e._v("#")]),e._v(" Using the Binary")]),e._v(" "),a("p",[e._v("Inside a Vue CLI project, "),a("code",[e._v("@vue/cli-service")]),e._v(" installs a binary named "),a("code",[e._v("vue-cli-service")]),e._v(". You can access the binary directly as "),a("code",[e._v("vue-cli-service")]),e._v(" in npm scripts, or as "),a("code",[e._v("./node_modules/.bin/vue-cli-service")]),e._v(" from the terminal.")]),e._v(" "),a("p",[e._v("This is what you will see in the "),a("code",[e._v("package.json")]),e._v(" of a project using the default preset:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vue-cli-service serve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vue-cli-service build"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("You can invoke these scripts using either npm or Yarn:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run serve\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" serve\n")])])]),a("p",[e._v("If you have "),a("a",{attrs:{href:"https://github.com/zkat/npx",target:"_blank",rel:"noopener noreferrer"}},[e._v("npx"),a("OutboundLink")],1),e._v(" available (should be bundled with an up-to-date version of npm), you can also invoke the binary directly with:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("npx vue-cli-service serve\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("You can run scripts with additional features using the GUI with the "),a("code",[e._v("vue ui")]),e._v(" command.")])]),e._v(" "),a("p",[e._v("Here is the Webpack Analyzer from the GUI in action:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/ui-analyzer.png",alt:"UI Webpack Analyzer"}})]),e._v(" "),a("h2",{attrs:{id:"vue-cli-service-serve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-service-serve","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-cli-service serve")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Usage: vue-cli-service serve [options] [entry]\n\nOptions:\n\n  --open    open browser on server start\n  --copy    copy url to clipboard on server start\n  --mode    specify env mode (default: development)\n  --host    specify host (default: 0.0.0.0)\n  --port    specify port (default: 8080)\n  --https   use https (default: false)\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("--copy")]),e._v(" "),a("p",[e._v("Copying to clipboard might not work on a few platforms."),a("br"),e._v("\nIf copying was successful, "),a("code",[e._v("(copied to clipboard)")]),e._v(" is displayed next to the local dev server URL.")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("vue-cli-service serve")]),e._v(" command starts a dev server (based on "),a("a",{attrs:{href:"https://github.com/webpack/webpack-dev-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-dev-server"),a("OutboundLink")],1),e._v(") that comes with Hot-Module-Replacement (HMR) working out of the box.")]),e._v(" "),a("p",[e._v("In addition to the command line flags, you can also configure the dev server using the "),a("router-link",{attrs:{to:"/config/#devserver"}},[e._v("devServer")]),e._v(" field in "),a("code",[e._v("vue.config.js")]),e._v(".")],1),e._v(" "),a("p",[a("code",[e._v("[entry]")]),e._v(" in the CLI command is defined as "),a("em",[e._v("the entry file")]),e._v(", not "),a("em",[e._v("an additional entry file")]),e._v(". If you overwrite the entry in the CLI, then the entries from "),a("code",[e._v("config.pages")]),e._v(" are no longer considered, which may cause an error.")]),e._v(" "),a("h2",{attrs:{id:"vue-cli-service-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-service-build","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-cli-service build")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Usage: vue-cli-service build [options] [entry|pattern]\n\nOptions:\n\n  --mode        specify env mode (default: production)\n  --dest        specify output directory (default: dist)\n  --modern      build app targeting modern browsers with auto fallback\n  --target      app | lib | wc | wc-async (default: app)\n  --formats     list of output formats for library builds (default: commonjs,umd,umd-min)\n  --name        name for lib or web-component mode (default: "name" in package.json or entry filename)\n  --no-clean    do not remove the dist directory before building the project\n  --report      generate report.html to help analyze bundle content\n  --report-json generate report.json to help analyze bundle content\n  --watch       watch for changes\n')])])]),a("p",[a("code",[e._v("vue-cli-service build")]),e._v(" produces a production-ready bundle in the "),a("code",[e._v("dist/")]),e._v(" directory, with minification for JS/CSS/HTML and auto vendor chunk splitting for better caching. The chunk manifest is inlined into the HTML.")]),e._v(" "),a("p",[e._v("There are a few useful flags:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("--modern")]),e._v(" builds your app using "),a("router-link",{attrs:{to:"/guide/browser-compatibility.html#modern-mode"}},[e._v("Modern Mode")]),e._v(", shipping native ES2015 code to modern browsers that support it, with auto fallback to a legacy bundle.")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("--target")]),e._v(" allows you to build any component(s) inside your project as a library or as web components. See "),a("router-link",{attrs:{to:"/guide/build-targets.html"}},[e._v("Build Targets")]),e._v(" for more details.")],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("--report")]),e._v(" and "),a("code",[e._v("--report-json")]),e._v(" will generate reports based on your build stats that can help you analyze the size of the modules included in your bundle.")])])]),e._v(" "),a("h2",{attrs:{id:"vue-cli-service-inspect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-service-inspect","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-cli-service inspect")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Usage: vue-cli-service inspect [options] [...paths]\n\nOptions:\n\n  --mode    specify env mode (default: development)\n")])])]),a("p",[e._v("You can use "),a("code",[e._v("vue-cli-service inspect")]),e._v(" to inspect the webpack config inside a Vue CLI project. See "),a("router-link",{attrs:{to:"/guide/webpack.html#inspecting-the-project-s-webpack-config"}},[e._v("Inspecting Webpack Config")]),e._v(" for more details.")],1),e._v(" "),a("h2",{attrs:{id:"checking-all-available-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-all-available-commands","aria-hidden":"true"}},[e._v("#")]),e._v(" Checking All Available Commands")]),e._v(" "),a("p",[e._v("Some CLI plugins  will inject additional commands to "),a("code",[e._v("vue-cli-service")]),e._v(". For example, "),a("code",[e._v("@vue/cli-plugin-eslint")]),e._v(" injects the "),a("code",[e._v("vue-cli-service lint")]),e._v(" command. You can see all injected commands by running:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("npx vue-cli-service "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("help")]),e._v("\n")])])]),a("p",[e._v("You can also learn about the available options of each command with:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("npx vue-cli-service "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("help")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("h2",{attrs:{id:"caching-and-parallelization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caching-and-parallelization","aria-hidden":"true"}},[e._v("#")]),e._v(" Caching and Parallelization")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("cache-loader")]),e._v(" is enabled for Vue/Babel/TypeScript compilations by default. Files are cached inside "),a("code",[e._v("node_modules/.cache")]),e._v(" - if running into compilation issues, always try deleting the cache directory first.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("thread-loader")]),e._v(" will be enabled for Babel/TypeScript transpilation when the machine has more than 1 CPU cores.")])])]),e._v(" "),a("h2",{attrs:{id:"git-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-hooks","aria-hidden":"true"}},[e._v("#")]),e._v(" Git Hooks")]),e._v(" "),a("p",[e._v("When installed, "),a("code",[e._v("@vue/cli-service")]),e._v(" also installs "),a("a",{attrs:{href:"https://github.com/yyx990803/yorkie",target:"_blank",rel:"noopener noreferrer"}},[e._v("yorkie"),a("OutboundLink")],1),e._v(", which allows you to easily specify Git hooks using the "),a("code",[e._v("gitHooks")]),e._v(" field in your "),a("code",[e._v("package.json")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"gitHooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"lint-staged"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",[a("code",[e._v("yorkie")]),e._v(" is a fork of "),a("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("husky")]),a("OutboundLink")],1),e._v(" and is not compatible with the latter.")])]),e._v(" "),a("h2",{attrs:{id:"configuration-without-ejecting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-without-ejecting","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration without Ejecting")]),e._v(" "),a("p",[e._v("Projects created via "),a("code",[e._v("vue create")]),e._v(" are ready to go without the need for additional configuration. The plugins are designed to work with one another so in most cases, all you need to do is pick the features you want during the interactive prompts.")]),e._v(" "),a("p",[e._v("However, we also understand that it's impossible to cater to every possible need, and the need of a project may also change over time. Projects created by Vue CLI allow you to configure almost every aspect of the tooling without ever needing to eject. Check out the "),a("router-link",{attrs:{to:"/config/"}},[e._v("Config Reference")]),e._v(" for more details.")],1)])},[],!1,null,null,null);t.default=n.exports}}]);