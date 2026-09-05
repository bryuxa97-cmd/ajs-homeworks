import Buyable from './Buyable';

export default class Smartphone implements Buyable {
    readonly unique = false;

    constructor(
        readonly id: number,
        readonly name: string,
        readonly model: string,
        readonly price: number,
    ) { }
}
