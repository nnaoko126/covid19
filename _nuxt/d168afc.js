(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{410:function(t,e,n){var content=n(527);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("554da7a6",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n.r(e);n(20),n(34),n(82),n(81),n(240);var r=n(3),d=n(101),o=n(1),l=n(47),c=n(359),h=n(362),f=n(361),y=n(126),m=n(367),k={created:function(){this.canvas=!0},components:{DataView:c.default,DataViewTable:h.default,AppLink:l.default,ScrollableChart:f.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartData:Object,chartOption:Object,chartId:{type:String,default:"metro-bar-chart"},date:{type:String,required:!0},items:{type:Array,default:function(){return[]}},periods:{type:Array,default:function(){return[]}},unit:{type:String,required:!1,default:"%"},tooltipsTitle:{type:Function,required:!0},tooltipsLabel:{type:Function,required:!0}},data:function(){return{colors:Object(m.b)(3),canvas:!0,yAxesBgPlugin:y.b,displayLegends:[!0,!0,!0]}},computed:{displayData:function(){var t=this,e=this.chartData.labels.map((function(label,i){return{label:label,data:t.chartData.datasets.map((function(t){return t.data[i]})),backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor,borderWidth:1}}));return{labels:this.chartData.datasets.map((function(t){return t.label})),datasets:e}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(d.a)(this.chartData.labels.map((function(text,t){return{text:text,value:String(t),align:"end"}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.periods[i]}].concat(Object(d.a)(t.chartData.labels.map((function(e,n){return Object(r.a)({},n,t.displayData.datasets[n].data[i])})))))})).reverse()},displayOption:function(){var t=this,e={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"period",position:"bottom",stacked:!1,gridLines:{display:!0},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"#808080",callback:function(e,i){return t.periods[i]}}},{id:"year",stacked:!1,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"year",displayFormats:{year:"YYYY"}}}],yAxes:[{stacked:!1,gridLines:{display:!0},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(e){var n="number"==typeof e?e:Number(e);return"".concat(n.toFixed(2)).concat(t.unit)}}}]},tooltips:{displayColors:!1,callbacks:{title:t.tooltipsTitle,label:t.tooltipsLabel}}};return"true"===this.$route.query.ogp&&Object.assign(e,{animation:{duration:0}}),e},displayDataHeader:function(){var t=this,e=this.chartData.labels.map((function(label,i){return{label:label,data:t.chartData.datasets.map((function(t){return t.data[i]})),backgroundColor:"transparent",borderWidth:0}}));return{labels:this.chartData.datasets.map((function(t){return t.label})),datasets:e}},displayOptionHeader:function(){var t=this;return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"period",position:"bottom",stacked:!1,gridLines:{display:!1},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"transparent",callback:function(e,i){return t.periods[i]}}},{id:"year",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"year"}}],yAxes:[{stacked:!1,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(e){var n="number"==typeof e?e:Number(e);return"".concat(n.toFixed(2)).concat(t.unit)}}}]},animation:{duration:0}}}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},v=o.default.extend(k),x=n(526),_=n(7);var component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})],1)]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"footer",fn:function(){return[n("ul",[n("li",[n("app-link",{attrs:{to:"https://smooth-biz.metro.tokyo.lg.jp/pdf/202004date3.pdf"}},[t._v("\n          "+t._s(t.$t("鉄道利用者数の推移（新宿、東京、渋谷、各駅エリア）[PDF]"))+"\n        ")])],1),t._v(" "),n("li",[n("app-link",{attrs:{to:"https://corona.go.jp/"}},[t._v("\n          "+t._s(t.$t("主要駅の改札通過人数の推移（東京、新宿、渋谷、池袋ほか）[内閣官房HP]（ページ下部）"))+"\n        ")])],1)])]},proxy:!0}],null,!0)},[n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.items,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor,width:"20px"}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v("\n          "+t._s(e)+"\n        ")])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData,"is-weekly":!0},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:280,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,"display-legends":t.displayLegends,plugins:t.yAxesBgPlugin,height:280}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null);e.default=component.exports;installComponents(component,{ScrollableChart:n(361).default,DataViewTable:n(362).default,AppLink:n(47).default,DataView:n(359).default})},526:function(t,e,n){"use strict";var r=n(410),d=n.n(r);n.d(e,"default",(function(){return d.a}))},527:function(t,e,n){(e=n(18)(!1)).push([t.i,".GraphLegend_2uG_h{text-align:center;list-style:none;padding:0!important}.GraphLegend_2uG_h li{display:inline-block;margin:0 3px}.GraphLegend_2uG_h li div{height:12px;margin:2px 4px;width:40px;display:inline-block;vertical-align:middle;border-width:1px;border-style:solid}.GraphLegend_2uG_h li button{color:#707070;font-size:1.2rem}",""]),e.locals={GraphLegend:"GraphLegend_2uG_h"},t.exports=e},528:function(t){t.exports=JSON.parse('{"date":"2021/3/5 11:00","datasets":[{"period":{"begin":"2020-02-10","end":"2020-02-14"},"data":[-0.96,-2.94,-7.48]},{"period":{"begin":"2020-02-17","end":"2020-02-21"},"data":[-0.36,-4.11,-6.95]},{"period":{"begin":"2020-02-25","end":"2020-02-28"},"data":[3.06,-9.47,-7.31]},{"period":{"begin":"2020-03-02","end":"2020-03-06"},"data":[0.47,-22.36,-10.16]},{"period":{"begin":"2020-03-09","end":"2020-03-13"},"data":[-1.22,-24.87,-12.05]},{"period":{"begin":"2020-03-16","end":"2020-03-19"},"data":[-1.36,-23.98,-11.22]},{"period":{"begin":"2020-03-23","end":"2020-03-27"},"data":[-4.28,-26.27,-14.34]},{"period":{"begin":"2020-03-30","end":"2020-04-03"},"data":[-9.93,-34.5,-30.62]},{"period":{"begin":"2020-04-06","end":"2020-04-10"},"data":[-17.64,-48.24,-47.14]},{"period":{"begin":"2020-04-13","end":"2020-04-17"},"data":[-40.76,-65.48,-65.5]},{"period":{"begin":"2020-04-20","end":"2020-04-24"},"data":[-45.75,-68.56,-68]},{"period":{"begin":"2020-04-27","end":"2020-05-01"},"data":[-49.4,-69.72,-68.69]},{"period":{"begin":"2020-05-07","end":"2020-05-08"},"data":[-40.03,-63.86,-64.14]},{"period":{"begin":"2020-05-11","end":"2020-05-15"},"data":[-40.86,-65.13,-64.24]},{"period":{"begin":"2020-05-18","end":"2020-05-22"},"data":[-39.1,-63.61,-62.23]},{"period":{"begin":"2020-05-25","end":"2020-05-29"},"data":[-33.04,-59.24,-56.87]},{"period":{"begin":"2020-06-01","end":"2020-06-05"},"data":[-15.77,-44.64,-40.93]},{"period":{"begin":"2020-06-08","end":"2020-06-12"},"data":[-15.27,-43.72,-38.08]},{"period":{"begin":"2020-06-15","end":"2020-06-19"},"data":[-12.64,-40.34,-36.04]},{"period":{"begin":"2020-06-22","end":"2020-06-26"},"data":[-11.13,-36.99,-33.83]},{"period":{"begin":"2020-06-29","end":"2020-07-03"},"data":[-7.09,-32.38,-32.72]},{"period":{"begin":"2020-07-06","end":"2020-07-10"},"data":[-7.56,-31.77,-32.2]},{"period":{"begin":"2020-07-13","end":"2020-07-17"},"data":[-8.19,-32.89,-32.93]},{"period":{"begin":"2020-07-20","end":"2020-07-22"},"data":[-6.29,-33.01,-33.75]},{"period":{"begin":"2020-07-27","end":"2020-07-31"},"data":[-9.57,-36.11,-36.64]},{"period":{"begin":"2020-08-03","end":"2020-08-07"},"data":[-13.29,-38.77,-35.86]},{"period":{"begin":"2020-08-11","end":"2020-08-14"},"data":[-43.39,-59.12,-51.5]},{"period":{"begin":"2020-08-17","end":"2020-08-21"},"data":[-17.15,-41.42,-37.98]},{"period":{"begin":"2020-08-24","end":"2020-08-28"},"data":[-12.11,-36.91,-35.71]},{"period":{"begin":"2020-08-31","end":"2020-09-04"},"data":[-8.52,-33.73,-35.03]},{"period":{"begin":"2020-09-07","end":"2020-09-11"},"data":[-8.21,-33.43,-34.75]},{"period":{"begin":"2020-09-14","end":"2020-09-18"},"data":[-7.62,-33.28,-33.55]},{"period":{"begin":"2020-09-23","end":"2020-09-25"},"data":[-6.92,-32.06,-33.5]},{"period":{"begin":"2020-09-28","end":"2020-10-02"},"data":[-7.29,-31.37,-32.4]},{"period":{"begin":"2020-10-05","end":"2020-10-09"},"data":[-7.34,-29.49,-31.48]},{"period":{"begin":"2020-10-12","end":"2020-10-16"},"data":[-8.03,-30.57,-32.01]},{"period":{"begin":"2020-10-19","end":"2020-10-23"},"data":[-8.17,-30.46,-31.49]},{"period":{"begin":"2020-10-26","end":"2020-10-30"},"data":[-8.28,-30.35,-31.36]},{"period":{"begin":"2020-11-02","end":"2020-11-06"},"data":[-8.34,-28.47,-30.79]},{"period":{"begin":"2020-11-09","end":"2020-11-13"},"data":[-8.98,-28.98,-30.1]},{"period":{"begin":"2020-11-16","end":"2020-11-20"},"data":[-9.64,-29.71,-30.91]},{"period":{"begin":"2020-11-24","end":"2020-11-27"},"data":[-9.4,-29.19,-30.31]},{"period":{"begin":"2020-11-30","end":"2020-12-04"},"data":[-10.78,-29.8,-31.52]},{"period":{"begin":"2020-12-07","end":"2020-12-11"},"data":[-12.18,-30.89,-31.13]},{"period":{"begin":"2020-12-14","end":"2020-12-18"},"data":[-14.23,-32.88,-30.34]},{"period":{"begin":"2020-12-21","end":"2020-12-25"},"data":[-17.18,-34.48,-30.84]},{"period":{"begin":"2020-12-28","end":"2020-12-28"},"data":[-39.81,-53.55,-48.64]},{"period":{"begin":"2021-01-04","end":"2021-01-08"},"data":[-27.35,-43.19,-44.32]},{"period":{"begin":"2021-01-12","end":"2021-01-15"},"data":[-22.53,-41.9,-42.68]},{"period":{"begin":"2021-01-18","end":"2021-01-22"},"data":[-24.11,-44.06,-43.33]},{"period":{"begin":"2021-01-25","end":"2021-01-29"},"data":[-23.43,-43.49,-43.35]},{"period":{"begin":"2021-02-01","end":"2021-02-05"},"data":[-21.55,-42.19,-42.03]},{"period":{"begin":"2021-02-08","end":"2021-02-12"},"data":[-20.83,-41.1,-39.35]},{"period":{"begin":"2021-02-15","end":"2021-02-19"},"data":[-20.44,-40.34,-39.56]},{"period":{"begin":"2021-02-22","end":"2021-02-26"},"data":[-18.98,-39.54,-38.69]},{"period":{"begin":"2021-03-01","end":"2021-03-04"},"data":[-18.1,-38.1,-38.18]}],"labels":["6:30~7:30","7:30~9:30","9:30~10:30"],"base_period":"2020/1/20~2020/1/24"}')},572:function(t,e,n){"use strict";n.r(e);n(20),n(34);var r=n(3),d=n(13),o=n.n(d),l=n(450),c=n(528);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{MetroBarChart:l.default},data:function(){var t=this,e=c.datasets.map((function(t){return f(f({},t),{},{label:t.period.begin})})),n=c.datasets.map((function(e){return t.getWeekLabel(e.period.begin,e.period.end)})),r=f(f({},c),{},{datasets:e,periods:n});return{metroGraph:r,metroGraphTooltipTitle:function(e,n){var d=r.periods[e[0].index];return t.$t("期間: {duration}",{duration:d})},metroGraphTooltipLabel:function(e,data){var n=data.datasets[e.datasetIndex],d="".concat(n.data[e.index],"%");return t.$t("{duration}の利用者数との相対値: {percentage}",{duration:t.$t(r.base_period),percentage:d})}}},methods:{getWeekLabel:function(t,e){var n=this.$d(o()(t).toDate(),"dateWithoutYear"),r=this.$d(o()(e).toDate(),"dateWithoutYear");return"".concat(n,"~").concat(r)}}},m=n(7),k=n(33),v=n.n(k),x=n(707),component=Object(m.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MetroCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("metro-bar-chart",{attrs:{title:t.$t("都営地下鉄の利用者数の推移"),"title-id":"predicted-number-of-toei-subway-passengers","chart-id":"metro-bar-chart","chart-data":t.metroGraph,date:t.metroGraph.date,items:t.metroGraph.labels,periods:t.metroGraph.periods,"tooltips-title":t.metroGraphTooltipTitle,"tooltips-label":t.metroGraphTooltipLabel,unit:"%"},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[t._v("\n        "+t._s(t.$t("{range}の利用者数*の平均値を基準としたときの相対値",{range:t.metroGraph.base_period}))+"\n        "),n("br"),t._v("\n        *"+t._s(t.$t("都営地下鉄4路線の自動改札出場数"))+"\n        "),n("br"),t._v("\n        "+t._s(t.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n      ")]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{MetroBarChart:n(450).default}),v()(component,{VCol:x.a})}}]);