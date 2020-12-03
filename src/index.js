import bridge from "@vkontakte/vk-bridge";
import StrManager from "./Model/StrManager";
import App from "./App";
import React from "react";
import ReactDOM from 'react-dom';

// Init VK  Mini App
bridge.send("VKWebAppInit");

StrManager.setLocale("default")

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
