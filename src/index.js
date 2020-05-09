import "babel-polyfill";
import express from "express";
import { renderToString } from "react-dom/server";

import renderer from "./helpers/renderer";

const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const content = renderToString(renderer(req));
  const html = `<html>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>`;
  res.send(html);
});

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log("listeing to PORT 3001");
});
