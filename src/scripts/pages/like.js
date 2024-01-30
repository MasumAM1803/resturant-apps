import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createCardTemplate } from '../views/templates/template-card';

const Like = {
  async render() {
    return `
        <div class="main-content">
            <div class="py-5">
                <section class="list-container" id="maincontent">
                    <div class="container">
                    <h2>Your Liked Restaurant</h2>
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

    restaurants.forEach((restaurant, pictureId = '') => {
      if (restaurant.pictureId == null) {
        pictureId = 'https://dummyimage.com/500x750/cccccc/000000&text=No+Poster';
      } else {
        pictureId = `https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`;
      }
      restaurantsContainer.innerHTML += createCardTemplate(restaurant, pictureId);
    });
  },
};

export default Like;
