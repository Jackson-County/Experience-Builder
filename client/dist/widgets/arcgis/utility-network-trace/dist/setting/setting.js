System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/advanced/setting-components","jimu-arcgis","jimu-ui/basic/list-tree","jimu-ui/basic/color-picker","jimu-ui/advanced/map"],(function(t,e){var s={},i={},n={},a={},o={},l={},r={},c={};return{setters:[function(t){s.DataSourceManager=t.DataSourceManager,s.Immutable=t.Immutable,s.React=t.React,s.classNames=t.classNames,s.css=t.css,s.defaultMessages=t.defaultMessages,s.jsx=t.jsx},function(t){i.BaseWidgetSetting=t.BaseWidgetSetting},function(t){n.Alert=t.Alert,n.Checkbox=t.Checkbox,n.Label=t.Label,n.SVG=t.SVG,n.Switch=t.Switch,n.TextInput=t.TextInput,n.Tooltip=t.Tooltip,n.defaultMessages=t.defaultMessages},function(t){a.MapWidgetSelector=t.MapWidgetSelector,a.SettingCollapse=t.SettingCollapse,a.SettingRow=t.SettingRow,a.SettingSection=t.SettingSection},function(t){o.MapViewManager=t.MapViewManager,o.loadArcGISJSAPIModules=t.loadArcGISJSAPIModules},function(t){l.List=t.List,l.TreeItemActionType=t.TreeItemActionType},function(t){r.ColorPicker=t.ColorPicker},function(t){c.JimuSymbolType=t.JimuSymbolType,c.SymbolSelector=t.SymbolSelector}],execute:function(){t((()=>{var t={57373:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.795 1.282c.387-.387 1.028-.374 1.431.03l1.462 1.462c.404.403.417 1.044.03 1.431L5.413 11.51l-2.674.48a.637.637 0 0 1-.73-.73l.48-2.673 7.306-7.305ZM2 13a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H2Z" fill="#000"></path></svg>'},59216:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462Zm-8.113 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32Zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461Z" fill="#000"></path><path d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z" fill="#000"></path></svg>'},88866:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" fill="#000"></path></svg>'},79964:t=>{t.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.125 14.334 14H1.667L8 2.125Zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47L7.118 1.653ZM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="#000"></path></svg>'},26826:t=>{"use strict";t.exports=o},48891:t=>{"use strict";t.exports=s},23137:t=>{"use strict";t.exports=i},30726:t=>{"use strict";t.exports=n},58290:t=>{"use strict";t.exports=c},77756:t=>{"use strict";t.exports=a},41362:t=>{"use strict";t.exports=r},59587:t=>{"use strict";t.exports=l}},e={};function p(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,p),n.exports}p.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return p.d(e,{a:e}),e},p.d=(t,e)=>{for(var s in e)p.o(e,s)&&!p.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},p.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),p.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},p.p="";var h={};return p.p=window.jimuConfig.baseUrl,(()=>{"use strict";p.r(h),p.d(h,{default:()=>j});var t=p(48891),e=p(23137),s=p(30726),i=p(77756);const n={sourceLabel:"Source",selectMapWidgetLabel:"Select a Map widget",selectMapWidgetHint:"The Map widget must have maps that contain a utility network (version 5 or later) and shared trace configurations (ArcGIS Enterprise 10.9 or later)",dataConfigLabel:"Customize Settings",dataConfigTooltip:"Click a map below to customize. The map must contain a utility network and trace configurations to be used with this widget",inputSettingsHeading:"Input Settings",inputDescription:"Hint",startingPointLabel:"Starting points",startingPointHint:"Add starting points for the trace.",barrierLabel:"Barriers",barrierHint:"Add barriers for the trace.",traceSettingsHeading:"Trace Settings",traceSettingsHint:"Use the checkboxes to set traces to be selected when the widget loads.",selectionResultsHeading:"Configure selection results",selectionResultsHeadingTooltip:"Enable or disable the options to determine how trace results can be selected and viewed.",showSelectedFeaturesList:"Show list of selected features",selectFeaturesOnComplete:"Select features when trace completes",graphicsResultsHeading:"Configure graphic results",graphicsResultsHeadingTooltip:"Configure the default color and highlight behavior for the graphics results on the map when the trace completes.",graphicsDefaultColor:"Graphic default color",graphicsOnComplete:"Show graphics when trace completes",warningMsgToSelectMap:"A Map widget must be selected to configure this widget.",warningNoMap:"This Map widget does not have any maps.",warningNoTraces:"This map cannot be used with this widget. It does not contain a utility network and/or trace configurations."};var a=p(26826),o=p(59587),l=p(41362),r=p(88866),c=p.n(r);const d=e=>{const{className:i}=e,n=function(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(s[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(s[i[n]]=t[i[n]])}return s}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(s.SVG,Object.assign({className:a,src:c()},n))};var g=p(79964),u=p.n(g);const m=e=>{const{className:i}=e,n=function(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(s[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(s[i[n]]=t[i[n]])}return s}(e,["className"]),a=(0,t.classNames)("jimu-icon jimu-icon-component",i);return t.React.createElement(s.SVG,Object.assign({className:a,src:u()},n))};var f=p(57373),S=p.n(f),b=p(59216),x=p.n(b),w=p(58290);const y={type:"esriPMS",angle:0,xoffset:2,yoffset:8,contentType:"image/png",imageData:"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\t\t\t v+Tf38HMj5k7OWK5X8AAAAASUVORK5CYII=",url:"https://static.arcgis.com/images/Symbols/Basic/BlueShinyPin.png",height:24,width:24};class I extends t.React.PureComponent{constructor(t){super(t),this.jsonUtils=null,this.nls=t=>this.props.intl.formatMessage({id:t,defaultMessage:n[t]}),this.componentDidMount=()=>{let t=null;this.state.apiLoaded||(0,a.loadArcGISJSAPIModules)(["esri/symbols/support/jsonUtils"]).then((e=>{[this.jsonUtils]=e,t=this.props.config&&this.props.config.defaultPointSymbol?this.jsonUtils.fromJSON(this.props.config.defaultPointSymbol):this.jsonUtils.fromJSON(y),this.setState({apiLoaded:!0,defaultSymbol:t})}))},this.onZoomScaleInputChange=t=>{this.setState({zoomScaleInput:t}),this.props.onGeneralSettingsUpdated("zoomScale",t)},this.showSymbolChooser=()=>{this.setState({isPanelOpened:!0})},this.onPointSymbolChanged=t=>{let e=t;null===t&&(e=this.jsonUtils.fromJSON(y)),this.onSymbolChange(e),this.onSymbolClick()},this.onSymbolChange=t=>{this.updatedSymbol=t},this.onSymbolClick=()=>{this.setState({defaultSymbol:this.updatedSymbol},(()=>{var t;this.props.onGeneralSettingsUpdated("defaultPointSymbol",null===(t=this.updatedSymbol)||void 0===t?void 0:t.toJSON())})),this.closeSymbolChooser()},this.closeSymbolChooser=()=>{this.setState({isPanelOpened:!1})};let e=5e4;this.props.config&&this.props.config.zoomScale&&(e=this.props.config.zoomScale),this.state={apiLoaded:!1,zoomScaleInput:e,isPanelOpened:!1,defaultSymbol:null},this.updatedSymbol=null}render(){return(0,t.jsx)("div",{style:{height:"100%",marginTop:"5px"}},(0,t.jsx)(i.SettingRow,{flow:"wrap"},this.state.defaultSymbol&&(0,t.jsx)(w.SymbolSelector,{jimuSymbolType:w.JimuSymbolType.Point,css:(this.props.theme,t.css`
    .zTop {
      z-index: 999;
    }
  `),symbol:this.state.defaultSymbol,onPointSymbolChanged:this.onPointSymbolChanged.bind(this)})))}}var v=function(t,e,s,i){return new(s||(s=Promise))((function(n,a){function o(t){try{r(i.next(t))}catch(t){a(t)}}function l(t){try{r(i.throw(t))}catch(t){a(t)}}function r(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,l)}r((i=i.apply(t,e||[])).next())}))};class j extends e.BaseWidgetSetting{constructor(e){super(e),this.nls=e=>{const i=Object.assign({},n,s.defaultMessages,t.defaultMessages);return this.props.intl&&this.props.intl.formatMessage?this.props.intl.formatMessage({id:e,defaultMessage:i[e]}):i[e]},this.dsRef=t.React.createRef(),this.mvManager=a.MapViewManager.getInstance(),this.dataSourceOptions=[],this.onMapWidgetSelected=t=>v(this,void 0,void 0,(function*(){let e;this.props.onSettingChange({id:this.props.id,useMapWidgetIds:t}),setTimeout((()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("useMapWidgetIds",t)})}),500),t.length>0?(e=!1,yield this.getAvailableDataSources(t)):(e=!0,this.setState({dataSources:[]})),this.updateConfigForMapWidget(e)})),this.updateConfigForMapWidget=t=>{this.setState({mapWidgetExists:!t,isNoMapSelected:t},(()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("useMapWidget",!t)})}))},this.getAvailableDataSources=t=>v(this,void 0,void 0,(function*(){const e=this.mvManager.getJimuMapViewGroup(t);if(this.dataSourceOptions=[],e&&e.jimuMapViews){for(const t in e.jimuMapViews)if(e.jimuMapViews[t].dataSourceId){(e.jimuMapViews[t].isActive||void 0===e.jimuMapViews[t].isActive)&&this.setState({activeDataSource:t},(()=>{setTimeout((()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("activeDataSource",t)})}),500)}));const s=yield this.checkIfMapViewHasTraces(e.jimuMapViews[t]);if(this.dataSourceOptions.push({label:this.getDataSourceLabel(e.jimuMapViews[t].dataSourceId),value:e.jimuMapViews[t].dataSourceId,isValid:s,dataSource:e.jimuMapViews[t]}),s&&(yield this.getTracesInMapView(e.jimuMapViews[t])).length>0){const e={mapId:t,inputSettings:null,traceSettings:null};this.getConfigForSelectedDs(e)}}this.setState({dataSources:this.dataSourceOptions})}})),this.getDataSourceLabel=e=>e?t.DataSourceManager.getInstance().getDataSource(e).getLabel()||e:"",this.getConfigForSelectedDs=t=>{if(Object.prototype.hasOwnProperty.call(this.props.config,"configInfo")){if(this.state.traces.length>0){let e=!1;const s=[...this.props.config.configInfo];if(s.forEach((s=>{s.mapId===t.mapId&&(null!==t.inputSettings&&s.inputSettings.forEach((e=>{t.inputSettings.forEach((t=>{t.type===e.type&&(e=t)}))})),s.traceSettings.forEach((e=>{null!==t.traceSettings&&t.traceSettings.forEach((t=>{t.globalId===e.globalId&&(e=t)}))})),e=!0)})),e)setTimeout((()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("configInfo",s)})}),50);else{const e=this.addDefaultConfigInfo(t);setTimeout((()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("configInfo",e)})}),50)}}}else{const e=this.addDefaultConfigInfo(t);setTimeout((()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("configInfo",e)})}),50)}},this.addDefaultConfigInfo=t=>{if(this.state.traces.length>0){const e=[];if(this.state.traces.forEach((t=>{const s={creationDate:t.creationDate,creator:t.creator,description:t.description,globalId:t.globalId,minStartingPoints:t.minStartingPoints,resultTypes:t.resultTypes,tags:t.tags,title:t.title,traceConfiguration:t.traceConfiguration,traceType:t.traceType},i={selected:!1,visible:!0,traceConfigOverride:"",traceResultSettings:Object.assign({},this.state.defaultTraceResultSettings)},n=Object.assign({},s,i);e.push(n)})),Object.prototype.hasOwnProperty.call(this.props.config,"configInfo")){const s=[...this.props.config.configInfo];return s.push({mapId:t.mapId,inputSettings:null!==t.inputSettings?t.inputSettings:this.state.defaultInputSettings,traceSettings:e}),s}return[{mapId:t.mapId,inputSettings:null!==t.inputSettings?t.inputSettings:this.state.defaultInputSettings,traceSettings:e}]}return null},this.createDsElement=(e,s)=>(0,t.jsx)("div",{ref:this.dsRef,tabIndex:0,"aria-label":e.label,key:s,className:"data-item align-items-center",style:{display:"flex",flexDirection:"row",width:"100%"}},(0,t.jsx)("div",{className:"data-item-name",title:e.label,style:{width:"100%"}},e.label),e.isValid?"":(0,t.jsx)("div",{style:{paddingLeft:5,paddingRight:5}},(0,t.jsx)(m,{size:"m",color:"#ff0000"}))),this.renderInputSettings=()=>(0,t.jsx)(i.SettingSection,null,(0,t.jsx)(i.SettingCollapse,{label:this.nls("inputSettingsHeading"),isOpen:this.state.showInputSettings,onRequestOpen:()=>{this.setState({showInputSettings:!this.state.showInputSettings})},onRequestClose:()=>{this.setState({showInputSettings:!this.state.showInputSettings})}},this.renderInputTypes("starting-point",!0),this.renderInputTypes("barrier",!1))),this.renderInputTypes=(e,n)=>{let a=null;return Object.prototype.hasOwnProperty.call(this.props.config,"configInfo")&&[...this.props.config.configInfo].forEach((t=>{t.mapId===this.props.config.activeDataSource&&t.inputSettings.forEach((t=>{t.type===e&&(a=t)}))})),(0,t.jsx)(i.SettingCollapse,{rightIcon:x(),rightActiveIcon:S(),label:"starting-point"===e?this.nls("startingPointLabel"):this.nls("barrierLabel"),isOpen:"starting-point"===e?this.state.showStartingPointBlock:this.state.showBarriersBlock,onRequestOpen:()=>{"starting-point"===e?this.setState({showStartingPointBlock:!this.state.showStartingPointBlock}):this.setState({showBarriersBlock:!this.state.showBarriersBlock})},onRequestClose:()=>{"starting-point"===e?this.setState({showStartingPointBlock:!this.state.showStartingPointBlock}):this.setState({showBarriersBlock:!this.state.showBarriersBlock})}},(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(s.Label,{tabIndex:0,"aria-label":this.nls("label"),title:this.nls("label"),className:"w-100 d-flex",style:{maxWidth:"88%"}},(0,t.jsx)("div",{className:"text-truncate flex-grow-1 color-label setting-text-level-2"},this.nls("label")))),(0,t.jsx)(i.SettingRow,null,(0,t.jsx)("div",{className:"text-truncate flex-grow-1 color-label setting-text-level-2"},(0,t.jsx)(s.TextInput,{type:"text",value:a.label,onChange:t=>{this.modifyInputSettings(t.currentTarget.value,"label",e)}}))),(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(s.Label,{tabIndex:0,"aria-label":this.nls("inputDescription"),title:this.nls("inputDescription"),className:"w-100 d-flex",style:{maxWidth:"88%"}},(0,t.jsx)("div",{className:"text-truncate flex-grow-1 color-label setting-text-level-2"},this.nls("inputDescription")))),(0,t.jsx)(i.SettingRow,null,(0,t.jsx)("div",{className:"text-truncate flex-grow-1 color-label setting-text-level-2"},(0,t.jsx)(s.TextInput,{type:"text",value:a.description,onChange:t=>{this.modifyInputSettings(t.currentTarget.value,"description",e)}}))),(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(s.Label,{tabIndex:0,"aria-label":this.nls("symbol"),title:this.nls("symbol"),className:"w-100 d-flex",style:{maxWidth:"88%"}},(0,t.jsx)("div",{className:"text-truncate flex-grow-1 color-label setting-text-level-1"},this.nls("symbol"))),(0,t.jsx)(I,{intl:this.props.intl,theme:this.props.theme,config:a.inputSymbol,onGeneralSettingsUpdated:(t,s)=>{const i={zoomScale:1500,defaultPointSymbol:s};this.modifyInputSettings(i,"inputSymbol",e)}})))},this.renderTraceSettings=()=>(0,t.jsx)(i.SettingSection,null,(0,t.jsx)(i.SettingCollapse,{label:this.nls("traceSettingsHeading"),isOpen:this.state.showTraceSettings,onRequestOpen:()=>{this.setState({showTraceSettings:!this.state.showTraceSettings})},onRequestClose:()=>{this.setState({showTraceSettings:!this.state.showTraceSettings})}},this.renderTracesInMap(),this.renderTraceResultSettings())),this.renderTracesInMap=()=>{let e=[...this.state.traces];return Object.prototype.hasOwnProperty.call(this.props.config,"configInfo")&&[...this.props.config.configInfo].forEach((t=>{t.mapId===this.props.config.activeDataSource&&(e=t.traceSettings)})),(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(o.List,{itemsJson:e.map(((t,e)=>({itemStateDetailContent:t,itemKey:`${e}`}))),dndEnabled:!1,isItemFocused:(t,e)=>!0,onClickItemBody:(t,e)=>{},overrideItemBlockInfo:()=>({name:o.TreeItemActionType.RenderOverrideItem,children:[{name:o.TreeItemActionType.RenderOverrideItemBody,children:[{name:o.TreeItemActionType.RenderOverrideItemMainLine}]}]}),renderOverrideItemMainLine:(t,e)=>{const{itemJsons:s}=e.props,i=s[0],n=s[1];return this.renderTraceList(i.itemStateDetailContent,n.indexOf(i))}}))},this.renderTraceList=(e,i)=>(0,t.jsx)("div",{ref:this.dsRef,tabIndex:0,"aria-label":e.title,key:i,className:"data-item align-items-center",style:{display:"flex",flexDirection:"row",width:"100%"}},(0,t.jsx)("div",{className:"data-item-name",title:e.title,style:{width:"100%",padding:9,display:"flex",flexDirection:"row"}},(0,t.jsx)(s.Checkbox,{checked:e.selected,onChange:t=>{this.modifySelectedTrace(t,e)}}),e.title)),this.renderTraceResultSettings=()=>{let e=[...this.state.traces];return Object.prototype.hasOwnProperty.call(this.props.config,"configInfo")&&[...this.props.config.configInfo].forEach((t=>{t.mapId===this.props.config.activeDataSource&&(e=t.traceSettings)})),(0,t.jsx)(i.SettingSection,null,(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(s.Label,{tabIndex:0,"aria-label":this.nls("selectionResultsHeading"),title:this.nls("selectionResultsHeading"),className:"w-100 d-flex",style:{maxWidth:"88%"}},(0,t.jsx)("div",{className:"text-truncate flex-grow-1 color-label setting-text-level-2"},this.nls("selectionResultsHeading"))),(0,t.jsx)(s.Tooltip,{role:"tooltip",tabIndex:0,"aria-label":this.nls("selectionResultsHeading"),title:this.nls("selectionResultsHeading"),showArrow:!0,placement:"top"},(0,t.jsx)("div",{className:"ml-2 d-inline ep-tooltip"},(0,t.jsx)(d,{size:"m"})))),(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(s.Label,{tabIndex:0,"aria-label":this.nls("showSelectedFeaturesList"),title:this.nls("showSelectedFeaturesList"),className:"w-100 d-flex",style:{maxWidth:"88%"}},(0,t.jsx)("div",{className:"text-truncate flex-grow-1 color-label setting-text-level-3"},this.nls("showSelectedFeaturesList"))),(0,t.jsx)(s.Switch,{checked:e[0].traceResultSettings.showSelectedFeatureList,onChange:t=>{this.modifyTraceSetting("showSelectedFeatureList",t.currentTarget.checked)}})),(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(s.Label,{tabIndex:0,"aria-label":this.nls("selectFeaturesOnComplete"),title:this.nls("selectFeaturesOnComplete"),className:"w-100 d-flex",style:{maxWidth:"88%"}},(0,t.jsx)("div",{className:"text-truncate flex-grow-1 color-label setting-text-level-3"},this.nls("selectFeaturesOnComplete"))),(0,t.jsx)(s.Switch,{checked:e[0].traceResultSettings.selectFeaturesOnComplete,onChange:t=>{this.modifyTraceSetting("selectFeaturesOnComplete",t.currentTarget.checked)}})),(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(s.Label,{tabIndex:0,"aria-label":this.nls("graphicsResultsHeading"),title:this.nls("graphicsResultsHeading"),className:"w-100 d-flex",style:{maxWidth:"88%"}},(0,t.jsx)("div",{className:"text-truncate flex-grow-1 color-label setting-text-level-2"},this.nls("graphicsResultsHeading"))),(0,t.jsx)(s.Tooltip,{role:"tooltip",tabIndex:0,"aria-label":this.nls("graphicsResultsHeading"),title:this.nls("graphicsResultsHeading"),showArrow:!0,placement:"top"},(0,t.jsx)("div",{className:"ml-2 d-inline ep-tooltip"},(0,t.jsx)(d,{size:"m"})))),(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(s.Label,{tabIndex:0,"aria-label":this.nls("graphicsDefaultColor"),title:this.nls("graphicsDefaultColor"),className:"w-100 d-flex",style:{maxWidth:"88%"}},(0,t.jsx)("div",{className:"text-truncate flex-grow-1 color-label setting-text-level-3"},this.nls("graphicsDefaultColor"))),(0,t.jsx)(l.ColorPicker,{height:26,icon:"none",onChange:t=>{this.modifyTraceSetting("graphicsColor",t)},onClick:function(){},placement:"bottom",presetColors:[{label:"Red",value:"#FF0000"}],color:e[0].traceResultSettings.graphicsColor.hex,width:30})))},this.checkIfMapViewHasTraces=t=>{let e=!1;const s=t.view;return s.when().then((()=>v(this,void 0,void 0,(function*(){const t=s.map;if(t.hasOwnProperty("utilityNetworks")&&null!==t.utilityNetworks){const s=t.utilityNetworks.getItemAt(0);yield s.load(),s.hasOwnProperty("sharedNamedTraceConfigurations")&&s.sharedNamedTraceConfigurations.length>0&&(e=!0)}return e}))))},this.getTracesInMapView=t=>v(this,void 0,void 0,(function*(){const e=t.view;let s=[];return e.when().then((()=>v(this,void 0,void 0,(function*(){const t=e.map;if(t.hasOwnProperty("utilityNetworks")&&null!==t.utilityNetworks){const e=t.utilityNetworks.getItemAt(0);return yield e.load(),e.hasOwnProperty("sharedNamedTraceConfigurations")&&(s=e.sharedNamedTraceConfigurations,this.setState({traces:e.sharedNamedTraceConfigurations})),s}return s}))))})),this.modifySelectedTrace=(e,s)=>{if(Object.prototype.hasOwnProperty.call(this.props.config,"configInfo")){let i=[];const n=t.Immutable.asMutable((0,t.Immutable)(this.props.config.configInfo),{deep:!0});n.forEach((t=>{t.mapId===this.props.config.activeDataSource&&(t.traceSettings.forEach((t=>{t.globalId===s.globalId&&(t.selected=e.currentTarget.checked)})),i=t.traceSettings)}));const a=(0,t.Immutable)(n);setTimeout((()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("configInfo",a)}),this.setState({traces:i})}),50)}},this.modifyTraceSetting=(e,s)=>{if(Object.prototype.hasOwnProperty.call(this.props.config,"configInfo")){let i=[];const n=t.Immutable.asMutable((0,t.Immutable)(this.props.config.configInfo),{deep:!0});n.forEach((t=>{t.mapId===this.props.config.activeDataSource&&(t.traceSettings.forEach((t=>{if("graphicsColor"===e){const i=this.hexToRgb(s),n={color:[i.r,i.g,i.b,.6],haloOpacity:.9,fillOpacity:.2,hex:s};t.traceResultSettings[e]=n}else t.traceResultSettings[e]=s})),i=t.traceSettings)}));const a=(0,t.Immutable)(n);setTimeout((()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("configInfo",a)}),this.setState({traces:i})}),50)}},this.modifyInputSettings=(e,s,i)=>{if(Object.prototype.hasOwnProperty.call(this.props.config,"configInfo")){const n=t.Immutable.asMutable((0,t.Immutable)(this.props.config.configInfo),{deep:!0});n.forEach((t=>{t.mapId===this.props.config.activeDataSource&&t.inputSettings.forEach((t=>{t.type===i&&(t[s]=e)}))}));const a=(0,t.Immutable)(n);setTimeout((()=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.set("configInfo",a)}),this.setState({})}),50)}},this.updateGeneralSettings=(t,e)=>{this.props.onSettingChange({id:this.props.id,config:this.props.config.setIn(["generalSettings",t],e)})},this.hexToRgb=t=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},this.state={activeDataSource:this.props.config.activeDataSource?this.props.config.activeDataSource:null,dataSources:[],isNoMapSelected:!this.props.config.useMapWidget,mapWidgetExists:!0,showTraceItemPanel:!1,currentMapConfig:null,showInputSettings:!0,showStartingPointBlock:!0,showBarriersBlock:!1,showTraceSettings:!1,traces:[],defaultTraceResultSettings:{showSelectedFeatureList:!0,selectFeaturesOnComplete:!0,graphicsColor:{color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#FFFF00"},showGraphicsOnComplete:!0},defaultInputSettings:[{type:"starting-point",label:this.nls("startingPointLabel"),description:this.nls("startingPointHint"),inputSymbol:{zoomScale:1500,defaultPointSymbol:y},maxInputs:50},{type:"barrier",label:this.nls("barrierLabel"),description:this.nls("barrierHint"),inputSymbol:{zoomScale:1500,defaultPointSymbol:y},maxInputs:50}]}}componentDidMount(){this.props.config.useMapWidgetIds&&this.getAvailableDataSources(this.props.config.useMapWidgetIds)}render(){return(0,t.jsx)("div",{css:(e=this.props.theme,t.css`
    .widget-setting-utility-trace {
      .map-selector-section .component-map-selector .form-control {
        width: 100%;
      }

      .hidden {
        display: none;
      }

      .jimu-tree {
        width: 100%;
      }

      .data-item {
        display: flex;
        flex: 1;
        padding: 0.5rem 0.6rem;
        line-height: 23px;
        cursor: pointer;

        .data-item-name {
          word-break: break-word;
        }
      }

      .warningMsg {
        padding: 0.25rem !important;
        margin-top: -7px;
      }

      .warningMsg .left-part {
        margin-right: 0 !important;
      }

      .color-label {
        color: ${e.colors.palette.dark[400]};
      }

      .ep-tooltip {
        margin-right: 0.3rem !important;
      }

      .ep-section-title {
        color: var(--dark-800);
      }
    }
  `)},(0,t.jsx)("div",{className:"widget-setting-utility-trace"},(0,t.jsx)(i.SettingSection,{className:"map-selector-section",title:this.nls("sourceLabel")},(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(s.Label,{tabIndex:0,"aria-label":this.nls("selectMapWidgetLabel"),title:this.nls("selectMapWidgetLabel"),className:"w-100 d-flex"},(0,t.jsx)("div",{className:"text-truncate flex-grow-1 setting-text-level-3"},this.nls("selectMapWidgetLabel"))),(0,t.jsx)(s.Tooltip,{role:"tooltip",tabIndex:0,"aria-label":this.nls("selectMapWidgetHint"),title:this.nls("selectMapWidgetHint"),showArrow:!0,placement:"top"},(0,t.jsx)("div",{className:"ml-2 d-inline ep-tooltip"},(0,t.jsx)(d,{size:"m"})))),(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(i.MapWidgetSelector,{onSelect:this.onMapWidgetSelected.bind(this),useMapWidgetIds:this.props.useMapWidgetIds}))),(0,t.jsx)(i.SettingSection,null,(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(o.List,{itemsJson:Array.from(this.state.dataSources).map(((t,e)=>({itemStateDetailContent:t,itemKey:`${e}`}))),dndEnabled:!1,isItemFocused:(t,e)=>!0,onClickItemBody:(t,e)=>{const{itemJsons:s}=e.props,i={isValid:s[0].itemStateDetailContent.isValid,label:s[0].itemStateDetailContent.label,dataSource:s[0].itemStateDetailContent.dataSource};this.setState({showTraceItemPanel:!this.state.showTraceItemPanel,currentMapConfig:i},(()=>{this.getTracesInMapView(this.state.currentMapConfig.dataSource)}))},overrideItemBlockInfo:()=>({name:o.TreeItemActionType.RenderOverrideItem,children:[{name:o.TreeItemActionType.RenderOverrideItemBody,children:[{name:o.TreeItemActionType.RenderOverrideItemMainLine}]}]}),renderOverrideItemMainLine:(t,e)=>{const{itemJsons:s}=e.props,i=s[0],n=s[1];return this.createDsElement(i.itemStateDetailContent,n.indexOf(i))}})),this.props.config.useMapWidget&&this.state.dataSources.length<=0&&(0,t.jsx)(i.SettingRow,null,(0,t.jsx)(s.Alert,{tabIndex:0,className:"warningMsg",onClose:function(){},open:!0,text:this.nls("warningNoMap"),type:"warning"})))));var e}}})(),h})())}}}));