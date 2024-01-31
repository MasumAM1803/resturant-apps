/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the movie that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteRestaurant.getRestaurant('rqdv5juczeskfw1e867')).toEqual({ id: 'rqdv5juczeskfw1e867' });
    expect(await favoriteRestaurant.getRestaurant('s1knt6za9kkfw1e867')).toEqual({ id: 's1knt6za9kkfw1e867' });
    expect(await favoriteRestaurant.getRestaurant('w9pga3s2tubkfw1e867')).toEqual(undefined);
  });

  it('should refuse a movie from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('can return all of the movies that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 'rqdv5juczeskfw1e867' }, { id: 's1knt6za9kkfw1e867' }]);
  });

  it('should remove favorite movie', async () => {
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteRestaurant.deleteRestaurant('rqdv5juczeskfw1e867');

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 's1knt6za9kkfw1e867' }, { id: 'w9pga3s2tubkfw1e867' }]);
  });

  it('should handle request to remove a movie even though the movie has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteRestaurant.deleteRestaurant('uewq1zg2zlskfw1e867');

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 'rqdv5juczeskfw1e867' }, { id: 's1knt6za9kkfw1e867' }, { id: 'w9pga3s2tubkfw1e867' }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
