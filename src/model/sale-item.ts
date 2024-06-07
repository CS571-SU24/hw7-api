import crypto from 'crypto'

export default class SaleItem {
    readonly name: string;
    readonly price: number;
    readonly description: string;
    readonly upperLimit: number;
    readonly imgSrc: string;

    public constructor(name: string, price: number, description: string, upperLimit: number, imgSrc: string) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.upperLimit =  upperLimit;
        this.imgSrc = imgSrc;
    }
}