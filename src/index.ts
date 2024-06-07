import fs from 'fs'

import express, { Express } from 'express';

import { CS571Initializer } from '@cs571/su24-api-framework'
import SaleItem from './model/sale-item';
import { CS571ItemsRoute } from './routes/items';

import cookies from 'cookie-parser'

console.log("Welcome to HW7!");

const app: Express = express();
app.use(cookies());

const appBundle = CS571Initializer.init(app, {
  allowNoAuth: [],
  skipAuth: false
});

const parsedGoods = JSON.parse(fs.readFileSync("includes/sale-items.json").toString())
const goods = parsedGoods.map((item: any) => new SaleItem(
  item.name,
  item.price,
  item.description,
  item.upperLimit,
  item.imgSrc
));


appBundle.router.addRoutes([
  new CS571ItemsRoute(goods)
])

app.listen(appBundle.config.PORT, () => {
  console.log(`Running at :${appBundle.config.PORT}`);
});
