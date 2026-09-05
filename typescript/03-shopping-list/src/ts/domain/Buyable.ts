export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    /** false — товар можно добавлять несколько раз */
    readonly unique?: boolean,
}
