import React from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { renderToString } from 'react-dom/server';
import Routes from "../Client/Routes/Routes";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>,
  );

  return `<html>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>`;
};
