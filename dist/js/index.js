(function(e){function t(t){for(var n,s,f=t[0],c=t[1],a=t[2],u=0,p=[];u<f.length;u++)s=f[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,f=1;f<o.length;f++){var c=o[f];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={index:0},i=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var f=window["webpackJsonp"]=window["webpackJsonp"]||[],c=f.push.bind(f);f.push=t,f=f.slice();for(var a=0;a<f.length;a++)t(f[a]);var l=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("8712")},"25c3":function(e,t,o){e.exports=o.p+"img/rotate.svg"},8712:function(e,t,o){"use strict";o.r(t);o("b0c0"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=o("25c3"),i=o.n(r),s=Object(n["k"])("data-v-2bf62e3b"),f=s((function(e,t){return Object(n["f"])(),Object(n["c"])("div",{class:"vue3-resize-drag",style:e.styleHandler,onMousedown:t[2]||(t[2]=Object(n["j"])((function(){return e.itemDown&&e.itemDown.apply(e,arguments)}),["stop"]))},[Object(n["i"])(e.$slots,"default"),e.isRotate?(Object(n["f"])(),Object(n["c"])("img",{key:0,class:"rotate-icon",onMousedown:t[1]||(t[1]=Object(n["j"])((function(){return e.itemRotate&&e.itemRotate.apply(e,arguments)}),["stop"])),src:i.a,alt:""},null,32)):Object(n["d"])("",!0),e.isResizable?(Object(n["f"])(!0),Object(n["c"])(n["a"],{key:1},Object(n["h"])(e.dragElResizeIcon,(function(t,o){return Object(n["f"])(),Object(n["c"])("div",{key:t.class,class:"dragElResizeIcon",onMousedown:Object(n["j"])((function(n){return e.itemResize(n,t.class,o)}),["stop"]),style:t.style},null,44,["onMousedown"])})),128)):Object(n["d"])("",!0)],36)})),c=(o("a9e3"),Object(n["e"])({name:"vue3-resize-drag",props:{x:{type:Number,default:function(){return 0}},y:{type:Number,default:function(){return 0}},zIndex:{type:Number,default:function(){return 0}},w:{type:Number,default:function(){return 100}},h:{type:Number,default:function(){return 100}},isDraggable:{type:Boolean,default:function(){return!0}},isResizable:{type:Boolean,default:function(){return!0}},resizeIconSize:{type:Number,default:function(){return 8}},isRotate:{type:Boolean,default:function(){return!1}},rotate:{type:Number,default:function(){return 0}}},setup:function(e,t){var o=t.emit,r=Object(n["g"])({top:e.y,left:e.x,right:0,bottom:0,zIndex:e.zIndex,width:e.w,height:e.h,rotate:e.rotate}),i=Object(n["b"])((function(){return{top:r.top+"px",left:r.left+"px",right:r.right+"px",bottom:r.bottom+"px",zIndex:r.zIndex,width:r.width+"px",height:r.height+"px",transform:"rotate(".concat(r.rotate,"deg)")}})),s=Object(n["b"])((function(){return[{class:"drag-lt",style:{top:-e.resizeIconSize/2+"px",left:-e.resizeIconSize/2+"px",width:e.resizeIconSize+"px",height:e.resizeIconSize+"px"}},{class:"drag-ct",style:{top:-e.resizeIconSize/2+"px",left:r.width/2-e.resizeIconSize/2+"px",width:e.resizeIconSize+"px",height:e.resizeIconSize+"px"}},{class:"drag-rt",style:{top:-e.resizeIconSize/2+"px",right:-e.resizeIconSize/2+"px",width:e.resizeIconSize+"px",height:e.resizeIconSize+"px"}},{class:"drag-rc",style:{top:r.height/2-e.resizeIconSize/2+"px",right:-e.resizeIconSize/2+"px",width:e.resizeIconSize+"px",height:e.resizeIconSize+"px"}},{class:"drag-rb",style:{bottom:-e.resizeIconSize/2+"px",right:-e.resizeIconSize/2+"px",width:e.resizeIconSize+"px",height:e.resizeIconSize+"px"}},{class:"drag-bc",style:{bottom:-e.resizeIconSize/2+"px",left:r.width/2-e.resizeIconSize/2+"px",width:e.resizeIconSize+"px",height:e.resizeIconSize+"px"}},{class:"drag-lb",style:{bottom:-e.resizeIconSize/2+"px",left:-e.resizeIconSize/2+"px",width:e.resizeIconSize+"px",height:e.resizeIconSize+"px"}},{class:"drag-lc",style:{top:r.height/2-e.resizeIconSize/2+"px",left:-e.resizeIconSize/2+"px",width:e.resizeIconSize+"px",height:e.resizeIconSize+"px"}}]})),f=function(t){var n=t.target||t.srcElement;t.stopPropagation(),t.preventDefault();var i=t.clientX-n.offsetLeft,s=t.clientY-n.offsetTop;o("downHandler",{el:n,e:t}),e.isDraggable&&(document.onmousemove=function(e){var t=e.clientX-i,f=e.clientY-s;console.log(t,f,"ssss"),r.top=f,r.left=t,o("moveHandler",{el:n,e:e,top:f,left:t})},document.onmouseup=function(e){o("mouseUpHandler",{el:n,e:e,top:r.top,left:r.left}),document.onmousemove=null,document.onmouseup=null})},c=function(e,t,n){var i=e.target.offsetParent||e.srcElement.parentNode;e.stopPropagation(),e.preventDefault();var s=0,f=0,c=0,a=0;document.onmousemove=function(e){switch(console.log(i.offsetHeight,i.offsetTop,e.clientY),t){case"drag-ct":f=i.offsetHeight+i.offsetTop-e.clientY,s=i.offsetWidth,c=e.clientY,a=i.offsetLeft;break;case"drag-lc":f=i.offsetHeight,s=i.offsetWidth+i.offsetLeft-e.clientX,c=i.offsetTop,a=e.clientX;break;case"drag-bc":f=e.clientY-i.offsetTop,s=i.offsetWidth,c=i.offsetTop,a=i.offsetLeft;break;case"drag-rc":f=i.offsetHeight,s=e.clientX-i.offsetLeft,c=i.offsetTop,a=i.offsetLeft;break;case"drag-lt":f=i.offsetHeight+i.offsetTop-e.clientY,s=i.offsetWidth+i.offsetLeft-e.clientX,c=e.clientY,a=e.clientX;break;case"drag-rt":f=i.offsetHeight+i.offsetTop-e.clientY,s=e.clientX-i.offsetLeft,c=e.clientY,a=i.offsetLeft;break;case"drag-rb":f=e.clientY-i.offsetTop,s=e.clientX-i.offsetLeft,c=i.offsetTop,a=i.offsetLeft;break;case"drag-lb":f=e.clientY-i.offsetTop,s=i.offsetWidth+i.offsetLeft-e.clientX,c=i.offsetTop,a=e.clientX;break;default:s=i.offsetWidth,f=i.offsetHeight,c=i.offsetTop,a=i.offsetLeft;break}o("resizeHandler",{el:i,e:e,w:s,h:f,top:c,left:a}),r.width=s,r.height=f,r.top=c,r.left=a},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}},a=function(e){var t=e.target.offsetParent||e.srcElement.parentNode;e.stopPropagation(),e.preventDefault();var n=t.offsetWidth/2,i=t.offsetHeight/2,s=t.offsetLeft,f=t.offsetTop;document.onmousemove=function(e){var c=e.pageX-s,a=e.pageY-f,l=c-n,u=a-i,p=Math.abs(l/u),d=Math.atan(p)/(2*Math.PI)*360;l<0&&u<0?d=-d:l<0&&u>0?d=-(180-d):l>0&&u<0?d=d:l>0&&u>0&&(d=180-d),r.rotate=d,o("rotateHandler",{el:t,e:e,rotate:d})},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}};return{style:r,dragElResizeIcon:s,styleHandler:i,itemDown:f,itemResize:c,itemRotate:a}}}));o("9a24");c.render=f,c.__scopeId="data-v-2bf62e3b";var a=c,l={install:function(e){e.component(a.name,a),"undefined"!==typeof window&&e&&e.use(a)}};t["default"]=l},"9a24":function(e,t,o){"use strict";o("f164")},f164:function(e,t,o){}});