webpackJsonp([1],{"8kb5":function(e,t){},DPMb:function(e,t){},GEkf:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("/5sW"),r=n("BO1k"),i=n.n(r),c=[1,2,3,4,5,6,7,8,9],l={6:1e4,7:36,8:720,9:360,10:80,11:252,12:108,13:72,14:54,15:180,16:72,17:180,18:119,19:36,20:306,21:1080,22:144,23:1800,24:3600},a={2:[0,3,6],3:[1,4,7],4:[2,5,8],6:[0,1,2],7:[3,4,5],8:[6,7,8],1:[0,4,8],5:[2,4,6]},o=function(e){return e.reduce(function(e,t,n,s){return e+t},0)},u=function(e){return 1*o(e)/e.length},d={consts:{scores:l,lines:a},newBoard:function(){for(var e=Array(c.length),t=0;t<e.length;++t)e[t]=0;return e},getValueCombinations:function(e,t){if(1==t){var n=[],s=!0,r=!1,c=void 0;try{for(var l,a=i()(e);!(s=(l=a.next()).done);s=!0){var o=l.value;n.push([o])}}catch(e){r=!0,c=e}finally{try{!s&&a.return&&a.return()}finally{if(r)throw c}}return n}var u=[],d=[],f=!0,h=!1,p=void 0;try{for(var x,v=i()(e);!(f=(x=v.next()).done);f=!0){var _=x.value;d.push(_);var b=!0,m=!1,y=void 0;try{for(var g,L=i()(this.getValueCombinations(e.filter(function(e){return d.indexOf(e)<0}),t-1));!(b=(g=L.next()).done);b=!0){var I=g.value;u.push([_].concat(I))}}catch(e){m=!0,y=e}finally{try{!b&&L.return&&L.return()}finally{if(m)throw y}}}}catch(e){h=!0,p=e}finally{try{!f&&v.return&&v.return()}finally{if(h)throw p}}return u},getFreeIndexes:function(e){for(var t=[],n=0;n<c.length;++n)0==e[n]&&t.push(n);return t},getLineValues:function(e,t){var n=[],s=!0,r=!1,c=void 0;try{for(var l,o=i()(a[t]);!(s=(l=o.next()).done);s=!0){var u=l.value;0!=e[u]&&n.push(e[u])}}catch(e){r=!0,c=e}finally{try{!s&&o.return&&o.return()}finally{if(r)throw c}}return n},getPossibleValues:function(e,t){if(0==3-t.length)return[t];var n=[],s=!0,r=!1,l=void 0;try{for(var a,o=i()(c);!(s=(a=o.next()).done);s=!0){var u=a.value;e.indexOf(u)<0&&t.indexOf(u)<0&&n.push(u)}}catch(e){r=!0,l=e}finally{try{!s&&o.return&&o.return()}finally{if(r)throw l}}var d=[],f=!0,h=!1,p=void 0;try{for(var x,v=i()(this.getValueCombinations(n,3-t.length));!(f=(x=v.next()).done);f=!0){var _=x.value;d.push(_.concat(t))}}catch(e){h=!0,p=e}finally{try{!f&&v.return&&v.return()}finally{if(h)throw p}}return d},getExpectedScores:function(e,t){var n=[],s=this.getLineValues(e,t),r=!0,c=!1,a=void 0;try{for(var u,d=i()(this.getPossibleValues(e,s));!(r=(u=d.next()).done);r=!0){var f=u.value;n.push(l[o(f)])}}catch(e){c=!0,a=e}finally{try{!r&&d.return&&d.return()}finally{if(c)throw a}}return n},getScoresPerIndex:function(e){var t=this.getFreeIndexes(e),n=[],s=!0,r=!1,c=void 0;try{for(var l,d=i()(t);!(s=(l=d.next()).done);s=!0){var f=l.value,h=[];for(var p in a)if(a[p].indexOf(f)>=0){var x=this.getExpectedScores(e,p);h.push(u(x))}n.push({index:f,score:o(h)})}}catch(e){r=!0,c=e}finally{try{!s&&d.return&&d.return()}finally{if(r)throw c}}return n},getScoresPerLine:function(e){var t=[];for(var n in a){var s=this.getExpectedScores(e,n).sort(function(e,t){return t-e});t.push({id:n,score:u(s),values:s})}return t}},f=n("Gu7T"),h=n.n(f),p={name:"scratch-board",data:function(){return{duplicatedIndexes:[]}},props:["board","expectedIndexes","selectedLine"],computed:{highScoreIndexes:function(){if(null==this.expectedIndexes)return null;var e=Math.max.apply(Math,h()(this.expectedIndexes.map(function(e){return e.score}))),t=[],n=!0,s=!1,r=void 0;try{for(var c,l=i()(this.expectedIndexes);!(n=(c=l.next()).done);n=!0){var a=c.value;a.score==e&&t.push(a.index)}}catch(e){s=!0,r=e}finally{try{!n&&l.return&&l.return()}finally{if(s)throw r}}return t}},methods:{range:function(e,t){for(var n=Array(t-e+1),s=0;s<n.length;++s)n[s]=e+s;return n},dispNumber:function(e){var t=this.board[e];return t||""},reset:function(){this.duplicatedIndexes=[],this.$emit("reset")},validate:function(){var e=[],t=this.board.filter(function(e,t,n){return e>0&&n.indexOf(e)===t&&t!==n.lastIndexOf(e)});return this.board.forEach(function(n,s){t.indexOf(n)>=0&&e.push(s)}),this.duplicatedIndexes=e,0==e.length},selectIndex:function(e){this.duplicatedIndexes.length>0&&this.duplicatedIndexes.indexOf(e)<0||this.$emit("selectIndex",e,this.validate)},isDuplicated:function(e){return this.duplicatedIndexes&&this.duplicatedIndexes.indexOf(e)>=0},isExpected:function(e){return this.highScoreIndexes?this.highScoreIndexes.indexOf(e)>=0:!!this.selectedLine&&this.selectedLine.indexes.indexOf(e)>=0},isExpectedLine:function(e){return this.selectedLine&&this.selectedLine.id==e}}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel panel-default"},[n("table",{staticClass:"table table-bordered",attrs:{id:"scratch-board"}},[n("tbody",[n("tr",[n("th",{class:[{expected:e.isExpectedLine(1)},"col-xs-1 col-sm-1"]},[e._v("1")]),e._v(" "),n("th",{class:[{expected:e.isExpectedLine(2)},"col-xs-3 col-sm-3"]},[e._v("2")]),e._v(" "),n("th",{class:[{expected:e.isExpectedLine(3)},"col-xs-3 col-sm-3"]},[e._v("3")]),e._v(" "),n("th",{class:[{expected:e.isExpectedLine(4)},"col-xs-3 col-sm-3"]},[e._v("4")]),e._v(" "),n("th",{class:[{expected:e.isExpectedLine(5)},"col-xs-1 col-sm-1"]},[e._v("5")])]),e._v(" "),n("tr",[n("th",{class:{expected:e.isExpectedLine(6)}},[e._v("6")]),e._v(" "),e._l(e.range(0,2),function(t){return n("td",{class:{duplicated:e.isDuplicated(t),expected:e.isExpected(t)},on:{click:function(n){e.selectIndex(t)}}},[e._v(e._s(e.dispNumber(t)))])}),e._v(" "),n("td",{staticClass:"etc",attrs:{rowspan:"3"}},[n("button",{staticClass:"btn btn-default",on:{click:e.reset}},[e._v("Reset")])])],2),e._v(" "),n("tr",[n("th",{class:{expected:e.isExpectedLine(7)}},[e._v("7")]),e._v(" "),e._l(e.range(3,5),function(t){return n("td",{class:{duplicated:e.isDuplicated(t),expected:e.isExpected(t)},on:{click:function(n){e.selectIndex(t)}}},[e._v(e._s(e.dispNumber(t)))])})],2),e._v(" "),n("tr",[n("th",{class:{expected:e.isExpectedLine(8)}},[e._v("8")]),e._v(" "),e._l(e.range(6,8),function(t){return n("td",{class:{duplicated:e.isDuplicated(t),expected:e.isExpected(t)},on:{click:function(n){e.selectIndex(t)}}},[e._v(e._s(e.dispNumber(t)))])})],2)])])])},staticRenderFns:[]},v=n("VU/8")(p,x,!1,function(e){n("rIZ6")},null,null).exports,_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"table table-striped table-responsive",attrs:{id:"expected-table"}},[n("thead",[n("th",{staticClass:"col-xs-1 col-sm-1 line-no",on:{click:function(t){e.sort("id")}}},[e._v("#")]),e._v(" "),n("th",{staticClass:"col-xs-3 col-sm-2 expection",on:{click:function(t){e.sort("score")}}},[e._v("期待値")]),e._v(" "),n("th",{staticClass:"col-xs-9 col-sm-9",on:{click:function(t){e.sort("max_value")}}},[e._v("候補")])]),e._v(" "),n("tbody",e._l(e.expectedLines,function(t){return n("tr",{class:{"expected-1":e.isExpected(t,0),"expected-2":e.isExpected(t,1)},on:{click:function(n){e.$emit("selectLine",t.id)}}},[n("th",{staticClass:"line-no"},[e._v(e._s(t.id))]),e._v(" "),n("td",{staticClass:"expection"},[e._v(e._s(t.score.toFixed(2)))]),e._v(" "),n("td",[e._v(e._s(t.values))])])}))])},staticRenderFns:[]},b=n("VU/8")({name:"expected-table",props:["expectedLines"],computed:{scores:function(){return this.expectedLines.map(function(e){return e.score}).filter(function(e,t,n){return n.indexOf(e)===t}).sort(function(e,t){return t-e})}},methods:{sort:function(e){"id"===e?this.expectedLines.sort(function(e,t){return e.id-t.id}):"score"==e?this.expectedLines.sort(function(e,t){return t.score-e.score||t.values[0]-e.values[0]}):"max_value"==e&&this.expectedLines.sort(function(e,t){return t.values[0]-e.values[0]||t.score-e.score})},isExpected:function(e,t){return this.scores[t]==e.score&&(0==t&&this.$emit("selectLine",e.id),!0)}}},_,!1,function(e){n("OvO0")},null,null).exports,m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"number-panels"},on:{click:function(t){if(t.stopPropagation(),t.target!==t.currentTarget)return null;e.selectNumber(-1)}}},[e._m(0,!1,!1),e._v(" "),n("ul",{on:{click:function(t){if(t.stopPropagation(),t.target!==t.currentTarget)return null;e.selectNumber(-1)}}},[e._l(9,function(t){return n("li",{class:[{invisible:e.invisible(t)},"panel panel-default"],on:{click:function(n){e.selectNumber(t)}}},[n("span",[e._v(e._s(t))])])}),e._v(" "),n("li",{staticClass:"panel panel-default",on:{click:function(t){e.selectNumber(0)}}},[n("span",[e._v("clear")])])],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[t("span",{staticClass:"label label-default"},[this._v("Choose Number")])])}]},y=n("VU/8")({name:"number-panels",props:["board","selectNumber"],methods:{invisible:function(e){return this.board.indexOf(e)>=0}}},m,!1,function(e){n("DPMb")},null,null).exports,g=n("GEkf"),L=n.n(g),I={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"page-header"},[t("h1",[this._v("FFXIV ミニくじシミュレーター")])])}]},E=function(e){n("eDT+")},N=n("VU/8")(L.a,I,!1,E,null,null).exports,C=n("8kb5"),k=n.n(C),w={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("span",{staticClass:"credits text-muted"},[this._v("Created by "),t("a",{staticClass:"text-muted",attrs:{href:"https://twitter.com/annie_thf",target:"_blank"}},[this._v("@annie_thf")])])])}]},O=function(e){n("a1D2")},P={name:"app",components:{AppHeader:N,AppFooter:n("VU/8")(k.a,w,!1,O,null,null).exports,ScratchBoard:v,ExpectedTable:b,NumberPanels:y},data:function(){return{showNumberPanels:!1,selectNumber:null,board:[],expectedIndexes:null,expectedLines:null,selectedLine:null}},methods:{reset:function(){this.board=d.newBoard(),this.expectedIndexes=null,this.expectedLines=null,this.selectedLine=null},selectIndex:function(e,t){var n=this,s=function(){return n.board.filter(function(e){return e>0}).length};s()>=4&&0==this.board[e]||(this.showNumberPanels=!0,this.selectNumber=function(r){n.selectNumber=null,n.showNumberPanels=!1,r>=0&&(n.expectedIndexes=null,n.expectedLines=null,n.selectedLine=null,n.board.splice(e,1,r),t()&&n.calcExpection(s()))})},selectLine:function(e){this.selectedLine={id:e,indexes:d.consts.lines[e]}},calcExpection:function(e){e<4?this.expectedIndexes=d.getScoresPerIndex(this.board):this.expectedLines=d.getScoresPerLine(this.board)}},mounted:function(){this.reset()}},V={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("AppHeader"),this._v(" "),t("ScratchBoard",{attrs:{board:this.board,expectedIndexes:this.expectedIndexes,selectedLine:this.selectedLine},on:{reset:this.reset,selectIndex:this.selectIndex}}),this._v(" "),this.expectedLines?t("ExpectedTable",{attrs:{expectedLines:this.expectedLines},on:{selectLine:this.selectLine}}):this._e(),this._v(" "),this.showNumberPanels?t("NumberPanels",{attrs:{board:this.board,selectNumber:this.selectNumber}}):this._e(),this._v(" "),t("AppFooter")],1)},staticRenderFns:[]},F=n("VU/8")(P,V,!1,function(e){n("yDc8")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",render:function(e){return e(F)}})},OvO0:function(e,t){},a1D2:function(e,t){},"eDT+":function(e,t){},rIZ6:function(e,t){},yDc8:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d37d2fbe0a10ce671d05.js.map