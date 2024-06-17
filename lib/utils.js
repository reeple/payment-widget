"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = void 0;
var containerStyle = "position:fixed;overflow: hidden;display: none;justify-content: center;align-items: center;z-index: 999999999;height: 100%;width: 100%;color: transparent;background: rgba(0, 0, 0, 0.6);visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;";
var iframeStyle = "position: fixed;display: none;overflow: hidden;z-index: 999999999;width: 100%;height: 100%;transition: opacity 0.3s ease 0s;visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;";
var loaderStyles = ".app-loader {\n  text-align: center;\n  color: white;\n  margin-right: -30px;\n  width: 100%;\n  position: fixed;\n}\n\n@-webkit-keyframes app-loader__spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.app-loader__spinner {\n  position: relative;\n  display: inline-block;\n  width: fit-content;\n}\n\n.app-loader__spinner div {\n  position: absolute;\n  -webkit-animation: app-loader__spinner linear 1s infinite;\n  animation: app-loader__spinner linear 1s infinite;\n  background: white;\n  width: 10px;\n  height: 30px;\n  border-radius: 40%;\n  -webkit-transform-origin: 5px 65px;\n  transform-origin: 5px 65px;\n}\n\n.app-loader__spinner div:nth-child(1) {\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-animation-delay: -0.916666666666667s;\n  animation-delay: -0.916666666666667s;\n}\n\n.app-loader__spinner div:nth-child(2) {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg);\n  -webkit-animation-delay: -0.833333333333333s;\n  animation-delay: -0.833333333333333s;\n}\n\n.app-loader__spinner div:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg);\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s;\n}\n\n.app-loader__spinner div:nth-child(4) {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-animation-delay: -0.666666666666667s;\n  animation-delay: -0.666666666666667s;\n}\n\n.app-loader__spinner div:nth-child(5) {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg);\n  -webkit-animation-delay: -0.583333333333333s;\n  animation-delay: -0.583333333333333s;\n}\n\n.app-loader__spinner div:nth-child(6) {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg);\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n\n.app-loader__spinner div:nth-child(7) {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  -webkit-animation-delay: -0.416666666666667s;\n  animation-delay: -0.416666666666667s;\n}\n\n.app-loader__spinner div:nth-child(8) {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg);\n  -webkit-animation-delay: -0.333333333333333s;\n  animation-delay: -0.333333333333333s;\n}\n\n.app-loader__spinner div:nth-child(9) {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg);\n  -webkit-animation-delay: -0.25s;\n  animation-delay: -0.25s;\n}\n\n.app-loader__spinner div:nth-child(10) {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n  -webkit-animation-delay: -0.166666666666667s;\n  animation-delay: -0.166666666666667s;\n}\n\n.app-loader__spinner div:nth-child(11) {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg);\n  -webkit-animation-delay: -0.083333333333333s;\n  animation-delay: -0.083333333333333s;\n}\n\n.app-loader__spinner div:nth-child(12) {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n\n.app-loader__spinner {\n  -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n  transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n}\n";
function turnOnVisibility() {
  var container = document.getElementById("finver-connect--widget-div");
  var frame = document.getElementById("finver-connect--frame-id");
  if (container && frame) {
    container.style.display = "flex";
    frame.style.display = "block";
    container.style.visibility = "visible";
    frame.style.visibility = "visible";
  }
}
function turnOffVisibility() {
  var container = document.getElementById("finver-connect--widget-div");
  var frame = document.getElementById("finver-connect--frame-id");
  if (container && frame) {
    container.style.display = "none";
    frame.style.display = "none";
    container.style.visibility = "hidden";
    frame.style.visibility = "hidden";
  }
}
function openWidget() {
  var container = document.getElementById("finver-connect--widget-div");
  var loader = document.getElementById("finver-connect-app-loader");
  var frame = document.getElementById("finver-connect--frame-id");
  if (container && frame && loader) {
    container.style.visibility = "visible";
    container.style.display = "flex";
    loader.style.display = "block";
    setTimeout(function () {
      turnOnVisibility();
      frame.focus({
        preventScroll: false
      });
      container.focus({
        preventScroll: false
      });

      // dispatch OPENED event
      var event = new Event("message");
      var eventData = {
        data: {
          timestamp: Date.now()
        },
        type: "finver.connect.widget_opened"
      };
      event.data = Object.assign({}, eventData);
      window.dispatchEvent(event);
    }, 2000);
  }
}
function closeWidget() {
  turnOffVisibility();
}
function createLoader() {
  var loaderDiv = document.createElement("div");
  var childDiv = document.createElement("div");
  loaderDiv.setAttribute("id", "finver-connect-app-loader");
  loaderDiv.classList.add("app-loader");
  childDiv.classList.add("app-loader__spinner");
  for (var i = 0; i < 12; i++) {
    var div = document.createElement("div");
    childDiv.appendChild(div);
  }
  loaderDiv.appendChild(childDiv);
  return loaderDiv;
}
function addStyle() {
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = loaderStyles;
  document.head.appendChild(styleSheet);
}
function init(config) {
  var _document$getElementB2, _document$getElementB3;
  if (document.getElementById("finver-connect--widget-div") && document.getElementById("finver-connect--frame-id")) {
    var _document$getElementB;
    (_document$getElementB = document.getElementById("finver-connect--widget-div")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.remove();
  }
  var key = config.key,
    onload = config.onload,
    qs = config.qs,
    onevent = config.onevent;
  var encodedKeys = ["data", "selectedInstitution"];
  var source = new URL("https://connect.finver.io/");
  source.searchParams.set("key", key);
  source.searchParams.set("referrer", window.location.href);
  source.searchParams.set("version", "2021-06-03");
  Object.keys(qs).map(function (k) {
    if (encodedKeys.includes(k)) {
      var encodedVal = encodeURIComponent(JSON.stringify(qs[k]));
      return source.searchParams.set(k, encodedVal);
    }
    source.searchParams.set(k, qs[k]);
  });
  var container = document.createElement("div");
  container.setAttribute("id", "finver-connect--widget-div");
  container.setAttribute("style", containerStyle);
  document.body.insertBefore(container, document.body.childNodes[0]);
  var iframe = document.createElement("iframe");
  iframe.src = "".concat(source.href);
  iframe.setAttribute("style", iframeStyle);
  iframe.setAttribute("id", "finver-connect--frame-id");
  iframe.setAttribute("allowfullscreen", "true");
  iframe.setAttribute("frameborder", "0px");
  iframe.setAttribute("title", "Finver connect");
  iframe.setAttribute("sandbox", "allow-forms allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups");
  iframe.onload = function () {
    var loader = document.getElementById("finver-connect-app-loader");
    if (iframe.style.visibility === "visible") {
      if (loader) {
        loader.style.display = "none";
      }
    }
    onload();
    var event = new Event("message");
    var eventData = {
      data: {
        timestamp: Date.now()
      },
      type: "finver.connect.widget_loaded"
    };
    event.data = Object.assign({}, eventData);
    window.dispatchEvent(event);
    onevent("LOADED", event.data.data);
  };
  var loader = createLoader();
  (_document$getElementB2 = document.getElementById("finver-connect--widget-div")) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.appendChild(loader);
  (_document$getElementB3 = document.getElementById("finver-connect--widget-div")) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.appendChild(iframe);
}
var utils = {
  addStyle: addStyle,
  closeWidget: closeWidget,
  createLoader: createLoader,
  init: init,
  openWidget: openWidget
};
exports.utils = utils;