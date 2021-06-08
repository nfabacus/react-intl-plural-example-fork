import React from "react";
import ReactDOM from "react-dom";

import { IntlProvider, FormattedNumber } from "react-intl";

import App from "./App";

import { addAppLocaleData } from "./localeData";
addAppLocaleData();

const messages = {
  de: {
    "app.item":
      "{count, plural, =0 {kain artikel} one {# artikel} other {# artikel}}",
  },
};

ReactDOM.render(
  <ul>
    {["en-US", "en-GB", "de"].map(locale => (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <li>
          <h3>
            <img
              src="blank.gif"
              class={`flag flag-${locale}`}
              alt="Czech Republic"
            />{" "}
            locale="{locale}"
          </h3>
          <span>
            <App />
          </span>
        </li>
      </IntlProvider>
    ))}
  </ul>,
  document.getElementById("root"),
);
