"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,i,a,c){return new(a=a||Promise)(function(r,t){function s(e){try{n(c.next(e))}catch(e){t(e)}}function o(e){try{n(c.throw(e))}catch(e){t(e)}}function n(e){var t;e.done?r(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(s,o)}n((c=c.apply(e,i||[])).next())})},__generator=this&&this.__generator||function(r,s){var o,n,i,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(i=2&t[0]?n.return:t[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,t[1])).done)return i;switch(n=0,(t=i?[2&t[0],i.value]:t)[0]){case 0:case 1:i=t;break;case 4:return a.label++,{value:t[1],done:!1};case 5:a.label++,n=t[1],t=[0];continue;case 7:t=a.ops.pop(),a.trys.pop();continue;default:if(!(i=0<(i=a.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){a=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){a.label=t[1];break}if(6===t[0]&&a.label<i[1]){a.label=i[1],i=t;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(t);break}i[2]&&a.ops.pop(),a.trys.pop();continue}t=s.call(r,a)}catch(e){t=[6,e],n=0}finally{o=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var s,o=0,n=t.length;o<n;o++)!s&&o in t||((s=s||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(s||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.buildItem=exports.removeResources=exports.resource=exports.resources=exports.updateResources=exports.addResources=exports.removeItem=exports.searchItem=exports.items=exports.getItemData=exports.updateAppItem=exports.addItem=void 0;var fs=require("fs-extra"),fetch=require("cross-fetch");require("../../../global");var utils_1=require("./utils");require("isomorphic-form-data"),global.fetch=fetch;var url=require("url"),uploadThumbnail=(0,utils_1.getThumbnailUpdateMulter)(),upload=(0,utils_1.getUploadMulter)();function addItem(f,_){return __awaiter(this,void 0,void 0,function(){var t,r,s,o,n,i,a,c,u,l,d,p;return __generator(this,function(e){switch(e.label){case 0:t={error:{message:"",success:!1}};try{if(f.type="json",(r=f.request.body||{}).typeKeywords?r.typeKeywords=Array.isArray(r.typeKeywords)?r.typeKeywords:r.typeKeywords.split(","):delete r.typeKeywords,r.hasOwnProperty("snippet")&&delete r.snippet,delete r.thumbnail,s=(0,utils_1.addItemParamsIsPass)(r))return t.error.message=s,[2,(0,utils_1.requestException)(t,f)];fs.ensureDirSync(utils_1.appFolderPath),o=Date.now(),n=fs.readdirSync(utils_1.appFolderPath),i=(0,utils_1.getFolderIndex)(n,0)+"",r.id=i,r.created=o,r.modified=o,r.owner=r.username,delete(a=__assign(__assign({},utils_1.infoJson),r)).text,a=(0,utils_1.deepClone)(a),c="".concat(utils_1.appFolderPath,"/").concat(i),fs.mkdirSync(c),u=JSON.stringify(a,null,2),fs.writeFileSync("".concat(c,"/info.json"),u),l={__not_publish:!0},d=JSON.stringify(l),r.text&&(d="string"==typeof r.text?r.text:JSON.stringify(r.text,null,2)),fs.writeFileSync("".concat(c,"/config.json"),d),p={folder:"apps/".concat(i),id:i,success:!0},(0,utils_1.commonResponse)(f,p)}catch(e){t.error.message=e,(0,utils_1.writeResponseLog)(e,!0),f.body=t}return[4,_()];case 1:return e.sent(),[2]}})})}function updateAppItem(u,r){return __awaiter(this,void 0,void 0,function(){var c,t;return __generator(this,function(e){switch(e.label){case 0:c={message:"",itemId:"",success:!1},e.label=1;case 1:return e.trys.push([1,3,,4]),[4,uploadThumbnail.single("thumbnail")(u,r).then(function(e){var t=u.request.body||{},r=(0,utils_1.getIdFromUrl)(u),s=u.request.headers["content-type"];delete t.thumbnail,t.typeKeywords?t.typeKeywords=Array.isArray(t.typeKeywords)?t.typeKeywords:t.typeKeywords.split(","):delete t.typeKeywords;var o="".concat(utils_1.appFolderPath,"/").concat(r,"/info.json"),n="".concat(utils_1.appFolderPath,"/").concat(r,"/config.json");if(!fs.existsSync(o)||!fs.existsSync(n))return c.message="no file",c.itemId=r,(0,utils_1.requestException)(c,u);var i,a=JSON.parse(fs.readFileSync(o,"utf8"));-1!=s.indexOf("/form-data")&&(i=fs.readdirSync("".concat(utils_1.appFolderPath,"/").concat(r,"/thumbnail")),a.thumbnail="thumbnail/".concat(i[0])),t.text&&(s="string"==typeof t.text?JSON.parse(t.text):t.text,i=JSON.stringify(__assign({},s),null,2),(null==s?void 0:s.__not_publish)||fs.writeFileSync(n,i),delete t.text),t.username&&(t.owner=t.username),t.modified=Date.now();t=JSON.stringify(__assign(__assign({},a),t),null,2);fs.writeFileSync(o,t),(0,utils_1.commonResponse)(u,{id:r,success:!0})}).catch(function(e){c.message="upload failed",u.body=c})];case 2:return e.sent(),[3,4];case 3:return t=e.sent(),c.message=t,(0,utils_1.writeResponseLog)(t,!0),u.body=c,[3,4];case 4:return[2]}})})}function getItemData(a,c){return __awaiter(this,void 0,void 0,function(){var t,r,s,o,n,i;return __generator(this,function(e){switch(e.label){case 0:t={error:{message:"",id:"",success:!1}};try{if(r=(0,utils_1.getIdFromUrl)(a),s="".concat(utils_1.appFolderPath,"/").concat(r,"/config.json"),!fs.existsSync(s))return t.error.message="no file",t.error.id=r,o={message:"no item",id:r,success:!1},(0,utils_1.commonResponse)(a,o),[2,!1];n=JSON.parse(fs.readFileSync(s,"utf8")),i=__assign(__assign({},n),{id:r,success:!0}),(0,utils_1.commonResponse)(a,i)}catch(e){t.error.message=e,(0,utils_1.writeResponseLog)(e,!0),a.body=t}return[4,c()];case 1:return e.sent(),[2]}})})}function items(a,c){return __awaiter(this,void 0,void 0,function(){var t,r,s,o,n,i;return __generator(this,function(e){switch(e.label){case 0:if(t={error:{message:"",id:"",success:!1}},r=a.req.url,!(-1!=r.indexOf("/sharing/rest/content/users/items")&&7==r.split("/").length))return[2,!1];try{if(s=(0,utils_1.getIdFromUrl)(a,0),o="".concat(utils_1.appFolderPath,"/").concat(s,"/info.json"),!fs.existsSync(o))return t.error.message="Item does not exist or is inaccessible.",t.error.id=s,[2,(0,utils_1.requestException)(t,a)];n=JSON.parse(fs.readFileSync(o,"utf8")),i=__assign(__assign({},n),{id:s,success:!0}),(0,utils_1.commonResponse)(a,i)}catch(e){t.error.message=e,(0,utils_1.writeResponseLog)(e,!0),a.body=t}return[4,c()];case 1:return e.sent(),[2]}})})}function searchItem(y,g){return __awaiter(this,void 0,void 0,function(){var t,r,s,o,n,i,a,c,u,l,d,p,f,_,m,h;return __generator(this,function(e){switch(e.label){case 0:try{t=[],r=void 0,s=y.request.method,r="GET"==s?url.parse(y.request.url,!0).query:y.request.body||{},o=utils_1.appFolderPath,fs.existsSync(o)&&(n=fs.readdirSync(o),i=r.q,a="",i&&-1!=i.indexOf("(")&&(a=i?i.split("(")[1].split(")")[0]:""),i&&-1!=i.indexOf("title:")&&(a=i?i.split("title:")[1]:""),c=[],n.forEach(function(e){var e="".concat(o,"/").concat(e,"/info.json");fs.pathExistsSync(e)&&(e=JSON.parse(fs.readFileSync(e,"utf-8")),c.push(e))}),t=(0,utils_1.fuzzyMatching)(c,a,"title",!0)),t=(0,utils_1.filterByType)(t,r.q),u=t,l=(0,utils_1.getOwner)(r.q),u=(0,utils_1.filterDataByOwner)(u,l.owner,l.isNot),(d=null==r?void 0:r.portalUrl)&&(u=(0,utils_1.filterDataByPortalUrl)(u,d)),r.sortOrder&&(u=(0,utils_1.sortByNumber)(u,"created",r.sortOrder)),"modified"!=r.sortField&&"created"!=r.sortField||(u=(0,utils_1.sortByNumber)(u,r.sortField)),"title"==r.sortField&&(u=(0,utils_1.sortByInitial)(u,r.sortField)),p=Number(r.start)||0,f=Number(r.num)||10,_=p+f,m=[],u.forEach(function(e,t){t+=1;p<=t&&t<_&&m.push(e)}),h={nextStart:_,num:m.length,query:r.q,results:m,start:r.start,total:u.length},(0,utils_1.commonResponse)(y,h)}catch(e){(0,utils_1.writeResponseLog)(e,!0),y.body=e}return[4,g()];case 1:return e.sent(),[2]}})})}function removeItem(n,i){return __awaiter(this,void 0,void 0,function(){var t,r,s,o;return __generator(this,function(e){switch(e.label){case 0:t={message:"",itemId:"",success:!1};try{if(r=(0,utils_1.getIdFromUrl)(n),s="".concat(utils_1.appFolderPath,"/").concat(r),!fs.existsSync(s))return t.message="no folder",t.itemId=r,[2,(0,utils_1.requestException)(t,n)];fs.removeSync(s),o={id:r,success:!0},(0,utils_1.commonResponse)(n,o)}catch(e){t.message=e,(0,utils_1.writeResponseLog)(e,!0),n.body=t}return[4,i()];case 1:return e.sent(),[2]}})})}function addResources(o,s){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(e){switch(e.label){case 0:t={error:{message:"",details:[],success:!1}},e.label=1;case 1:return e.trys.push([1,3,,4]),[4,upload.single("file")(o,s).then(function(e){var t=(0,utils_1.getIdFromUrl)(o),r=o.request.body,s="".concat(utils_1.appFolderPath,"/").concat(t,"/resources/").concat(r.resourcesPrefix,"/").concat(r.fileName);(0,utils_1.formatJson)(s,r.fileName);r=(0,utils_1.getOwnerFromInfo)(t);(0,utils_1.commonResponse)(o,{folder:t,itemId:t,owner:r,success:!0})}).catch(function(e){t.error.message="upload failed",o.body=t})];case 2:return e.sent(),[3,4];case 3:return r=e.sent(),t.error.message=r,(0,utils_1.writeResponseLog)(r,!0),o.body=t,[3,4];case 4:return[2]}})})}function updateResources(n,s){return __awaiter(this,void 0,void 0,function(){var t,r;return __generator(this,function(e){switch(e.label){case 0:t={message:"",success:!1},e.label=1;case 1:return e.trys.push([1,3,,4]),[4,upload.single("file")(n,s).then(function(e){var t=(0,utils_1.getIdFromUrl)(n),r=n.request.body,s="".concat(utils_1.appFolderPath,"/").concat(t,"/resources/").concat(r.resourcesPrefix,"/").concat(r.fileName),o=(0,utils_1.getOwnerFromInfo)(t);(0,utils_1.formatJson)(s,r.fileName),(0,utils_1.commonResponse)(n,{folder:t,itemId:t,owner:o,success:!0})}).catch(function(e){t.message="upload failed",n.body=t})];case 2:return e.sent(),[3,4];case 3:return r=e.sent(),t.message=r,(0,utils_1.writeResponseLog)(r,!0),n.body=t,[3,4];case 4:return[2]}})})}function resources(i,a){return __awaiter(this,void 0,void 0,function(){var t,r,s,o,n;return __generator(this,function(e){switch(e.label){case 0:try{if(t=(0,utils_1.getIdFromUrl)(i),r="".concat(utils_1.appFolderPath,"/").concat(t,"/resources"),!fs.existsSync(r))return s={total:0,start:1,num:0,nextStart:-1,resources:[],success:!1},(0,utils_1.commonResponse)(i,s),[2,!1];o=(0,utils_1.readFolder)(r,"resources/"),n={total:o.length,start:1,num:o.length,nextStart:-1,resources:o,success:!0},(0,utils_1.commonResponse)(i,n)}catch(e){(0,utils_1.writeResponseLog)(e,!0),i.body=e}return[4,a()];case 1:return e.sent(),[2]}})})}function resource(n,i){return __awaiter(this,void 0,void 0,function(){var t,r,s,o;return __generator(this,function(e){switch(e.label){case 0:try{if(t=n.params.id,r=n.params.resourceName,s="".concat(utils_1.appFolderPath,"/").concat(t,"/resources/").concat(r),!fs.existsSync(s))return[2,!(n.response.status=404)];o=fs.readFileSync(s,"utf-8"),(0,utils_1.commonResponse)(n,o)}catch(e){(0,utils_1.writeResponseLog)(e,!0),n.body=e}return[4,i()];case 1:return e.sent(),[2]}})})}function removeResources(i,a){return __awaiter(this,void 0,void 0,function(){var t,r,s,o,n;return __generator(this,function(e){switch(e.label){case 0:t={error:{code:404,message:"",details:[],id:"",success:!1}};try{if((r=i.request.body||{}).deleteAll=!!r.hasOwnProperty("deleteAll")&&r.deleteAll,s=(0,utils_1.getIdFromUrl)(i),t.error.id=s,!r.deleteAll&&!r.resource)return t.error.message="no resource",[2,(0,utils_1.requestException)(t,i)];if(o=r.deleteAll?"".concat(utils_1.appFolderPath,"/").concat(s,"/resources"):"".concat(utils_1.appFolderPath,"/").concat(s,"/resources/").concat(r.resource),!fs.existsSync(o))return t.error.message="no folder",[2,(0,utils_1.requestException)(t,i)];fs.removeSync(o),n={id:s,success:!0},(0,utils_1.commonResponse)(i,n)}catch(e){t.error.message=e,(0,utils_1.writeResponseLog)(e,!0),i.body=t}return[4,a()];case 1:return e.sent(),[2]}})})}function buildItem(n,i){return __awaiter(this,void 0,void 0,function(){var t,r,s,a,c,o;return __generator(this,function(e){switch(e.label){case 0:t={error:{message:"",itemId:"",detail:Object,success:!1}},e.label=1;case 1:return e.trys.push([1,3,,4]),r=require("child_process"),s=require("path"),a=(0,utils_1.getIdFromUrl)(n),c=function(e,t){for(var r=[],s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t="[".concat(Date(),"] ").concat(t),console[e].apply(console,r.length?__spreadArray(__spreadArray(["".concat(">".repeat(60),"\n").concat(t,"\n")],r,!0),["\n".concat(t,"\n").concat("<".repeat(60))],!1):["".concat(t)])},[4,Promise.resolve("").then(function(e){return new Promise(function(n,i){var e=s.resolve(__dirname,"../../../../logs/experience-app-build-".concat((new Date).toISOString().split("T").shift(),".log"));r.exec('npx webpack --config="./webpack/webpack-experience-app-build.config.js" --expAppId="'.concat(a,'" >> "').concat(e,'" 2>&1'),{cwd:s.resolve(__dirname,"../../../../../client"),timeout:1e6},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=e[0],s=e[1],o=e[2];s&&console.log("[".concat(Date(),"] stdout: \n").concat(s)),o&&console.error("[".concat(Date(),"] stderr: \n").concat(o)),r?(c("error","========== buildItem ========== FAILED for AppId ".concat(a),r),i(e)):(c("info","========== buildItem ========== SUCCEEDED for AppId ".concat(a,"!")),n(s))})})}).then(function(e){var t=(0,utils_1.getOwnerFromInfo)(a),e={folder:a,itemId:a,owner:t,success:!0,result:e.toString()};(0,utils_1.commonResponse)(n,e)}).catch(function(e){t.error.message="build failed",t.error.itemId=a,t.error.detail=e,n.body=t})];case 2:return e.sent(),[3,4];case 3:return o=e.sent(),t.error.message=o,(0,utils_1.writeResponseLog)(o,!0),n.body=t,[3,4];case 4:return[4,i()];case 5:return e.sent(),[2]}})})}exports.addItem=addItem,exports.updateAppItem=updateAppItem,exports.getItemData=getItemData,exports.items=items,exports.searchItem=searchItem,exports.removeItem=removeItem,exports.addResources=addResources,exports.updateResources=updateResources,exports.resources=resources,exports.resource=resource,exports.removeResources=removeResources,exports.buildItem=buildItem;