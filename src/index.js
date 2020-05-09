import "@babel/polyfill";
import React from "react";
import express from "express";
const app = express();
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes/Routes";

app.use(express.static("public"));
app.get("*", (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );
  const html = `<html>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>`;
  res.send(html);
});

app.listen(3001, () => {
  console.log("listeing to PORT 3001");
});
