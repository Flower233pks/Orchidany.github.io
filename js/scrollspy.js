var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(n){"use strict";function i(t,s){this.$body=n(document.body),this.$scrollElement=n(t).is(document.body)?n(window):n(t),this.options=n.extend({},i.DEFAULTS,s),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",n.proxy(this.process,this)),this.refresh(),this.process()}function s(o){return this.each(function(){var t=n(this),s=t.data("bs.scrollspy"),e="object"===(void 0===o?"undefined":_typeof(o))&&o;s||t.data("bs.scrollspy",s=new i(this,e)),"string"==typeof o&&s[o]()})}i.VERSION="3.3.2",i.DEFAULTS={offset:10},i.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},i.prototype.refresh=function(){var t=this,o="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),n.isWindow(this.$scrollElement[0])||(o="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=n(this),s=t.data("target")||t.attr("href"),e=/^#./.test(s)&&n(NexT.utils.escapeSelector(s));return e&&e.length&&e.is(":visible")?[[e[o]().top+i,s]]:null}).sort(function(t,s){return t[0]-s[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},i.prototype.process=function(){var t,s=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),o=this.options.offset+e-this.$scrollElement.height(),i=this.offsets,r=this.targets,l=this.activeTarget;if(this.scrollHeight!==e&&this.refresh(),o<=s)return l!==(t=r[r.length-1])&&this.activate(t);if(l&&s<i[0])return n(this.selector).trigger("clear.bs.scrollspy"),this.activeTarget=null,this.clear();for(t=i.length;t--;)l!==r[t]&&s>=i[t]&&(!i[t+1]||s<=i[t+1])&&this.activate(r[t])},i.prototype.activate=function(t){this.activeTarget=t,this.clear();var s=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',e=n(s).parents("li").addClass("active");e.parent(".dropdown-menu").length&&(e=e.closest("li.dropdown").addClass("active")),e.trigger("activate.bs.scrollspy")},i.prototype.clear=function(){n(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=n.fn.scrollspy;n.fn.scrollspy=s,n.fn.scrollspy.Constructor=i,n.fn.scrollspy.noConflict=function(){return n.fn.scrollspy=t,this},n(window).on("load.bs.scrollspy.data-api",function(){n('[data-spy="scroll"]').each(function(){var t=n(this);s.call(t,t.data())})})}(jQuery);