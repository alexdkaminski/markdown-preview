(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(214)},21:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),o=a.n(i),d=(a(21),a(6)),l=a(7),c=a(10),s=a(8),p=a(4),m=a(11),u=a(9),g=a.n(u),h=a(15),w=a.n(h),v=a(3),E=a(2),x=(a(213),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={markdown:"# React Markdown Previewer\n## Free Code Camp Front End Library Project\n[FreeCodeCamp.com](https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)\n\nInline `code`\n```\nfunction addTwoNumbers(a, b) {\n  return a + b\n}\n```",expanded:""},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.togglePreview=a.togglePreview.bind(Object(p.a)(a)),a.toggleEditor=a.toggleEditor.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({markdown:e.target.value})}},{key:"getMarkup",value:function(){return g.a.setOptions({renderer:new g.a.Renderer,highlight:function(e){return w.a.highlightAuto(e).value},breaks:!0}),{__html:g()(this.state.markdown)}}},{key:"togglePreview",value:function(){"editor"===this.state.expanded||""===this.state.expanded?this.setState({expanded:"preview"}):this.setState({expanded:""})}},{key:"toggleEditor",value:function(){"preview"===this.state.expanded||""===this.state.expanded?this.setState({expanded:"editor"}):this.setState({expanded:""})}},{key:"render",value:function(){return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"columns is-variable is-8"},r.a.createElement(k,{expanded:this.state.expanded,toggleEditor:this.toggleEditor,markdown:this.state.markdown,handleChange:this.handleChange}),r.a.createElement(b,{expanded:this.state.expanded,togglePreview:this.togglePreview,getMarkup:this.getMarkup()}))))}}]),t}(r.a.Component)),k=function(e){var t="editor"===e.expanded?"editor-wrapper column":"preview"===e.expanded?"editor-wrapper hide":"editor-wrapper column";return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Editor"),r.a.createElement(f,{expanded:e.expanded,toggleExpand:e.toggleEditor})),r.a.createElement("textarea",{id:"editor",onChange:e.handleChange,value:e.markdown}))},b=function(e){var t="preview"===e.expanded?"preview-wrapper column":"editor"===e.expanded?"preview-wrapper hide":"preview-wrapper column";return r.a.createElement("div",{className:t},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,"Preview"),r.a.createElement(C,{expanded:e.expanded,toggleExpand:e.togglePreview})),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:e.getMarkup}))},f=function(e){return"editor"===e.expanded?r.a.createElement("span",{className:"icon",onClick:e.toggleExpand},r.a.createElement(v.a,{icon:E.a})):r.a.createElement("span",{className:"icon",onClick:e.toggleExpand},r.a.createElement(v.a,{icon:E.b}))},C=function(e){return"preview"===e.expanded?r.a.createElement("span",{className:"icon",onClick:e.toggleExpand},r.a.createElement(v.a,{icon:E.a})):r.a.createElement("span",{className:"icon",onClick:e.toggleExpand},r.a.createElement(v.a,{icon:E.b}))};r.a.Component,r.a.Component;var N=function(){return r.a.createElement(x,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.51c149be.chunk.js.map