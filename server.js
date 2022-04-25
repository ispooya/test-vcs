const express = require("express");
const { getFile, getDirectory } = require("./services/filesystem");
const { getFileFromMergedRepo, addNewCommita } = require("./services/database");
const app = express();
const port = 3000;

app.get("/commit", (req, res) => {
  var dir = getDirectory("/");

  var changes = [];

  dir.forEach((address) => {
    let oldFile = getFileFromMergedRepo(address);

    let changedFile = getFile(address);

    // each
    changedFile.forEach((line, index) => {
      //changes
      if (line !== oldFile[index]) {
        console.log(" ");

        changes.push({
          lineNumber: index + 1,
          From: oldFile[index],
          changeTo: line,
          type: "newline",
        });
      }
    });
    console.log(changes);
  });
});

app.listen(port, () => {
  console.log(`VCS app listening on port ${port}`);
});
