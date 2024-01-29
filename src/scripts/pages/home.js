import RestaurantDbSource from '../data/restaurantdb-source';
import { createCardTemplate } from '../views/templates/template-card';

const Home = {
  async render() {
    return `
        <div class="main-content">
            <div class="py-5">
                <section id="jumbotron-section">
                    <div class="jumbotron-container">
                    <img src="./images/heros/hero-image_1.jpg" alt="hero image" class="hero-img" />
                    </div>
                </section>
                <section class="list-container" id="maincontent">
                    <div class="container">
                    <h2>Restaurant List</h2>
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
    const restaurants = await RestaurantDbSource.home();
    const recordsCard = document.querySelector('#recordsCard');
    restaurants.forEach((restaurant, pictureId = '') => {
      if (restaurant.pictureId == null) {
        pictureId = 'https://dummyimage.com/500x750/cccccc/000000&text=No+Poster';
      } else {
        pictureId = restaurant.pictureId;
      }
      recordsCard.innerHTML += createCardTemplate(restaurant, pictureId);
    });
  },
};

export default Home;
