(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{234:function(s,e,t){"use strict";t.r(e);var n=t(0),a=Object(n.a)({},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[s._v("#")]),s._v(" Troubleshooting")]),s._v(" "),t("p",[s._v("This document covers some common Vue CLI issues and how to resolve them. You should always follow these steps before opening a new issue.")]),s._v(" "),t("h2",{attrs:{id:"running-installation-with-sudo-or-as-root"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-installation-with-sudo-or-as-root","aria-hidden":"true"}},[s._v("#")]),s._v(" Running installation with "),t("code",[s._v("sudo")]),s._v(" or as "),t("code",[s._v("root")])]),s._v(" "),t("p",[s._v("If you install "),t("code",[s._v("@vue/cli-service")]),s._v(" as "),t("code",[s._v("root")]),s._v(" user or with "),t("code",[s._v("sudo")]),s._v(", there might be issues when running package "),t("code",[s._v("postinstall")]),s._v(" scripts.")]),s._v(" "),t("p",[s._v("This is a security feature of npm. You should always avoid running npm with root privileges because install scripts can be unintentionally malicious.")]),s._v(" "),t("p",[s._v("If you must however, you can workaround this error by setting the "),t("code",[s._v("--unsafe-perm")]),s._v(" flag of npm. This can be done by prefixing the command with an environment variable, i.e.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("npm_config_unsafe_perm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true vue create my-project\n")])])]),t("h2",{attrs:{id:"symbolic-links-in-node-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbolic-links-in-node-modules","aria-hidden":"true"}},[s._v("#")]),s._v(" Symbolic Links in "),t("code",[s._v("node_modules")])]),s._v(" "),t("p",[s._v("If there're dependencies installed by "),t("code",[s._v("npm link")]),s._v(" or "),t("code",[s._v("yarn link")]),s._v(", ESLint (and sometimes Babel as well) may not work properly for those symlinked dependencies. It is because "),t("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolvesymlinks",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack resolves symlinks to their real locations by default"),t("OutboundLink")],1),s._v(", thus breaks ESLint / Babel config lookup.")]),s._v(" "),t("p",[s._v("A workaround for this issue is to manually disable symlinks resolution in webpack:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue.config.js")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("chainWebpack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("symlinks")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("div",{staticClass:"warning custom-block"},[t("p",[s._v("Disabling "),t("code",[s._v("resolve.symlinks")]),s._v(" may break hot module reloading if your dependencies are installed by third-party npm clients that utilized symbolic links, such as"),t("code",[s._v("cnpm")]),s._v(" or "),t("code",[s._v("pnpm")]),s._v(".")])])])},[],!1,null,null,null);e.default=a.exports}}]);