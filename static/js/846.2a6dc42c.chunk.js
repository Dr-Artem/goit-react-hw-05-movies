/*! For license information please see 846.2a6dc42c.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[846],{3846:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(9439),o=n(6762),a=n(2791),i=n(7689),s=n(5671),l=n(3144),u=n(136),c=n(4104),d=n(7762),f=n(7757),p=n.n(f),y=n(2007),h=n.n(y),v=n(8262),g=n.n(v),m=n(6071),P=n.n(m),b=Object.defineProperty,w=Object.defineProperties,E=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,A=function(e,t,n){return t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},k=function(e,t){for(var n in t||(t={}))C.call(t,n)&&A(e,n,t[n]);if(S){var r,o=(0,d.Z)(S(t));try{for(o.s();!(r=o.n()).done;){n=r.value;O.call(t,n)&&A(e,n,t[n])}}catch(a){o.e(a)}finally{o.f()}}return e},x=function(e,t){return w(e,E(t))};function _(e,t){var n,r;if(e.videoId!==t.videoId)return!0;var o=(null==(n=e.opts)?void 0:n.playerVars)||{},a=(null==(r=t.opts)?void 0:r.playerVars)||{};return o.start!==a.start||o.end!==a.end}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return x(k({},e),{height:0,width:0,playerVars:x(k({},e.playerVars),{autoplay:0,start:0,end:0})})}function R(e,t){return e.videoId!==t.videoId||!g()(I(e.opts),I(t.opts))}function V(e,t){var n,r,o,a;return e.id!==t.id||e.className!==t.className||(null==(n=e.opts)?void 0:n.width)!==(null==(r=t.opts)?void 0:r.width)||(null==(o=e.opts)?void 0:o.height)!==(null==(a=t.opts)?void 0:a.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var N={videoId:h().string,id:h().string,className:h().string,iframeClassName:h().string,style:h().object,title:h().string,loading:h().oneOf(["lazy","eager"]),opts:h().objectOf(h().any),onReady:h().func,onError:h().func,onPlay:h().func,onPause:h().func,onEnd:h().func,onStateChange:h().func,onPlaybackRateChange:h().func,onPlaybackQualityChange:h().func},T=function(e){(0,u.Z)(n,e);var t=(0,c.Z)(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).destroyPlayerPromise=void 0,r.onPlayerReady=function(e){var t,n;return null==(n=(t=r.props).onReady)?void 0:n.call(t,e)},r.onPlayerError=function(e){var t,n;return null==(n=(t=r.props).onError)?void 0:n.call(t,e)},r.onPlayerStateChange=function(e){var t,o,a,i,s,l,u,c;switch(null==(o=(t=r.props).onStateChange)||o.call(t,e),e.data){case n.PlayerState.ENDED:null==(i=(a=r.props).onEnd)||i.call(a,e);break;case n.PlayerState.PLAYING:null==(l=(s=r.props).onPlay)||l.call(s,e);break;case n.PlayerState.PAUSED:null==(c=(u=r.props).onPause)||c.call(u,e)}},r.onPlayerPlaybackRateChange=function(e){var t,n;return null==(n=(t=r.props).onPlaybackRateChange)?void 0:n.call(t,e)},r.onPlayerPlaybackQualityChange=function(e){var t,n;return null==(n=(t=r.props).onPlaybackQualityChange)?void 0:n.call(t,e)},r.destroyPlayer=function(){return r.internalPlayer?(r.destroyPlayerPromise=r.internalPlayer.destroy().then((function(){return r.destroyPlayerPromise=void 0})),r.destroyPlayerPromise):Promise.resolve()},r.createPlayer=function(){if("undefined"!==typeof document)if(r.destroyPlayerPromise)r.destroyPlayerPromise.then(r.createPlayer);else{var e=x(k({},r.props.opts),{videoId:r.props.videoId});r.internalPlayer=P()(r.container,e),r.internalPlayer.on("ready",r.onPlayerReady),r.internalPlayer.on("error",r.onPlayerError),r.internalPlayer.on("stateChange",r.onPlayerStateChange),r.internalPlayer.on("playbackRateChange",r.onPlayerPlaybackRateChange),r.internalPlayer.on("playbackQualityChange",r.onPlayerPlaybackQualityChange),(r.props.title||r.props.loading)&&r.internalPlayer.getIframe().then((function(e){r.props.title&&e.setAttribute("title",r.props.title),r.props.loading&&e.setAttribute("loading",r.props.loading)}))}},r.resetPlayer=function(){return r.destroyPlayer().then(r.createPlayer)},r.updatePlayer=function(){var e;null==(e=r.internalPlayer)||e.getIframe().then((function(e){r.props.id?e.setAttribute("id",r.props.id):e.removeAttribute("id"),r.props.iframeClassName?e.setAttribute("class",r.props.iframeClassName):e.removeAttribute("class"),r.props.opts&&r.props.opts.width?e.setAttribute("width",r.props.opts.width.toString()):e.removeAttribute("width"),r.props.opts&&r.props.opts.height?e.setAttribute("height",r.props.opts.height.toString()):e.removeAttribute("height"),r.props.title?e.setAttribute("title",r.props.title):e.setAttribute("title","YouTube video player"),r.props.loading?e.setAttribute("loading",r.props.loading):e.removeAttribute("loading")}))},r.getInternalPlayer=function(){return r.internalPlayer},r.updateVideo=function(){var e,t,n,o;if("undefined"!==typeof r.props.videoId&&null!==r.props.videoId){var a=!1,i={videoId:r.props.videoId};(null==(t=r.props.opts)?void 0:t.playerVars)&&(a=1===r.props.opts.playerVars.autoplay,"start"in r.props.opts.playerVars&&(i.startSeconds=r.props.opts.playerVars.start),"end"in r.props.opts.playerVars&&(i.endSeconds=r.props.opts.playerVars.end)),a?null==(n=r.internalPlayer)||n.loadVideoById(i):null==(o=r.internalPlayer)||o.cueVideoById(i)}else null==(e=r.internalPlayer)||e.stopVideo()},r.refContainer=function(e){r.container=e},r.container=null,r.internalPlayer=null,r}return(0,l.Z)(n,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){return t=this,n=null,r=p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(V(e,this.props)&&this.updatePlayer(),!R(e,this.props)){t.next=4;break}return t.next=4,this.resetPlayer();case 4:_(e,this.props)&&this.updateVideo();case 5:case"end":return t.stop()}}),t,this)})),new Promise((function(e,o){var a=function(e){try{s(r.next(e))}catch(t){o(t)}},i=function(e){try{s(r.throw(e))}catch(t){o(t)}},s=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(a,i)};s((r=r.apply(t,n)).next())}));var t,n,r}},{key:"componentWillUnmount",value:function(){this.destroyPlayer()}},{key:"render",value:function(){return a.createElement("div",{className:this.props.className,style:this.props.style},a.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}}]),n}(a.Component);T.propTypes=N,T.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},T.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var D=T,j=n(184),U=function(){var e=(0,i.UO)().movieId,t=(0,a.useState)([]),n=(0,r.Z)(t,2),s=n[0],l=n[1];(0,a.useEffect)((function(){e&&(new o.V).getClickedMovieTrailer(e).then((function(e){l(e)}))}),[e]);var u=function(e){e.target.pauseVideo()},c={height:"220",width:"400",playerVars:{autoplay:0}};return s.results&&console.log(s.results),(0,j.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:"50px"},children:s.results&&s.results.map((function(e){return(0,j.jsx)("li",{children:(0,j.jsx)(D,{videoId:e.key,opts:c,onReady:u})},e.id)}))})}},8262:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!==o--;){var i=a[o];if(!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n}},5102:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof r&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async=!("async"in r)||!!r.async,i.src=e,r.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,r.attrs),r.text&&(i.text=""+r.text),("onload"in i?t:n)(i,o),i.onload||t(i,o),a.appendChild(i)}},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3457:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=t},6364:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5439),a=(r=o)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},1698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(2788)),o=s(n(5506)),a=s(n(626)),i=s(n(6364));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)("youtube-player"),u={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){l('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var s,u=a.default[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){n(s.value)}}catch(c){o=!0,i=c}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),a=void 0;"number"===typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,s=!1,l=void 0;try{for(var u,c=o.default[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var d=u.value;r(d)}}catch(f){s=!0,l=f}finally{try{!a&&c.return&&c.return()}finally{if(s)throw l}}return n}};t.default=u,e.exports=t.default},5439:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},626:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},5506:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},6071:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=s(n(3457)),a=s(n(1642)),i=s(n(1698));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,o.default)();if(l||(l=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var u=new Promise((function(n){"object"===("undefined"===typeof e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):l.then((function(r){var o=new r.Player(e,t);return s.on("ready",(function(){n(o)})),null}))})),c=i.default.promisifyPlayer(u,n);return c.on=s.on,c.off=s.off,c},e.exports=t.default},1642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5102),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},2788:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=n(3572)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},3572:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var o=t.formatters[r];if("function"===typeof o){var a=i[l];n=o.call(e,a),i.splice(l,1),l--}return n})),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(9426),t.names=[],t.skips=[],t.formatters={}},9426:function(e){var t=1e3,n=60*t,r=60*n,o=24*r,a=365.25*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var l,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*a;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&!1===isNaN(e))return s.long?i(l=e,o,"day")||i(l,r,"hour")||i(l,n,"minute")||i(l,t,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);
//# sourceMappingURL=846.2a6dc42c.chunk.js.map