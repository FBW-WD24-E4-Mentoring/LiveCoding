export const getIndex = (req, res) => {
  //request handler
  /* res.send("Hello from Express Server! serverr updated..."); */

  /* C:\Users\nrcoo\Desktop\CLASSES\live-coding\recap-express-server\views\index.html */
  res.sendFile("/views/index.html", { root: "." });
};

export const postIndex = (req, res) => {
  console.log(req.body);
  res.send("received post request");
};
