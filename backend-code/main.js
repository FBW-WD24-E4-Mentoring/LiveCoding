const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      res.end("<h1>this is first server running on port 4000</h1>");
    } else if (req.url === "/users") {
      res.end("<h1>sorry,we dont have any users data currently!</h1>");
    } else if (req.url === "/posts") {
      let post = {
        title: "this is a post",
        id: 1,
      };
      res.end(JSON.stringify(post));
    }
  })
  .listen(4000);
