const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 8081;

const load = () => {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `{
          hello {
            world {
              text
            }
          }
        }`
    })
  };

  fetch(`http://localhost:8080/graphql`, options)
    .then(res => res.json())
    .then(a => console.log("%j", a));
};

app.get("/", (req, res) => {
  console.log("trying to load");
  load();
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

load();
