"use strict";

var _excluded = ["key", "onSuccess", "onClose", "onLoad", "onEvent"],
  _excluded2 = ["key", "onClose", "onSuccess", "onLoad", "onEvent"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
  var source = new URL("http://connect.finver.io/");
  source.searchParams.set("key", key);
  source.searchParams.set("referrer", window.location.href);
  source.searchParams.set("version", "v1");
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
var anonFunc = function anonFunc() {};
var isRequired = function isRequired(name) {
  throw new Error("".concat(name, " is required"));
};
var Connect = /*#__PURE__*/function () {
  function Connect(_ref) {
    var key = _ref.key,
      onSuccess = _ref.onSuccess,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? anonFunc : _ref$onClose,
      _ref$onLoad = _ref.onLoad,
      onLoad = _ref$onLoad === void 0 ? anonFunc : _ref$onLoad,
      _ref$onEvent = _ref.onEvent,
      onEvent = _ref$onEvent === void 0 ? anonFunc : _ref$onEvent,
      rest = _objectWithoutProperties(_ref, _excluded);
    _classCallCheck(this, Connect);
    _defineProperty(this, "key", void 0);
    _defineProperty(this, "config", void 0);
    _defineProperty(this, "onSuccess", void 0);
    _defineProperty(this, "onClose", void 0);
    _defineProperty(this, "onLoad", void 0);
    _defineProperty(this, "onEvent", void 0);
    _defineProperty(this, "utils", void 0);
    _defineProperty(this, "eventHandler", this.handleEvents.bind(this));
    this.key = key || isRequired("key");
    this.config = _objectSpread({}, rest);
    this.onSuccess = onSuccess || isRequired("onSuccess");
    this.onClose = onClose;
    this.onLoad = onLoad;
    this.onEvent = onEvent;
    this.utils = utils;
  }
  _createClass(Connect, [{
    key: "setup",
    value: function setup() {
      var setup_configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.utils.addStyle();
      var qs = _objectSpread(_objectSpread({}, this.config), setup_configuration);
      this.utils.init({
        key: this.key,
        qs: qs,
        onload: this.onLoad,
        onevent: this.onEvent
      });
    }
  }, {
    key: "reauthonize",
    value: function reauthonize(reauth_token) {
      if (!reauth_token) {
        throw new Error("Re-auth token is required for reauthorisation");
      }
      this.utils.addStyle();
      this.utils.init({
        key: this.key,
        qs: _objectSpread(_objectSpread({}, this.config), {}, {
          reauth_token: reauth_token
        }),
        onload: this.onLoad,
        onevent: this.onEvent
      });
    }
  }, {
    key: "handleEvents",
    value: function handleEvents(event) {
      var _event$data;
      switch ((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.type) {
        case "finver.connect.widget.account_linked":
          this.onSuccess(_objectSpread({}, event.data.data));
          this.onEvent("SUCCESS", event.data.data);
          this.close();
          break;
        case "finver.connect.widget.closed":
          this.close();
          break;
        case "finver.connect.widget_opened":
          this.onEvent("OPENED", event.data.data);
          break;
        case "finver.connect.error_occured":
          this.onEvent("ERROR", event.data.data);
          break;
        case "finver.connect.institution_selected":
          this.onEvent("INSTITUTION_SELECTED", event.data.data);
          break;
        case "finver.connect.auth_method_switched":
          this.onEvent("AUTH_METHOD_SWITCHED", event.data.data);
          break;
        case "finver.connect.on_exit":
          this.onEvent("EXIT", event.data.data);
          break;
        case "finver.connect.login_attempt":
          this.onEvent("SUBMIT_CREDENTIALS", event.data.data);
          break;
        case "finver.connect.mfa_submitted":
          this.onEvent("SUBMIT_MFA", event.data.data);
          break;
        case "finver.connect.account_linked":
          this.onEvent("ACCOUNT_LINKED", event.data.data);
          break;
        case "finver.connect.account_selected":
          this.onEvent("ACCOUNT_SELECTED", event.data.data);
          break;
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.utils.openWidget();
      window.addEventListener("message", this.eventHandler, false);
    }
  }, {
    key: "close",
    value: function close() {
      window.removeEventListener("message", this.eventHandler, false);
      this.utils.closeWidget();
      this.onClose();
    }
  }]);
  return Connect;
}();
var FinverConnectInstance = function FinverConnectInstance(_ref2) {
  var key = _ref2.key,
    onClose = _ref2.onClose,
    onSuccess = _ref2.onSuccess,
    onLoad = _ref2.onLoad,
    onEvent = _ref2.onEvent,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  return new Connect(_objectSpread({
    key: key,
    onClose: onClose,
    onSuccess: onSuccess,
    onLoad: onLoad,
    onEvent: onEvent
  }, rest));
};