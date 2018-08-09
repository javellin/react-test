import React from "react";
import ReactDOM from "react-dom";
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";
import { flattenMessages, getLang } from "./common/utils";
import messages from "./common/messages";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./config/store";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";

const renderApp = ({ store }) => {
  let locale = getLang();
  addLocaleData([...en, ...pt]);
  ReactDOM.render(
    <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </IntlProvider>,
    document.getElementById("root")
  );
};

registerServiceWorker();

renderApp(configureStore);
