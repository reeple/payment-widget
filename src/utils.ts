"use strict";

const containerStyle =
  "position:fixed;overflow: hidden;display: none;justify-content: center;align-items: center;z-index: 999999999;height: 100%;width: 100%;color: transparent;background: rgba(0, 0, 0, 0.6);visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;";
const iframeStyle =
  "position: fixed;display: none;overflow: hidden;z-index: 999999999;width: 100%;height: 100%;transition: opacity 0.3s ease 0s;visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;";
const loaderStyles = `.app-loader {
  text-align: center;
  color: white;
  margin-right: -30px;
  width: 100%;
  position: fixed;
}

@-webkit-keyframes app-loader__spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.app-loader__spinner {
  position: relative;
  display: inline-block;
  width: fit-content;
}

.app-loader__spinner div {
  position: absolute;
  -webkit-animation: app-loader__spinner linear 1s infinite;
  animation: app-loader__spinner linear 1s infinite;
  background: white;
  width: 10px;
  height: 30px;
  border-radius: 40%;
  -webkit-transform-origin: 5px 65px;
  transform-origin: 5px 65px;
}

.app-loader__spinner div:nth-child(1) {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-animation-delay: -0.916666666666667s;
  animation-delay: -0.916666666666667s;
}

.app-loader__spinner div:nth-child(2) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
  -webkit-animation-delay: -0.833333333333333s;
  animation-delay: -0.833333333333333s;
}

.app-loader__spinner div:nth-child(3) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
}

.app-loader__spinner div:nth-child(4) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation-delay: -0.666666666666667s;
  animation-delay: -0.666666666666667s;
}

.app-loader__spinner div:nth-child(5) {
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
  -webkit-animation-delay: -0.583333333333333s;
  animation-delay: -0.583333333333333s;
}

.app-loader__spinner div:nth-child(6) {
  -webkit-transform: rotate(150deg);
  transform: rotate(150deg);
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.app-loader__spinner div:nth-child(7) {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-animation-delay: -0.416666666666667s;
  animation-delay: -0.416666666666667s;
}

.app-loader__spinner div:nth-child(8) {
  -webkit-transform: rotate(210deg);
  transform: rotate(210deg);
  -webkit-animation-delay: -0.333333333333333s;
  animation-delay: -0.333333333333333s;
}

.app-loader__spinner div:nth-child(9) {
  -webkit-transform: rotate(240deg);
  transform: rotate(240deg);
  -webkit-animation-delay: -0.25s;
  animation-delay: -0.25s;
}

.app-loader__spinner div:nth-child(10) {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-animation-delay: -0.166666666666667s;
  animation-delay: -0.166666666666667s;
}

.app-loader__spinner div:nth-child(11) {
  -webkit-transform: rotate(300deg);
  transform: rotate(300deg);
  -webkit-animation-delay: -0.083333333333333s;
  animation-delay: -0.083333333333333s;
}

.app-loader__spinner div:nth-child(12) {
  -webkit-transform: rotate(330deg);
  transform: rotate(330deg);
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

.app-loader__spinner {
  -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
  transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
}
`;

export type Config = {
  key: string;
  onload: () => void;
  qs: Record<string, any>;
  onevent: (event: string, data: any) => void;
};

export interface FinverEvent extends Event {
  data?: {
    data: {
      timestamp: number;
    };
    type: string;
  };
}

function turnOnVisibility() {
  const container = document.getElementById("finver-connect--widget-div");
  const frame = document.getElementById("finver-connect--frame-id");
  if (container && frame) {
    container.style.display = "flex";
    frame.style.display = "block";
    container.style.visibility = "visible";
    frame.style.visibility = "visible";
  }
}

function turnOffVisibility() {
  const container = document.getElementById("finver-connect--widget-div");
  const frame = document.getElementById("finver-connect--frame-id");
  if (container && frame) {
    container.style.display = "none";
    frame.style.display = "none";
    container.style.visibility = "hidden";
    frame.style.visibility = "hidden";
  }
}

function openWidget() {
  const container = document.getElementById("finver-connect--widget-div");
  const loader = document.getElementById("finver-connect-app-loader");
  const frame = document.getElementById("finver-connect--frame-id");
  if (container && frame && loader) {
    container.style.visibility = "visible";
    container.style.display = "flex";
    loader.style.display = "block";

    setTimeout(() => {
      turnOnVisibility();
      frame.focus({ preventScroll: false });
      container.focus({ preventScroll: false });

      // dispatch OPENED event
      const event: FinverEvent = new Event("message");
      const eventData = {
        data: { timestamp: Date.now() },
        type: "finver.connect.widget_opened",
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
  const loaderDiv = document.createElement("div");
  const childDiv = document.createElement("div");
  loaderDiv.setAttribute("id", "finver-connect-app-loader");
  loaderDiv.classList.add("app-loader");
  childDiv.classList.add("app-loader__spinner");

  for (let i = 0; i < 12; i++) {
    const div = document.createElement("div");
    childDiv.appendChild(div);
  }
  loaderDiv.appendChild(childDiv);
  return loaderDiv;
}

function addStyle() {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = loaderStyles;
  document.head.appendChild(styleSheet);
}

function init(config: Config) {
  if (
    document.getElementById("finver-connect--widget-div") &&
    document.getElementById("finver-connect--frame-id")
  ) {
    document.getElementById("finver-connect--widget-div")?.remove();
  }

  const { key, onload, qs, onevent } = config;
  const encodedKeys = ["data", "selectedInstitution"];
  const source = new URL("https://connect.finver.io/");
  source.searchParams.set("key", key);
  source.searchParams.set("referrer", window.location.href);
  source.searchParams.set("version", "2021-06-03");
  Object.keys(qs).map((k) => {
    if (encodedKeys.includes(k)) {
      const encodedVal = encodeURIComponent(JSON.stringify(qs[k]));
      return source.searchParams.set(k, encodedVal);
    }
    source.searchParams.set(k, qs[k]);
  });

  const container = document.createElement("div");
  container.setAttribute("id", "finver-connect--widget-div");
  container.setAttribute("style", containerStyle);
  document.body.insertBefore(container, document.body.childNodes[0]);

  const iframe: HTMLIFrameElement = document.createElement("iframe");
  iframe.src = `${source.href}`;
  iframe.setAttribute("style", iframeStyle);
  iframe.setAttribute("id", "finver-connect--frame-id");
  iframe.setAttribute("allowfullscreen", "true");
  iframe.setAttribute("frameborder", "0px");
  iframe.setAttribute("title", "Finver connect");
  iframe.setAttribute(
    "sandbox",
    "allow-forms allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups"
  );
  iframe.onload = function () {
    const loader = document.getElementById("finver-connect-app-loader");
    if (iframe.style.visibility === "visible") {
      if (loader) {
        loader.style.display = "none";
      }
    }
    onload();

    const event: FinverEvent = new Event("message");
    const eventData = {
      data: { timestamp: Date.now() },
      type: "finver.connect.widget_loaded",
    };

    event.data = Object.assign({}, eventData);
    window.dispatchEvent(event);

    onevent("LOADED", event.data.data);
  };

  const loader = createLoader();
  document.getElementById("finver-connect--widget-div")?.appendChild(loader);
  document.getElementById("finver-connect--widget-div")?.appendChild(iframe);
}

export const utils = {
  addStyle,
  closeWidget,
  createLoader,
  init,
  openWidget,
};
