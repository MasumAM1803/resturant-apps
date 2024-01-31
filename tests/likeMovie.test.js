/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-presenter';
import FavoriteResturantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Favorite A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteResturantIdb.getRestaurant('rqdv5juczeskfw1e867');
    expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e867' });

    await FavoriteResturantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e867' });

    await FavoriteResturantIdb.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteResturantIdb.getAllRestaurants()).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);
    await FavoriteResturantIdb.deleteRestaurant('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteResturantIdb.getAllRestaurants()).toEqual([]);
  });
});
