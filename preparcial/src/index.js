import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const root = ReactDOM.createRoot(document.getElementById("root"));
const localeLang = navigator.language;


root.render(
  <IntlProvider
    locale={localeLang}
    messages={localeLang === "en" ? localeEnMessages : localeEsMessages}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();