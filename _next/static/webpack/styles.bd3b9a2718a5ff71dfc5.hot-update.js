webpackHotUpdate("styles",{

/***/ "./pages/projects/gallery/index.sass":
/*!*******************************************!*\
  !*** ./pages/projects/gallery/index.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"gallery":"_2q254MxtQ7RIWAXhcGaYbO","selector":"l9aaCJ1VK-A1Keru14PjY","viewport":"_2GBcjsZzoeee140YIYltSx","screenshot":"_1dUC-qd85G9UtCdYFQWB0h"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1558586372210");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.bd3b9a2718a5ff71dfc5.hot-update.js.map