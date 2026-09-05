import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('should calculate total without discount', () => {
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

  expect(cart.getTotal()).toBe(3199);
});

test('should calculate total with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.getTotalWithDiscount(10)).toBe(2610);
});

test('should remove item by id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  cart.removeById(1001);

  expect(cart.items).toHaveLength(1);
  expect(cart.items[0].id).toBe(1008);
});

test('removeById should do nothing if id not found', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  cart.removeById(9999);

  expect(cart.items).toHaveLength(1);
});
