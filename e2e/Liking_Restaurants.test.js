/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Restaurant Not Found', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant Not Found', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('#recordsCard .card a');
  const firstRestaurant = locate('.card__link').first();
  const firstRestaurantTitle = await I.grabTextFrom('.card__body-title');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#recordsCard .card a');
  const likedResturantTitle = await I.grabTextFrom('.card__body-title');

  assert.strictEqual(firstRestaurantTitle, likedResturantTitle);

  const firstRestaurantUnlike = locate('.card__link').first();
  I.click(firstRestaurantUnlike);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Restaurant Not Found', '.restaurant-item__not__found');
});
