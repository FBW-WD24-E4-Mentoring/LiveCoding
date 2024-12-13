//create midleware
export function logger(req, res, next) {
  console.log(req.url);
  console.log(req.method);
  // send back response or forward request to next handler
  // Request Response Cycle
  /*  res.send("response from middleware ..."); */

  //'forwarding request to next handler
  next();
}
