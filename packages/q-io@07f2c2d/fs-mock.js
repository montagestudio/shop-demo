function MockFs(e,t){return this instanceof MockFs?(this._root=new DirectoryNode(this,"/"),Common.update(this,function(){return t}),t=t||this.ROOT,e&&this._init(e),void 0):new MockFs(e,t)}function mock(e,t){return Q.when(e.listTree(t),function(n){var r={};return Q.all(n.map(function(n){var i=e.join(t,n),a=e.relativeFromDirectory(t,i);return Q.when(e.stat(i),function(t){return t.isFile()?Q.when(e.read(n,"rb"),function(e){r[a]=e}):void 0})})).then(function(){return MockFs(r)})})}function Node(e){if(!e)throw Error("FS required argument");this._fs=e,this.atime=this.mtime=Date.now(),this.mode=parseInt("0644",8),this._owner=null}function FileNode(e){Node.call(this,e),this._chunks=[]}function DirectoryNode(e){Node.call(this,e),this._entries=Object.create(null),this.mode=parseInt("0755",8)}function LinkNode(e,t){Node.call(this,e),this._link=t}var Q=require("q"),Boot=require("./fs-boot"),Common=require("./fs-common"),BufferStream=require("./buffer-stream"),Reader=require("./reader"),Set=require("collections/set");module.exports=MockFs,MockFs.prototype=Object.create(Boot),MockFs.prototype._init=function(e,t){t=t||this.ROOT,Object.keys(e).forEach(function(n){var r=e[n];n=this.join(t,n);var i=this.directory(n),a=this.base(n),o=this._root._walk(i,!0),s=new FileNode(this);if(!(r instanceof Buffer)){if("object"==typeof r)return this._root._walk(n,!0),this._init(r,n),void 0;r=new Buffer(r+"","utf-8")}o._entries[a]=s,s._chunks=[r]},this)},MockFs.prototype.list=function(e){var t=this;return Q.fcall(function(){e=t.absolute(e);var n=t._root._walk(e)._follow(e);return n.isDirectory()||Error("Can't list non-directory: "+JSON.stringify(e)),Object.keys(n._entries).sort()})},MockFs.prototype.open=function(e,t,n,r){var i=this;return Q.fcall(function(){e=i.absolute(e);var a=i.directory(e),o=i.base(e),s=i._root._walk(a);if(!s.isDirectory())throw Error("Can't find "+e+" because "+a+" is not a directory");"object"==typeof t?(r=t,t=r.flags,n=r.charset):r=r||{},t=t||"r";var l=t.indexOf("b")>=0,u=t.indexOf("w")>=0,c=t.indexOf("a")>=0;if(l||(n=n||"utf-8"),u||c){s._entries[o]||(s._entries[o]=new FileNode(this),"mode"in r&&(s._entries[o].mode=r.mode));var h=s._entries[o]._follow(e);if(!h.isFile())throw Error("Can't write non-file "+e);return h.mtime=Date.now(),h.atime=Date.now(),c||(h._chunks.length=0),new BufferStream(h._chunks,n)}if(!s._entries[o])throw Error("Can't read non-existant "+e);var h=s._entries[o]._follow(e);if(!h.isFile())throw Error("Can't read non-file "+e);return h.atime=Date.now(),"begin"in r&&"end"in r?new BufferStream([Reader.join(h._chunks).slice(r.begin,r.end)],n):new BufferStream(h._chunks,n)})},MockFs.prototype.remove=function(e){var t=this;return Q.fcall(function(){e=t.absolute(e);var n=t.directory(e),r=t.base(e),i=t._root._walk(n);if(!i.isDirectory())throw Error("Can't remove file from non-directory: "+e);if(!i._entries[r])throw Error("Can't remove non-existant file: "+e);if(i._entries[r].isDirectory())throw Error("Can't remove directory. Use removeDirectory: "+e);delete i._entries[r]})},MockFs.prototype.makeDirectory=function(e,t){var n=this;return Q.fcall(function(){e=n.absolute(e);var r=n.directory(e),i=n.base(e),a=n._root._walk(r);if(!a.isDirectory()){var o=Error("Can't make directory in non-directory: "+e);throw o.code="EEXISTS",o.exists=!0,o}if(a._entries[i]){var o=Error("Can't make directory. Entry exists: "+e);throw o.code="EISDIR",o.exists=!0,o.isDirectory=!0,o}a._entries[i]=new DirectoryNode(n),t&&(a._entries[i].mode=t)})},MockFs.prototype.removeDirectory=function(e){var t=this;return Q.fcall(function(){e=t.absolute(e);var n=t.directory(e),r=t.base(e),i=t._root._walk(n);if(!i.isDirectory())throw Error("Can't remove directory from non-directory: "+e);if(!i._entries[r])throw Error("Can't remove non-existant directory: "+e);if(!i._entries[r].isDirectory())throw Error("Can't remove non-directory: "+e);delete i._entries[r]})},MockFs.prototype.stat=function(e){var t=this;return Q.fcall(function(){return e=t.absolute(e),new t.Stats(t._root._walk(e)._follow(e))})},MockFs.prototype.statLink=function(e){var t=this;return Q.fcall(function(){return e=t.absolute(e),new t.Stats(t._root._walk(e))})},MockFs.prototype.link=function(e,t){var n=this;return Q.fcall(function(){e=n.absolute(e),t=n.absolute(t);var r=n._root._walk(e)._follow(e);if(!r.isFile())throw Error("Can't link non-file: "+e);var i=n.directory(t),a=n.base(t),o=n._root._walk(i)._follow(i);if(!o.isDirectory())throw Error("Can't create link in non-directory: "+t);if(o._entries[a]&&o._entries[a].isDirectory())throw Error("Can't overwrite existing directory with hard link: "+t);o._entries[a]=r})},MockFs.prototype.symbolicLink=function(e,t){var n=this;return Q.fcall(function(){e=n.absolute(e);var r=n.directory(e),i=n.base(e),a=n._root._walk(r);if(a._entries[i]&&a._entries[i].isDirectory())throw Error("Can't overwrite existing directory with symbolic link: "+e);a._entries[i]=new LinkNode(n,t)})},MockFs.prototype.chown=function(e,t){var n=this;return Q.fcall(function(){e=n.absolute(e),n._root._walk(e)._follow(e)._owner=t})},MockFs.prototype.chmod=function(e,t){var n=this;return Q.fcall(function(){e=n.absolute(e),n._root._walk(e)._follow(e).mode=t})},MockFs.prototype.rename=function(e,t){var n=this;return Q.fcall(function(){e=n.absolute(e),t=n.absolute(t);var r=n.directory(e),i=n._root._walk(r)._follow(r),a=n.base(e),o=i._entries[a];if(!o){var s=Error("Can't copy non-existent file: "+e);throw s.code="ENOENT",s}if(o=o._follow(e),!o){var s=Error("Can't copy non-existent file: "+e);throw s.code="ENOENT",s}var l=n.directory(t),u=n._root._walk(l)._follow(l),c=n.base(t),h=u._entries[c];if(h&&(h=h._follow(t)),h&&h.isDirectory()){var s=Error("Can't copy over existing directory: "+t);throw s.code="EISDIR",s}h!==o&&(u._entries[c]=o,delete i._entries[a])})},MockFs.prototype.readLink=function(e){var t=this;return Q.fcall(function(){e=t.absolute(e);var n=t._root._walk(e);if(!t.isSymbolicLink())throw Error("Can't read non-symbolic link: "+e);return n._link})},MockFs.prototype.canonical=function(e){var t=this;return Q.fcall(function(){return e=t.absolute(e),t._root._canonical(e)})},MockFs.mock=mock,Node.prototype._walk=function(e,t,n){var r=this._fs.split(e);return this._fs.isAbsolute(e)?(r.shift(),this._fs._root._walkParts(r,t,this._fs.ROOT)):this._walkParts(r,t,n||this._fs.ROOT)},Node.prototype._walkParts=function(e,t,n){if(0===e.length)return this;var r=e.shift();if(""===r)return this._walkParts(e,t,this._fs.join(n,r));var i=Error("Can't find "+JSON.stringify(this._fs.resolve(r,this._fs.join(e)))+" via "+JSON.stringify(n));throw i.code="ENOENT",i},Node.prototype._canonical=function(e){if(!this._fs.isAbsolute(e))throw Error("Path must be absolute for _canonical: "+e);var t=this._fs.split(e);t.shift();var n=this._fs.ROOT;return n+this._fs._root._canonicalParts(t,n)},Node.prototype._canonicalParts=function(e,t){return 0===e.length?t:this._fs.join(t,this._fs.join(e))},Node.prototype._follow=function(){return this},Node.prototype._touch=function(){this.mtime=Date.now()};var stats=["isDirectory","isFile","isBlockDevice","isCharacterDevice","isSymbolicLink","isFIFO","isSocket"];stats.forEach(function(e){Node.prototype[e]=function(){return!1}}),Node.prototype.lastAccessed=function(){return this.atime},Node.prototype.lastModified=function(){return this.mtime},FileNode.prototype=Object.create(Node.prototype),FileNode.prototype.isFile=function(){return!0},Object.defineProperty(FileNode.prototype,"size",{configurable:!0,enumerable:!0,get:function(){return this._chunks.reduce(function(e,t){return e+=t.length},0)}}),DirectoryNode.prototype=Object.create(Node.prototype),DirectoryNode.prototype.isDirectory=function(){return!0},DirectoryNode.prototype._walkParts=function(e,t,n){if(n=n||this._fs.ROOT,0===e.length)return this;var r=e.shift();if(""===r)return this._walkParts(e,t,this._fs.join(n,r));if(!this._entries[r]){if(!t){var i=Error("Can't find "+JSON.stringify(this._fs.join(e))+" via "+JSON.stringify(n));throw i.code="ENOENT",i}this._entries[r]=new DirectoryNode(this._fs)}return this._entries[r]._walkParts(e,t,this._fs.join(n,r))},DirectoryNode.prototype._canonicalParts=function(e,t){if(0===e.length)return t;var n=e.shift();return""===n?t:(t===this._fs.ROOT&&(t=""),this._entries[n]?this._entries[n]._canonicalParts(e,this._fs.join(t,n)):this._fs.join(t,n,this._fs.join(e)))},LinkNode.prototype=Object.create(Node.prototype),LinkNode.prototype.isSymbolicLink=function(){return!0},LinkNode.prototype._follow=function(e,t){if(t=t||Set(),t.has(this)){var n=Error("Can't follow symbolic link cycle at "+JSON.stringify(e));throw n.code="ELOOP",n}t.add(this);var r=this._fs.join(e,"..",this._link);return this._walk(r,null,"<link>")._follow(r,t)},LinkNode.prototype._canonicalParts=function(e,t){return this._fs.relativeFromDirectory(this._fs.ROOT,this._fs._root._canonical(this._fs.absolute(this._fs.join(t,"..",this._link))))};var FS=require("./fs");