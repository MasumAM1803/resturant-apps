import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createCardTemplate, createEmptyCardTemplate } from '../templates/template-card';

const Favorite = {
  async render() {
    return `
        <div class="main-content">
            <div class="py-5">
                <section tabindex="0" class="list-container" id="maincontent">
                    <div class="container">
                    <h2>Your Favorite Restaurant</h2>
                    <div class="mt-3">
                        <div id="recordsCard" class="row"></div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#recordsCard');

    if (restaurants.length) {
      restaurants.forEach((restaurant, pictureId = '') => {
        if (restaurant.pictureId == null) {
          pictureId = 'https://dummyimage.com/500x750/cccccc/000000&text=No+Poster';
        } else {
          pictureId = `https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`;
        }
        restaurantsContainer.innerHTML += createCardTemplate(restaurant, pictureId);
      });
    } else {
      restaurantsContainer.innerHTML = createEmptyCardTemplate();
    }
  },
};

export default Favorite;
