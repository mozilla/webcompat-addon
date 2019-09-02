/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/* globals module */

/**
 * For detailed information on our policies, and a documention on this format
 * and its possibilites, please check the Mozilla-Wiki at
 *
 * https://wiki.mozilla.org/Compatibility/Go_Faster_Addon/Override_Policies_and_Workflows#User_Agent_overrides
 */
const AVAILABLE_INJECTIONS = [
  {
    id: "testbed-injection",
    platform: "all",
    domain: "webcompat-addon-testbed.herokuapp.com",
    bug: "0000000",
    hidden: true,
    contentScripts: {
      matches: ["*://webcompat-addon-testbed.herokuapp.com/*"],
      css: [
        {
          file: "injections/css/bug0000000-testbed-css-injection.css",
        },
      ],
      js: [
        {
          file: "injections/js/bug0000000-testbed-js-injection.js",
        },
      ],
      runAt: "document_start",
    },
  },
  {
    id: "bug1452707",
    platform: "desktop",
    domain: "ib.absa.co.za",
    bug: "1452707",
    contentScripts: {
      matches: ["https://ib.absa.co.za/*"],
      js: [
        {
          file:
            "injections/js/bug1452707-window.controllers-shim-ib.absa.co.za.js",
        },
      ],
      runAt: "document_start",
    },
  },
  {
    id: "bug1457335",
    platform: "desktop",
    domain: "histography.io",
    bug: "1457335",
    contentScripts: {
      matches: ["*://histography.io/*"],
      js: [
        {
          file: "injections/js/bug1457335-histography.io-ua-change.js",
        },
      ],
      runAt: "document_start",
    },
  },
  {
    id: "bug1472075",
    platform: "desktop",
    domain: "bankofamerica.com",
    bug: "1472075",
    contentScripts: {
      matches: ["*://*.bankofamerica.com/*"],
      js: [
        {
          file: "injections/js/bug1472075-bankofamerica.com-ua-change.js",
        },
      ],
      runAt: "document_start",
    },
  },
  {
    id: "bug1472081",
    platform: "desktop",
    domain: "election.gov.np",
    bug: "1472081",
    contentScripts: {
      matches: ["http://202.166.205.141/bbvrs/*"],
      js: [
        {
          file:
            "injections/js/bug1472081-election.gov.np-window.sidebar-shim.js",
        },
      ],
      runAt: "document_start",
      allFrames: true,
    },
  },
  {
    id: "bug1482066",
    platform: "desktop",
    domain: "portalminasnet.com",
    bug: "1482066",
    contentScripts: {
      matches: ["*://portalminasnet.com/*"],
      js: [
        {
          file:
            "injections/js/bug1482066-portalminasnet.com-window.sidebar-shim.js",
        },
      ],
      runAt: "document_start",
      allFrames: true,
    },
  },
  {
    id: "bug1570856",
    platform: "android",
    domain: "medium.com",
    bug: "1570856",
    contentScripts: {
      matches: ["*://medium.com/*"],
      js: [
        {
          file: "injections/js/bug1570856-medium.com-menu-isTier1.js",
        },
      ],
      runAt: "document_start",
      allFrames: true,
    },
  },
  {
    id: "bug1526977",
    platform: "desktop",
    domain: "sreedharscce.in",
    bug: "1526977",
    contentScripts: {
      matches: ["*://*.sreedharscce.in/authenticate"],
      css: [
        {
          file: "injections/css/bug1526977-sreedharscce.in-login-fix.css",
        },
      ],
    },
  },
  {
    id: "bug1518781",
    platform: "desktop",
    domain: "twitch.tv",
    bug: "1518781",
    contentScripts: {
      matches: ["*://*.twitch.tv/*"],
      css: [
        {
          file: "injections/css/bug1518781-twitch.tv-webkit-scrollbar.css",
        },
      ],
    },
  },
  {
    id: "bug1551672",
    platform: "android",
    domain: "Sites using PDK 5 video",
    bug: "1551672",
    pdk5fix: {
      urls: ["https://*/*/tpPdk.js", "https://*/*/pdk/js/*/*.js"],
      types: ["script"],
    },
  },
  {
    id: "bug1577870",
    platform: "desktop",
    domain: "slideshare.net",
    bug: "1577870",
    data: {
      urls: ["https://*.linkedin.com/tscp-serving/dtag*"],
      contentType: {
        name: "content-type",
        value: "text/html; charset=utf-8",
      },
    },
    customFunc: "dtagFix",
  },
  {
    id: "bug1305028",
    platform: "desktop",
    domain: "gaming.youtube.com",
    bug: "1305028",
    contentScripts: {
      matches: ["*://gaming.youtube.com/*"],
      css: [
        {
          file:
            "injections/css/bug1305028-gaming.youtube.com-webkit-scrollbar.css",
        },
      ],
    },
  },
  {
    id: "bug1432935-discord",
    platform: "desktop",
    domain: "discordapp.com",
    bug: "1432935",
    contentScripts: {
      matches: ["*://discordapp.com/*"],
      css: [
        {
          file:
            "injections/css/bug1432935-discordapp.com-webkit-scorllbar-white-line.css",
        },
      ],
    },
  },
  {
    id: "bug1432935-breitbart",
    platform: "desktop",
    domain: "breitbart.com",
    bug: "1432935",
    contentScripts: {
      matches: ["*://*.breitbart.com/*"],
      css: [
        {
          file: "injections/css/bug1432935-breitbart.com-webkit-scrollbar.css",
        },
      ],
    },
  },
  {
    id: "bug1561371",
    platform: "android",
    domain: "mail.google.com",
    bug: "1561371",
    contentScripts: {
      matches: ["*://mail.google.com/*"],
      css: [
        {
          file:
            "injections/css/bug1561371-mail.google.com-allow-horizontal-scrolling.css",
        },
      ],
    },
  },
  {
    id: "bug1567610",
    platform: "all",
    domain: "dns.google.com",
    bug: "1567610",
    contentScripts: {
      matches: ["*://dns.google.com/*"],
      css: [
        {
          file: "injections/css/bug1567610-dns.google.com-moz-fit-content.css",
        },
      ],
    },
  },
  {
    id: "bug1568256",
    platform: "android",
    domain: "zertifikate.commerzbank.de",
    bug: "1568256",
    contentScripts: {
      matches: ["*://*.zertifikate.commerzbank.de/webforms/mobile/*"],
      css: [
        {
          file: "injections/css/bug1568256-zertifikate.commerzbank.de-flex.css",
        },
      ],
    },
  },
  {
    id: "bug1568908",
    platform: "desktop",
    domain: "console.cloud.google.com",
    bug: "1568908",
    contentScripts: {
      matches: ["*://*.console.cloud.google.com/*"],
      css: [
        {
          file:
            "injections/css/bug1568908-console.cloud.google.com-scrollbar-fix.css",
        },
      ],
    },
  },
  {
    id: "bug1570119",
    platform: "desktop",
    domain: "teamcoco.com",
    bug: "1570119",
    contentScripts: {
      matches: ["*://teamcoco.com/*"],
      css: [
        {
          file: "injections/css/bug1570119-teamcoco.com-scrollbar-width.css",
        },
      ],
    },
  },
  {
    id: "bug1570328",
    platform: "android",
    domain: "developer.apple.com",
    bug: "1570328",
    contentScripts: {
      matches: ["*://developer.apple.com/*"],
      css: [
        {
          file:
            "injections/css/bug1570328-developer-apple.com-transform-scale.css",
        },
      ],
    },
  },
  {
    id: "bug1571036",
    platform: "all",
    domain: "mobile.aireuropa.com",
    bug: "1571036",
    contentScripts: {
      matches: ["*://mobile.aireuropa.com/*"],
      css: [
        {
          file: "injections/css/bug1571036-mobile.aireuropa.com-menu-fix.css",
        },
      ],
    },
  },
];

module.exports = AVAILABLE_INJECTIONS;
