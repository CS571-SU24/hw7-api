import { Express } from 'express';

import { CS571Route } from "@cs571/su24-api-framework/src/interfaces/route";
import SaleItem from '../model/sale-item';

export class CS571ItemsRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/rest/su24/hw7/items';

    private readonly items: SaleItem[];

    public constructor(items: SaleItem[]) {
        this.items = items;
    }

    public addRoute(app: Express): void {
        app.get(CS571ItemsRoute.ROUTE_NAME, (req, res) => {
            res.status(200).set('Cache-control', 'private, max-age=60').send(this.items);
        })
    }

    public getRouteName(): string {
        return CS571ItemsRoute.ROUTE_NAME;
    }
}