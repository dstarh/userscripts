// ==UserScript==
// @name       AMWeb  favicon
// @namespace  https://github.com/activedatatech/reflex-am-web/
// @version    0.1
// @description  enter something useful
// @match      https://github.com/activedatatech/reflex-am-web*
// @require    https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @copyright  2012+, You
// ==/UserScript==

//this.$ = this.jQuery = jQuery.noConflict(true);

$(document).ready(function() {
    addFavicon("https://img.skitch.com/20120830-x65rmk7d5aiyb4jnjgy55wpyhc.jpg")
});

function addFavicon(url) {
    console.log("Greasemonkey script for adding Favicon: " + url);
    var link = document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = url;
    $("head")[0].appendChild(link);
}