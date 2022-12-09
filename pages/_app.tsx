import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import { IntlProvider } from "react-intl";
const messages = require("../i18n/en.json");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <IntlProvider locale="en" messages={messages}>
        <Component {...pageProps} />
      </IntlProvider>
    </Provider>
  );
}
