import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createCardDetail } from '../templates/template-card';

const Detail = {
  async render() {
    return `
      <div tabindex="0" id="maincontent" class="main-content">
        <div class="container py-5">
          <div>
            <div class="mt-5">
              <div id="dataUser"></div>
            </div>
          </div>
        </div>
        <div id="likeButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithId();
    const restaurants = await RestaurantDbSource.detail(url.id);
    const recordsCard = document.querySelector('#dataUser');

    let pictureId = '';
    if (restaurants.pictureId == null) {
      pictureId = 'https://dummyimage.com/500x750/cccccc/000000&text=No+Poster';
    } else {
      pictureId = `https://restaurant-api.dicoding.dev/images/medium/${restaurants.pictureId}`;
    }
    recordsCard.innerHTML = createCardDetail(restaurants, pictureId);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurants.id,
        name: restaurants.name,
        description: restaurants.description,
        city: restaurants.city,
        pictureId: restaurants.pictureId,
        rating: restaurants.rating,
      },
    });
  },
};

export default Detail;
