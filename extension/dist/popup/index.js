(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a;}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r);},p,p.exports,r,e,n,t);}return n[i].exports;}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o;}return r;})()({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={};},{}],2:[function(require,module,exports){"use strict";var _types=require("../background/types");(function main(){const background=chrome.extension.getBackgroundPage();const context=background&&background.__avgle_helper_context;if(!context)return;const modules=context.modules;const $header=$('#header');const $status=$('#status');let tab=null;let tabInfo=null;getCurrentTabStorage().then(()=>bindErrorNotification()).then(()=>bindItemClickListener()).then(()=>showMenu());function getCurrentTabStorage(){return getCurrentTab().then(_tab=>{if(!_tab)return;tab=_tab;tabInfo=context.queryTabStorage(tab.id);if(tabInfo.carNumber){$header.className+=' matched';$status.innerText=tabInfo.carNumber;$('#groupMatchedVideo').style.display='block';}else{$('#noVideoDetetced').style.display='block';}});}function getCurrentTab(){return new Promise(resolve=>chrome.tabs.query({active:true,currentWindow:true},tabs=>resolve(tabs[0])));}function bindErrorNotification(){const errors=modules.log.getErrorLogItems();if(!errors.length)return;const $error=$('#hasError');$error.style.display='block';$error.innerText=`${errors.length} internal error have occurred`;$error.addEventListener('click',()=>modules.pages.openConsolePage());}function bindItemClickListener(){$$('.menuOption').forEach(item=>{item.addEventListener('click',onClickItem);});}function showMenu(){$('#main').style.opacity=1;}function onClickItem(event){const itemId=this.getAttribute('data-id');switch(itemId){case'download':context.downloadVideoDownloaderScript(tabInfo);break;case'console':modules.pages.openConsolePage();break;case'help':modules.pages.openHelpPage();break;case'settings':modules.pages.openSettingsPage();break;default:}}})();function $(selector,element){return(element||document).querySelector(selector);}function $$(selector,element){return Array.from((element||document).querySelectorAll(selector)||[]);}},{"../background/types":1}]},{},[2]);
//# sourceMappingURL=index.js.map