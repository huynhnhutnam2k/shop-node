const siteRouter = require("./site");
const productRouter = require("./product");
const adminRouter = require("./admin");
const cartRouter = require("./cart");
function route(app) {
  app.use("/cart", cartRouter);
  app.use("/product", productRouter);
  app.use("/admin", adminRouter);
  app.use("/", siteRouter);
}
module.exports = route;
