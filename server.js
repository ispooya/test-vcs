const express = require("express");
const app = express();
const port = 3000;

app.get("/commit", (req, res) => {});

app.listen(port, () => {
  console.log(`VCS app listening on port ${port}`);
});
