(function(j,r,n){var o=function(a,d){var g=a.length,b=0,e=[],h;for(b;b<g;b++){h=d[b];if("string"!==typeof h)return null;if("**"==a[b])return d.join(".");if("*"==a[b])e.push(h);else if(h===a[b])e.push(h);else return null}return e.join(".")},l=function(a,d,g,b,e){var h=d.split("."),p=(this._observe_delegates||[]).slice(0),c,f,l,i,k;a.attr=d;a.lastAttr=h[h.length-1];for(var q=0;c=p[q++];)if(!(a.batchNum&&c.batchNum===a.batchNum||c.undelegated)){i=n;k=!0;for(var m=0;m<c.attrs.length;m++){f=c.attrs[m];
if(l=o(f.parts,h))i=l;f.value&&k?k=f.value===""+this.attr(f.attr):k&&1<c.attrs.length&&(k=this.attr(f.attr)!==n)}i&&k&&((f=d.replace(i+".",""),a.batchNum&&(c.batchNum=a.batchNum),"change"===c.event)?(arguments[1]=f,a.curAttr=i,c.callback.apply(this.attr(i),j.makeArray(arguments))):c.event===g?c.callback.apply(this.attr(i),[a,b,e,f]):"set"===c.event&&"add"==g&&c.callback.apply(this.attr(i),[a,b,e,f]))}};j.extend(j.Observe.prototype,{delegate:function(a,d,g){var a=j.trim(a),b=this._observe_delegates||
(this._observe_delegates=[]),e=[];a.replace(/([^\s=]+)=?([^\s]+)?/g,function(a,b,c){e.push({attr:b,parts:b.split("."),value:c})});b.push({selector:a,attrs:e,callback:g,event:d});1===b.length&&this.bind("change",l);return this},undelegate:function(a,d,g){var a=j.trim(a),d=0,b=this._observe_delegates||[],e;if(a)for(;d<b.length;)e=b[d],e.callback===g||!g&&e.selector===a?(e.undelegated=!0,b.splice(d,1)):d++;else b=[];b.length||this.unbind("change",l);return this}});j.Observe.prototype.delegate.matches=
o})(can={},this);