import RestaurantDbSource from '../data/restaurantdb-source';
import UrlParser from '../routes/url-parser';
import { createCardDetail } from '../views/templates/template-card';

const Detail = {
  async render() {
    return `
      <div id="maincontent" class="main-content">
        <div class="container py-5">
          <div>
            <div class="mt-5">
              <div id="dataUser"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantDbSource.detail(url.id);
    const recordsCard = document.querySelector('#dataUser');

    let pictureId = '';
    if (restaurants.pictureId == null) {
      pictureId = 'https://dummyimage.com/500x750/cccccc/000000&text=No+Poster';
    } else {
      pictureId = restaurants.pictureId;
    }
    recordsCard.innerHTML = createCardDetail(restaurants, pictureId);
  },
};

export default Detail;
