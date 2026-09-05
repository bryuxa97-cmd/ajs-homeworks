import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('should create movie with fields from Kinopoisk', () => {
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

  expect(movie).toEqual({
    id: 1010,
    name: 'Мстители',
    year: 2012,
    country: 'США',
    tagline: 'Avengers Assemble!',
    genre: 'фантастика, боевик, фэнтези, приключения',
    time: 137,
    price: 299,
  });
});

test('should add movie to cart', () => {
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

  expect(cart.items).toHaveLength(1);
  expect(cart.items[0]).toEqual(movie);
});
