!function(t){t.fn.typewriter=function(){return this.each(function(){var n=t(this),r=n.html(),e=0;n.html("");var i=setInterval(function(){var t=r.substr(e,1);"<"==t?e=r.indexof(">",e)+1:e++,n.html(r.substring(0,e)+(1&e?"_":"")),e>=r.length&&clearInterval(i)},150)}),this}}(jQuery),$("#code").show().typewriter();</"==t?e=r.indexof(">