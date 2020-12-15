(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),n=a.n(s),r=a(7),i=a.n(r);a(14);function o(){return Object(c.jsx)("nav",{className:"green darken-1",children:Object(c.jsxs)("div",{className:"nav-wrapper",children:[Object(c.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(c.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"!#",children:"Repo"})})})]})})}function l(){return Object(c.jsx)("footer",{className:"page-footer green lighten-4",children:Object(c.jsx)("div",{className:"footer-copyright",children:Object(c.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(c.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var h=a(2),j=a(3),d=a(5),b=a(4),p=a(8);function v(e){var t=e.Title,a=e.Year,s=e.imdbID,n=e.Type,r=e.Poster;return Object(c.jsxs)("div",{id:s,className:"card movie",children:[Object(c.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===r?Object(c.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x400?text=".concat(t)}):Object(c.jsx)("img",{className:"activator",src:r})}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(c.jsxs)("p",{children:[a," ",Object(c.jsx)("span",{className:"right",children:n})]})]})]})}function u(e){var t=e.movies,a=void 0===t?[]:t;return Object(c.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(c.jsx)(v,Object(p.a)({},e),e.imdbID)})):Object(c.jsx)("h4",{children:"Nothing found"})})}var m=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"input-field",children:[Object(c.jsx)("input",{className:"validate",placeholder:"search",type:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(c.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(c.jsx)("span",{children:"All"})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(c.jsx)("span",{children:"Movies only"})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(c.jsx)("span",{children:"Series Only"})]})]})]})}}]),a}(n.a.Component);function O(){return Object(c.jsx)("div",{className:"progress",children:Object(c.jsx)("div",{className:"indeterminate"})})}var x="78584b3c",f=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],loading:!0},e.searchMovies=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/react-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"78584b3c"})),fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(c.jsxs)("main",{className:"container content",children:[Object(c.jsx)(m,{searchMovies:this.searchMovies}),a?Object(c.jsx)(O,{}):Object(c.jsx)(u,{movies:t})]})}}]),a}(n.a.Component);var g=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(f,{}),Object(c.jsx)(l,{})]})};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6596d7b0.chunk.js.map