(()=>{var e={159:(e,t,r)=>{"use strict";var n=r(929);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,u){if(u!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},15:(e,t,r)=>{e.exports=r(159)()},929:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{default:()=>l});const e=require("react");var t=r.n(e),o=r(15);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var r,n,o,i,f=(o=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(i){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return a(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=f.call(this,e)).state={isVisible:!0},t.hide=t.hide.bind(c(t)),t.resumeTimer=t.resumeTimer.bind(c(t)),t.pauseTimer=t.pauseTimer.bind(c(t)),t}return r=l,(n=[{key:"componentDidMount",value:function(){var e=this.props.duration;this.remaining=e,this.resumeTimer()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"hide",value:function(){this.setState({isVisible:!1})}},{key:"resumeTimer",value:function(){window.clearTimeout(this.timer),this.start=new Date,this.timer=setTimeout(this.hide,this.remaining)}},{key:"pauseTimer",value:function(){this.props.persistOnHover&&(clearTimeout(this.timer),this.remaining-=new Date-this.start)}},{key:"render",value:function(){var e=this.state.isVisible,r=this.props.children;return e?t().createElement("div",{onMouseEnter:this.pauseTimer,onMouseLeave:this.resumeTimer},r):null}}])&&u(r.prototype,n),l}(e.Component);f.defaultProps={duration:5e3,children:null,persistOnHover:!0},f.propTypes={children:o.node,duration:o.number,persistOnHover:o.bool};const l=f})(),module.exports=n})();