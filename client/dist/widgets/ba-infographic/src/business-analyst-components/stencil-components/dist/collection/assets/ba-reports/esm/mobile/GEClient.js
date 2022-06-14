var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{s(n.next(e))}catch(e){a(e)}}function c(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}s((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};import{ArcGISClient}from"./ArcGISClient";import{ReportTemplatesManager}from"./ReportTemplatesManager";import{SettingsHelper}from"./SettingsHelper";var GEClient=function(){function e(){}return e.getInfographicTemplatesList=function(e,t){return void 0===t&&(t=!1),__awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:return[4,ReportTemplatesManager.getInfographicReportTemplateItems(e||"US",t)];case 1:return[2,r.sent()]}}))}))},e.getClassicReportsTemplatesList=function(e,t){return void 0===t&&(t=!1),__awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:return[4,ReportTemplatesManager.getReportTemplates(e||"US",t)];case 1:return[2,r.sent()]}}))}))},e.execute=function(e){return new Promise((function(t,r){ArcGISClient.getGeoenrichmentUrl().then((function(n){var i=e?JSON.parse(JSON.stringify(e)):{};i.data||(i.data={}),i.data.forStorage=!1,ArcGISClient.executeRequest({url:n+i.taskPath,data:i.data}).then(t).catch(r)})).catch(r)}))},e.createReport=function(e){return new Promise((function(t,r){ArcGISClient.getGeoenrichmentUrl().then((function(n){var i=n.toString()+"/GeoEnrichment/CreateReport";ArcGISClient.executeRequest({url:i,data:e}).then(t).catch(r)})).catch(r)}))},e.enrich=function(e){var t=this;return new Promise((function(r,n){return __awaiter(t,void 0,void 0,(function(){var t,i;return __generator(this,(function(a){switch(a.label){case 0:return[4,SettingsHelper.getPortalBaseUrl()];case 1:return t=a.sent(),i="https://www.arcgis.com"===t?"https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/Enrich":"https://qaext.arcgis.com"===t?"https://geoenrichqa.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/Enrich":"https://devext.arcgis.com"===t?"https://geoenrichdev.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/Enrich":"https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/Enrich",console.log("enrichURL",i),e.forStorage=!1,ArcGISClient.executeRequest({url:i,data:e}).then((function(e){var t=e&&e.results&&e.results.length&&e.results[0],i=t&&t.value&&t.value.FeatureSet&&t.value.FeatureSet.length&&t.value.FeatureSet[0];if(i.features&&i.features.length)r(e);else{var a=e&&e.messages&&e.messages.length&&e.messages[0].description;a||(a="getfacts-no-data"),n(a)}}),(function(e){n(e)})),[2]}}))}))}))},e}();export{GEClient};