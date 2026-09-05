import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import Smartphone from '../domain/Smartphone';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('unique item should stay as single copy', () => {
  const cart = new Cart();
  const movie = new Movie(
    1010,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    'фантастика, боевик, фэнтези, приключения',
    137,
    299,
  );

  cart.add(movie);
  cart.add(movie);

  expect(cart.items).toHaveLength(1);
  expect(cart.items[0].quantity).toBe(1);
});

test('non-unique item can be added multiple times', () => {
  const cart = new Cart();
  const phone = new Smartphone(2001, 'iPhone', '15 Pro', 1000);

  cart.add(phone);
  cart.add(phone);
  cart.add(phone);

  expect(cart.items).toHaveLength(1);
  expect(cart.items[0].quantity).toBe(3);
});

test('should calculate total with quantity', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  const phone = new Smartphone(2001, 'iPhone', '15 Pro', 1000);
  cart.add(phone);
  cart.add(phone);

  expect(cart.getTotal()).toBe(4000);
});

test('should calculate total with discount', () => {
  const cart = new Cart();
  const phone = new Smartphone(2001, 'iPhone', '15 Pro', 1000);
  cart.add(phone);
  cart.add(phone);

  expect(cart.getTotalWithDiscount(10)).toBe(1800);
});

test('should remove item by id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Smartphone(2001, 'iPhone', '15 Pro', 1000));

  cart.removeById(1001);

  expect(cart.items).toHaveLength(1);
  expect(cart.items[0].id).toBe(2001);
});

test('decrease should reduce quantity', () => {
  const cart = new Cart();
  const phone = new Smartphone(2001, 'iPhone', '15 Pro', 1000);
  cart.add(phone);
  cart.add(phone);
  cart.add(phone);
  cart.add(phone);

  cart.decrease(2001);

  expect(cart.items[0].quantity).toBe(3);
});

test('decrease to zero should remove item', () => {
  const cart = new Cart();
  cart.add(new Smartphone(2001, 'iPhone', '15 Pro', 1000));

  cart.decrease(2001);

  expect(cart.items).toHaveLength(0);
});

test('decrease should do nothing if id not found', () => {
  const cart = new Cart();
  cart.add(new Smartphone(2001, 'iPhone', '15 Pro', 1000));

  cart.decrease(9999);

  expect(cart.items).toHaveLength(1);
  expect(cart.items[0].quantity).toBe(1);
});
