import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";

const messages = defineMessages({
  item: {
    id: "app.item",
    defaultMessage:
      "{count, plural, =0 {no items} one {# item} other {# items}}",
  },
});

// https://github.com/yahoo/react-intl/wiki/Components#FormattedPlural
export default () => (
  <React.Fragment>
    <FormattedMessage values={{ count: 0 }} {...messages.item} />,{" "}
    <FormattedMessage values={{ count: 1 }} {...messages.item} />,{" "}
    <FormattedMessage values={{ count: 8 }} {...messages.item} />
  </React.Fragment>
);
