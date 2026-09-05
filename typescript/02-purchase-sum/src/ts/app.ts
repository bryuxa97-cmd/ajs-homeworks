import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(
    1010,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    'фантастика, боевик, фэнтези, приключения',
    137,
    299,
));

console.log(cart.items);
console.log(cart.getTotal());
console.log(cart.getTotalWithDiscount(10));
cart.removeById(1008);
console.log(cart.items);
