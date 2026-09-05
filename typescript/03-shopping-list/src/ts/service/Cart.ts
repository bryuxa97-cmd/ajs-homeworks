import Buyable from '../domain/Buyable';

export type CartItem = Buyable & { quantity: number };

export default class Cart {
    private _items: CartItem[] = [];

    add(item: Buyable): void {
        const existing = this._items.find((el) => el.id === item.id);

        if (existing) {
            if (item.unique === false) {
                existing.quantity += 1;
            }
            return;
        }

        this._items.push({ ...item, quantity: 1 });
    }

    get items(): CartItem[] {
        return [...this._items];
    }

    getTotal(): number {
        return this._items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
        );
    }

    getTotalWithDiscount(discount: number): number {
        return this.getTotal() * (1 - discount / 100);
    }

    removeById(id: number): void {
        this._items = this._items.filter((item) => item.id !== id);
    }

    decrease(id: number): void {
        const item = this._items.find((el) => el.id === id);

        if (!item) {
            return;
        }

        if (item.quantity > 1) {
            item.quantity -= 1;
            return;
        }

        this.removeById(id);
    }
}
