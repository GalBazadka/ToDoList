import { Provider } from "react-redux";
import * as ReactDOMClient from "react-dom/client";
import App from './/view/App';
import store from './/state/configure.store'

const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
