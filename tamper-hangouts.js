// ==UserScript==
// @name         Hangouts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Szilveszter Szilagyi
// @match        https://hangouts.google.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function addGlobalStyle(css) {
  // https://somethingididnotknow.wordpress.com/2013/07/01/change-page-styles-with-greasemonkeytampermonkey/
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  head.appendChild(style);
}
function tamperOnload(){console.log('---------------------------------------------------');
  addGlobalStyle('.talk_chat_widget{margin-bottom:20px}');
  addGlobalStyle('#hangout-landing-chat{margin-bottom:20px}');
}
tamperOnload();
